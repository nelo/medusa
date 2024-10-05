curl -X POST '{backend_url}/admin/orders/{id}/fulfillments/{fulfillment_id}/shipments' \
-H 'x-medusa-access-token: {api_token}' \
-H 'Content-Type: application/json' \
--data-raw '{
  "items": [
    {
      "id": "id_oevUB2fEM5R6301TwCPy",
      "quantity": 5065938669928448
    }
  ],
  "metadata": {}
}'