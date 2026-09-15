#### tickets.twig

**Alerts** variables

| Name | type | default | description |
| --- | --- | --- | --- |
| `success` | boolean | `false` | If created ticket |

  

List of variables `tickets.twig`

| Name | type | default | description |
| --- | --- | --- | --- |
| `ticketsText` | string | `null` | Page content. Specified in Admin panel: **Appearance** -> **Pages** |
| `search` | string | `null` | Search value |
| `additionalFieldsEnabled` | boolean | `false` | Ticket categories. Specified in Admin panel: **Settings** -> **Ticket categories** |

Array `ticketList`
| Name | type | default | description |
| --- | --- | --- | --- |
| `['id']` | integer | `1` | Ticket ID |
| `['theme']` | string | `null` | Ticket Title |
| `['new']` | integer | `1` | Read message |
| `['time']` | string | `null` | Date of message |
| `['status']` | string | `open` | Status ticket |

Array `additionalFields`
| Name | type | default | description |
| --- | --- | --- | --- |
| `['id']` | number | `null` | Category name |
| `['name']` | string | `1` | Category name |

  
  
  
