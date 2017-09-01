# SwaggerClient::OrganizationsApi

All URIs are relative to *http://api.swindle.net/archetypes/v1/parties*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_organization_by_party_identifier**](OrganizationsApi.md#get_organization_by_party_identifier) | **GET** /organizations/{party-identifier} | Retrieve a specific Organization.
[**get_organizations**](OrganizationsApi.md#get_organizations) | **GET** /organizations/ | Retrieve all Organizations.


# **get_organization_by_party_identifier**
> Organization1 get_organization_by_party_identifier(party_identifier)

Retrieve a specific Organization.

Retrieve a Organization by its unique identifier.

### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::OrganizationsApi.new

party_identifier = "party_identifier_example" # String | The unique identifier associated with an Organization.


begin
  #Retrieve a specific Organization.
  result = api_instance.get_organization_by_party_identifier(party_identifier)
  p result
rescue SwaggerClient::ApiError => e
  puts "Exception when calling OrganizationsApi->get_organization_by_party_identifier: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **party_identifier** | **String**| The unique identifier associated with an Organization. | 

### Return type

[**Organization1**](Organization1.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml



# **get_organizations**
> Array&lt;Organization1&gt; get_organizations

Retrieve all Organizations.

Retrieve all Organizations.

### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::OrganizationsApi.new

begin
  #Retrieve all Organizations.
  result = api_instance.get_organizations
  p result
rescue SwaggerClient::ApiError => e
  puts "Exception when calling OrganizationsApi->get_organizations: #{e}"
end
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**Array&lt;Organization1&gt;**](Organization1.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml



