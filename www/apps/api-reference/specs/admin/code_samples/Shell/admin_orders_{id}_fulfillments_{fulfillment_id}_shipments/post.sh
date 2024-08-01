curl -X POST '{backend_url}/admin/orders/{id}/fulfillments/{fulfillment_id}/shipments' \
-H 'x-medusa-access-token: {api_token}' \
-H 'Content-Type: application/json' \
--data-raw '{
  "items": [
    {
      "id": "id_CgcpXe9ru3J3PlSZQ8ZH",
      "quantity": 5978596944379904
    }
  ],
  "metadata": {}
}'