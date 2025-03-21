curl -X POST '{backend_url}/admin/orders/{id}/fulfillments/{fulfillment_id}/shipments' \
-H 'x-medusa-access-token: {api_token}' \
-H 'Content-Type: application/json' \
--data-raw '{
  "items": [
    {
      "id": "id_nN73ssTkvTfyBA9Q5",
      "quantity": 8369380727455744
    }
  ],
  "metadata": {}
}'