#### signup.twig

**Alerts** variables

| Name | type | default | description |
| --- | --- | --- | --- |
| `success` | boolean | `false` | If order success |
| `error` | boolean | `false` | If order error |
| `successText` | string | `null` | Return success message |
| `errorMessage` | string | `null` | Return error message |

  

List of variables `signup.twig`

| Name | type | default | description |
| --- | --- | --- | --- |
| `check_agreement` | boolean | `false` | Check agreement before submit form |
| `fields` | array | `[]` | Fields array - always contains default fields |
| `field.code` | string | `null` | Field code |
| `field.label` | string | `null` | Field label |
| `field.type` | string | `text` | Field type |
| `field.value` | string | `null` | User entered field value |
| `termsofservice` | string | `''` | Terms of service checkbox. Specified in Admin panel:  
**Settings** -> **General** |

  

```twig
{% for field in fields %}
  <div class="form-group">
    <label for="{{ field.code }}" class="control-label">{{ lang(field.label) }}</label>
       <input type="{{ field.type }}" class="form-control" id="{{ field.code }}"
       value="{{ field.value }}"
       name="RegistrationForm\[{{ field.code }}\]">
  </div>
{% endfor %}
```

  
  
  
