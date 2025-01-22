curl -X POST '{backend_url}/admin/orders/{id}/fulfillments/{fulfillment_id}/shipments' \
-H 'x-medusa-access-token: {api_token}' \
-H 'Content-Type: application/json' \
--data-raw '{
  "items": [
    {
      "id": "id_X6NyZY5sQdXf9U",
      "quantity": 2250483854999552
    }
  ],
  "metadata": {}
}'