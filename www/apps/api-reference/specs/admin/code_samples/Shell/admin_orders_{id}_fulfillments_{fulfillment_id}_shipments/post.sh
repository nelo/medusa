curl -X POST '{backend_url}/admin/orders/{id}/fulfillments/{fulfillment_id}/shipments' \
-H 'x-medusa-access-token: {api_token}' \
-H 'Content-Type: application/json' \
--data-raw '{
  "items": [
    {
      "id": "id_CKryNSnOrvD5dPMBJiM9",
      "quantity": 6059903097503744
    }
  ],
  "metadata": {}
}'