import { createPromotionsWorkflow } from "@medusajs/core-flows"
import {
  AuthenticatedMedusaRequest,
  MedusaResponse,
} from "../../../types/routing"
import {
  ContainerRegistrationKeys,
  remoteQueryObjectFromString,
} from "@medusajs/utils"
import {
  AdminCreatePromotionType,
  AdminGetPromotionsParamsType,
} from "./validators"
import { refetchPromotion } from "./helpers"

export const GET = async (
  req: AuthenticatedMedusaRequest<AdminGetPromotionsParamsType>,
  res: MedusaResponse
) => {
  const remoteQuery = req.scope.resolve(ContainerRegistrationKeys.REMOTE_QUERY)

  const queryObject = remoteQueryObjectFromString({
    entryPoint: "promotion",
    variables: {
      filters: req.filterableFields,
      ...req.remoteQueryConfig.pagination,
    },
    fields: req.remoteQueryConfig.fields,
  })

  const { rows: promotions, metadata } = await remoteQuery(queryObject)

  res.json({
    promotions,
    count: metadata.count,
    offset: metadata.skip,
    limit: metadata.take,
  })
}

export const POST = async (
  req: AuthenticatedMedusaRequest<AdminCreatePromotionType>,
  res: MedusaResponse
) => {
  const createPromotions = createPromotionsWorkflow(req.scope)
  const promotionsData = [req.validatedBody] as any

  const { result, errors } = await createPromotions.run({
    input: { promotionsData },
    throwOnError: false,
  })

  if (Array.isArray(errors) && errors[0]) {
    throw errors[0].error
  }

  const promotion = await refetchPromotion(
    result[0].id,
    req.scope,
    req.remoteQueryConfig.fields
  )

  res.status(200).json({ promotion })
}
