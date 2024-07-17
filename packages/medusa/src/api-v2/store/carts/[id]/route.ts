import { updateCartWorkflow } from "@medusajs/core-flows"
import { UpdateCartDataDTO } from "@medusajs/types"

import { MedusaRequest, MedusaResponse } from "../../../../types/routing"
import { refetchCart } from "../helpers"

export const GET = async (req: MedusaRequest, res: MedusaResponse) => {
  const cart = await refetchCart(
    req.params.id,
    req.scope,
    req.remoteQueryConfig.fields
  )

  res.json({ cart })
}

export const POST = async (
  req: MedusaRequest<UpdateCartDataDTO>,
  res: MedusaResponse
) => {
  const workflow = updateCartWorkflow(req.scope)

  const { errors } = await workflow.run({
    input: {
      ...(req.validatedBody as UpdateCartDataDTO),
      id: req.params.id,
    },
    throwOnError: false,
  })

  if (Array.isArray(errors) && errors[0]) {
    throw errors[0].error
  }

  const cart = await refetchCart(
    req.params.id,
    req.scope,
    req.remoteQueryConfig.fields
  )

  res.status(200).json({ cart })
}
