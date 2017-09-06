# Money.Currency

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**validFrom** | **Number** | The date on which some thing become invalid or expired. If validFrom&#39;s value is of type String, that value must be a valid ISO 8601 format. If validFrom&#39; a value is of type Number, that value must be a valid Unix datetime stamp. If unknown, set validTo&#39;s date to null. | [optional] 
**validTo** | **Number** | The date on which some thing become valid or effective. If validTo&#39;s value is of type String, then that value must be a valid ISO 8601 format.  If validTo&#39;s value is of type Number, that value must be a valid Unix datetime stamp. If the date is either unknown or valid, set validTo&#39;s date to null. | [optional] 
**definition** | **String** | A description of the Currency, e.g., \&quot;The monetary unit of the United Kingdom\&quot;. | [default to &#39;&#39;]
**name** | **String** | The name of the &#x60;Currency&#x60;, e.g., \&quot;Pound Sterling\&quot;. | [default to &#39;&#39;]
**symbol** | **String** | Synonymous with &#x60;majorUnitSymbol&#x60;. | [default to &#39;null&#39;]
**alphabeticCode** | **String** | An alphabetic code that represents the currency, e.g., \&quot;EUR\&quot; for the Euro. | [default to &#39;&#39;]
**numericCode** | **String** | A numeric code optionally assigned to the Currency, e.g., the ISO 4217 standard assigns the numeric code \&quot;826\&quot; to the pound sterling (U.K.),  and \&quot;840\&quot; to the U.S. dollar. | [optional] [default to &#39;&#39;]
**majorUnitSymbol** | **String** | The symbol used to denote the major unit of the currency, e.g., in the U.K., the major unit is the pound \&quot;£\&quot;. | [default to &#39;&#39;]
**minorUnitSymbol** | **String** | The symbol used to denote the minor unit of the currency, e.g.,  in the U.K., the minor unit is \&quot;pence,\&quot; with the symbol \&quot;p\&quot;. If the currency does not have a minor unit (e.g., the Turkish Lira), this attribute should have the value null. | [optional] [default to &#39;&#39;]
**ratioOfMinorUnitToMajorUnit** | **Number** | The ratio of the value of the minor unit to the major unit. For example, there are 100 cents to 1 dollar in the US; therefore, the ratio of the minor unit to the major unit is 100/1 &#x3D; 100. If the currency does not have a minor unit, the attribute should have the value 1. | [optional] 


