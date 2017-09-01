# Quantity.SIInternationalSystemOfUnitsApi

All URIs are relative to *http://api.swindle.net/archetypes/v1/quantities*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getSiBaseUnitByName**](SIInternationalSystemOfUnitsApi.md#getSiBaseUnitByName) | **GET** /systems-of-units/SI/base-units/{name} | Retrieve a metric or unit by its SI name.


<a name="getSiBaseUnitByName"></a>
# **getSiBaseUnitByName**
> SiBaseUnit1 getSiBaseUnitByName(name)

Retrieve a metric or unit by its SI name.

Retrieve a specific &#x60;SiBaseUnit&#x60; using its &#x60;name&#x60; property&#39;s _case-sensitive_ value.

### Example
```javascript
var Quantity = require('quantity');

var apiInstance = new Quantity.SIInternationalSystemOfUnitsApi();

var name = "name_example"; // String | The `name` of the `SiBaseUnit`, e.g., \"`metric`\".<br><br>**Case-sensitivity**: `name's` value is **case-sensitive**. For example, \"`ampere`\" will return data, but capitalized \"`Meter`\" will result in an HTTP status code of 404 (`NotFoundError`).


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getSiBaseUnitByName(name, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **String**| The &#x60;name&#x60; of the &#x60;SiBaseUnit&#x60;, e.g., \&quot;&#x60;metric&#x60;\&quot;.&lt;br&gt;&lt;br&gt;**Case-sensitivity**: &#x60;name&#39;s&#x60; value is **case-sensitive**. For example, \&quot;&#x60;ampere&#x60;\&quot; will return data, but capitalized \&quot;&#x60;Meter&#x60;\&quot; will result in an HTTP status code of 404 (&#x60;NotFoundError&#x60;). | 

### Return type

[**SiBaseUnit1**](SiBaseUnit1.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml

