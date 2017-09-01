# SwaggerClient::PeopleApi

All URIs are relative to *http://api.swindle.net/archetypes/v1/parties*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_people**](PeopleApi.md#get_people) | **GET** /people/ | Retrieve all People.
[**get_person_by_party_identifier**](PeopleApi.md#get_person_by_party_identifier) | **GET** /people/{party-identifier} | Retrieve a specific Person entity.


# **get_people**
> Array&lt;Person1&gt; get_people

Retrieve all People.

Retrieve all People.

### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::PeopleApi.new

begin
  #Retrieve all People.
  result = api_instance.get_people
  p result
rescue SwaggerClient::ApiError => e
  puts "Exception when calling PeopleApi->get_people: #{e}"
end
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**Array&lt;Person1&gt;**](Person1.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml



# **get_person_by_party_identifier**
> Person1 get_person_by_party_identifier(party_identifier)

Retrieve a specific Person entity.

Retrieve a Person by their unique identifier.

### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::PeopleApi.new

party_identifier = "party_identifier_example" # String | The unique identifier associated with a Person.


begin
  #Retrieve a specific Person entity.
  result = api_instance.get_person_by_party_identifier(party_identifier)
  p result
rescue SwaggerClient::ApiError => e
  puts "Exception when calling PeopleApi->get_person_by_party_identifier: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **party_identifier** | **String**| The unique identifier associated with a Person. | 

### Return type

[**Person1**](Person1.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml



