curl -X POST '{backend_url}/admin/orders/{id}/fulfillments/{fulfillment_id}/shipments' \
-H 'x-medusa-access-token: {api_token}' \
-H 'Content-Type: application/json' \
--data-raw '{
  "items": [
    {
      "id": "id_Dj9UJGDGkCEhGf",
      "quantity": 6776944580362240
    }
  ],
  "metadata": {}
}'