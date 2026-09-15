#### Filters and search

> [!NOTE]
> Please make sure you use all needed `data-*` attributes and table id

```twig
{% for service in category\['services'\] %}
        <a href="/?service={{service\['id'\]}}">{{ lang('services.create\_order') }}</a>
    {% endfor %}
```

```twig
{% if serviceCategoryList is empty %}
    {% else %}
        <li>
            <a class="dropdown-item" href="#" data-filter-category-id="All">All</a>
        </li>
{% endif %}
{% for category in serviceCategoryList %}
    {% if category.name %}
        <li>
            <a class="dropdown-item" href="#" data-filter-category-id="{{ category.id }}" data-filter-category-name="{{ category.name }}">{{ category.name }}</a>
        </li>
    {% endif %}
{% endfor %}
```

```twig
<ul class="dropdown-menu" id="currencies-list">
    {% for key, rate in site.currencies %}
        <li{% if rate.active %} class="active"{% endif %}>
            <a class="dropdown-item" href="#" id="currencies-item" data-rate-key="{{ key }}" data-rate-symbol="{{ rate.symbol }}">{{ key }}
                {{ rate.symbol }}</a>
        </li>
    {% endfor %}
</ul>
```

```twig
<table class="table {% if site\['rtl'\] %} rtl-table {% endif %}" id="service-table">
<thead>
<tr>
        <th>{{ lang('services.id') }}</th>
        <th class="width-service-name">{{ lang('services.name') }}</th>
        <th class="nowrap">{{ lang('services.rate') }}</th>
        <th class="nowrap">{{ lang('services.min') }}</th>
        <th class="nowrap">{{ lang('services.max') }}</th>
        {% if site\['average\_time'\] %}
            <th class="nowrap">{{ lang('services.average\_time') }}
            <span class="fa fa-exclamation-circle" data-toggle="tooltip" data-placement="top" title="{{ lang('services.average\_time.description') }}"></span>
            </th>
        {% endif %}
        {% if service\['max'\] %}
        <th class="hidden-xs hidden-sm service-description\_\_th">{{ lang('services.description') }}</th>
        {% endif %}
        </tr>
    </thead>
<tbody>
    {% for category in serviceCategoryList %}
        {% if category\['name'\] %}
        <tr data-filter-table-category-id="{{ category.id }}">
        <td colspan="6">
        <strong>{{ category\['name'\] }}</strong>
                    </td>
            </tr>
        {% endif %}
        {% for service in category\['services'\] %}
            <tr data-filter-table-category-id="{{ category.id }}">
                <td data-filter-table-service-id="{{ service.id }}">{{ service\['id'\] }}</td>
                <td class="service-name" data-filter-table-service-name="true">{{ service\['name'\] }}</td>
                <td>
                    {% if converted %}
                        <span data-toggle="tooltip" data-placement="top" title="{{ service.original\_rate }}">{{ service.rate }}</span>
                    {% else %}
                        {{ service.rate }}
                    {% endif %}
                </td>
                <td>{{ service\['min'\] }}</td>
                <td>{{ service\['max'\] }}</td>
                {% if site\['average\_time'\] %}
                    <td class="nowrap">{{ service\['average\_time'\] }}</td>
                {% endif %}
                {% if service\['has\_description'\] %}
                    <td class="hidden-xs hidden-sm service-description">{{ service\['description'\] }}</td>
                    <tr class="visible-xs visible-sm service-description">
                        <td colspan="6">{{ service\['description'\] }}</td>
                    </tr>
                {% endif %}
            </tr>
        {% endfor %}
    {% endfor %}
</tbody>
</table>
```

  
  
  
