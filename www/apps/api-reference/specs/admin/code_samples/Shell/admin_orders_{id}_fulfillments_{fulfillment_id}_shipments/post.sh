curl -X POST '{backend_url}/admin/orders/{id}/fulfillments/{fulfillment_id}/shipments' \
-H 'x-medusa-access-token: {api_token}' \
-H 'Content-Type: application/json' \
--data-raw '{
  "items": [
    {
      "id": "id_QA4sQ9Z5q1i64TQlq",
      "quantity": 2096371872038912
    }
  ],
  "metadata": {}
}'