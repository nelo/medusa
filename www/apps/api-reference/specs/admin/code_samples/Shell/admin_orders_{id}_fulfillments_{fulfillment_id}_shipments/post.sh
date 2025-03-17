curl -X POST '{backend_url}/admin/orders/{id}/fulfillments/{fulfillment_id}/shipments' \
-H 'x-medusa-access-token: {api_token}' \
-H 'Content-Type: application/json' \
--data-raw '{
  "items": [
    {
      "id": "id_eYu88BDgxK8QEF8iGY",
      "quantity": 1210217280831488
    }
  ],
  "metadata": {}
}'