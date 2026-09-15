#### api.twig

List of variables `api.twig`

Array `methods`
| Name | type | default | type order |
| --- | --- | --- | --- |
| `method` | string | `null` | Key API method |
| `methodDetails` | array | `null` | Description API method |

Array `methodDetails`
| Name | type | default | type order |
| --- | --- | --- | --- |
| `['title']` | string | `null` | Method name |
| `['types']` | array | `array` | Method types |
| `['parameters']` | array | `null` | Possible types of order creation with parameters |
| `['examples']` | string | `null` | Example of JSON response from the server |

Array `methodDetails['parameters']`
| Name | type | default | type order |
| --- | --- | --- | --- |
| `['parameter']` | string | `null` | Method key |
| `['label']` | string | `null` | Method label |

  
  
  
