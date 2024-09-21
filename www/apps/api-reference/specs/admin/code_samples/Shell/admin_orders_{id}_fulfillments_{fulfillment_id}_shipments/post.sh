curl -X POST '{backend_url}/admin/orders/{id}/fulfillments/{fulfillment_id}/shipments' \
-H 'x-medusa-access-token: {api_token}' \
-H 'Content-Type: application/json' \
--data-raw '{
  "items": [
    {
      "id": "id_VcU7kGm48ij3ZJvvS",
      "quantity": 3029164198199296
    }
  ],
  "metadata": {}
}'