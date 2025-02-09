curl -X POST '{backend_url}/admin/orders/{id}/fulfillments/{fulfillment_id}/shipments' \
-H 'x-medusa-access-token: {api_token}' \
-H 'Content-Type: application/json' \
--data-raw '{
  "items": [
    {
      "id": "id_9CNXLf9r2xXrnbyd",
      "quantity": 1249210399719424
    }
  ],
  "metadata": {}
}'