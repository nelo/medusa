curl -X POST '{backend_url}/admin/orders/{id}/fulfillments/{fulfillment_id}/shipments' \
-H 'x-medusa-access-token: {api_token}' \
-H 'Content-Type: application/json' \
--data-raw '{
  "items": [
    {
      "id": "id_It7tHXcB4xSMyAwkE7Z",
      "quantity": 300572796256256
    }
  ],
  "metadata": {}
}'