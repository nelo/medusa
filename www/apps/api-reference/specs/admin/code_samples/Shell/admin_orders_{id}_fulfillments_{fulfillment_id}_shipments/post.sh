curl -X POST '{backend_url}/admin/orders/{id}/fulfillments/{fulfillment_id}/shipments' \
-H 'x-medusa-access-token: {api_token}' \
-H 'Content-Type: application/json' \
--data-raw '{
  "items": [
    {
      "id": "id_t0DvjwU3wC0FZHsvy3E",
      "quantity": 7371247203647488
    }
  ],
  "metadata": {}
}'