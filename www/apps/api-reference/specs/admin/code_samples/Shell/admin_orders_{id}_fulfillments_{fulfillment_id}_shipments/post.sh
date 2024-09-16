curl -X POST '{backend_url}/admin/orders/{id}/fulfillments/{fulfillment_id}/shipments' \
-H 'x-medusa-access-token: {api_token}' \
-H 'Content-Type: application/json' \
--data-raw '{
  "items": [
    {
      "id": "id_mHJ4eji7LdFGhsYe6T9N",
      "quantity": 8354547755909120
    }
  ],
  "metadata": {}
}'