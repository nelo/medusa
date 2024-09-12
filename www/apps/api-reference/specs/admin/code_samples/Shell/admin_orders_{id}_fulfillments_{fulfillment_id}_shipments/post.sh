curl -X POST '{backend_url}/admin/orders/{id}/fulfillments/{fulfillment_id}/shipments' \
-H 'x-medusa-access-token: {api_token}' \
-H 'Content-Type: application/json' \
--data-raw '{
  "items": [
    {
      "id": "id_1c7U89tU5fESZrx5",
      "quantity": 2509023297404928
    }
  ],
  "metadata": {}
}'