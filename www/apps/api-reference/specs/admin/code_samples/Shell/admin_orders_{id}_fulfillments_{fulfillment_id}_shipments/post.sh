curl -X POST '{backend_url}/admin/orders/{id}/fulfillments/{fulfillment_id}/shipments' \
-H 'x-medusa-access-token: {api_token}' \
-H 'Content-Type: application/json' \
--data-raw '{
  "items": [
    {
      "id": "id_yJxoWer8ZYyVLM089b1g",
      "quantity": 3098995031277568
    }
  ],
  "metadata": {}
}'