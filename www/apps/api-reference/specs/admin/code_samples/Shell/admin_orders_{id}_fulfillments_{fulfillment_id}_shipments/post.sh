curl -X POST '{backend_url}/admin/orders/{id}/fulfillments/{fulfillment_id}/shipments' \
-H 'x-medusa-access-token: {api_token}' \
-H 'Content-Type: application/json' \
--data-raw '{
  "items": [
    {
      "id": "id_ZvBwqFE9tMId8Jv3vfjC",
      "quantity": 21412584620032
    }
  ],
  "metadata": {}
}'