curl -X POST '{backend_url}/admin/orders/{id}/fulfillments/{fulfillment_id}/shipments' \
-H 'x-medusa-access-token: {api_token}' \
-H 'Content-Type: application/json' \
--data-raw '{
  "items": [
    {
      "id": "id_WkhbUVmwYEGhvT2wGtfe",
      "quantity": 490652726984704
    }
  ],
  "metadata": {}
}'