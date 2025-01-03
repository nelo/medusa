curl -X POST '{backend_url}/admin/orders/{id}/fulfillments/{fulfillment_id}/shipments' \
-H 'x-medusa-access-token: {api_token}' \
-H 'Content-Type: application/json' \
--data-raw '{
  "items": [
    {
      "id": "id_N7wJTTaIwfl3KZnwNU7h",
      "quantity": 1517813235712000
    }
  ],
  "metadata": {}
}'