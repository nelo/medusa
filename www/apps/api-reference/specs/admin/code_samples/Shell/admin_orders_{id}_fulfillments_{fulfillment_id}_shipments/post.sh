curl -X POST '{backend_url}/admin/orders/{id}/fulfillments/{fulfillment_id}/shipments' \
-H 'x-medusa-access-token: {api_token}' \
-H 'Content-Type: application/json' \
--data-raw '{
  "items": [
    {
      "id": "id_bm9SARmyGHErjFWEJ48",
      "quantity": 8952774551142400
    }
  ],
  "metadata": {}
}'