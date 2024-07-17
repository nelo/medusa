import {
  AuthenticatedMedusaRequest,
  MedusaResponse,
} from "../../../types/routing"
import { createCampaignsWorkflow } from "@medusajs/core-flows"
import {
  ContainerRegistrationKeys,
  remoteQueryObjectFromString,
} from "@medusajs/utils"
import { AdminCreateCampaignType } from "./validators"
import { refetchCampaign } from "./helpers"

export const GET = async (
  req: AuthenticatedMedusaRequest,
  res: MedusaResponse
) => {
  const remoteQuery = req.scope.resolve(ContainerRegistrationKeys.REMOTE_QUERY)

  const query = remoteQueryObjectFromString({
    entryPoint: "campaign",
    variables: {
      filters: req.filterableFields,
      ...req.remoteQueryConfig.pagination,
    },
    fields: req.remoteQueryConfig.fields,
  })

  const { rows: campaigns, metadata } = await remoteQuery(query)

  res.json({
    campaigns,
    count: metadata.count,
    offset: metadata.skip,
    limit: metadata.take,
  })
}

export const POST = async (
  req: AuthenticatedMedusaRequest<AdminCreateCampaignType>,
  res: MedusaResponse
) => {
  const createCampaigns = createCampaignsWorkflow(req.scope)
  const campaignsData = [req.validatedBody]

  const { result, errors } = await createCampaigns.run({
    input: { campaignsData },
    throwOnError: false,
    context: {
      requestId: req.requestId,
    },
  })

  if (Array.isArray(errors) && errors[0]) {
    throw errors[0].error
  }

  const campaign = await refetchCampaign(
    result[0].id,
    req.scope,
    req.remoteQueryConfig.fields
  )

  res.status(200).json({ campaign })
}
