curl -X POST '{backend_url}/admin/orders/{id}/fulfillments/{fulfillment_id}/shipments' \
-H 'x-medusa-access-token: {api_token}' \
-H 'Content-Type: application/json' \
--data-raw '{
  "items": [
    {
      "id": "id_iMZvfYVrwC7Bf1HwIG",
      "quantity": 2729807777366016
    }
  ],
  "metadata": {}
}'