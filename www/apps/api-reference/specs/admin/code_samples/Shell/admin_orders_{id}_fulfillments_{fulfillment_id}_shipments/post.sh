curl -X POST '{backend_url}/admin/orders/{id}/fulfillments/{fulfillment_id}/shipments' \
-H 'x-medusa-access-token: {api_token}' \
-H 'Content-Type: application/json' \
--data-raw '{
  "items": [
    {
      "id": "id_lFTakdjLXpQh4vYw2WwT",
      "quantity": 2671370089529344
    }
  ],
  "metadata": {}
}'