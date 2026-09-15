### Page variables

Variable `page` available in any twig file

| Name | type | default | description |
| --- | --- | --- | --- |
| `page['title']` | string | `null` | Return Page title |
| `page['url']` | string | `null` | Return url current page. For example `/terms` |

  

For example, display page title:

```twig
<title>{{ site\['name'\] }}</title>
```
