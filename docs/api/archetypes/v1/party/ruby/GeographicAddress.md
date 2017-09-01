# SwaggerClient::GeographicAddress

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address_type** | **String** | The Address sub-type. | [default to &quot;null&quot;]
**formatted** | **String** | The full address formatted for display. | [default to &quot;null&quot;]
**type** | **String** | A string indicating what type of field this is, e.g., \&quot;work\&quot;. | [optional] [default to &quot;null&quot;]
**address_lines** | **Array&lt;String&gt;** | One or more lines that physically identify a location. The first line of an address is often a building name, a building number and street, or postal box number; the other address lines are for location information that further localizes the physical point of contact, e.g., suite or apartment number. | 
**city** | **String** | The name of a city, town, or locality. | 
**country** | [**GeographicAddressCountry**](GeographicAddressCountry.md) |  | [optional] 
**region_or_state** | **String** | The name of a geographical region within a country--in the USA, the would be a state; in England, a county; and in Switzerland, a canton. | 
**zip_or_postal_code** | **String** | A code used to identify a geographic area. | 


