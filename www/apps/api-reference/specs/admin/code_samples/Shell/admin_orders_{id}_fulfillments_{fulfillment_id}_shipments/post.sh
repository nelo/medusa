curl -X POST '{backend_url}/admin/orders/{id}/fulfillments/{fulfillment_id}/shipments' \
-H 'x-medusa-access-token: {api_token}' \
-H 'Content-Type: application/json' \
--data-raw '{
  "items": [
    {
      "id": "id_1hPdjXAb7oU7W2J",
      "quantity": 5618229210775552
    }
  ],
  "metadata": {}
}'