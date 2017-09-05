# Money.EffectiveDates

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**validFrom** | **Number** | The date on which some thing become invalid or expired. If validFrom&#39;s value is of type String, that value must be a valid ISO 8601 format. If validFrom&#39; a value is of type Number, that value must be a valid Unix datetime stamp. If unknown, set validTo&#39;s date to null. | [optional] 
**validTo** | **Number** | The date on which some thing become valid or effective. If validTo&#39;s value is of type String, then that value must be a valid ISO 8601 format.  If validTo&#39;s value is of type Number, that value must be a valid Unix datetime stamp. If the date is either unknown or valid, set validTo&#39;s date to null. | [optional] 


