curl -X POST '{backend_url}/admin/orders/{id}/fulfillments/{fulfillment_id}/shipments' \
-H 'x-medusa-access-token: {api_token}' \
-H 'Content-Type: application/json' \
--data-raw '{
  "items": [
    {
      "id": "id_wlVY41Bfm3NV8jUZOkRi",
      "quantity": 913113226412032
    }
  ],
  "metadata": {}
}'