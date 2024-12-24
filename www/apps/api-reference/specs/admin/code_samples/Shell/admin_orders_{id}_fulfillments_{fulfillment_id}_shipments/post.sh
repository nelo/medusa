curl -X POST '{backend_url}/admin/orders/{id}/fulfillments/{fulfillment_id}/shipments' \
-H 'x-medusa-access-token: {api_token}' \
-H 'Content-Type: application/json' \
--data-raw '{
  "items": [
    {
      "id": "id_WS3LGxw7Keqix7S",
      "quantity": 1011233947910144
    }
  ],
  "metadata": {}
}'