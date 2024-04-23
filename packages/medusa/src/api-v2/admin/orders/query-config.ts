export const defaultAdminOrderFields = [
  "id",
  "status",
  "version",
  "summary",
  "metadata",
  "created_at",
  "updated_at",
]

export const defaultAdminRetrieveOrderFields = [
  "id",
  "status",
  "version",
  "summary",
  "total",
  "subtotal",
  "tax_total",
  "discount_total",
  "discount_tax_total",
  "original_total",
  "original_tax_total",
  "item_total",
  "item_subtotal",
  "item_tax_total",
  "original_item_total",
  "original_item_subtotal",
  "original_item_tax_total",
  "shipping_total",
  "shipping_subtotal",
  "shipping_tax_total",
  "original_shipping_tax_total",
  "original_shipping_tax_subtotal",
  "original_shipping_total",
  "created_at",
  "updated_at",
  "*items",
  "*items.tax_lines",
  "*items.adjustments",
  "*items.detail",
  "*items.tax_lines",
  "*items.adjustments",
  "*shipping_address",
  "*billing_address",
  "*shipping_methods",
  "*shipping_methods.tax_lines",
  "*shipping_methods.adjustments",
]

export const retrieveTransformQueryConfig = {
  defaultFields: defaultAdminRetrieveOrderFields,
  isList: false,
}

export const listTransformQueryConfig = {
  defaults: defaultAdminOrderFields,
  defaultLimit: 20,
  isList: true,
}