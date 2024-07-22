curl -X POST '{backend_url}/admin/orders/{id}/fulfillments/{fulfillment_id}/shipments' \
-H 'x-medusa-access-token: {api_token}' \
-H 'Content-Type: application/json' \
--data-raw '{
  "items": [
    {
      "id": "id_B1JS87u2HtgFiZ4wpNyg",
      "quantity": 7363797933096960
    }
  ],
  "metadata": {}
}'