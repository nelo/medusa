curl -X POST '{backend_url}/admin/orders/{id}/fulfillments/{fulfillment_id}/shipments' \
-H 'x-medusa-access-token: {api_token}' \
-H 'Content-Type: application/json' \
--data-raw '{
  "items": [
    {
      "id": "id_AX8SGwZ89pEiFcZQnPhh",
      "quantity": 3959646683398144
    }
  ],
  "metadata": {}
}'