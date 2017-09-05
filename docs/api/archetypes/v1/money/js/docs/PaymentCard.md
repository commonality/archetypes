# Money.PaymentCard

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**billingAddress** | **String** | The address to which account statements are sent. | [default to &#39;&#39;]
**cardAssociationName** | **String** | The name of the card association that manages the card networks to which the PaymentCard belongs, e.g., \&quot;MasterCard\&quot;, \&quot;Visa\&quot;. | [default to &#39;&#39;]
**cardNumber** | **String** | The number on the PaymentCard. | [default to &#39;&#39;]
**cardVerificationCode** | **String** | A verification code printed on the back of the PaymentCard. At present, this is a three-digit number. | [optional] [default to &#39;&#39;]
**issueNumber** | **String** | A number used by the issuing authority to uniquely identify the issue of the PaymentCard. | [optional] [default to &#39;&#39;]
**nameOnCard** | **String** | The name of the Party authorized to use the PaymentCard. | [default to &#39;&#39;]
**validFrom** | **Number** | The date on which some thing become invalid or expired. If validFrom&#39;s value is of type String, that value must be a valid ISO 8601 format. If validFrom&#39; a value is of type Number, that value must be a valid Unix datetime stamp. If unknown, set validTo&#39;s date to null. | [optional] 
**validTo** | **Number** | The date on which some thing become valid or effective. If validTo&#39;s value is of type String, then that value must be a valid ISO 8601 format.  If validTo&#39;s value is of type Number, that value must be a valid Unix datetime stamp. If the date is either unknown or valid, set validTo&#39;s date to null. | 


