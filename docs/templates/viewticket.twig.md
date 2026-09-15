#### viewticket.twig

**Alerts** variables

| Name | type | default | description |
| --- | --- | --- | --- |
| `errorMessage` | string | `null` | Error message |

  

List of variables `viewticket.twig`

| Name | type | default | description |
| --- | --- | --- | --- |
| `ticket['thema']` | string | `null` | Ticket Title |
| `ticket['id']` | string | `null` | Ticket ID |
| `canAddMessage` | boolean | `false` | If administrator chooses **Close and lock** ticket |

Array `messageList`
| Name | type | default | description |
| --- | --- | --- | --- |
| `['id']` | string | `null` | ID message |
| `['message']` | string | `null` | Output message |
| `['time']` | string | `null` | Date of message |
| `['author']` | string | `null` | Author of message |
| `['support']` | boolean | `null` | Message left by support |
| `['files']` | array | `[]` | Attached files |

  
  
  
