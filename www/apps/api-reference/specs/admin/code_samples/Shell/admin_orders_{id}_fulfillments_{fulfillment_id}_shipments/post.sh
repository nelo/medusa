curl -X POST '{backend_url}/admin/orders/{id}/fulfillments/{fulfillment_id}/shipments' \
-H 'x-medusa-access-token: {api_token}' \
-H 'Content-Type: application/json' \
--data-raw '{
  "items": [
    {
      "id": "id_CSJYcclaaZ1d0oBk",
      "quantity": 2356160365592576
    }
  ],
  "metadata": {}
}'