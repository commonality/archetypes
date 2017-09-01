# Quantity.LaborApi

All URIs are relative to *http://api.swindle.net/archetypes/v1/quantities*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createLaborUnit**](LaborApi.md#createLaborUnit) | **POST** /systems-of-units/labor | Create an new Unit of Labor.
[**getLaborUnitByName**](LaborApi.md#getLaborUnitByName) | **GET** /systems-of-units/labor/{name} | Retrieve a metric or unit by name.


<a name="createLaborUnit"></a>
# **createLaborUnit**
> SystemOfUnits1 createLaborUnit(body)

Create an new Unit of Labor.

Create an new &#x60;Unit&#x60; of Labor. &lt;br&gt;&lt;br&gt;**Standards for &#x60;name&#x60; assignments.**&lt;br&gt;&lt;br&gt;When creating a new &#x60;Unit&#x60;, follow these rules for the value of &#x60;Unit&#39;s&#x60; &#x60;name&#x60; property:&lt;ul&gt;&lt;li&gt;**Use lower case**: &#x60;name&#39;s&#x60; value SHOULD be in lower case.&lt;li&gt;**Format with [**kebab case**](https://runkit.com/gregswindle/59a1c3805d3740001245a72d)**: &#x60;name&#39;s&#x60; value SHOULD be given in [**kebab case**](https://runkit.com/gregswindle/59a1c3805d3740001245a72d). 

### Example
```javascript
var Quantity = require('quantity');

var apiInstance = new Quantity.LaborApi();

var body = new Quantity.SystemOfUnits3(); // SystemOfUnits3 | The new `Unit` object to be added.<br><br>**Important**: The `name` of the labor `Unit`, i.e., \"`work-hour`\".<ul><li>**Case-sensitivity**: `name's` value is **case-sensitive**. For example, \"`work-hour`\" will return data, but \"Work-Hour\" will result in an HTTP status code of 404 (`NotFoundError`).<li>**Format**: `name's` value must be given in [**kebab case**](https://runkit.com/gregswindle/59a1c3805d3740001245a72d). For example, \"`work-hour`\" will return data, but \"work hour\" (with whitespace) or \"`WorkHour`\" (in [`PascalCase`](http://wiki.c2.com/?PascalCase)) will result in an HTTP status code of 404 (`NotFoundError`).


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createLaborUnit(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**SystemOfUnits3**](SystemOfUnits3.md)| The new &#x60;Unit&#x60; object to be added.&lt;br&gt;&lt;br&gt;**Important**: The &#x60;name&#x60; of the labor &#x60;Unit&#x60;, i.e., \&quot;&#x60;work-hour&#x60;\&quot;.&lt;ul&gt;&lt;li&gt;**Case-sensitivity**: &#x60;name&#39;s&#x60; value is **case-sensitive**. For example, \&quot;&#x60;work-hour&#x60;\&quot; will return data, but \&quot;Work-Hour\&quot; will result in an HTTP status code of 404 (&#x60;NotFoundError&#x60;).&lt;li&gt;**Format**: &#x60;name&#39;s&#x60; value must be given in [**kebab case**](https://runkit.com/gregswindle/59a1c3805d3740001245a72d). For example, \&quot;&#x60;work-hour&#x60;\&quot; will return data, but \&quot;work hour\&quot; (with whitespace) or \&quot;&#x60;WorkHour&#x60;\&quot; (in [&#x60;PascalCase&#x60;](http://wiki.c2.com/?PascalCase)) will result in an HTTP status code of 404 (&#x60;NotFoundError&#x60;). | 

### Return type

[**SystemOfUnits1**](SystemOfUnits1.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/xml
 - **Accept**: application/json, application/xml

<a name="getLaborUnitByName"></a>
# **getLaborUnitByName**
> Unit1 getLaborUnitByName(name)

Retrieve a metric or unit by name.

The &#x60;name&#x60; of the labor &#x60;Unit&#x60;, i.e., \&quot;&#x60;work-hour&#x60;\&quot;.&lt;ul&gt;&lt;li&gt;**Case-sensitivity**: &#x60;name&#39;s&#x60; value is **case-sensitive**. For example, \&quot;&#x60;work-hour&#x60;\&quot; will return data, but \&quot;Work-Hour\&quot; will result in an HTTP status code of 404 (&#x60;NotFoundError&#x60;).&lt;li&gt;**Format**: &#x60;name&#39;s&#x60; value must be given in [**kebab case**](https://runkit.com/gregswindle/59a1c3805d3740001245a72d). For example, \&quot;&#x60;work-hour&#x60;\&quot; will return data, but \&quot;work hour\&quot; (with whitespace) or \&quot;&#x60;WorkHour&#x60;\&quot; (in [&#x60;PascalCase&#x60;](http://wiki.c2.com/?PascalCase)) will result in an HTTP status code of 404 (&#x60;NotFoundError&#x60;).

### Example
```javascript
var Quantity = require('quantity');

var apiInstance = new Quantity.LaborApi();

var name = "name_example"; // String | The `name` of the labor `Unit`, i.e., \"`work-hour`\".<ul><li>**Case-sensitivity**: `name's` value is **case-sensitive**. For example, \"`work-hour`\" will return data, but \"Work-Hour\" will result in an HTTP status code of 404 (`NotFoundError`).<li>**Format**: `name's` value must be given in [**kebab case**](https://runkit.com/gregswindle/59a1c3805d3740001245a72d). For example, \"`work-hour`\" will return data, but \"work hour\" (with whitespace) or \"`WorkHour`\" (in [`PascalCase`](http://wiki.c2.com/?PascalCase)) will result in an HTTP status code of 404 (`NotFoundError`).


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getLaborUnitByName(name, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **String**| The &#x60;name&#x60; of the labor &#x60;Unit&#x60;, i.e., \&quot;&#x60;work-hour&#x60;\&quot;.&lt;ul&gt;&lt;li&gt;**Case-sensitivity**: &#x60;name&#39;s&#x60; value is **case-sensitive**. For example, \&quot;&#x60;work-hour&#x60;\&quot; will return data, but \&quot;Work-Hour\&quot; will result in an HTTP status code of 404 (&#x60;NotFoundError&#x60;).&lt;li&gt;**Format**: &#x60;name&#39;s&#x60; value must be given in [**kebab case**](https://runkit.com/gregswindle/59a1c3805d3740001245a72d). For example, \&quot;&#x60;work-hour&#x60;\&quot; will return data, but \&quot;work hour\&quot; (with whitespace) or \&quot;&#x60;WorkHour&#x60;\&quot; (in [&#x60;PascalCase&#x60;](http://wiki.c2.com/?PascalCase)) will result in an HTTP status code of 404 (&#x60;NotFoundError&#x60;). | 

### Return type

[**Unit1**](Unit1.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml

