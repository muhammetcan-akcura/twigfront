#### resetpassword.twig

**Alerts** variables

| Name | type | default | description |
| --- | --- | --- | --- |
| `success` | boolean | `false` | If order success |
| `error` | boolean | `false` | If order error |
| `successText` | string | `null` | Return success message |
| `errorMessage` | string | `null` | Return error message |

  

Alerts variables
| Name | type | default | description |
| --- | --- | --- | --- |
| success | boolean | `false` | Return `true` if form success |
| error | boolean | `false` | Return `true` if form error |
| errorMessage | string | `null` | Return error message |

  

List of variables `resetpassword.twig`
| Name | type | default | description |
| --- | --- | --- | --- |
| `resetPasswordStep` | integer | `1` | 
Value `1` - enter the email

Value `2` - enter a new password

 |
| `user['username']` | string | `null` | Return username if active step `2` |

  

You can use variables `site['variable']`, `user['variable']` and `alerts`

  
  
  
