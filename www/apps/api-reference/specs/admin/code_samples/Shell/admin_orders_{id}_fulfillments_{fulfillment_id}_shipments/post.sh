curl -X POST '{backend_url}/admin/orders/{id}/fulfillments/{fulfillment_id}/shipments' \
-H 'x-medusa-access-token: {api_token}' \
-H 'Content-Type: application/json' \
--data-raw '{
  "items": [
    {
      "id": "id_1R0cRJBH1Ex2nGhoycq",
      "quantity": 6485728385040384
    }
  ],
  "metadata": {}
}'