curl -X POST '{backend_url}/admin/orders/{id}/fulfillments/{fulfillment_id}/shipments' \
-H 'x-medusa-access-token: {api_token}' \
-H 'Content-Type: application/json' \
--data-raw '{
  "items": [
    {
      "id": "id_Z9DLmrrC5CAsK9",
      "quantity": 5520207349022720
    }
  ],
  "metadata": {}
}'