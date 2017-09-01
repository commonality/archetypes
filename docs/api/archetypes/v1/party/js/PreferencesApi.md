# Party.PreferencesApi

All URIs are relative to *http://api.swindle.net/archetypes/v1/parties*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getPreferenceByUniqueIdentifier**](PreferencesApi.md#getPreferenceByUniqueIdentifier) | **GET** /preferences/{unique-identifier} | Retrieve a specific Preference.
[**getPreferences**](PreferencesApi.md#getPreferences) | **GET** /preferences/ | Retrieve all Preferences.


<a name="getPreferenceByUniqueIdentifier"></a>
# **getPreferenceByUniqueIdentifier**
> Preferences getPreferenceByUniqueIdentifier(uniqueIdentifier)

Retrieve a specific Preference.

Retrieve a Preference by its unique identifier.

### Example
```javascript
var Party = require('party');

var apiInstance = new Party.PreferencesApi();

var uniqueIdentifier = "uniqueIdentifier_example"; // String | The unique identifier associated with a Preference.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getPreferenceByUniqueIdentifier(uniqueIdentifier, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uniqueIdentifier** | **String**| The unique identifier associated with a Preference. | 

### Return type

[**Preferences**](Preferences.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml

<a name="getPreferences"></a>
# **getPreferences**
> [Preferences] getPreferences()

Retrieve all Preferences.

Retrieve all Preferences.

### Example
```javascript
var Party = require('party');

var apiInstance = new Party.PreferencesApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getPreferences(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[Preferences]**](Preferences.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml

