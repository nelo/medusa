/**
 * @schema CreateApplicationMethod
 * type: object
 * description: The promotion's application method.
 * x-schemaName: CreateApplicationMethod
 * required:
 *   - type
 *   - target_type
 * properties:
 *   type:
 *     type: string
 *     enum:
 *       - fixed
 *       - percentage
 *   target_type:
 *     type: string
 *     enum:
 *       - order
 *       - shipping_methods
 *       - items
 *   allocation:
 *     type: string
 *     enum:
 *       - each
 *       - across
 *   value:
 *     type: number
 *     title: value
 *     description: The application method's value.
 *   max_quantity:
 *     type: number
 *     title: max_quantity
 *     description: The application method's max quantity.
 *   buy_rules_min_quantity:
 *     type: number
 *     title: buy_rules_min_quantity
 *     description: The application method's buy rules min quantity.
 *   apply_to_quantity:
 *     type: number
 *     title: apply_to_quantity
 *     description: The application method's apply to quantity.
 *   promotion:
 *     oneOf:
 *       - type: string
 *         title: promotion
 *         description: The application method's promotion.
 *       - type: object
 *         description: The application method's promotion.
 *         x-schemaName: Promotion
 *         required:
 *           - id
 *         properties:
 *           id:
 *             type: string
 *             title: id
 *             description: The promotion's ID.
 *           code:
 *             type: string
 *             title: code
 *             description: The promotion's code.
 *           type:
 *             type: string
 *             enum:
 *               - standard
 *               - buyget
 *           is_automatic:
 *             type: boolean
 *             title: is_automatic
 *             description: The promotion's is automatic.
 *           application_method:
 *             $ref: "#/components/schemas/ApplicationMethod"
 *           rules:
 *             type: array
 *             description: The promotion's rules.
 *             items:
 *               type: object
 *               description: The rule's rules.
 *               x-schemaName: PromotionRule
 *               properties: {}
 *           campaign:
 *             $ref: "#/components/schemas/Campaign"
 *   target_rules:
 *     type: array
 *     description: The application method's target rules.
 *     items:
 *       type: object
 *       description: The target rule's target rules.
 *       x-schemaName: CreatePromotionRule
 *       required:
 *         - attribute
 *         - operator
 *         - values
 *       properties:
 *         description:
 *           type: string
 *           title: description
 *           description: The target rule's description.
 *         attribute:
 *           type: string
 *           title: attribute
 *           description: The target rule's attribute.
 *         operator:
 *           type: string
 *           enum:
 *             - gt
 *             - lt
 *             - eq
 *             - ne
 *             - in
 *             - lte
 *             - gte
 *         values:
 *           oneOf:
 *             - type: string
 *               title: values
 *               description: The target rule's values.
 *             - type: array
 *               description: The target rule's values.
 *               items:
 *                 type: string
 *                 title: values
 *                 description: The value's values.
 *   buy_rules:
 *     type: array
 *     description: The application method's buy rules.
 *     items:
 *       type: object
 *       description: The buy rule's buy rules.
 *       x-schemaName: CreatePromotionRule
 *       required:
 *         - attribute
 *         - operator
 *         - values
 *       properties:
 *         description:
 *           type: string
 *           title: description
 *           description: The buy rule's description.
 *         attribute:
 *           type: string
 *           title: attribute
 *           description: The buy rule's attribute.
 *         operator:
 *           type: string
 *           enum:
 *             - gt
 *             - lt
 *             - eq
 *             - ne
 *             - in
 *             - lte
 *             - gte
 *         values:
 *           oneOf:
 *             - type: string
 *               title: values
 *               description: The buy rule's values.
 *             - type: array
 *               description: The buy rule's values.
 *               items:
 *                 type: string
 *                 title: values
 *                 description: The value's values.
 * 
*/

