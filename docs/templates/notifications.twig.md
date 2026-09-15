#### notifications.twig

List of variables `notifications.twig`

| Name | Type | Default | description |
| --- | --- | --- | --- |
| `success` | boolean | false | Output true on success |
| `successText` | string | `null` | Notifications success text |
| `confirmEmail.available` | boolean | boolean | Output is available email confirmation |
| `connectTelegram.available` | boolean | boolean | Output is available connecting Telegram |
| `connectTelegram.url` | string | `''` | Returns Telegram connection link to ajax |
| `confirmEmail.url` | string | `''` | Returns Email confirmation link to ajax |
| `saveButtonAvailable` | boolean | boolean | Output is available to save notifications settings |

  

Array `userNotifications`
| Name | type | default | description |
| --- | --- | --- | --- |
| `['notifications']` | array | array | List of notifications settings |
| `['senders']` | array | array | List of notifications senders |

  

Array `userNotifications['notifications']`
| Name | type | default | description |
| --- | --- | --- | --- |
| `['id']` | integer | integer | Notification ID |
| `['name']` | string | `''` | Notification name |
| `['statuses']` | array | array | Notification senders statuses (available or not) |

  

Array `userNotifications['senders']`
| Name | type | default | description |
| --- | --- | --- | --- |
| `['id']` | integer | integer | Sender ID |
| `['code']` | string | string | Sender code (literal ID) |
| `['name']` | string | `''` | Sender name |
| `['disabled']` | boolean | boolean | Is sender disabled |
| `['tooltip']` | string | string | tooltip, which is applied if the sender is disabled |

  

```twig
{% for notification in userNotifications\['notifications'\] %}
<tr>
  <td>{{ notification\['name'\] }}</td>
  {% for sender in userNotifications\['senders'\] %}
    <td>
      <span {% if sender\['disabled'\] %}data-toggle="tooltip" data-placement="top" title="{{ sender\['tooltip'\] }}"{% endif %}>
        <input type="hidden" name="NotificationsForm\[notifications\]\[{{ sender\['code'\] }}\]\[{{ notification\['id'\] }}\]" value="0"/>
        <input type="checkbox" name="NotificationsForm\[notifications\]\[{{ sender\['code'\] }}\]\[{{ notification\['id'\] }}\]" {% if notification\['statuses'\]\[sender\['code'\]\] %}checked="checked"{% endif %} {% if sender\['disabled'\] %}disabled{% endif %} value="1"/>
      </span>
    </td>
  {% endfor %}
</tr>
{% endfor %}
```

  
  
  
