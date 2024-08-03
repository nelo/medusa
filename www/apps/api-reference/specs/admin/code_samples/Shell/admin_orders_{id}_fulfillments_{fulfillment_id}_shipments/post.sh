curl -X POST '{backend_url}/admin/orders/{id}/fulfillments/{fulfillment_id}/shipments' \
-H 'x-medusa-access-token: {api_token}' \
-H 'Content-Type: application/json' \
--data-raw '{
  "items": [
    {
      "id": "id_mVin1nX5uFc4KjeKbvk",
      "quantity": 2310120073592832
    }
  ],
  "metadata": {}
}'