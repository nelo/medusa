curl -X POST '{backend_url}/admin/orders/{id}/fulfillments/{fulfillment_id}/shipments' \
-H 'x-medusa-access-token: {api_token}' \
-H 'Content-Type: application/json' \
--data-raw '{
  "items": [
    {
      "id": "id_a0bKBfPhGYKgf1",
      "quantity": 6955482640023552
    }
  ],
  "metadata": {}
}'