curl -X POST '{backend_url}/admin/orders/{id}/fulfillments/{fulfillment_id}/shipments' \
-H 'x-medusa-access-token: {api_token}' \
-H 'Content-Type: application/json' \
--data-raw '{
  "items": [
    {
      "id": "id_J31UKb6GC0cCyjZL9z",
      "quantity": 5587485589504000
    }
  ],
  "metadata": {}
}'