import { batchPromotionRulesWorkflow } from "@medusajs/core-flows"
import {
  AuthenticatedMedusaRequest,
  MedusaResponse,
} from "../../../../../../types/routing"
import { BatchMethodRequest } from "@medusajs/types"
import {
  AdminCreatePromotionRuleType,
  AdminUpdatePromotionRuleType,
} from "../../../validators"
import { RuleType } from "@medusajs/utils"
import { refetchBatchRules } from "../../../helpers"

export const POST = async (
  req: AuthenticatedMedusaRequest<
    BatchMethodRequest<
      AdminCreatePromotionRuleType,
      AdminUpdatePromotionRuleType
    >
  >,
  res: MedusaResponse
) => {
  const id = req.params.id
  const { result, errors } = await batchPromotionRulesWorkflow(req.scope).run({
    input: {
      id,
      rule_type: RuleType.RULES,
      create: req.validatedBody.create,
      update: req.validatedBody.update,
      delete: req.validatedBody.delete,
    },
    throwOnError: false,
  })

  if (Array.isArray(errors) && errors[0]) {
    throw errors[0].error
  }

  const batchResults = await refetchBatchRules(
    result,
    req.scope,
    req.remoteQueryConfig.fields
  )

  res.status(200).json(batchResults)
}
