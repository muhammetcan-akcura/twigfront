### Site variables

Variable `site` available in any twig file

| Name | type | default | description |
| --- | --- | --- | --- |
| `site['language']` | string | `en` | Default language code, for example, English - output `en`. Configured in Admin panel: **Settings** -> **Languages** |
| `site['iso_lang_code']` | string | `en` | ISO HTML language code. For example, English — output `en`, Portuguese (Brazil) — output `pt-br`. |
| `site['name']` | string | `null` | Panel name. Configured in the Admin panel: **Settings** -> **General** - **Panel name** |
| `site['seo_key']` | string | `null` | Output meta-keywords |
| `site['seo_desc']` | string | `null` | Output meta-description |
| `site['favicon']` | string | `null` | Output favicon. Configured in the Admin panel: **Settings** -> **Preferences** |
| `site['logo']` | string | `null` | Output logo. Configured in the Admin panel: **Settings** -> **Preferences** |
| `site['custom_header']` | string | `null` | Custom CSS |
| `site['custom_footer']` | string | `null` | Custom JS |
| `site['protocol']` | string | `null` | Output protocol. `http` or `https` |
| `site['domain']` | string | `null` | Domain name |
| `site['captcha']` | boolean | `false` | Inclusion **Google reCaptcha 2.0**. Acceptance value `true` or `false` |
| `site['active_menu']` | boolean | `false` | Used with an array `site['menu']`. Output active menu item |
| `site['rtl']` | boolean | `false` | [Activate rtl direction](#block-rtl). Configured in the Admin panel: **Settings** -> **Preferences** |
| `site['forgotPassword']` | boolean | `false` | Allow user to reset password by email. Configured in the Admin panel: **Settings** -> **General** |
| `site['average_time']` | integer | `0` | Show average time on Services page |
| `site['cpf_field']` | integer | `0` | Enable **CPF** field |
| `site['user_agent']` | string | `''` | User agent of the site visitor |
| `site['user_ip']` | string | `''` | IP of the site visitor |

  

To output variables, use `{{` **VARIABLE** `}}`

```twig
<div>{{ site\['name'\] }}</div>
```

Array `site['menu']` Array `site['account_menu']` (allowed if user is authorized)
| Name | type | default | description |
| --- | --- | --- | --- |
| `['active']` | boolean | `false` | Displays the active menu item. Used to add `.active` class |
| `['name']` | string | `null` | Menu item title |
| `['link']` | string | `#` | Link to menu item |
| `['external']` | boolean | `false` | Marks menu item as external link |

  

To highlight active menu used `site['active_menu']`

```twig
<ul class="nav navbar-nav navbar-right">
    {% for menu in site\['menu'\] %}
       <li{% if menu\['active'\] %} class="active"{% endif %}><a href="{{ menu\['link'\] }}">{{ menu\['name'\] }}</a></li>
    {% endfor %}
</ul>
```

Array `site['languages']`
| Name | type | default | description |
| --- | --- | --- | --- |
| `['name']` | string | `English` | Output name language |
| `['code']` | string | `en` | Shortcode language |
| `['active']` | boolean | `false` | Active language |

  

```twig
<ul class="dropdown-menu dropdown-max-height">
   {% for lang in site\['languages'\] %}
       <li{% if lang\['active'\] %} class="active"{% endif %}><a href="/?lang={{ lang\['code'\] }}">{{ lang\['name'\] }}</a></li>
   {% endfor %}
</ul>
```

> [!NOTE]
> For correct operation of forms (for example neworder, massorder), output arrays `site['scripts']` and `site['styles']`

Array `site['scripts']`
| Name | type | default | description |
| --- | --- | --- | --- |
| `['code']` | string | `null` | Used for tag `<script>['code']</script>` |
| `['src']` | string | `null` | Link to script in folder |

Array `site['styles']`
| Name | type | default | description |
| --- | --- | --- | --- |
| `['href']` | string | `null` | Link to styles in folder |

```twig
{% for style in site\['styles'\] %}
  <link rel="stylesheet" type="text/css" href="{{ style\['href'\] }}">
{% endfor %}

{% for script in site\['scripts'\] %}
  <script type="text/javascript" {% if script\['src'\] %} src="{{ script\['src'\] }}" {% endif %}>
    {% if script\['code'\] %} {{ script\['code'\] }} {% endif %}
  </script>
{% endfor %}
```

Object with keys `site['currencies']` - Panel currency list
| Name | type | default | description |
| --- | --- | --- | --- |
| `key` | string | code | 3-letter currency code, for example, “USD” |
| `rate['format']` | string | format | Format to display the currency symbol with the numeric value, for example, “$100” |
| `rate['symbol']` | string | symbol | Currency symbol, for example, “$” |
| `rate['label']` | string | label | Format to display the currency selection to users, for example, “USD $” |
| `rate['active']` | boolean | `false` | Whether this currency is currently selected by the user |

> [!NOTE]
> Please make sure you use all needed `data-*` attributes

```twig
<li class="dropdown dropdown-currencies">
    <a class="dropdown-toggle" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    <span class="badge">{{ user.balance }}</span>
    <span class="caret"></span>
</a>
    <ul class="dropdown-menu" id="currencies-list">
        {% for key, rate in site.currencies %}
            <li{% if rate.active %} class="active"{% endif %}>
                <a href="#" id="currencies-item" data-rate-key="{{ key }}" data-rate-symbol="{{ rate.symbol }}">{{ key }} {{ rate.symbol }}</a>
            </li>
        {% endfor %}
    </ul>
</li>
```

Object `site['currency']`
| Name | type | default | description |
| --- | --- | --- | --- |
| `format` | string | `null` | Format to display the currency symbol with the numeric value, for example, “$100” |
| `symbol` | string | `null` | Currency symbol, for example, “$” |
| `label` | string | `null` | Format to display the currency selection to users, for example, “USD $” |

```twig
{{ site.currency.label }}
```
