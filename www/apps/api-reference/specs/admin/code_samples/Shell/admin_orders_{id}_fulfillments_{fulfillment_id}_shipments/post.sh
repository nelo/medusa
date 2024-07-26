curl -X POST '{backend_url}/admin/orders/{id}/fulfillments/{fulfillment_id}/shipments' \
-H 'x-medusa-access-token: {api_token}' \
-H 'Content-Type: application/json' \
--data-raw '{
  "items": [
    {
      "id": "id_LSklJs8iUinsJDHKYs7k",
      "quantity": 4502387188301824
    }
  ],
  "metadata": {}
}'