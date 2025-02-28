curl -X POST '{backend_url}/admin/orders/{id}/fulfillments/{fulfillment_id}/shipments' \
-H 'x-medusa-access-token: {api_token}' \
-H 'Content-Type: application/json' \
--data-raw '{
  "items": [
    {
      "id": "id_XYGXPA1xeYXJV5V0",
      "quantity": 6123244255969280
    }
  ],
  "metadata": {}
}'