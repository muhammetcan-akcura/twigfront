#### massorder.twig

**Alerts** variables

| Name | type | default | description |
| --- | --- | --- | --- |
| `success` | boolean | `false` | If order success |
| `error` | boolean | `false` | If order error |
| `errorMessage` | string | `null` | Return error message |

  

List of variables `massorder.twig`

| Name | type | default | description |
| --- | --- | --- | --- |
| `order['link']` | string | `null` | Link order |
| `order['success']` | integer | `0` | Number of successful orders |
| `order['error']` | integer | `0` | Number of errors orders |
| `success` | boolean | `false` | Success order |
| `error` | boolean | `false` | Error order |

  

```twig
{% if error %}
   <div class="alert alert-dismissible alert-danger {% if site\['rtl'\] %} rtl-alert {% endif %}">
       <button type="button" class="close" data-dismiss="alert">×</button>
			{% if order\['link'\] %}
               <h4>{{ errorMessage }}</h4>
				{{lang('massorder.orders')}}: {{order\['success'\]}}<br>
				{{lang('massorder.errors')}}: {{order\['error'\]}}<br>
            <a href="{{ order\['link'\] }}" target="\_blank">{{ lang('massorder.button.details') }}</a>
				{% else %}
					{{ errorMessage }}
				{% endif %}
    </div>
{% endif %}
```

  
  
  
