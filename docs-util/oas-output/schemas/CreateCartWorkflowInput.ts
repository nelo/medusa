/**
 * @schema CreateCartWorkflowInput
 * type: object
 * description: SUMMARY
 * x-schemaName: CreateCartWorkflowInput
 * properties:
 *   region_id:
 *     type: string
 *     title: region_id
 *     description: The cart's region id.
 *   customer_id:
 *     type: string
 *     title: customer_id
 *     description: The cart's customer id.
 *   sales_channel_id:
 *     type: string
 *     title: sales_channel_id
 *     description: The cart's sales channel id.
 *   email:
 *     type: string
 *     title: email
 *     description: The cart's email.
 *     format: email
 *   currency_code:
 *     type: string
 *     title: currency_code
 *     description: The cart's currency code.
 *   shipping_address_id:
 *     type: string
 *     title: shipping_address_id
 *     description: The cart's shipping address id.
 *   billing_address_id:
 *     type: string
 *     title: billing_address_id
 *     description: The cart's billing address id.
 *   shipping_address:
 *     oneOf:
 *       - type: string
 *         title: shipping_address
 *         description: The cart's shipping address.
 *       - type: object
 *         description: The cart's shipping address.
 *         x-schemaName: CreateCartAddress
 *         properties:
 *           first_name:
 *             type: string
 *             title: first_name
 *             description: The shipping address's first name.
 *           last_name:
 *             type: string
 *             title: last_name
 *             description: The shipping address's last name.
 *           phone:
 *             type: string
 *             title: phone
 *             description: The shipping address's phone.
 *           company:
 *             type: string
 *             title: company
 *             description: The shipping address's company.
 *           address_1:
 *             type: string
 *             title: address_1
 *             description: The shipping address's address 1.
 *           address_2:
 *             type: string
 *             title: address_2
 *             description: The shipping address's address 2.
 *           city:
 *             type: string
 *             title: city
 *             description: The shipping address's city.
 *           country_code:
 *             type: string
 *             title: country_code
 *             description: The shipping address's country code.
 *           province:
 *             type: string
 *             title: province
 *             description: The shipping address's province.
 *           postal_code:
 *             type: string
 *             title: postal_code
 *             description: The shipping address's postal code.
 *           metadata:
 *             type: object
 *             description: The shipping address's metadata.
 *             properties: {}
 *   billing_address:
 *     oneOf:
 *       - type: string
 *         title: billing_address
 *         description: The cart's billing address.
 *       - type: object
 *         description: The cart's billing address.
 *         x-schemaName: CreateCartAddress
 *         properties:
 *           first_name:
 *             type: string
 *             title: first_name
 *             description: The billing address's first name.
 *           last_name:
 *             type: string
 *             title: last_name
 *             description: The billing address's last name.
 *           phone:
 *             type: string
 *             title: phone
 *             description: The billing address's phone.
 *           company:
 *             type: string
 *             title: company
 *             description: The billing address's company.
 *           address_1:
 *             type: string
 *             title: address_1
 *             description: The billing address's address 1.
 *           address_2:
 *             type: string
 *             title: address_2
 *             description: The billing address's address 2.
 *           city:
 *             type: string
 *             title: city
 *             description: The billing address's city.
 *           country_code:
 *             type: string
 *             title: country_code
 *             description: The billing address's country code.
 *           province:
 *             type: string
 *             title: province
 *             description: The billing address's province.
 *           postal_code:
 *             type: string
 *             title: postal_code
 *             description: The billing address's postal code.
 *           metadata:
 *             type: object
 *             description: The billing address's metadata.
 *             properties: {}
 *   metadata:
 *     type: object
 *     description: The cart's metadata.
 *     properties: {}
 *   items:
 *     type: array
 *     description: The cart's items.
 *     items:
 *       type: object
 *       description: The item's items.
 *       x-schemaName: CreateCartCreateLineItem
 *       required:
 *         - quantity
 *         - variant_id
 *       properties:
 *         quantity:
 *           type: number
 *           title: quantity
 *           description: The item's quantity.
 *         variant_id:
 *           type: string
 *           title: variant_id
 *           description: The item's variant id.
 *         title:
 *           type: string
 *           title: title
 *           description: The item's title.
 *         subtitle:
 *           type: string
 *           title: subtitle
 *           description: The item's subtitle.
 *         thumbnail:
 *           type: string
 *           title: thumbnail
 *           description: The item's thumbnail.
 *         product_id:
 *           type: string
 *           title: product_id
 *           description: The item's product id.
 *         product_title:
 *           type: string
 *           title: product_title
 *           description: The item's product title.
 *         product_description:
 *           type: string
 *           title: product_description
 *           description: The item's product description.
 *         product_subtitle:
 *           type: string
 *           title: product_subtitle
 *           description: The item's product subtitle.
 *         product_type:
 *           type: string
 *           title: product_type
 *           description: The item's product type.
 *         product_collection:
 *           type: string
 *           title: product_collection
 *           description: The item's product collection.
 *         product_handle:
 *           type: string
 *           title: product_handle
 *           description: The item's product handle.
 *         variant_sku:
 *           type: string
 *           title: variant_sku
 *           description: The item's variant sku.
 *         variant_barcode:
 *           type: string
 *           title: variant_barcode
 *           description: The item's variant barcode.
 *         variant_title:
 *           type: string
 *           title: variant_title
 *           description: The item's variant title.
 *         variant_option_values:
 *           type: object
 *           description: The item's variant option values.
 *           properties: {}
 *         requires_shipping:
 *           type: boolean
 *           title: requires_shipping
 *           description: The item's requires shipping.
 *         is_discountable:
 *           type: boolean
 *           title: is_discountable
 *           description: The item's is discountable.
 *         is_tax_inclusive:
 *           type: boolean
 *           title: is_tax_inclusive
 *           description: The item's is tax inclusive.
 *         is_giftcard:
 *           type: boolean
 *           title: is_giftcard
 *           description: The item's is giftcard.
 *         compare_at_unit_price:
 *           type: number
 *           title: compare_at_unit_price
 *           description: The item's compare at unit price.
 *         unit_price:
 *           oneOf:
 *             - type: string
 *               title: unit_price
 *               description: The item's unit price.
 *             - type: number
 *               title: unit_price
 *               description: The item's unit price.
 *         metadata:
 *           type: object
 *           description: The item's metadata.
 *           properties: {}
 *   promo_codes:
 *     type: array
 *     description: The cart's promo codes.
 *     items:
 *       type: string
 *       title: promo_codes
 *       description: The promo code's promo codes.
 * 
*/

