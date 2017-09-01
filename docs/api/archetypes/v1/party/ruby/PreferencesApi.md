# SwaggerClient::PreferencesApi

All URIs are relative to *http://api.swindle.net/archetypes/v1/parties*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_preference_by_unique_identifier**](PreferencesApi.md#get_preference_by_unique_identifier) | **GET** /preferences/{unique-identifier} | Retrieve a specific Preference.
[**get_preferences**](PreferencesApi.md#get_preferences) | **GET** /preferences/ | Retrieve all Preferences.


# **get_preference_by_unique_identifier**
> Preferences get_preference_by_unique_identifier(unique_identifier)

Retrieve a specific Preference.

Retrieve a Preference by its unique identifier.

### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::PreferencesApi.new

unique_identifier = "unique_identifier_example" # String | The unique identifier associated with a Preference.


begin
  #Retrieve a specific Preference.
  result = api_instance.get_preference_by_unique_identifier(unique_identifier)
  p result
rescue SwaggerClient::ApiError => e
  puts "Exception when calling PreferencesApi->get_preference_by_unique_identifier: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **unique_identifier** | **String**| The unique identifier associated with a Preference. | 

### Return type

[**Preferences**](Preferences.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml



# **get_preferences**
> Array&lt;Preferences&gt; get_preferences

Retrieve all Preferences.

Retrieve all Preferences.

### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::PreferencesApi.new

begin
  #Retrieve all Preferences.
  result = api_instance.get_preferences
  p result
rescue SwaggerClient::ApiError => e
  puts "Exception when calling PreferencesApi->get_preferences: #{e}"
end
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**Array&lt;Preferences&gt;**](Preferences.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml



