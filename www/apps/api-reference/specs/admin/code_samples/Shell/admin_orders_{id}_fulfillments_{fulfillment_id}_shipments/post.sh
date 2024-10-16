curl -X POST '{backend_url}/admin/orders/{id}/fulfillments/{fulfillment_id}/shipments' \
-H 'x-medusa-access-token: {api_token}' \
-H 'Content-Type: application/json' \
--data-raw '{
  "items": [
    {
      "id": "id_b4GFhL71OKEUZv2a0S",
      "quantity": 4129271922556928
    }
  ],
  "metadata": {}
}'