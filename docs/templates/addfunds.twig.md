#### addfunds.twig

**Alerts** variables

| Name | type | default | description |
| --- | --- | --- | --- |
| `success` | boolean | `false` | If order success |
| `error` | boolean | `false` | If order error |
| `successText` | string | `null` | Return success message |
| `errorText` | string | `null` | Return error message |

  

List of variables `addfunds.twig`

| Name | type | default | description |
| --- | --- | --- | --- |
| `addfunds` | string | `null` | Page content. Specified in Admin panel: **Appearance** -> **Pages** |
| `currentPayment` | string | `null` | Current payment system |

  

Array `paymentsList`
| Name | type | default | description |
| --- | --- | --- | --- |
| `['id']` | integer | `1` | ID payment system |
| `['name']` | string | `null` | Name of payment system |

  

```twig
<select class="form-control" id="method">
    {% for payment in paymentsList %}
        <option value="{{ payment\['id'\] }}"{% if currentPayment == payment\['id'\] %} selected{% endif %}>{{ payment\['name'\] }}</option>
    {% endfor %}
</select>
```
