#### neworder.twig

**Alerts** variables

| Name | type | default | description |
| --- | --- | --- | --- |
| `success` | boolean | `false` | If order success |
| `error` | boolean | `false` | If order error |
| `errorMessage` | string | `null` | Return error message |

  

List of variables `neworder.twig`

| Name | type | default | description |
| --- | --- | --- | --- |
| `order['id']` | integer | `0` | Order ID |
| `order['service']` | string | `null` | Order service |
| `order['link']` | string | `null` | Order link |
| `order['delay']` | string | `null` | Delay for Auto-order |
| `order['expiry']` | string | `null` | Expiry for Auto-order |
| `order['quantity']` | string | `null` | Order quantity |
| `order['charge']` | string | `null` | Order charge |
| `order['original_charge']` | string | `null` | Order charge shown in the tooltip |
| `order['balance']` | string | `null` | Order balance |
| `order['original_balance']` | string | `null` | Order balance shown in the tooltip |
| `order['quantity_max']` | integer | `0` | Order quantity max |
| `order['quantity_max']` | integer | `0` | Order quantity min |
| `order['posts']` | integer | `0` | Orders posts |
| `data['posts']` | string | `null` | Number of posts |
| `data['min']` | string | `null` | Minimum value |
| `data['max']` | string | `null` | Maximum value |
| `data['termsofservice']` | string | `null` | Chosen value of consent |
| `data['runs']` | string | `null` | Number of runs |
| `data['category']` | string | `null` | Category value |
| `data['service']` | string | `null` | Serice value |
| `data['user_name']` | string | `null` | Username |
| `data['link']` | string | `null` | Link value |
| `data['quantity']` | string | `null` | Quantity value |
| `data['keywords']` | string | `null` | Keywords value |
| `data['comment']` | string | `null` | Comment value |
| `data['mentionUsernames']` | string | `null` | Mention usernames value |
| `data['usernames']` | string | `null` | Usernames value |
| `data['username_custom']` | string | `null` | Custom username value |
| `data['username']` | string | `null` | Username value |
| `data['check']` | boolean | `false` | Drip-feed check |
| `data['description']` | string | `null` | Description service |
| `data['mediaUrl']` | string | `null` | Media URL value |
| `data['topic']` | string | `null` | Topic service |
| `data['password']` | string | `null` | Password |
| `data['expiry']` | string | `null` | Expiry |
| `data['total_quantity']` | string | `null` | Total quantity |
| `data['comment_username']` | string | `null` | Username comment |
| `data['answer_number']` | string | `null` | Answer number |
| `data['hashtag']` | string | `null` | Hashtag value |
| `data['hashtags']` | string | `null` | Hashtags value |
| `data['interval']` | string | `null` | Interval value |
| `data['delay']` | string | `null` | Delay value |
| `data['fields']` | string | `null` | Array save form data |
| `order['converted']` | boolean | `false` | Check if the panel currency is different from the currency selected by the user and whether or not to show the tooltip |
| `check_agreement` | boolean | `false` | Check agreement before submit form |
| `termsofservice` | string | `''` | Content page Terms of Service. Specified in Admin panel: **Appearance** -> **Pages** |
| `newOrderText` | string | `''` | Page content. Specified in Admin panel: **Appearance** -> **Pages** |
| `services_search` | boolean | `true` | Displays the new order search field |

Array `categories`
| Name | type | default | description |
| --- | --- | --- | --- |
| `categoryId` | integer | `1` | Category ID |
| `categoryName` | string | `null` | Category name |

Array `extended_categories`
| Name | type | default | description |
| --- | --- | --- | --- |
| `id` | integer | `1` | Category ID |
| `name` | string | `null` | Category name |
| `icon` | object | `null` | Icon object {"icon": null, "url": "/img/icon.jpeg": "icon\_type": "image", "id": 1 } |

Array `delays`
| Name | type | default | description |
| --- | --- | --- | --- |
| `value` | integer | `0` | Delay value |
| `label` | string | `null` | Name of delay |

  

```twig
{% if categories %}
  <div class="form-group">
     <label for="orderform-category" class="control-label">{{ lang('neworder.category') }}</label>
        <select class="form-control" id="orderform-category" name="OrderForm\[category\]">
          {% for categoryId,categoryName in categories %}
              <option value="{{ categoryId }}" {% if categoryId == data\['category'\] %} selected {%endif%}>{{ categoryName }}</option>
          {%endfor%}
        </select>
  </div>
{% endif %}
```

  
  
  
