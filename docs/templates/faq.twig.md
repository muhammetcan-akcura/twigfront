#### faq.twig

List of variables `faq.twig`

| Name | type | default | description |
| --- | --- | --- | --- |
| `faq` | string | `null` | Page content. Specified in Admin panel: **Appearance** -> **Pages** |

  

```twig
{% if faq %}
 <div class="well">
    {{ faq }}
 </div>
{% endif %}
```

  
  
  
