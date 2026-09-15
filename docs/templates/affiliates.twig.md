#### affiliates.twig

List of variables `affiliates.twig`
| Name | type | default | description |
| --- | --- | --- | --- |
| `affiliates` | string | `null` | Page content. Specified in Admin panel: **Appearance** -> **Pages** |
| `referral_link` | string |  | Referral link |
| `commission_rate` | string | 1 | Percentage commission. Changes Admin panel: **Settings** -> **General** |
| `minimum_payout` | string | 10 | Minimum payout. Changes Admin panel: **Settings** -> **General** |

  

Array `statistics`
| Name | type | default | description |
| --- | --- | --- | --- |
| `['total_visits']` | string | 0 | Number of visits |
| `['referral_registrations']` | string | 0 | Registred referrals |
| `['paid_referrals']` | string | 0 | Paid referrals |
| `['conversion_rate']` | string | 0% | Conversion rate |
| `['total_earnings']` | string | 0 | Total earnings |
| `['unpaid_earnings']` | string | 0 | Unpaid earnings |
| `['request_payout']` | boolean | `false` | Return `true` if user can withdraw funds |

  

```twig
<table class="table {% if site\['rtl'\] %} rtl-table {% endif %}">
  <thead>
  <tr>
      <th>{{ lang('affiliates.visits') }}</th>
      <th>{{ lang('affiliates.registrations') }}</th>
      <th>{{ lang('affiliates.referrals') }}</th>
      <th>{{ lang('affiliates.conversion\_rate') }}</th>
      <th>{{ lang('affiliates.total\_earnings') }}</th>
      <th>{{ lang('affiliates.available\_earnings') }}</th>
      {% if statistics\['request\_payout'\] %}
          <th></th>
      {% endif %}
  </tr>
  </thead>
  <tbody>
  <tr>
      <td>{{ statistics\['total\_visits'\] }}</td>
      <td>{{ statistics\['referral\_registrations'\] }}</td>
      <td>{{ statistics\['paid\_referrals'\] }}</td>
      <td>{{ statistics\['conversion\_rate'\] }}</td>
      <td>{{ statistics\['total\_earnings'\] }}</td>
      <td>{{ statistics\['unpaid\_earnings'\] }}</td>
      {% if statistics\['request\_payout'\] %}
          <td>
              <a href="{{ page\['url'\] }}/request-payout" class="btn btn-xs btn-default">{{ lang('affiliates.request\_payout') }}</a>
          </td>
      {% endif %}
  </tr>
  </tbody>
</table>
```

  

Array `payments`
| Name | type | default | description |
| --- | --- | --- | --- |
| `['id']` | string | ID | ID payment |
| `['date']` | string | `null` | Payment date |
| `['amount']` | string | Minimum payouts | Payment amount |
| `['status']` | string | Pending | Status |

  

```twig
{%  if payments|length %}
<div class="well well-float">
    <table class="table {% if site\['rtl'\] %} rtl-table {% endif %}">
        <thead>
        <tr>
            <th>{{ lang('affiliates.payout\_date') }}</th>
            <th>{{ lang('affiliates.payout\_amount') }}</th>
            <th>{{ lang('affiliates.payout\_status') }}</th>
        </tr>
        </thead>
        <tbody>
        {% for payment in payments %}
            <tr>
                <td>{{ payment\['date'\] }}</td>
                <td>{{ payment\['amount'\] }}</td>
                <td>{{ payment\['status'\] }}</td>
            </tr>
        {% endfor %}
        </tbody>
    </table>
</div>
{% endif %}
```

You can use variables `site['variable']`, `user['variable']` and `alerts`

  
  
  
