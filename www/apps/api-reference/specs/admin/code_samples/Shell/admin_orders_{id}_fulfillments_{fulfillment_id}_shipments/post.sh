curl -X POST '{backend_url}/admin/orders/{id}/fulfillments/{fulfillment_id}/shipments' \
-H 'x-medusa-access-token: {api_token}' \
-H 'Content-Type: application/json' \
--data-raw '{
  "items": [
    {
      "id": "id_tGVDZ7WPbYuzIObt9",
      "quantity": 2724425082339328
    }
  ],
  "metadata": {}
}'