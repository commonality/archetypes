# SwaggerClient::PartiesApi

All URIs are relative to *http://api.swindle.net/archetypes/v1/parties*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_parties**](PartiesApi.md#get_parties) | **GET** / | Retrieve all Parties.
[**get_party_by_party_identifier**](PartiesApi.md#get_party_by_party_identifier) | **GET** /{party-identifier} | Retrieve a specific Party entity.


# **get_parties**
> Array&lt;InlineResponse200&gt; get_parties

Retrieve all Parties.

Retrieve all Parties.

### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::PartiesApi.new

begin
  #Retrieve all Parties.
  result = api_instance.get_parties
  p result
rescue SwaggerClient::ApiError => e
  puts "Exception when calling PartiesApi->get_parties: #{e}"
end
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**Array&lt;InlineResponse200&gt;**](InlineResponse200.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml



# **get_party_by_party_identifier**
> InlineResponse200 get_party_by_party_identifier(party_identifier)

Retrieve a specific Party entity.

Retrieve a Party by its unique identifier.

### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::PartiesApi.new

party_identifier = "party_identifier_example" # String | The unique identifier of the Party.


begin
  #Retrieve a specific Party entity.
  result = api_instance.get_party_by_party_identifier(party_identifier)
  p result
rescue SwaggerClient::ApiError => e
  puts "Exception when calling PartiesApi->get_party_by_party_identifier: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **party_identifier** | **String**| The unique identifier of the Party. | 

### Return type

[**InlineResponse200**](InlineResponse200.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml



