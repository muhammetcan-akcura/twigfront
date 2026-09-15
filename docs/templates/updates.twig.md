#### updates.twig

List of variables `updates.twig`

| Name | type | default | description |
| --- | --- | --- | --- |
| `search` | string | `null` | Search value |
| `type` | string | `'all'` | Current type |
| `updates.service` | string | `'Service'` | Table "Service" column heading |
| `updates.date` | string | `'Date'` | Table "Date" column heading |
| `updates.update` | string | `'Update'` | Table "Update" column heading |
| `updates.all` | string | `'All'` | Filter type "All" |
| `updates.new_service` | string | `'New service'` | Filter type "New service" |
| `updates.rate.decreased` | string | `'Rate decreased'` | Filter type "Rate decreased" |
| `updates.rate.increased` | string | `'Rate increased'` | Filter type "Rate increased" |
| `updates.rate.changed_from` | string | `'from'` | Update rate range "from" |
| `updates.rate.changed_to` | string | `'to'` | Update rate range "to" |
| `updates.service_enabled` | string | `'Service enabled'` | Filter type "Service enabled" |
| `updates.service_disabled` | string | `'Service disabled'` | Filter type "Service disabled" |

Array `updatesList`
| Name | type | default | description |
| --- | --- | --- | --- |
| `['id']` | integer | `1` | ID update log |
| `['service_id']` | integer | `1` | Service ID |
| `['date']` | string | date created | Refill task creation date |
| `['service']` | string | `null` | Service name |
| `['type']` | string | `New service` | Update type name |

  

```twig
{% for update in updatesList %}
   <tr>
     <td>{{ update\['service\_id'\] }} {{ update\['service'\] }}</td>
     <td><span class="nowrap">{{ update\['date'\] }}</span></td>
     <td>{{ update\['update'\] }}</td>
   </tr>
{% endfor %}
```

Array `types`
| Name | type | default | description |
| --- | --- | --- | --- |
| `['key']` | integer | `new` | Filter type key |
| `['label']` | integer | `New service` | Filter type label |

  

```twig
{% if types %}
  {% for typeItem in types %}
     <li {% if typeItem.key == type %}class="active"{% endif %}> <a href="{{ page\['url'\] }}{% if typeItem.key != 'all' %}{{ '/' ~ typeItem.key }}{% endif %}">{{ typeItem.label }} </a> </li>
  {% endfor %}
{% endif %}
```

RTL Version

Panels support the RTL version of site. You can enable the RTL version in Admin panel: **Appearance** -> **Languages** -> Active language

Variable `site['rtl']` is available in each `.twig` files.

| Name | type | default | description |
| --- | --- | --- | --- |
| `site['rtl']` | boolean | `false` | Takes a value of `true` or `false`. If the RTL version of the site is enabled, the value `true`. Applicable with a combination of construction `{% if %}` |

  

With help of class `rtl-`, DOM element takes the RTL form. For example, the `rtl-form` class is used to display the `<form>`

```twig
<form class="{% if site\['rtl'\] %} rtl-form {% endif %}">
      <button type="submit" class="btn btn-primary">Submit</button>
</form>
```

List of rtl classes:

DOM elements
| Class | description |
| --- | --- |
| `.rtl-table` | <table> |
| `.rtl-navbar` | <nav> |
| `.rtl-form` | <form> |
| `.rtl-btn` | <button> |
| `.rtl-ul` | <ul> |

Custom RTL classes
| Class | description |
| --- | --- |
| `.rtl-alert` | Alerts |
| `.rtl-modal` | Modals |
| `.rtl-nav` | DOM element nav |
| `.rtl-pagination` | Pagination |
| `.rtl-content` | Content block. You can add it to any DOM elements |

  

If you do not know which class to use for a particular item (for example `<div>`), then use `.rtl-content`. Also you can create your `rtl` classes in `style.css`

Languages

Panels can be translated into any language. Default language is specified in Admin panel settings: **Appearance** -> **Languages**.

To output language variable, use construct `{{ lang('TOKEN') }}`. Language token can be inserted into any `.twig` files.

For example, output **Log in** with a token `signin.title`

```twig
<h3 class="title">{{ lang('signin.title') }}</h3>
```