#### services.twig

List of variables `services.twig`

| Name | type | default | description |
| --- | --- | --- | --- |
| `servicesText` | string | `null` | Page content. Specified in Admin panel: **Appearance** -> **Pages** |
| `converted` | boolean | `false` | Converted |

Array `serviceCategoryList`
| Name | type | default | description |
| --- | --- | --- | --- |
| `['id']` | integer | `0` | Category id |
| `['name']` | string | `null` | Category name |
| `['service']` | array | `null` | Array service |

Array serviceCategoryList`['service']`
| Name | type | default | description |
| --- | --- | --- | --- |
| `['id']` | integer | `1` | Service ID |
| `['name']` | string | `null` | Service name |
| `['name']` | string | `null` | Service name |
| `['rate']` | string | `null` | Service rate |
| `['original_rate']` | string | `null` | Service rate shown in the tooltip |
| `['favorite']` | boolean | `false` | Favorite service option |
| `['min']` | integer | `0` | Service min value |
| `['max']` | integer | `0` | Service max value |
| `['average_time']` | string | `Not enough data` | Returns average lead time service |
| `['has_description']` | boolean | `true` | If service has a description |
| `['description']` | string |  | Service description |

  

```twig
{% for service in category\['services'\] %}
   <tr>
      <td>{{ service\['id'\] }}</td>
      <td>{{ service\['name'\] }}</td>
      <td>{{ service\['rate'\] }}</td>
      <td>{{ service\['min'\] }}</td>
      <td>{{ service\['max'\] }}</td>
        {% if service\['has\_description'\] %}
          <td class="hidden-xs hidden-sm service-description">{{service\['description'\]}}</td>
            <tr class="visible-xs visible-sm service-description">
              <td colspan="5">{{service\['description'\]}}</td>
            </tr>
        {% endif %}
   </tr>
{% endfor %}
```
