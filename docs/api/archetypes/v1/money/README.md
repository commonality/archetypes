![Business archetypes logo][logo-commonalaxy-image]

# `Money` API and SDK Documentation  <small> ⍟ v1.0.0</small>
> The `Money` archetype represents an amount of a specific `Currency`.

## Table of contents

<!-- toc -->

- [Standards compliance](#standards-compliance)
- [Business archetypes defined](#business-archetypes-defined)
- [Explore other business archetype patterns](#explore-other-business-archetype-patterns)
- [`Currency`](#currency)
  * [`getCurrencies`](#getcurrencies)
    + [Usage and SDK Samples](#usage-and-sdk-samples)
    + [Parameters](#parameters)
    + [Responses](#responses)
    + [Status: 200 - OK](#status-200---ok)
  * [`getCurrencyByAlphabeticCode`](#getcurrencybyalphabeticcode)
    + [Usage and SDK Samples](#usage-and-sdk-samples)
    + [Parameters](#parameters-1)
    + [Responses](#responses-1)
    + [Status: 200 - OK](#status-200---ok)
- [`Payment`](#payment)
  * [`getPayments`](#getpayments)
    + [Usage and SDK Samples](#usage-and-sdk-samples-1)
    + [Parameters](#parameters-2)
    + [Responses](#responses-2)
    + [Status: 200 - OK](#status-200---ok-1)
- [`PaymentMethod`](#paymentmethod)
  * [`getPaymentMethods`](#getpaymentmethods)
    + [Usage and SDK Samples](#usage-and-sdk-samples-2)
    + [Parameters](#parameters-3)
    + [Responses](#responses-3)
    + [Status: 200 - OK](#status-200---ok-2)

<!-- tocstop -->

<!-- tocend -->

---

## Standards compliance

| Standard | Contents |
| --- | --- |
| [OMG Currency Specification v1.0](http://www.omg.org/spec/CURR/1.0/PDF) | A standard to support international currency. |
| [ISO 4217](https://www.iso.org/iso-4217-currency-codes.html) | Three- and two-letter currency codes, currency numbers, and currency names. |
| [ISO 3166](https://www.iso.org/iso-3166-country-codes.html) | Two-letter country codes and country names. |

***

## Business archetypes defined

"A business archetype is a primordial thing that occurs consistently and universally in business domains and business software systems." (Arlow & Neustadt, [_Enterprise patterns and MDA: building better software with archetype patterns and UML_](https://www.amazon.com/Enterprise-Patterns-MDA-Building-Archetype/dp/032111230X), 2006, p. 5)

## Explore other business archetype patterns

[Open a Swagger-UI](http://api.swindle.net/swagger-ui/#/) instance, then copy and paste the following Swagger specification URLs into the "Explore" text field and select the "Explore" button for additional APIs.

1. `Locale`:
http://api.swindle.net/archetypes/v1/schemas/locales/locales.yaml
2. `Money`: http://api.swindle.net/archetypes/v1/schemas/money/money.yaml
3. `Party`:
http://api.swindle.net/archetypes/v1/schemas/parties/parties.yaml
4. `Quantity`:
http://api.swindle.net/archetypes/v1/schemas/quantities/quantities.yaml

---

## `Currency`
> `Currency` implements `Metric` and is `acceptedIn` one or more `Locales`. `Currency's` unique identifier is its `alphabeticCode`.

At present, there are two fundamentally different types of currency -- those that are specified by ISO and those that are not.

1. **`IsoCurrency`** represents a type of `Currency` with [ISO 4217](https://www.iso.org/iso-4217-currency-codes.html) definitions for

  - `name`,
  - `alphabeticCode`, and
  - `numericCode`.

2. **`NonIsoCurrency`** represents a type of `Currency` that is _not_ defined in any ISO specification. These types of currency might unrecognized or arbitrary "rewards," like American Airlines AAdvantage Miles.

### `getCurrencies`
> Retrieve all currencies.


```
GET /currencies
```

#### Usage and SDK Samples

__Curl__

```bash
curl -X GET "http://api.swindle.net/archetypes/v1/money/currencies"
```


__Java__

```java
import io.swagger.client.*;
import io.swagger.client.auth.*;
import io.swagger.client.model.*;
import io.swagger.client.api.CurrencyApi;

import java.io.File;
import java.util.*;

public class CurrencyApiExample {

    public static void main(String[] args) {

        CurrencyApi apiInstance = new CurrencyApi();
        try {
            array[Currency] result = apiInstance.getCurrencies();
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling CurrencyApi#getCurrencies");
            e.printStackTrace();
        }
    }
}
```

__Android__


__Java__

```java
import io.swagger.client.api.CurrencyApi;

public class CurrencyApiExample {

    public static void main(String[] args) {
        CurrencyApi apiInstance = new CurrencyApi();
        try {
            array[Currency] result = apiInstance.getCurrencies();
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling CurrencyApi#getCurrencies");
            e.printStackTrace();
        }
    }
}
```


__Objective-C__

```cpp

CurrencyApi *apiInstance = [[CurrencyApi alloc] init];

// Retrieve all currencies.
[apiInstance getCurrenciesWithCompletionHandler:
              ^(array[Currency] output, NSError* error) {
                            if (output) {
                                NSLog(@"%@", output);
                            }
                            if (error) {
                                NSLog(@"Error: %@", error);
                            }
                        }];
```


__JavaScript__

```js
const Money = require('money');

const api = new Money.CurrencyApi()

const callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.getCurrencies(callback);
```


__C#__

```cs
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class getCurrenciesExample
    {
        public void main()
        {

            const apiInstance = new CurrencyApi();

            try
            {
                // Retrieve all currencies.
                array[Currency] result = apiInstance.getCurrencies();
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling CurrencyApi.getCurrencies: " + e.Message );
            }
        }
    }
}
```


__PHP__

```php
getCurrencies();
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling CurrencyApi->getCurrencies: ', $e->getMessage(), PHP_EOL;
}
?>
```


__Perl__

```perl
use Data::Dumper;
use WWW::SwaggerClient::Configuration;
use WWW::SwaggerClient::CurrencyApi;

my $api_instance = WWW::SwaggerClient::CurrencyApi->new();

eval {
    my $result = $api_instance->getCurrencies();
    print Dumper($result);
};
if ($@) {
    warn "Exception when calling CurrencyApi->getCurrencies: $@\n";
}
```


__Python__

```python
from __future__ import print_statement
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

## create an instance of the API class
api_instance = swagger_client.CurrencyApi()

try:
    # Retrieve all currencies.
    api_response = api_instance.get_currencies()
    pprint(api_response)
except ApiException as e:
    print("Exception when calling CurrencyApi->getCurrencies: %s\n" % e)
```

#### Parameters

#### Responses

#### Status: 200 - OK

* [Schema](#responses-getcurrencies-200-schema)

***

### `getCurrencyByAlphabeticCode`
> Retrieve a specific Currency by its alphabetic code.

```
GET /currencies/{alphabetic-code}
```

#### Usage and SDK Samples

__Curl__

```bash
curl -X GET "http://api.swindle.net/archetypes/v1/money/currencies/{alphabetic-code}"
```

__Java__


```java
import io.swagger.client.*;
import io.swagger.client.auth.*;
import io.swagger.client.model.*;
import io.swagger.client.api.CurrencyApi;

import java.io.File;
import java.util.*;

public class CurrencyApiExample {

    public static void main(String[] args) {

        CurrencyApi apiInstance = new CurrencyApi();
        String alphabeticCode = alphabeticCode_example; // String | An alphabetic code that represents the currency.
        try {
            Currency result = apiInstance.getCurrencyByAlphabeticCode(alphabeticCode);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling CurrencyApi#getCurrencyByAlphabeticCode");
            e.printStackTrace();
        }
    }
}
```


__Android__


```java
import io.swagger.client.api.CurrencyApi;

public class CurrencyApiExample {

    public static void main(String[] args) {
        CurrencyApi apiInstance = new CurrencyApi();
        String alphabeticCode = alphabeticCode_example; // String | An alphabetic code that represents the currency.
        try {
            Currency result = apiInstance.getCurrencyByAlphabeticCode(alphabeticCode);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling CurrencyApi#getCurrencyByAlphabeticCode");
            e.printStackTrace();
        }
    }
}
```

__Objective-C__

```cpp
String *alphabeticCode = alphabeticCode_example; // An alphabetic code that represents the currency.

CurrencyApi *apiInstance = [[CurrencyApi alloc] init];

// Retrieve a Currency by alphabetic code.
[apiInstance getCurrencyByAlphabeticCodeWith:alphabeticCode
              completionHandler: ^(Currency output, NSError* error) {
                            if (output) {
                                NSLog(@"%@", output);
                            }
                            if (error) {
                                NSLog(@"Error: %@", error);
                            }
                        }];
```

__JavaScript__

```js
const Money = require('money');

const api = new Money.CurrencyApi()

const alphabeticCode = alphabeticCode_example; // {String} An alphabetic code that represents the currency.

const callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.getCurrencyByAlphabeticCode(alphabeticCode, callback);
```

__C#__

```cs
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class getCurrencyByAlphabeticCodeExample
    {
        public void main()
        {

            const apiInstance = new CurrencyApi();
            const alphabeticCode = alphabeticCode_example;  // String | An alphabetic code that represents the currency.

            try
            {
                // Retrieve a Currency by alphabetic code.
                Currency result = apiInstance.getCurrencyByAlphabeticCode(alphabeticCode);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling CurrencyApi.getCurrencyByAlphabeticCode: " + e.Message );
            }
        }
    }
}
```

__PHP__

```php
getCurrencyByAlphabeticCode($alphabeticCode);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling CurrencyApi->getCurrencyByAlphabeticCode: ', $e->getMessage(), PHP_EOL;
}
?>
```

__Perl__

```perl
use Data::Dumper;
use WWW::SwaggerClient::Configuration;
use WWW::SwaggerClient::CurrencyApi;

my $api_instance = WWW::SwaggerClient::CurrencyApi->new();
my $alphabeticCode = alphabeticCode_example; # String | An alphabetic code that represents the currency.

eval {
    my $result = $api_instance->getCurrencyByAlphabeticCode(alphabeticCode => $alphabeticCode);
    print Dumper($result);
};
if ($@) {
    warn "Exception when calling CurrencyApi->getCurrencyByAlphabeticCode: $@\n";
}
```

__Python__

```python
from __future__ import print_statement
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.CurrencyApi()
alphabeticCode = alphabeticCode_example # String | An alphabetic code that represents the currency.

try:
    # Retrieve a Currency by alphabetic code.
    api_response = api_instance.get_currency_by_alphabetic_code(alphabeticCode)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling CurrencyApi->getCurrencyByAlphabeticCode: %s\n" % e)
```

#### Parameters

Path parameters

| Name | Description |
| --- | --- |
| alphabetic-code* |String An alphabetic code that represents the currency. Required |

#### Responses

#### Status: 200 - OK

* [Schema](#responses-getcurrencybyalphabeticcode-200-schema)

***

## `Payment`
> The `Payment` archetype represents `Money` paid by one `Party` to another in return for goods or services.

### `getPayments`
> Retrieve all payments.

```
GET /payments
```

#### Usage and SDK Samples

__Curl__

```bash
curl -X GET "http://api.swindle.net/archetypes/v1/money/payments"
```


__Java__

```java
import io.swagger.client.*;
import io.swagger.client.auth.*;
import io.swagger.client.model.*;
import io.swagger.client.api.PaymentApi;

import java.io.File;
import java.util.*;

public class PaymentApiExample {

    public static void main(String[] args) {

        PaymentApi apiInstance = new PaymentApi();
        try {
            array[Payment] result = apiInstance.getPayments();
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling PaymentApi#getPayments");
            e.printStackTrace();
        }
    }
}
```


__Android__

```java
import io.swagger.client.api.PaymentApi;

public class PaymentApiExample {

    public static void main(String[] args) {
        PaymentApi apiInstance = new PaymentApi();
        try {
            array[Payment] result = apiInstance.getPayments();
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling PaymentApi#getPayments");
            e.printStackTrace();
        }
    }
}
```


__Objective-C__

```cpp

PaymentApi *apiInstance = [[PaymentApi alloc] init];

// Retrieve all payments.
[apiInstance getPaymentsWithCompletionHandler:
              ^(array[Payment] output, NSError* error) {
                            if (output) {
                                NSLog(@"%@", output);
                            }
                            if (error) {
                                NSLog(@"Error: %@", error);
                            }
                        }];
```


__JavaScript__

```js
const Money = require('money');

const api = new Money.PaymentApi()

const callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.getPayments(callback);
```


__C#__

```cs
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class getPaymentsExample
    {
        public void main()
        {

            const apiInstance = new PaymentApi();

            try
            {
                // Retrieve all payments.
                array[Payment] result = apiInstance.getPayments();
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling PaymentApi.getPayments: " + e.Message );
            }
        }
    }
}
```


__PHP__

```php
getPayments();
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling PaymentApi->getPayments: ', $e->getMessage(), PHP_EOL;
}
?>
```


__Perl__

```perl
use Data::Dumper;
use WWW::SwaggerClient::Configuration;
use WWW::SwaggerClient::PaymentApi;

my $api_instance = WWW::SwaggerClient::PaymentApi->new();

eval {
    my $result = $api_instance->getPayments();
    print Dumper($result);
};
if ($@) {
    warn "Exception when calling PaymentApi->getPayments: $@\n";
}
```


__Python__

```python
from __future__ import print_statement
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

## create an instance of the API class
api_instance = swagger_client.PaymentApi()

try:
    # Retrieve all payments.
    api_response = api_instance.get_payments()
    pprint(api_response)
except ApiException as e:
    print("Exception when calling PaymentApi->getPayments: %s\n" % e)
```

#### Parameters

#### Responses

#### Status: 200 - OK

* [Schema](#responses-getpayments-200-schema)

***

## `PaymentMethod`
>  A `PaymentMethod` is a medium by which `Money` is transferred.

`PaymentMethods` include (but are not limited to):

* `PaymentCard`
* `CreditCard`
* `DebitCard`
* `GiftCard`
* `Donation`
* `Cash`
* `DigitalCurrency`
* `Check`


### `getPaymentMethods`
> Retrieve all payment method types.

```
GET /payment-methods
```

#### Usage and SDK Samples

__Curl__

```bash
curl -X GET "http://api.swindle.net/archetypes/v1/money/payment-methods"
```

__Java__

```java
import io.swagger.client.*;
import io.swagger.client.auth.*;
import io.swagger.client.model.*;
import io.swagger.client.api.PaymentMethodApi;

import java.io.File;
import java.util.*;

public class PaymentMethodApiExample {

    public static void main(String[] args) {

        PaymentMethodApi apiInstance = new PaymentMethodApi();
        try {
            array[Object] result = apiInstance.getPaymentMethods();
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling PaymentMethodApi#getPaymentMethods");
            e.printStackTrace();
        }
    }
}
```


__Android__

```java
import io.swagger.client.api.PaymentMethodApi;

public class PaymentMethodApiExample {

    public static void main(String[] args) {
        PaymentMethodApi apiInstance = new PaymentMethodApi();
        try {
            array[Object] result = apiInstance.getPaymentMethods();
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling PaymentMethodApi#getPaymentMethods");
            e.printStackTrace();
        }
    }
}
```


__Objective-C__

```cpp

PaymentMethodApi *apiInstance = [[PaymentMethodApi alloc] init];

// Retrieve all payment method types.
[apiInstance getPaymentMethodsWithCompletionHandler:
              ^(array[Object] output, NSError* error) {
                            if (output) {
                                NSLog(@"%@", output);
                            }
                            if (error) {
                                NSLog(@"Error: %@", error);
                            }
                        }];
```


__JavaScript__

```js
const Money = require('money');

const api = new Money.PaymentMethodApi()

const callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.getPaymentMethods(callback);
```


__C#__

```cs
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class getPaymentMethodsExample
    {
        public void main()
        {

            const apiInstance = new PaymentMethodApi();

            try
            {
                // Retrieve all payment method types.
                array[Object] result = apiInstance.getPaymentMethods();
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling PaymentMethodApi.getPaymentMethods: " + e.Message );
            }
        }
    }
}
```


__PHP__

```php
getPaymentMethods();
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling PaymentMethodApi->getPaymentMethods: ', $e->getMessage(), PHP_EOL;
}
?>
```


__Perl__

```perl
use Data::Dumper;
use WWW::SwaggerClient::Configuration;
use WWW::SwaggerClient::PaymentMethodApi;

my $api_instance = WWW::SwaggerClient::PaymentMethodApi->new();

eval {
    my $result = $api_instance->getPaymentMethods();
    print Dumper($result);
};
if ($@) {
    warn "Exception when calling PaymentMethodApi->getPaymentMethods: $@\n";
}
```


__Python__

```python
from __future__ import print_statement
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

### create an instance of the API class
api_instance = swagger_client.PaymentMethodApi()

try:
    # Retrieve all payment method types.
    api_response = api_instance.get_payment_methods()
    pprint(api_response)
except ApiException as e:
    print("Exception when calling PaymentMethodApi->getPaymentMethods: %s\n" % e)
```

#### Parameters

#### Responses

#### Status: 200 - OK

* [Schema](#responses-getpaymentmethods-200-schema)

***

Suggestions, contact, support and error reporting;
Contact Info: [greg@swindle.net](greg@swindle.net)

Apache 2.0 http://www.apache.org/licenses/LICENSE-2.0.html Generated 2017-09-05T07:16:36.039Z


[icon-rest-client-image]: /docs/img/icon-rest-client.png
[logo-commonalaxy-image]: /docs/img/logo-commonalaxy.png
[mda-book-url]: https://www.amazon.com/Enterprise-Patterns-MDA-Building-Archetype/dp/032111230X
[quote-left-image]: /docs/img/quote-left-25.png
[icon-rest-api-image]: /docs/img/icon-rest-api.png
[swagger-ui-party-url]: http://api.swindle.net/swagger-ui/#/
