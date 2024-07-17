/**
 * @schema CreateCampaignBudget
 * type: object
 * description: The campaign's budget.
 * x-schemaName: CreateCampaignBudget
 * required:
 *   - type
 *   - limit
 * properties:
 *   type:
 *     type: string
 *     enum:
 *       - spend
 *       - usage
 *   limit:
 *     type: number
 *     title: limit
 *     description: The budget's limit.
 *   used:
 *     type: number
 *     title: used
 *     description: The budget's used.
 * 
*/

