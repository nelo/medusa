curl -X POST '{backend_url}/admin/orders/{id}/fulfillments/{fulfillment_id}/shipments' \
-H 'x-medusa-access-token: {api_token}' \
-H 'Content-Type: application/json' \
--data-raw '{
  "items": [
    {
      "id": "id_raml5f03UVM4fOYk",
      "quantity": 8658203296399360
    }
  ],
  "metadata": {}
}'