curl -X POST '{backend_url}/admin/orders/{id}/fulfillments/{fulfillment_id}/shipments' \
-H 'x-medusa-access-token: {api_token}' \
-H 'Content-Type: application/json' \
--data-raw '{
  "items": [
    {
      "id": "id_CUWnzOg0SGWZXbvMdoM",
      "quantity": 7166679998005248
    }
  ],
  "metadata": {}
}'