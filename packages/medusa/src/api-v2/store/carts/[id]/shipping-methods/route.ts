import { addShippingMethodToWorkflow } from "@medusajs/core-flows"
import { MedusaRequest, MedusaResponse } from "../../../../../types/routing"
import { refetchCart } from "../../helpers"
import { StoreAddCartShippingMethodsType } from "../../validators"

export const POST = async (
  req: MedusaRequest<StoreAddCartShippingMethodsType>,
  res: MedusaResponse
) => {
  const workflow = addShippingMethodToWorkflow(req.scope)
  const payload = req.validatedBody

  const { errors } = await workflow.run({
    input: {
      options: [{ id: payload.option_id, data: payload.data }],
      cart_id: req.params.id,
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
