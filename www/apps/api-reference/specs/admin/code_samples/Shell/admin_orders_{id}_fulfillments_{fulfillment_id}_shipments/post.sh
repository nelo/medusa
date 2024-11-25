curl -X POST '{backend_url}/admin/orders/{id}/fulfillments/{fulfillment_id}/shipments' \
-H 'x-medusa-access-token: {api_token}' \
-H 'Content-Type: application/json' \
--data-raw '{
  "items": [
    {
      "id": "id_UdVh8ZYuRsKipvkbT0",
      "quantity": 4979792128507904
    }
  ],
  "metadata": {}
}'