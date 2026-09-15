#### orders.twig

List of variables `orders.twig`

| Name | type | default | description |
| --- | --- | --- | --- |
| `status` | string | `all` | Current status |
| `search` | string | `null` | Search value |
| `task` | integer | `0` | Type task (refill or cancel) |

Array `orderList`
| Name | type | default | description |
| --- | --- | --- | --- |
| `['id']` | integer | `1` | Order ID |
| `['date']` | string | date order | Order date |
| `['link']` | string | `null` | Order link |
| `['charge']` | string | `null` | Order charge |
| `['start_count']` | integer | `0` | Order start count |
| `['quantity']` | string | `null` | Order quantity |
| `['service_id']` | integer | `null` | Service ID |
| `['service']` | string | `null` | Service name |
| `['category']` | string | `null` | Service category name |
| `['status']` | string | `Pending` | Current order status |
| `['remains']` | boolean | `false` | Is there result or not |
| `['refill']` | string | `null` | Refill link |
| `['refilling']` | boolean | `false` | If order is Refilling |
| `['cancel']` | string | `null` | Cancel link |
| `['refillAvailableTime']` | string | `null` | Refill available time |

  

```twig
{% for order in orderList %}
<tr>
  <td>{{ order\['id'\] }}</td>
  <td>{{ order\['date'\] }}</td>
  <td class="width-40">{{ order\['link'\] }}</td>
  <td>{{ order\['charge'\] }}</td>
  <td class="nowrap">{{ order\['start\_count'\] }}</td>
  <td>{{ order\['quantity'\] }}</td>
  <td><a href="/orders?service={{ order\['service'\] }}">{{ order\['service'\] }}</a></td>
  <td>{{ order\['category'\] }}</td>
  <td>{{ order\['status'\] }}</td>
  <td>{{ order\['remains'\] }}</td>
  {% if task == 1 %}
      <td>
        <div class="order-actions">
          {% if order\['refill'\] == 1 %}<a href="/order/{{order\['id'\]}}/refill" class="btn btn-xs btn-primary">{{lang('orders.button.refill')}}</a>{%endif%}
          {% if order\['cancel'\] == 1 %}<a href="/order/{{order\['id'\]}}/cancel" class="btn btn-xs btn-default">{{lang('orders.button.cancel')}}</a>{%endif%}
          {% if order\['refillAvailableTime'\] %}
            <button class="btn btn-xs btn-primary disabled" data-toggle="tooltip" data-placement="top" title="{{ order\['refillAvailableTime'\] }}">{{ lang('orders.button.refill') }}</button>
          {% endif %}
          </div>
      </td>
  {% endif %}
</tr>
{% endfor %}
```

  

Array `searchList`
| Name | type | default | description |
| --- | --- | --- | --- |
| `['name']` | string | `null` | Search params |
| `['value']` | string | `null` | Search value |

  
  
  
  
