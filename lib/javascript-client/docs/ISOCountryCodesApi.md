# Locale.ISOCountryCodesApi

All URIs are relative to *http://api.swindle.net/archetypes/v1/locales*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getIsoCountryCodeById**](ISOCountryCodesApi.md#getIsoCountryCodeById) | **GET** /iso-country-codes/{identifier} | Retrieve a specific IsoCountryCode entity.
[**getIsoCountryCodes**](ISOCountryCodesApi.md#getIsoCountryCodes) | **GET** /iso-country-codes/ | Retrieve all countries defined in ISO 3166.


<a name="getIsoCountryCodeById"></a>
# **getIsoCountryCodeById**
> IsoCountryCode getIsoCountryCodeById(identifier)

Retrieve a specific IsoCountryCode entity.

Retrieve a IsoCountryCode by its (upper case) ISO 3166 alphabetic two-character value.

### Example
```javascript
var Locale = require('locale');

var apiInstance = new Locale.ISOCountryCodesApi();

var identifier = "identifier_example"; // String | The (upper case) ISO 3166 alphabetic two-character value, e.g., \"US\" for the Unitied States of America, or \"IN\" for India.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getIsoCountryCodeById(identifier, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **identifier** | **String**| The (upper case) ISO 3166 alphabetic two-character value, e.g., \&quot;US\&quot; for the Unitied States of America, or \&quot;IN\&quot; for India. | 

### Return type

[**IsoCountryCode**](IsoCountryCode.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml

<a name="getIsoCountryCodes"></a>
# **getIsoCountryCodes**
> [IsoCountryCode] getIsoCountryCodes()

Retrieve all countries defined in ISO 3166.

Retrieve all countries defined in ISO 3166.

### Example
```javascript
var Locale = require('locale');

var apiInstance = new Locale.ISOCountryCodesApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getIsoCountryCodes(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[IsoCountryCode]**](IsoCountryCode.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml

