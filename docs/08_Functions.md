### Functions

#### sha256

Computes the Secure Hashing Algorithm 2 (SHA-2) hash of a given string and encodes it with a 256-bit digest.

**Params**

| Parameter | Type | Description |
| --- | --- | --- |
| `text` | string | Required. The string that needs to be encoded. |
| `key` | string | Required. Secret key that is used for hash generation. |

  

Returns a string value. Example: `6afa9046a9579cad143a384c1b564b9a250d27d6f6a63f9f20bf3a7594c9e2c6`

  

```twig
<div>{{sha256('text', 'key')}}</div>
```
