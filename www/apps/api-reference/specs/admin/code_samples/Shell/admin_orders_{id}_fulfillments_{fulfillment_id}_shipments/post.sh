curl -X POST '{backend_url}/admin/orders/{id}/fulfillments/{fulfillment_id}/shipments' \
-H 'x-medusa-access-token: {api_token}' \
-H 'Content-Type: application/json' \
--data-raw '{
  "items": [
    {
      "id": "id_mZxavdAj6P7tmjFS",
      "quantity": 7054293783805952
    }
  ],
  "metadata": {}
}'