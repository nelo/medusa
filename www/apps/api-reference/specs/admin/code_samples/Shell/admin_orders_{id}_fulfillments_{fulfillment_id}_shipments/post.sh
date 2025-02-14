curl -X POST '{backend_url}/admin/orders/{id}/fulfillments/{fulfillment_id}/shipments' \
-H 'x-medusa-access-token: {api_token}' \
-H 'Content-Type: application/json' \
--data-raw '{
  "items": [
    {
      "id": "id_YzKS4ZfxKrMBJ4CLoH",
      "quantity": 7439170110750720
    }
  ],
  "metadata": {}
}'