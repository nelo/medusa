curl -X POST '{backend_url}/admin/orders/{id}/fulfillments/{fulfillment_id}/shipments' \
-H 'x-medusa-access-token: {api_token}' \
-H 'Content-Type: application/json' \
--data-raw '{
  "items": [
    {
      "id": "id_n3mP9rWrUZdxhrA1",
      "quantity": 2767207834583040
    }
  ],
  "metadata": {}
}'