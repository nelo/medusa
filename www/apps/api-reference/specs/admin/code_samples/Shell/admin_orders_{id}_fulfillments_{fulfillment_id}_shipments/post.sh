curl -X POST '{backend_url}/admin/orders/{id}/fulfillments/{fulfillment_id}/shipments' \
-H 'x-medusa-access-token: {api_token}' \
-H 'Content-Type: application/json' \
--data-raw '{
  "items": [
    {
      "id": "id_9KqLcRcGIN9uLUZF6Mo",
      "quantity": 7354614366076928
    }
  ],
  "metadata": {}
}'