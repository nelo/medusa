curl -X POST '{backend_url}/admin/orders/{id}/fulfillments/{fulfillment_id}/shipments' \
-H 'x-medusa-access-token: {api_token}' \
-H 'Content-Type: application/json' \
--data-raw '{
  "items": [
    {
      "id": "id_8V77VqhMSgTdZA",
      "quantity": 7438810828767232
    }
  ],
  "metadata": {}
}'