# SwaggerClient::SystemsOfUnitsApi

All URIs are relative to *http://api.swindle.net/archetypes/v1/quantities*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_system_of_units**](SystemsOfUnitsApi.md#create_system_of_units) | **POST** /systems-of-units | Create an new SystemOfUnits.
[**get_system_of_units_by_name**](SystemsOfUnitsApi.md#get_system_of_units_by_name) | **GET** /systems-of-units/{name-of-system} | Retrieve a specific system of units by name.
[**get_systems_of_units**](SystemsOfUnitsApi.md#get_systems_of_units) | **GET** /systems-of-units | Retrieve all systems of units.


# **create_system_of_units**
> SystemOfUnits1 create_system_of_units(body)

Create an new SystemOfUnits.

Create an new `SystemOfUnits`.

### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::SystemsOfUnitsApi.new

body = SwaggerClient::SystemOfUnits2.new # SystemOfUnits2 | The `SystemOfUnits` to be added.


begin
  #Create an new SystemOfUnits.
  result = api_instance.create_system_of_units(body)
  p result
rescue SwaggerClient::ApiError => e
  puts "Exception when calling SystemsOfUnitsApi->create_system_of_units: #{e}"
end
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



# **get_system_of_units_by_name**
> SystemOfUnits1 get_system_of_units_by_name(name_of_system)

Retrieve a specific system of units by name.

Retrieve a specific `SystemOfUnits` using its `nameOfSystem` property's _case-sensitive_ value.

### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::SystemsOfUnitsApi.new

name_of_system = "name_of_system_example" # String | The name of the system of units, e.g., \"SI\" for the International System of Units (SI). <br><br>**Case-sensitivity**: `name-of-system's` value is **case-sensitive**. For example, \"SI\" will return data, but lower-case \"si\" will result in an HTTP status code of 404 (`NotFoundError`).


begin
  #Retrieve a specific system of units by name.
  result = api_instance.get_system_of_units_by_name(name_of_system)
  p result
rescue SwaggerClient::ApiError => e
  puts "Exception when calling SystemsOfUnitsApi->get_system_of_units_by_name: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name_of_system** | **String**| The name of the system of units, e.g., \&quot;SI\&quot; for the International System of Units (SI). &lt;br&gt;&lt;br&gt;**Case-sensitivity**: &#x60;name-of-system&#39;s&#x60; value is **case-sensitive**. For example, \&quot;SI\&quot; will return data, but lower-case \&quot;si\&quot; will result in an HTTP status code of 404 (&#x60;NotFoundError&#x60;). | 

### Return type

[**SystemOfUnits1**](SystemOfUnits1.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml



# **get_systems_of_units**
> SystemOfUnits1 get_systems_of_units

Retrieve all systems of units.

Retrieve a list of all `SystemOfUnits`.

### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::SystemsOfUnitsApi.new

begin
  #Retrieve all systems of units.
  result = api_instance.get_systems_of_units
  p result
rescue SwaggerClient::ApiError => e
  puts "Exception when calling SystemsOfUnitsApi->get_systems_of_units: #{e}"
end
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



