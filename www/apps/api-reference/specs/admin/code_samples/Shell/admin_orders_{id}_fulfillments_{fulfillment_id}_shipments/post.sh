curl -X POST '{backend_url}/admin/orders/{id}/fulfillments/{fulfillment_id}/shipments' \
-H 'x-medusa-access-token: {api_token}' \
-H 'Content-Type: application/json' \
--data-raw '{
  "items": [
    {
      "id": "id_nucrJMg1N9ElViFr",
      "quantity": 3122146574336000
    }
  ],
  "metadata": {}
}'