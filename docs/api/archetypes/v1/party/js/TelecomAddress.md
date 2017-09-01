# Party.TelecomAddress

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**addressType** | **String** | The Address sub-type. | [default to &#39;null&#39;]
**formatted** | **String** | The full address formatted for display. | [default to &#39;null&#39;]
**type** | **String** | A string indicating what type of field this is, e.g., \&quot;work\&quot;. | [optional] [default to &#39;null&#39;]
**areaCode** | **String** | The code for an area or city. | [optional] 
**countryCode** | **String** | The number required to directly dial a particular country. | [optional] 
**extension** | **String** | An extension accessible via the number. | [optional] 
**nationalDirectDialingPrefix** | **String** | The prefix required to make a call within a country between two different cities, localities, or areas--generally dropped when dialing from outside the country (with some exceptions). | [optional] 
**_number** | **String** | The \&quot;telephone\&quot; number, which may be (arbitrarily) formatted into one or mnemonic sequences of digits depending on local standards. | [optional] 
**physicalType** | **String** | The type of device accessed by the TelecomAddress. | [optional] 


<a name="AddressTypeEnum"></a>
## Enum: AddressTypeEnum


* `ADDRESS` (value: `"TELECOM_ADDRESS"`)




<a name="PhysicalTypeEnum"></a>
## Enum: PhysicalTypeEnum


* `phone` (value: `"phone"`)

* `fax` (value: `"fax"`)

* `mobile` (value: `"mobile"`)

* `pager` (value: `"pager"`)

* `sms` (value: `"sms"`)




