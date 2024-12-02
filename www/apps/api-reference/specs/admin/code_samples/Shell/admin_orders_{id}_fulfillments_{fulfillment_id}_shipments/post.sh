curl -X POST '{backend_url}/admin/orders/{id}/fulfillments/{fulfillment_id}/shipments' \
-H 'x-medusa-access-token: {api_token}' \
-H 'Content-Type: application/json' \
--data-raw '{
  "items": [
    {
      "id": "id_KwTWOcpWORPnmgv40e8",
      "quantity": 1142522124435456
    }
  ],
  "metadata": {}
}'