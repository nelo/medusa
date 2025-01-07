curl -X POST '{backend_url}/admin/orders/{id}/fulfillments/{fulfillment_id}/shipments' \
-H 'x-medusa-access-token: {api_token}' \
-H 'Content-Type: application/json' \
--data-raw '{
  "items": [
    {
      "id": "id_BBEPhecN5od65GJy",
      "quantity": 7182981256970240
    }
  ],
  "metadata": {}
}'