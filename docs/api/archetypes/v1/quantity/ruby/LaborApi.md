# SwaggerClient::LaborApi

All URIs are relative to *http://api.swindle.net/archetypes/v1/quantities*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_labor_unit**](LaborApi.md#create_labor_unit) | **POST** /systems-of-units/labor | Create an new Unit of Labor.
[**get_labor_unit_by_name**](LaborApi.md#get_labor_unit_by_name) | **GET** /systems-of-units/labor/{name} | Retrieve a metric or unit by name.


# **create_labor_unit**
> SystemOfUnits1 create_labor_unit(body)

Create an new Unit of Labor.

Create an new `Unit` of Labor. <br><br>**Standards for `name` assignments.**<br><br>When creating a new `Unit`, follow these rules for the value of `Unit's` `name` property:<ul><li>**Use lower case**: `name's` value SHOULD be in lower case.<li>**Format with [**kebab case**](https://runkit.com/gregswindle/59a1c3805d3740001245a72d)**: `name's` value SHOULD be given in [**kebab case**](https://runkit.com/gregswindle/59a1c3805d3740001245a72d). 

### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::LaborApi.new

body = SwaggerClient::SystemOfUnits3.new # SystemOfUnits3 | The new `Unit` object to be added.<br><br>**Important**: The `name` of the labor `Unit`, i.e., \"`work-hour`\".<ul><li>**Case-sensitivity**: `name's` value is **case-sensitive**. For example, \"`work-hour`\" will return data, but \"Work-Hour\" will result in an HTTP status code of 404 (`NotFoundError`).<li>**Format**: `name's` value must be given in [**kebab case**](https://runkit.com/gregswindle/59a1c3805d3740001245a72d). For example, \"`work-hour`\" will return data, but \"work hour\" (with whitespace) or \"`WorkHour`\" (in [`PascalCase`](http://wiki.c2.com/?PascalCase)) will result in an HTTP status code of 404 (`NotFoundError`).


begin
  #Create an new Unit of Labor.
  result = api_instance.create_labor_unit(body)
  p result
rescue SwaggerClient::ApiError => e
  puts "Exception when calling LaborApi->create_labor_unit: #{e}"
end
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



# **get_labor_unit_by_name**
> Unit1 get_labor_unit_by_name(name)

Retrieve a metric or unit by name.

The `name` of the labor `Unit`, i.e., \"`work-hour`\".<ul><li>**Case-sensitivity**: `name's` value is **case-sensitive**. For example, \"`work-hour`\" will return data, but \"Work-Hour\" will result in an HTTP status code of 404 (`NotFoundError`).<li>**Format**: `name's` value must be given in [**kebab case**](https://runkit.com/gregswindle/59a1c3805d3740001245a72d). For example, \"`work-hour`\" will return data, but \"work hour\" (with whitespace) or \"`WorkHour`\" (in [`PascalCase`](http://wiki.c2.com/?PascalCase)) will result in an HTTP status code of 404 (`NotFoundError`).

### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::LaborApi.new

name = "name_example" # String | The `name` of the labor `Unit`, i.e., \"`work-hour`\".<ul><li>**Case-sensitivity**: `name's` value is **case-sensitive**. For example, \"`work-hour`\" will return data, but \"Work-Hour\" will result in an HTTP status code of 404 (`NotFoundError`).<li>**Format**: `name's` value must be given in [**kebab case**](https://runkit.com/gregswindle/59a1c3805d3740001245a72d). For example, \"`work-hour`\" will return data, but \"work hour\" (with whitespace) or \"`WorkHour`\" (in [`PascalCase`](http://wiki.c2.com/?PascalCase)) will result in an HTTP status code of 404 (`NotFoundError`).


begin
  #Retrieve a metric or unit by name.
  result = api_instance.get_labor_unit_by_name(name)
  p result
rescue SwaggerClient::ApiError => e
  puts "Exception when calling LaborApi->get_labor_unit_by_name: #{e}"
end
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



