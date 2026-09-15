#### signin.twig

**Alerts** variables

| Name | type | default | description |
| --- | --- | --- | --- |
| `success` | boolean | `false` | If order success |
| `error` | boolean | `false` | If order error |
| `successMessage` | string | `null` | Return success message |
| `errorMessage` | string | `null` | Return error message |

  

List of variables `signin.twig`

| Name | type | default | description |
| --- | --- | --- | --- |
| `authText` | string | `null` | Page content. Specified in Admin panel: **Appearance** -> **Pages** |
| `registration` | boolean | `false` | If this option is enabled, we output registration link. Specified in Admin panel: **Settings** -> **General** |
| `captcha` | boolean | `false` | Display captcha |

  

```twig
{% if registration %}
    <span class="pull-right pull-right-middle">{{ lang('signin.text') }} <a href="/signup">{{ lang('signup.title') }}</a></span>
{% endif %}
```

  
  
  
