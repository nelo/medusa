curl -X POST '{backend_url}/admin/orders/{id}/fulfillments/{fulfillment_id}/shipments' \
-H 'x-medusa-access-token: {api_token}' \
-H 'Content-Type: application/json' \
--data-raw '{
  "items": [
    {
      "id": "id_GldxV3zDfrJnD4oMi",
      "quantity": 6358514211487744
    }
  ],
  "metadata": {}
}'