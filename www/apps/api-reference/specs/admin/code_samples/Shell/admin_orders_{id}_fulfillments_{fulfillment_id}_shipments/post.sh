curl -X POST '{backend_url}/admin/orders/{id}/fulfillments/{fulfillment_id}/shipments' \
-H 'x-medusa-access-token: {api_token}' \
-H 'Content-Type: application/json' \
--data-raw '{
  "items": [
    {
      "id": "id_ZCo6raW8gn4jhLGDOPV",
      "quantity": 4885725371695104
    }
  ],
  "metadata": {}
}'