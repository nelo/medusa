curl -X POST '{backend_url}/admin/orders/{id}/fulfillments/{fulfillment_id}/shipments' \
-H 'x-medusa-access-token: {api_token}' \
-H 'Content-Type: application/json' \
--data-raw '{
  "items": [
    {
      "id": "id_U2phep6SLeBVyh0Ul",
      "quantity": 3258076920545280
    }
  ],
  "metadata": {}
}'