#### refunds.twig

List of variables `refunds.twig`

| Name | type | default | description |
| --- | --- | --- | --- |
| `type` | integer | `all` | Refund type (1 - Canceled, 2 - Partial) |
| `search` | string | `null` | Search value (order id) |

Array `refundList`
| Name | order\_status | default | description |
| --- | --- | --- | --- |
| `['order_status']` | integer | `1` | refund type |
| `['date']` | string | date | Refund creation date |
| `['amount']` | string | `0.0001` | Refunded amount |
| `['order_id']` | integer | `1` | Order ID |
| `['order_status_name']` | string | `Partial` | Refund type name |

  

```twig
{% for refund in refundList %}
   <tr>
     <td>{{ refund\['order\_id'\] }}</td>
     <td nowrap="">{{ refund\['amount'\] }}</td>
     <td>{{ refund\['order\_status'\] }}</td>
     <td>{{ refund\['date'\] }}</td>
   </tr>
{% endfor %}
```

  
  
  
