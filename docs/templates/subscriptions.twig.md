#### subscriptions.twig

List of variables `subscriptions.twig`

| Name | type | default | description |
| --- | --- | --- | --- |
| `search` | string | `null` | Search value |
| `status` | string | `'all'` | Current status |

Array `orderList`
| Name | type | default | description |
| --- | --- | --- | --- |
| `['id']` | integer | `1` | ID Service |
| `['link']` | string | `null` | Order link |
| `['quantity_min']` | integer | `0` | Order quantity minimum |
| `['quantity_max']` | integer | `0` | Order quantity maximum |
| `['quantity']` | integer | `0` | Number of new posts for which a subscription order was created |
| `['current_count']` | integer | `0` | Number of new posts that were parsed and for which orders were automatically created on this moment |
| `['current_old_posts']` | integer | `0` | Number of old posts that were parsed and for which orders were automatically created on this moment |
| `['old_posts']` | integer | `0` | Number of old posts for which a subscription order was created |
| `['delay']` | string | `null` | Order delay |
| `['service']` | string | `null` | Service name |
| `['service_id']` | integer | `1` | Service ID |
| `['status_name']` | string | `No active` | Status subscription |
| `['date_created']` | string | date created | Order creation date |
| `['date_expiry']` | string | date expiry | Order expiry date |
| `['date_updated']` | string | date updated | Order renewal date |
| `['status']` | integer | `0` | Order status code |

  

```twig
{% for order in orderList %}
   <tr>
     <td>{{ order\['id'\] }}</td>
     <td class="link">{{ order\['link'\] }}</td>
     <td class="nowrap">{% if order\['quantity\_min'\] == order\['quantity\_max'\] %}{{ order\['quantity\_max'\]}}{% else %}{{ order\['quantity\_min'\] }}-{{ order\['quantity\_max'\] }}{% endif %}</td>
     <td class="nowrap">
       {% if order\['current\_count'\] %}
           <a href="{{ page\_url('orders') }}?subscription={{ order\['id'\] }}&likes\_spread=0">{{ order\['current\_count'\] }}</a>
       {% else %}
            {{ order\['current\_count'\] }}
       {% endif %}
            / {{ order\['quantity'\] }}</td>
     <td class="nowrap">
       {% if order\['current\_old\_posts'\] %}
           <a href="{{ page\_url('orders') }}?subscription={{ order\['id'\] }}&likes\_spread=1">{{ order\['current\_old\_posts'\] }}</a>
       {% else %}
           {{ order\['current\_old\_posts'\] }}
       {% endif %}
           / {{ order\['old\_posts'\] }}</td>
     <td>{{ order\['delay'\] }}</td>
     <td>{{ order\['service'\] }}</td>
     <td>{{ order\['status\_name'\] }}</td>
     <td><span class="nowrap">{{ order\['date\_created'\] }}</span></td>
     <td><span class="nowrap">{{ order\['date\_updated'\] }}</span></td>
     <td><span class="nowrap">{{ order\['date\_expiry'\] }}</span></td>
     <td>
        {% if order\['status'\] == 1 or order\['status'\] == 0 %}
           <a href="{{ page\['url'\] }}/stop/{{order\['id'\]}}" class="btn btn-default btn-xs">{{ lang('subscriptions.button.cancel') }}</a>
        {% endif %}
        {% if order\['status'\] == 2 %}
           <a href="{{ page\['url'\] }}/resume/{{order\['id'\]}}" class="btn btn-primary btn-xs">{{ lang('subscriptions.button.unpause') }}</a>
        {% endif %}
        {% if order\['status'\] == 3 or order\['status'\] == 4 or order\['status'\] == 5 %}
           <a href="{{ page\['url'\] }}/reorder/{{order\['id'\]}}" class="btn btn-primary btn-xs">{{ lang('subscriptions.button.reorder') }}</a>
        {% endif %}
     </td>
   </tr>
{% endfor %}
```

  
  
  
