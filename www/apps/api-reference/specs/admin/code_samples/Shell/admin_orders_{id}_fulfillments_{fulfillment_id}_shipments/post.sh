curl -X POST '{backend_url}/admin/orders/{id}/fulfillments/{fulfillment_id}/shipments' \
-H 'x-medusa-access-token: {api_token}' \
-H 'Content-Type: application/json' \
--data-raw '{
  "items": [
    {
      "id": "id_fC1xCIvQu8FfLE3S8zyY",
      "quantity": 1614723084713984
    }
  ],
  "metadata": {}
}'