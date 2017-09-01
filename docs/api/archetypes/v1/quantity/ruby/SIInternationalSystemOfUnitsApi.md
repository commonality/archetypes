# SwaggerClient::SIInternationalSystemOfUnitsApi

All URIs are relative to *http://api.swindle.net/archetypes/v1/quantities*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_si_base_unit_by_name**](SIInternationalSystemOfUnitsApi.md#get_si_base_unit_by_name) | **GET** /systems-of-units/SI/base-units/{name} | Retrieve a metric or unit by its SI name.


# **get_si_base_unit_by_name**
> SiBaseUnit1 get_si_base_unit_by_name(name)

Retrieve a metric or unit by its SI name.

Retrieve a specific `SiBaseUnit` using its `name` property's _case-sensitive_ value.

### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::SIInternationalSystemOfUnitsApi.new

name = "name_example" # String | The `name` of the `SiBaseUnit`, e.g., \"`metric`\".<br><br>**Case-sensitivity**: `name's` value is **case-sensitive**. For example, \"`ampere`\" will return data, but capitalized \"`Meter`\" will result in an HTTP status code of 404 (`NotFoundError`).


begin
  #Retrieve a metric or unit by its SI name.
  result = api_instance.get_si_base_unit_by_name(name)
  p result
rescue SwaggerClient::ApiError => e
  puts "Exception when calling SIInternationalSystemOfUnitsApi->get_si_base_unit_by_name: #{e}"
end
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



