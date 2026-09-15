#### account.twig

**Alerts** variables

| Name | type | default | description |
| --- | --- | --- | --- |
| `success` | boolean | `false` | If order success |
| `error` | boolean | `false` | If order error |
| `successText` | string | `null` | Return success message |
| `errorText` | string | `null` | Return error message |

  

Array `timezones`
| Name | type | default | description |
| --- | --- | --- | --- |
| `['timezone']` | integer | timezone | Timezone |
| `['label']` | string | label | Label timezone |

  

**Second Factor** variables

| Name | type | default | description |
| --- | --- | --- | --- |
| `['twofactorauth.success']` | string | `''` | Checking and displaying the 2FA success notification. The text is taken from account.2fa.success\_enabled and account.2fa.success\_disabled language variables. |
| `['twofactorauth.url.generate']` | string | `''` | The link that is required for generating and sending a letter with 2fa code when the user activates 2FA. |
| `['twofactorauth.url.approve']` | string | `''` | The link that is required for confirming the activation of 2FA. |
| `['twofactorauth.active_code']` | boolean | `false` | Returns true if a 2fa code has already been generated and is working. |
| `['twofactorauth.error']` | string | `''` | Checking and displaying the 2FA error notification. The notification text is taken from 2fa.error language variables. |
| `['twofactorauth.activated']` | integer | `1` | Returns '1' if a 2FA is not activated for user. |

  

Template `account.twig` without unique variables. You can use variables `[site['variable']](#block-variables)`,`[user['variable']](#block-variables-user)` and `[alerts](#block-variables-alers)`

  
  
  
