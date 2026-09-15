### Totals variables

Variable `totals` available in any twig file

| Name | type | default | description |
| --- | --- | --- | --- |
| `totals['ordersAll']` | integer | `0` | Returns the number of all orders |
| `totals['ordersCompleted']` | integer | `0` | Returns the number of all orders with status "Completed" |
| `totals['servicesAll']` | integer | `0` | Returns the number of all services |
| `totals['ticketsAll']` | integer | `0` | Returns the number of all tickets |
| `totals['usersAll']` | integer | `0` | Returns the number of all users |
| `totals['usersActive']` | integer | `0` | Returns the number of all users with status "Active" |

  

To output variables, use `{{` **VARIABLE** `}}`

```twig
<div>{{ totals\['ticketsAll'\] }}</div>
```
