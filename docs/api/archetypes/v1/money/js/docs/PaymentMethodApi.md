# Money.PaymentMethodApi

All URIs are relative to *http://api.swindle.net/archetypes/v1/money*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getPaymentMethods**](PaymentMethodApi.md#getPaymentMethods) | **GET** /payment-methods | Retrieve all payment method types.


<a name="getPaymentMethods"></a>
# **getPaymentMethods**
> [Object] getPaymentMethods()

Retrieve all payment method types.

Retrieve all payment method types.

### Example
```js
const Money = require('money')

const moneyApi = new Money.PaymentMethodApi()

const callback = function(error, data, response) {
  if (error) {
    console.error(error)
  } else {
    console.log('API called successfully. Returned data: ' + data)
  }
  console.log(response)
}
moneyApi.getPaymentMethods(callback)
```

### Parameters
This endpoint does not need any parameter.

### Return type

**[Object]**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml
