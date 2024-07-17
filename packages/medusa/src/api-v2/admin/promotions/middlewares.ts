import * as QueryConfig from "./query-config"
import { MiddlewareRoute } from "../../../loaders/helpers/routing/types"
import { authenticate } from "../../../utils/authenticate-middleware"
import { validateAndTransformQuery } from "../../utils/validate-query"
import {
  AdminCreatePromotion,
  AdminCreatePromotionRule,
  AdminGetPromotionParams,
  AdminGetPromotionRuleParams,
  AdminGetPromotionRuleTypeParams,
  AdminGetPromotionsParams,
  AdminGetPromotionsRuleValueParams,
  AdminUpdatePromotion,
  AdminUpdatePromotionRule,
} from "./validators"
import { validateAndTransformBody } from "../../utils/validate-body"
import { createBatchBody } from "../../utils/validators"

export const adminPromotionRoutesMiddlewares: MiddlewareRoute[] = [
  {
    matcher: "/admin/promotions*",
    middlewares: [authenticate("admin", ["bearer", "session", "api-key"])],
  },
  {
    method: ["GET"],
    matcher: "/admin/promotions",
    middlewares: [
      validateAndTransformQuery(
        AdminGetPromotionsParams,
        QueryConfig.listTransformQueryConfig
      ),
    ],
  },
  {
    method: ["POST"],
    matcher: "/admin/promotions",
    middlewares: [
      validateAndTransformBody(AdminCreatePromotion),
      validateAndTransformQuery(
        AdminGetPromotionParams,
        QueryConfig.retrieveTransformQueryConfig
      ),
    ],
  },
  {
    method: ["GET"],
    matcher: "/admin/promotions/:id",
    middlewares: [
      validateAndTransformQuery(
        AdminGetPromotionParams,
        QueryConfig.retrieveTransformQueryConfig
      ),
    ],
  },
  {
    method: ["POST"],
    matcher: "/admin/promotions/:id",
    middlewares: [
      validateAndTransformBody(AdminUpdatePromotion),
      validateAndTransformQuery(
        AdminGetPromotionParams,
        QueryConfig.retrieveTransformQueryConfig
      ),
    ],
  },
  {
    method: ["GET"],
    matcher: "/admin/promotions/:id/:rule_type",
    middlewares: [
      validateAndTransformQuery(
        AdminGetPromotionRuleTypeParams,
        QueryConfig.retrieveTransformQueryConfig
      ),
    ],
  },
  {
    method: ["POST"],
    matcher: "/admin/promotions/:id/rules/batch",
    middlewares: [
      validateAndTransformBody(
        createBatchBody(AdminCreatePromotionRule, AdminUpdatePromotionRule)
      ),
      validateAndTransformQuery(
        AdminGetPromotionRuleParams,
        QueryConfig.retrieveRuleTransformQueryConfig
      ),
    ],
  },
  {
    method: ["POST"],
    matcher: "/admin/promotions/:id/target-rules/batch",
    middlewares: [
      validateAndTransformBody(
        createBatchBody(AdminCreatePromotionRule, AdminUpdatePromotionRule)
      ),
      validateAndTransformQuery(
        AdminGetPromotionRuleParams,
        QueryConfig.retrieveRuleTransformQueryConfig
      ),
    ],
  },
  {
    method: ["POST"],
    matcher: "/admin/promotions/:id/buy-rules/batch",
    middlewares: [
      validateAndTransformBody(
        createBatchBody(AdminCreatePromotionRule, AdminUpdatePromotionRule)
      ),
      validateAndTransformQuery(
        AdminGetPromotionRuleParams,
        QueryConfig.retrieveRuleTransformQueryConfig
      ),
    ],
  },
  {
    method: ["GET"],
    matcher:
      "/admin/promotions/rule-value-options/:rule_type/:rule_attribute_id",
    middlewares: [
      validateAndTransformQuery(
        AdminGetPromotionsRuleValueParams,
        QueryConfig.listRuleValueTransformQueryConfig
      ),
    ],
  },
]
