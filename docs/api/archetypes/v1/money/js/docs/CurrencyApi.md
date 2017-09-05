# Money.CurrencyApi

All URIs are relative to *http://api.swindle.net/archetypes/v1/money*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getCurrencies**](CurrencyApi.md#getCurrencies) | **GET** /currencies | Retrieve all currencies.
[**getCurrencyByAlphabeticCode**](CurrencyApi.md#getCurrencyByAlphabeticCode) | **GET** /currencies/{alphabetic-code} | Retrieve a Currency by alphabetic code.


<a name="getCurrencies"></a>
# **getCurrencies**
> [Currency] getCurrencies()

Retrieve all currencies.

Retrieve all currencies.

### Example
```js
const Money = require('money')

const moneyApi = new Money.CurrencyApi()

const callback = function(error, data, response) {
  if (error) {
    console.error(error)
  } else {
    console.log('API called successfully. Returned data: ' + data)
  }
  console.log(response)
}
moneyApi.getCurrencies(callback)
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[Currency]**](Currency.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml

<a name="getCurrencyByAlphabeticCode"></a>
# **getCurrencyByAlphabeticCode**
> Currency getCurrencyByAlphabeticCode(alphabeticCode)

Retrieve a Currency by alphabetic code.

Retrieve a specific Currency by its alphabetic code.

### Example
```js
const Money = require('money')

const moneyApi = new Money.CurrencyApi()

// String | An alphabetic code that represents the currency.
const alphabeticCode = 'USD'

const callback = function(error, data, response) {
  if (error) {
    console.error(error)
  } else {
    console.log('API called successfully. Returned data: ' + data)
  }
  console.log(response)
}
moneyApi.getCurrencyByAlphabeticCode(alphabeticCode, callback)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **alphabeticCode** | **String**| An alphabetic code that represents the currency. |

### Return type

[**Currency**](Currency.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml
