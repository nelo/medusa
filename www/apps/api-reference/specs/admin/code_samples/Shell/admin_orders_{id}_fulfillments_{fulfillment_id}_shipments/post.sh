curl -X POST '{backend_url}/admin/orders/{id}/fulfillments/{fulfillment_id}/shipments' \
-H 'x-medusa-access-token: {api_token}' \
-H 'Content-Type: application/json' \
--data-raw '{
  "items": [
    {
      "id": "id_tvMutE3ylT7n3uiOmo",
      "quantity": 246955907219456
    }
  ],
  "metadata": {}
}'