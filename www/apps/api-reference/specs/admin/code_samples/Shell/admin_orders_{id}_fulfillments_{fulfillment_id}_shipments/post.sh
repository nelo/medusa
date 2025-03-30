curl -X POST '{backend_url}/admin/orders/{id}/fulfillments/{fulfillment_id}/shipments' \
-H 'x-medusa-access-token: {api_token}' \
-H 'Content-Type: application/json' \
--data-raw '{
  "items": [
    {
      "id": "id_SmnAHDd7h9UFN3a96E",
      "quantity": 8841641567715328
    }
  ],
  "metadata": {}
}'