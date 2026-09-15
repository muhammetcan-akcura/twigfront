#### refill.twig

List of variables `refill.twig`

| Name | type | default | description |
| --- | --- | --- | --- |
| `search` | string | `null` | Search value |
| `status` | string | `'all'` | Current status |

Array `refillList`
| Name | type | default | description |
| --- | --- | --- | --- |
| `['id']` | integer | `1` | ID Task |
| `['order_id']` | integer | `1` | Order ID |
| `['link']` | string | `null` | Order link |
| `['date']` | string | date created | Refill task creation date |
| `['service']` | string | `null` | Service name |
| `['service_id']` | integer | `1` | Service ID |
| `['status']` | string | `Completed` | Refill status name |

  

```twig
{% for refill in refillList %}
   <tr>
     <td>{{ refill\['id'\] }}</td>
     <td><span class="nowrap">{{ refill\['date'\] }}</span></td>
     <td>{{ refill\['order\_id'\] }}</td>
     <td class="width-40">{{ refill\['link'\] }}</td>
     <td>{{ refill\['service'\] }}</td>
     <td>{{ refill\['status'\] }}</td>
   </tr>
{% endfor %}
```

  
  
  
