curl -X POST '{backend_url}/admin/orders/{id}/fulfillments/{fulfillment_id}/shipments' \
-H 'x-medusa-access-token: {api_token}' \
-H 'Content-Type: application/json' \
--data-raw '{
  "items": [
    {
      "id": "id_4VeqE3n0L7EPK21H",
      "quantity": 867991698800640
    }
  ],
  "metadata": {}
}'