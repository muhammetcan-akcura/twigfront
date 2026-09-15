### Alerts (Error/Success) variables

> [!NOTE]
> **Error!** Request failed

#### Error variables

| Name | type | default | description |
| --- | --- | --- | --- |
| `error` | boolean | `false` | Output `true` on error |
| `errorMessage` | string | description error | Error message |

  
> [!NOTE]
> **Success!** Request was successful

#### Success variables

| Name | type | default | description |
| --- | --- | --- | --- |
| `success` | boolean | `false` | Output `true` on success |
| `successMessage` | string | description success | Success message |

`successMessage` and `errorMessage` does not work without a variable `error` and `success`. Alerts should be output in tag `<form>`

```twig
<form>
   {% if error %}
     <div class="alert alert-dismissible alert-danger">
      <button type="button" class="close" data-dismiss="alert">×</button>
          {{ errorMessage }}
     </div>
   {% endif %}
</form>
```
