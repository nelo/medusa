curl -X POST '{backend_url}/admin/orders/{id}/fulfillments/{fulfillment_id}/shipments' \
-H 'x-medusa-access-token: {api_token}' \
-H 'Content-Type: application/json' \
--data-raw '{
  "items": [
    {
      "id": "id_V3CWzDB0jp9NbRf4u",
      "quantity": 2348453254397952
    }
  ],
  "metadata": {}
}'