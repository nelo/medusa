curl -X POST '{backend_url}/admin/orders/{id}/fulfillments/{fulfillment_id}/shipments' \
-H 'x-medusa-access-token: {api_token}' \
-H 'Content-Type: application/json' \
--data-raw '{
  "items": [
    {
      "id": "id_ffCn9lRVTmlmXMb1",
      "quantity": 3444548338450432
    }
  ],
  "metadata": {}
}'