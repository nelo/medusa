curl -X POST '{backend_url}/admin/orders/{id}/fulfillments/{fulfillment_id}/shipments' \
-H 'x-medusa-access-token: {api_token}' \
-H 'Content-Type: application/json' \
--data-raw '{
  "items": [
    {
      "id": "id_oA65TAQEsfmLXu09CZK",
      "quantity": 5449560512004096
    }
  ],
  "metadata": {}
}'