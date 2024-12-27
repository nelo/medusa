curl -X POST '{backend_url}/admin/orders/{id}/fulfillments/{fulfillment_id}/shipments' \
-H 'x-medusa-access-token: {api_token}' \
-H 'Content-Type: application/json' \
--data-raw '{
  "items": [
    {
      "id": "id_nMHp1OdRO2GUIzjrjU2h",
      "quantity": 1689836255707136
    }
  ],
  "metadata": {}
}'