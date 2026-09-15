### Pagination

*   [«](#)
*   [1](#)
*   [2](#)
*   [3](#)
*   [4](#)
*   [5](#)
*   [»](#)

#### Pagination variables

| Name | type | default | description |
| --- | --- | --- | --- |
| `pagination['count']` | integer | `0` | Count pages |
| `pagination['current']` | integer | `0` | Active page item |
| `pagination['pages']` | integer | `0` | Number all pages |
| `pagination['next']` | integer | `0` | Count next page |
| `pagination['prev']` | integer | `0` | Count preview page |
| `pagination['last']` | integer | `0` | Count last page |

```twig
{% if pagination\['count'\] > 100 %}
  <ul class="pagination {% if site\['rtl'\] %} rtl-pagination {% endif %}">
      {% if pagination\['current'\] != 1 %}
          <li>
              <a href="{{ page\['url'\] }}/{{ status }}/{{ pagination\['last'\] }}" aria-label="Previous">
                  <span aria-hidden="true">«</span>
                  </a>
          </li>
      {% endif %}

      {% set r, l = 3, 3 %}

      {% if pagination\['current'\] == 1 %}
          {% set r = 6 %}
      {% endif %}

      {% if pagination\['current'\] == 2 %}
          {% set r = 5 %}
      {% endif %}

      {% if pagination\['current'\] >= pagination\['pages'\] %}
          {% set l = 5 %}
      {% endif %}

      {% for i in 1..ceil(pagination\['pages'\]) %}
          {% if i >= (pagination\['current'\]-l) and i <= (pagination\['current'\]+r) %}
              <li{% if i == pagination\['current'\] %} class="active"{% endif %}><a href="{{ page\['url'\] }}/{{i}}">{{i}}</a></li>
    {% endif %}
      {% endfor %}

      {% if pagination\['current'\] < pagination\['pages'\] %}
          <li>
              <a href="{{ page\['url'\] }}/{{ status }}/{{ pagination\['next'\] }}" aria-label="Next">
                  <span aria-hidden="true">»</span>
              </a>
          </li>
      {% endif %}
  </ul>
{% endif %}
```
