curl -X POST '{backend_url}/admin/orders/{id}/fulfillments/{fulfillment_id}/shipments' \
-H 'x-medusa-access-token: {api_token}' \
-H 'Content-Type: application/json' \
--data-raw '{
  "items": [
    {
      "id": "id_2RsdRzpQXzC57Fl4",
      "quantity": 8587488150945792
    }
  ],
  "metadata": {}
}'