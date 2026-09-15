#### blog.twig

List of variables `blog.twig`
| Name | type | default | description |
| --- | --- | --- | --- |
| `blog` | string | `null` | Page content. Specified in Admin panel: **Appearance** -> **Pages** |

  

Array `posts`
| Name | type | default | description |
| --- | --- | --- | --- |
| `['id']` | string | ID | ID post |
| `['created']` | date | null | Post creation date |
| `['title']` | string | null | Title post |
| `['content']` | string | null | Short content |
| `['url']` | string | link | Post link |
| `['image']` | string | null | Image post |

  

```twig
{% for post in posts %}
  <div class="well">
      <h4>{{ post\['title'\] }}</h4>
      <h5>{{ post\['creates\_at'\] }}</h5>
      {% if post\['image'\] %} <p><img src="{{ post\['image'\] }}" alt="{{ post\['title'\] }}" class="img-responsive"></p> {% endif %}
      <div>{{ post\['content'\] }}</div>
      <a href="{{ page\_url('blog') }}/{{ post\['url'\] }}" class="btn btn-primary">{{ lang('blog.link') }}</a>
  </div>
{% endfor %}
```

  

You can use variables `site['variable']`, `user['variable']` and `alerts`

  
  
  
