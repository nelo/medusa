curl -X POST '{backend_url}/admin/orders/{id}/fulfillments/{fulfillment_id}/shipments' \
-H 'x-medusa-access-token: {api_token}' \
-H 'Content-Type: application/json' \
--data-raw '{
  "items": [
    {
      "id": "id_HdLeTbf5og6lJ5JYBWN",
      "quantity": 2087816219590656
    }
  ],
  "metadata": {}
}'