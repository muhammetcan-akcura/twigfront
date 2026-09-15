#### drip\_feed.twig

List of variables `drip_feed.twig`

| Name | type | default | description |
| --- | --- | --- | --- |
| `status` | string | `all` | Drip-feed status (Active, Finished, Stopped) |
| `search` | string | `null` | Search value |

Array `dripFeedList`
| Name | type | default | description |
| --- | --- | --- | --- |
| `['id']` | integer | `1` | Drip-feed ID |
| `['link']` | string | `null` | Order link |
| `['date']` | string | date | Order creation date |
| `['total_charges']` | integer | `0` | Drip-feed total charges |
| `['quantity']` | integer | `0` | Order quantity |
| `['service']` | string | `null` | Name of service |
| `['service_id']` | integer | `1` | Service ID |
| `['runs_all']` | integer | `0` | Drip-feed all runs amount |
| `['runs_current']` | string | `null` | Drip-feed current runs amount |
| `['interval']` | string | `No active` | Drip-feed interval |
| `['total_quantity']` | integer | `0` | Drip-feed total quantity |
| `['status_name']` | string | `active` | Drip-feed status name |

  

```twig
{% for dripFeed in dripFeedList %}
   <tr>
     <td>{{ dripFeed\['id'\] }}</td>
     <td>{{ dripFeed\['date'\] }}</td>
     <td class="link">{{ dripFeed\['link'\] }}</td>
     <td nowrap="">{{ dripFeed\['total\_charges'\] }}</td>
     <td>{{ dripFeed\['quantity'\] }}</td>
     <td>{{ dripFeed\['service'\] }}</td>
     <td class="nowrap">
       {% if dripFeed\['runs\_current' %}
         <a href="/orders?drip-feed={{ dripFeed\['id'\] }}">
           {{ dripFeed\['runs\_current'\] }}
         </a>
       {% else %}
          {{ dripFeed\['runs\_current'\] }}
       {% endif %} / {{ dripFeed\['runs\_all'\] }}
     </td>
     <td>{{ dripFeed\['interval'\] }}</td>
     <td>{{ dripFeed\['total\_quantity'\] }}</td>
     <td>{{ dripFeed\['status\_name'\] }}</td>
   </tr>
{% endfor %}
```

  
  
  
