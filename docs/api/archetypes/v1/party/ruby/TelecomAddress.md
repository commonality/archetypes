# SwaggerClient::TelecomAddress

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address_type** | **String** | The Address sub-type. | [default to &quot;null&quot;]
**formatted** | **String** | The full address formatted for display. | [default to &quot;null&quot;]
**type** | **String** | A string indicating what type of field this is, e.g., \&quot;work\&quot;. | [optional] [default to &quot;null&quot;]
**area_code** | **String** | The code for an area or city. | [optional] 
**country_code** | **String** | The number required to directly dial a particular country. | [optional] 
**extension** | **String** | An extension accessible via the number. | [optional] 
**national_direct_dialing_prefix** | **String** | The prefix required to make a call within a country between two different cities, localities, or areas--generally dropped when dialing from outside the country (with some exceptions). | [optional] 
**number** | **String** | The \&quot;telephone\&quot; number, which may be (arbitrarily) formatted into one or mnemonic sequences of digits depending on local standards. | [optional] 
**physical_type** | **String** | The type of device accessed by the TelecomAddress. | [optional] 


