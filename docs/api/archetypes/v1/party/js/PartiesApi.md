# Party.PartiesApi

All URIs are relative to *http://api.swindle.net/archetypes/v1/parties*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getParties**](PartiesApi.md#getParties) | **GET** / | Retrieve all Parties.
[**getPartyByPartyIdentifier**](PartiesApi.md#getPartyByPartyIdentifier) | **GET** /{party-identifier} | Retrieve a specific Party entity.


<a name="getParties"></a>
# **getParties**
> [InlineResponse200] getParties()

Retrieve all Parties.

Retrieve all Parties.

### Example
```javascript
var Party = require('party');

var apiInstance = new Party.PartiesApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getParties(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[InlineResponse200]**](InlineResponse200.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml

<a name="getPartyByPartyIdentifier"></a>
# **getPartyByPartyIdentifier**
> InlineResponse200 getPartyByPartyIdentifier(partyIdentifier)

Retrieve a specific Party entity.

Retrieve a Party by its unique identifier.

### Example
```javascript
var Party = require('party');

var apiInstance = new Party.PartiesApi();

var partyIdentifier = "partyIdentifier_example"; // String | The unique identifier of the Party.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getPartyByPartyIdentifier(partyIdentifier, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **partyIdentifier** | **String**| The unique identifier of the Party. | 

### Return type

[**InlineResponse200**](InlineResponse200.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml

