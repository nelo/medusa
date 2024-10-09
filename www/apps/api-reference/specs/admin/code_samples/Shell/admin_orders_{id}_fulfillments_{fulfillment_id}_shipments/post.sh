curl -X POST '{backend_url}/admin/orders/{id}/fulfillments/{fulfillment_id}/shipments' \
-H 'x-medusa-access-token: {api_token}' \
-H 'Content-Type: application/json' \
--data-raw '{
  "items": [
    {
      "id": "id_liGR46LYIza5MpdudZ",
      "quantity": 7037005502349312
    }
  ],
  "metadata": {}
}'