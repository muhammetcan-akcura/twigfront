#### child\_panel.twig

List of variables `child_panel.twig`
| Name | type | default | description |
| --- | --- | --- | --- |
| `childpanel` | string | `null` | Page content. Specified in Admin panel: **Appearance** -> **Pages** |
| `error` | boolean | `false` | If an error occurs `renew` |
| `errorMessage` | string | `Error text` | Text of the error. |
| `successMessage` | string | `Success text` | Child panel success Message |
| `errorForm` | boolean | `false` | Error in the order form child panel |
| `errorFormMessage` | string | `Error text` | Order error text |
| `renew` | boolean | `false` | Is it necessary to renew child panel. Output `true` in 7 days |
| `renewUrl` | string | `link` | Link for renew |
| `renewMessage` | string | `null` | Renew message |
| `restore` | boolean | `false` | Is it necessary to restore child panel |
| `restoreUrl` | string | `link` | Link for restore |
| `showForm` | boolean | `true` | If there is no panel ordered - output `true` |
| `price` | string | admin price | Price child panel. Changes in Admin panel: **Settings** -> **General** |

  

Array `panelsList`
| Name | type | default | description |
| --- | --- | --- | --- |
| `['domain']` | string | `domain` | Domain child panel |
| `['status']` | string | `0` | Status order |
| `['created']` | string | `null` | Created date |
| `['expiry']` | string | `null` | Expiry date |
| `['admin']` | boolean | `false` | Return `true` if panel created |
| `['admin_url']` | string | `link` | Admin dashboard link |
| `['renew']` | boolean | `false` | Return `true` if panel need to renew |
| `['renew_url']` | string | `link` | Renew link |

  

```twig
{% for panel in panelsList %}
  <tr>
      <td>{{ panel\['domain'\] }}</td>
      <td>{{ panel\['status'\] }}</td>
      <td nowrap>{{ panel\['created'\] }}</td>
      <td nowrap>{{ panel\['expiry'\] }}</td>
      <td nowrap>
          {% if panel\['admin'\] %}
              <a href="{{ panel\['admin\_url'\] }}" class="btn btn-xs btn-default"
                 target="\_blank">{{ lang('child\_panel.button.admin') }}</a>
          {% endif %}
      </td>
  </tr>
{% endfor %}
```

  

Array `currenciesList`
| Name | type | default | description |
| --- | --- | --- | --- |
| `['code']` | string | code | Currency code. For example: USD |
| `['name']` | string | name | Currency name |

  

```twig
{% for currency in currenciesList %}
<option value="{{ currency\['code'\] }}" {% if form\['currency'\] == currency\['code'\] %} selected{% endif %}>
    {{ currency\['name'\] }}
</option>
{% endfor %}
```

  

Array `form`
| Name | type | default | description |
| --- | --- | --- | --- |
| `['domain']` | string |  | Saves the value entered in the field domain |
| `['currency']` | string |  | Saves the value entered in the field currency |
| `['username']` | string |  | Saves the value entered in the field username |
| `['password']` | string |  | Saves the value entered in the field password |
| `['password_confirm']` | string |  | Saves the value entered in the field password\_confirm |

  

You can use variables `site['variable']`, `user['variable']` and `alerts`

  
  
  
