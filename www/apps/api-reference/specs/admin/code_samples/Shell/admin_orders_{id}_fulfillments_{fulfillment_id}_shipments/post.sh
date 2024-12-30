curl -X POST '{backend_url}/admin/orders/{id}/fulfillments/{fulfillment_id}/shipments' \
-H 'x-medusa-access-token: {api_token}' \
-H 'Content-Type: application/json' \
--data-raw '{
  "items": [
    {
      "id": "id_Zrzae3L2mUqrZzVGW3Z",
      "quantity": 2032527514533888
    }
  ],
  "metadata": {}
}'