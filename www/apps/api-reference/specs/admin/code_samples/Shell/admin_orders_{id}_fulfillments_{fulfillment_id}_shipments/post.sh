curl -X POST '{backend_url}/admin/orders/{id}/fulfillments/{fulfillment_id}/shipments' \
-H 'x-medusa-access-token: {api_token}' \
-H 'Content-Type: application/json' \
--data-raw '{
  "items": [
    {
      "id": "id_IE9kP5TjQn3yip3ub",
      "quantity": 970299623342080
    }
  ],
  "metadata": {}
}'