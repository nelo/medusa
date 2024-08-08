curl -X POST '{backend_url}/admin/orders/{id}/fulfillments/{fulfillment_id}/shipments' \
-H 'x-medusa-access-token: {api_token}' \
-H 'Content-Type: application/json' \
--data-raw '{
  "items": [
    {
      "id": "id_R8fhzo0aInCA4rGtfmP",
      "quantity": 7662834133499904
    }
  ],
  "metadata": {}
}'