curl -X POST '{backend_url}/admin/orders/{id}/fulfillments/{fulfillment_id}/shipments' \
-H 'x-medusa-access-token: {api_token}' \
-H 'Content-Type: application/json' \
--data-raw '{
  "items": [
    {
      "id": "id_Ej7aLQ3oycqL0BO",
      "quantity": 8857050721288192
    }
  ],
  "metadata": {}
}'