curl -X POST '{backend_url}/admin/orders/{id}/fulfillments/{fulfillment_id}/shipments' \
-H 'x-medusa-access-token: {api_token}' \
-H 'Content-Type: application/json' \
--data-raw '{
  "items": [
    {
      "id": "id_7J7nOTWNQBAkfcH0",
      "quantity": 4058592638402560
    }
  ],
  "metadata": {}
}'