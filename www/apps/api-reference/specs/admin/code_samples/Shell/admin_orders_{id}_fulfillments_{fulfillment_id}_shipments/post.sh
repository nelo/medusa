curl -X POST '{backend_url}/admin/orders/{id}/fulfillments/{fulfillment_id}/shipments' \
-H 'x-medusa-access-token: {api_token}' \
-H 'Content-Type: application/json' \
--data-raw '{
  "items": [
    {
      "id": "id_l4Eq6pBmZq2xFfoe5UU",
      "quantity": 6071834673938432
    }
  ],
  "metadata": {}
}'