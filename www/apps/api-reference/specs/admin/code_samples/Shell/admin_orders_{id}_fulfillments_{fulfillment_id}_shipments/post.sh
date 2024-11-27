curl -X POST '{backend_url}/admin/orders/{id}/fulfillments/{fulfillment_id}/shipments' \
-H 'x-medusa-access-token: {api_token}' \
-H 'Content-Type: application/json' \
--data-raw '{
  "items": [
    {
      "id": "id_DDW2d8IQIutU9zCQS",
      "quantity": 7803108874780672
    }
  ],
  "metadata": {}
}'