# Party.OrganizationsApi

All URIs are relative to *http://api.swindle.net/archetypes/v1/parties*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getOrganizationByPartyIdentifier**](OrganizationsApi.md#getOrganizationByPartyIdentifier) | **GET** /organizations/{party-identifier} | Retrieve a specific Organization.
[**getOrganizations**](OrganizationsApi.md#getOrganizations) | **GET** /organizations/ | Retrieve all Organizations.


<a name="getOrganizationByPartyIdentifier"></a>
# **getOrganizationByPartyIdentifier**
> Organization1 getOrganizationByPartyIdentifier(partyIdentifier)

Retrieve a specific Organization.

Retrieve a Organization by its unique identifier.

### Example
```javascript
var Party = require('party');

var apiInstance = new Party.OrganizationsApi();

var partyIdentifier = "partyIdentifier_example"; // String | The unique identifier associated with an Organization.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getOrganizationByPartyIdentifier(partyIdentifier, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **partyIdentifier** | **String**| The unique identifier associated with an Organization. | 

### Return type

[**Organization1**](Organization1.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml

<a name="getOrganizations"></a>
# **getOrganizations**
> [Organization1] getOrganizations()

Retrieve all Organizations.

Retrieve all Organizations.

### Example
```javascript
var Party = require('party');

var apiInstance = new Party.OrganizationsApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getOrganizations(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[Organization1]**](Organization1.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml

