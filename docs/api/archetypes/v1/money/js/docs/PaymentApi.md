# Money.PaymentApi

All URIs are relative to *http://api.swindle.net/archetypes/v1/money*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getPayments**](PaymentApi.md#getPayments) | **GET** /payments | Retrieve all payments.


<a name="getPayments"></a>
# **getPayments**
> [Payment] getPayments()

Retrieve all payments.

Retrieve all payments.

### Example
```js
const Money = require('money')

const moneyApi = new Money.PaymentApi()

const callback = function(error, data, response) {
  if (error) {
    console.error(error)
  } else {
    console.log('API called successfully. Returned data: ' + data)
  }
  console.log(response)
}
moneyApi.getPayments(callback)
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[Payment]**](Payment.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml
