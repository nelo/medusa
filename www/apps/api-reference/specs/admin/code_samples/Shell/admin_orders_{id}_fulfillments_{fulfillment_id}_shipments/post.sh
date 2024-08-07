curl -X POST '{backend_url}/admin/orders/{id}/fulfillments/{fulfillment_id}/shipments' \
-H 'x-medusa-access-token: {api_token}' \
-H 'Content-Type: application/json' \
--data-raw '{
  "items": [
    {
      "id": "id_BvotZeqd98wIZV",
      "quantity": 6135955052298240
    }
  ],
  "metadata": {}
}'