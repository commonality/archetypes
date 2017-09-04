# Locale.LocalesApi

All URIs are relative to *http://api.swindle.net/archetypes/v1/locales*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getLocaleById**](LocalesApi.md#getLocaleById) | **GET** /{identifier} | Retrieve a specific Locale entity.
[**getLocales**](LocalesApi.md#getLocales) | **GET** / | Retrieve all Locales.


<a name="getLocaleById"></a>
# **getLocaleById**
> Locale getLocaleById(identifier)

Retrieve a specific Locale entity.

Retrieve a Locale by its identifier.

### Example
```javascript
var Locale = require('locale');

var apiInstance = new Locale.LocalesApi();

var identifier = "identifier_example"; // String | The lower case ISO 3166 alphabetic two-character of the Locale.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getLocaleById(identifier, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **identifier** | **String**| The lower case ISO 3166 alphabetic two-character of the Locale. | 

### Return type

[**Locale**](Locale.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml

<a name="getLocales"></a>
# **getLocales**
> [Locale] getLocales()

Retrieve all Locales.

The Locale archetype represents a general notion of place, location, or context.

### Example
```javascript
var Locale = require('locale');

var apiInstance = new Locale.LocalesApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getLocales(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[Locale]**](Locale.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml

