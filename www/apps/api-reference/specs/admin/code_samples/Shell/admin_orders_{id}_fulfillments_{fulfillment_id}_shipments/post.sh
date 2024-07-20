curl -X POST '{backend_url}/admin/orders/{id}/fulfillments/{fulfillment_id}/shipments' \
-H 'x-medusa-access-token: {api_token}' \
-H 'Content-Type: application/json' \
--data-raw '{
  "items": [
    {
      "id": "id_7VC2XafZzhp49M5xG5uM",
      "quantity": 8147771909472256
    }
  ],
  "metadata": {}
}'