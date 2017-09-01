# Party.PeopleApi

All URIs are relative to *http://api.swindle.net/archetypes/v1/parties*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getPeople**](PeopleApi.md#getPeople) | **GET** /people/ | Retrieve all People.
[**getPersonByPartyIdentifier**](PeopleApi.md#getPersonByPartyIdentifier) | **GET** /people/{party-identifier} | Retrieve a specific Person entity.


<a name="getPeople"></a>
# **getPeople**
> [Person1] getPeople()

Retrieve all People.

Retrieve all People.

### Example
```javascript
var Party = require('party');

var apiInstance = new Party.PeopleApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getPeople(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[Person1]**](Person1.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml

<a name="getPersonByPartyIdentifier"></a>
# **getPersonByPartyIdentifier**
> Person1 getPersonByPartyIdentifier(partyIdentifier)

Retrieve a specific Person entity.

Retrieve a Person by their unique identifier.

### Example
```javascript
var Party = require('party');

var apiInstance = new Party.PeopleApi();

var partyIdentifier = "partyIdentifier_example"; // String | The unique identifier associated with a Person.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getPersonByPartyIdentifier(partyIdentifier, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **partyIdentifier** | **String**| The unique identifier associated with a Person. | 

### Return type

[**Person1**](Person1.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml

