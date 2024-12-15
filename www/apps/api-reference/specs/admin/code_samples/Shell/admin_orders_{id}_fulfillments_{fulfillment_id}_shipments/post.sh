curl -X POST '{backend_url}/admin/orders/{id}/fulfillments/{fulfillment_id}/shipments' \
-H 'x-medusa-access-token: {api_token}' \
-H 'Content-Type: application/json' \
--data-raw '{
  "items": [
    {
      "id": "id_bt8PNXAZ9aaxfyxP0KCF",
      "quantity": 7151852781043712
    }
  ],
  "metadata": {}
}'