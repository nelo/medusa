curl -X POST '{backend_url}/admin/orders/{id}/fulfillments/{fulfillment_id}/shipments' \
-H 'x-medusa-access-token: {api_token}' \
-H 'Content-Type: application/json' \
--data-raw '{
  "items": [
    {
      "id": "id_HUbweK32H2XkrH6IaK",
      "quantity": 8752056324063232
    }
  ],
  "metadata": {}
}'