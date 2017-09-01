# Quantity.SystemsOfUnitsApi

All URIs are relative to *http://api.swindle.net/archetypes/v1/quantities*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createSystemOfUnits**](SystemsOfUnitsApi.md#createSystemOfUnits) | **POST** /systems-of-units | Create an new SystemOfUnits.
[**getSystemOfUnitsByName**](SystemsOfUnitsApi.md#getSystemOfUnitsByName) | **GET** /systems-of-units/{name-of-system} | Retrieve a specific system of units by name.
[**getSystemsOfUnits**](SystemsOfUnitsApi.md#getSystemsOfUnits) | **GET** /systems-of-units | Retrieve all systems of units.


<a name="createSystemOfUnits"></a>
# **createSystemOfUnits**
> SystemOfUnits1 createSystemOfUnits(body)

Create an new SystemOfUnits.

Create an new &#x60;SystemOfUnits&#x60;.

### Example
```javascript
var Quantity = require('quantity');

var apiInstance = new Quantity.SystemsOfUnitsApi();

var body = new Quantity.SystemOfUnits2(); // SystemOfUnits2 | The `SystemOfUnits` to be added.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createSystemOfUnits(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**SystemOfUnits2**](SystemOfUnits2.md)| The &#x60;SystemOfUnits&#x60; to be added. | 

### Return type

[**SystemOfUnits1**](SystemOfUnits1.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/xml
 - **Accept**: application/json, application/xml

<a name="getSystemOfUnitsByName"></a>
# **getSystemOfUnitsByName**
> SystemOfUnits1 getSystemOfUnitsByName(nameOfSystem)

Retrieve a specific system of units by name.

Retrieve a specific &#x60;SystemOfUnits&#x60; using its &#x60;nameOfSystem&#x60; property&#39;s _case-sensitive_ value.

### Example
```javascript
var Quantity = require('quantity');

var apiInstance = new Quantity.SystemsOfUnitsApi();

var nameOfSystem = "nameOfSystem_example"; // String | The name of the system of units, e.g., \"SI\" for the International System of Units (SI). <br><br>**Case-sensitivity**: `name-of-system's` value is **case-sensitive**. For example, \"SI\" will return data, but lower-case \"si\" will result in an HTTP status code of 404 (`NotFoundError`).


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getSystemOfUnitsByName(nameOfSystem, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **nameOfSystem** | **String**| The name of the system of units, e.g., \&quot;SI\&quot; for the International System of Units (SI). &lt;br&gt;&lt;br&gt;**Case-sensitivity**: &#x60;name-of-system&#39;s&#x60; value is **case-sensitive**. For example, \&quot;SI\&quot; will return data, but lower-case \&quot;si\&quot; will result in an HTTP status code of 404 (&#x60;NotFoundError&#x60;). | 

### Return type

[**SystemOfUnits1**](SystemOfUnits1.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml

<a name="getSystemsOfUnits"></a>
# **getSystemsOfUnits**
> SystemOfUnits1 getSystemsOfUnits()

Retrieve all systems of units.

Retrieve a list of all &#x60;SystemOfUnits&#x60;.

### Example
```javascript
var Quantity = require('quantity');

var apiInstance = new Quantity.SystemsOfUnitsApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getSystemsOfUnits(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**SystemOfUnits1**](SystemOfUnits1.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml

