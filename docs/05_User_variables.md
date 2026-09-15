### User variables

Variable `user` available in any twig file

| Name | type | default | description |
| --- | --- | --- | --- |
| `user['id']` | integer | `null` | User ID |
| `user['auth']` | boolean | `false` | Verify user authorization. Accepting the value `true` or `false` |
| `user['username']` | string | `null` | Username |
| `user['balance']` | numeric | `0.00` | User balance amount in panel currency |
| `user['balance_formatted']` | string | `$0.00` | User balance amount with currency symbol in the selected by user currency |
| `user['spent']` | string | `null` | Spent balance |
| `user['spent_formatted']` | string | `null` | Formatted spent balance with currency |
| `user['discount']` | integer | `0` | User discount in percent |
| `user['timezone']` | integer | `0` | Timezone panel |
| `user['apikey']` | string | generated key | User API Key |
| `user['is_generated_apikey']` | boolean | `false` | Check if the user api key is generated or not |
| `user['email']` | string | `null` | Email user |
| `user['skype']` | string | `null` | Skype user |
| `user['first_name']` | string | `null` | First name user |
| `user['last_name']` | string | `null` | Last name user |
| `user[’whatsapp’]` | string | `null` | WhatsApp user |
| `user['phone']` | string | `null` | Phone user |
| `user['telegram']` | string | `null` | Telegram user |
| `user['website']` | string | `null` | Website user |
| `user['lang']` | string | `en` | Selected default language |
| `user['unread_ticket']` | integer | `0` | Number of unread tickets |
| `user['ordersActive']` | integer | `0` | Returns the number of all user orders |
| `user['referral_link']` | string | `''` | Referral link, if the option is enabled. Admin panel: **Settings** -> **General** |
| `user['favorite_services']` | boolean | `true` | Favorite Services, if the option is enabled. Admin panel: **Settings** -> **General** |
| `user['level'].id` | integer | `null` | Id of assigned level, if 'User level system' module enabled. Admin panel: **Settings** -> **Modules** |
| `user['level'].title` | string | `null` | Title of assigned level, if 'User level system' module enabled. Admin panel: **Settings** -> **Modules** |
| `user['level'].discount` | integer | `null` | Has same value as `user['discount']`. If 'User level system' module disabled, then `null` will be set. Admin panel: **Settings** -> **Modules** |

  

For example, if user is authorized, we can display his username or balance:

```twig
{% if user\['auth'\] %}
    <p>Hello, user\['username'\]</p>
{% endif %}
```

Object `user['currency']`
| Name | type | default | description |
| --- | --- | --- | --- |
| `format` | string | `null` | Format to display the currency symbol with the numeric value, for example, “$100” |
| `symbol` | string | `null` | Currency symbol, for example, “$” |
| `label` | string | `null` | Format to display the currency selection to users, for example, “USD $” |

```twig
{{ user.currency.label }}
```
