curl -X POST '{backend_url}/admin/orders/{id}/fulfillments/{fulfillment_id}/shipments' \
-H 'x-medusa-access-token: {api_token}' \
-H 'Content-Type: application/json' \
--data-raw '{
  "items": [
    {
      "id": "id_iWEqiCC5j5f4c6nUw",
      "quantity": 3944040902950912
    }
  ],
  "metadata": {}
}'