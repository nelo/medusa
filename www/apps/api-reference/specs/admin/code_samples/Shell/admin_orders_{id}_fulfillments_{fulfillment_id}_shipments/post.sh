curl -X POST '{backend_url}/admin/orders/{id}/fulfillments/{fulfillment_id}/shipments' \
-H 'x-medusa-access-token: {api_token}' \
-H 'Content-Type: application/json' \
--data-raw '{
  "items": [
    {
      "id": "id_kpx0zJoOnl8X1fZA",
      "quantity": 6998926743830528
    }
  ],
  "metadata": {}
}'