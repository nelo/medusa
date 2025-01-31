curl -X POST '{backend_url}/admin/orders/{id}/fulfillments/{fulfillment_id}/shipments' \
-H 'x-medusa-access-token: {api_token}' \
-H 'Content-Type: application/json' \
--data-raw '{
  "items": [
    {
      "id": "id_a1p9prObwpmBRMCUPXG",
      "quantity": 1632985818333184
    }
  ],
  "metadata": {}
}'