curl -X POST '{backend_url}/admin/orders/{id}/fulfillments/{fulfillment_id}/shipments' \
-H 'x-medusa-access-token: {api_token}' \
-H 'Content-Type: application/json' \
--data-raw '{
  "items": [
    {
      "id": "id_nf2pZsDz3N0vZwsuT",
      "quantity": 2653110421946368
    }
  ],
  "metadata": {}
}'