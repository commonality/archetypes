![Business archetypes logo][logo-commonalaxy-image]

# `Quantity` API and SDK Documentation <small> ⍟ v1.0.0</small>
> The `Quantity` archetype represents an amount of something measured according to some standard of measurement.

## Table of contents

<!-- toc -->

- [Standards compliance](#standards-compliance)
- [Business archetypes defined](#business-archetypes-defined)
- [Explore other business archetype patterns](#explore-other-business-archetype-patterns)
- [`Labor`](#labor)
  * [`createLaborUnit`](#createlaborunit)
    + [Usage and SDK Samples](#usage-and-sdk-samples)
    + [Parameters](#parameters)
    + [Responses](#responses)
      - [Status: 201 - Created](#status-201---created)
  * [`getLaborUnitByName`](#getlaborunitbyname)
    + [Usage and SDK Samples](#usage-and-sdk-samples-1)
    + [Parameters](#parameters-1)
    + [Responses](#responses-1)
      - [Status: 200 - OK](#status-200---ok)
- [`SIInternationalSystemOfUnits`](#siinternationalsystemofunits)
  * [`getSiBaseUnitByName`](#getsibaseunitbyname)
    + [Usage and SDK Samples](#usage-and-sdk-samples-2)
    + [Parameters](#parameters-2)
    + [Responses](#responses-2)
      - [Status: 200 - OK](#status-200---ok-1)
- [`SystemsOfUnits`](#systemsofunits)
  * [`createSystemOfUnits`](#createsystemofunits)
    + [Usage and SDK Samples](#usage-and-sdk-samples-3)
    + [Parameters](#parameters-3)
    + [Responses](#responses-3)
      - [Status: 201 - Created](#status-201---created-1)
  * [`getSystemOfUnitsByName`](#getsystemofunitsbyname)
    + [Usage and SDK Samples](#usage-and-sdk-samples-4)
    + [Parameters](#parameters-4)
    + [Responses](#responses-4)
      - [Status: 200 - OK](#status-200---ok-2)
  * [`getSystemsOfUnits`](#getsystemsofunits)
    + [Usage and SDK Samples](#usage-and-sdk-samples-5)
    + [Parameters](#parameters-5)
    + [Responses](#responses-5)
      - [Status: 200 - OK](#status-200---ok-3)

<!-- tocstop -->

<!-- tocend -->

## Standards compliance

| Standard | Contents |
| --- | --- |
| [SI](http://www.bipm.org/en/measurement-units/) | International System of Units—Bureau International des Poids et Mesures (BIPM). |
| [Unicode CLDR](http://cldr.unicode.org/) | Unicode Common Locale Data Repository provides locales-specific patterns for formatting, parsing, spelling aloud, and handling traditional/archiac numbers. |

***

## Business archetypes defined

"A business archetype is a primordial thing that occurs consistently and universally in business domains and business software systems." (Arlow & Neustadt, [_Enterprise patterns and MDA: building better software with archetype patterns and UML_](https://www.amazon.com/Enterprise-Patterns-MDA-Building-Archetype/dp/032111230X), 2006, p. 5)

## Explore other business archetype patterns

[Open a Swagger-UI](http://api.swindle.net/swagger-ui/#/) instance, then copy and paste the following Swagger specification URLs into the "Explore" text field and select the "Explore" button for additional APIs.

1. `Locale`: http://api.swindle.net/archetypes/v1/schemas/locales/locales.yaml
2. `Money`: http://api.swindle.net/archetypes/v1/schemas/money/money.yaml
3. `Party`: http://api.swindle.net/archetypes/v1/schemas/parties/parties.yaml
4. `Quantity`: http://api.swindle.net/archetypes/v1/schemas/quantities/quantities.yaml

***

## `Labor`

### `createLaborUnit`
> Create an new `Unit` of Labor.

**Standards for `name` assignments.**

When creating a new `Unit`, follow these rules for the value of `Unit's` `name` property:

* **Use lower case**: `name's` value SHOULD be in lower case.
* **Format with [kebab case](https://runkit.com/commonality/59a1c3805d3740001245a72d)**: `name's` value SHOULD be given in [**kebab case**](https://runkit.com/commonality/59a1c3805d3740001245a72d).


```
POST /systems-of-units/labor
```

#### Usage and SDK Samples

**Curl**

```bash
curl -X POST "http://api.swindle.net/archetypes/v1/quantities/systems-of-units/labor"
```

**Java**

```java
import io.swagger.client.*;
import io.swagger.client.auth.*;
import io.swagger.client.model.*;
import io.swagger.client.api.LaborApi;

import java.io.File;
import java.util.*;

public class LaborApiExample {

    public static void main(String[] args) {

        LaborApi apiInstance = new LaborApi();
        SystemOfUnits body = ; // SystemOfUnits | The new `Unit` object to be added.**Important**: The `name` of the labor `Unit`, i.e., "`work-hour`".**Case-sensitivity**: `name's` value is **case-sensitive**. For example, "`work-hour`" will return data, but "Work-Hour" will result in an HTTP status code of 404 (`NotFoundError`).**Format**: `name's` value must be given in [**kebab case**](https://runkit.com/commonality/59a1c3805d3740001245a72d). For example, "`work-hour`" will return data, but "work hour" (with whitespace) or "`WorkHour`" (in [`PascalCase`](http://wiki.c2.com/?PascalCase)) will result in an HTTP status code of 404 (`NotFoundError`).
        try {
            SystemOfUnits result = apiInstance.createLaborUnit(body);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling LaborApi#createLaborUnit");
            e.printStackTrace();
        }
    }
}
```

**Android**

```java
import io.swagger.client.api.LaborApi;

public class LaborApiExample {

    public static void main(String[] args) {
        LaborApi apiInstance = new LaborApi();
        SystemOfUnits body = ; // SystemOfUnits | The new `Unit` object to be added.**Important**: The `name` of the labor `Unit`, i.e., "`work-hour`".**Case-sensitivity**: `name's` value is **case-sensitive**. For example, "`work-hour`" will return data, but "Work-Hour" will result in an HTTP status code of 404 (`NotFoundError`).**Format**: `name's` value must be given in [**kebab case**](https://runkit.com/commonality/59a1c3805d3740001245a72d). For example, "`work-hour`" will return data, but "work hour" (with whitespace) or "`WorkHour`" (in [`PascalCase`](http://wiki.c2.com/?PascalCase)) will result in an HTTP status code of 404 (`NotFoundError`).
        try {
            SystemOfUnits result = apiInstance.createLaborUnit(body);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling LaborApi#createLaborUnit");
            e.printStackTrace();
        }
    }
}
```

**Objective-C**

```cpp
SystemOfUnits *body = ; // The new `Unit` object to be added.**Important**: The `name` of the labor `Unit`, i.e., "`work-hour`".**Case-sensitivity**: `name's` value is **case-sensitive**. For example, "`work-hour`" will return data, but "Work-Hour" will result in an HTTP status code of 404 (`NotFoundError`).**Format**: `name's` value must be given in [**kebab case**](https://runkit.com/commonality/59a1c3805d3740001245a72d). For example, "`work-hour`" will return data, but "work hour" (with whitespace) or "`WorkHour`" (in [`PascalCase`](http://wiki.c2.com/?PascalCase)) will result in an HTTP status code of 404 (`NotFoundError`).

LaborApi *apiInstance = [[LaborApi alloc] init];

// Create an new Unit of Labor.
[apiInstance createLaborUnitWith:body
              completionHandler: ^(SystemOfUnits output, NSError* error) {
                            if (output) {
                                NSLog(@"%@", output);
                            }
                            if (error) {
                                NSLog(@"Error: %@", error);
                            }
                        }];
```

**JavaScript**

```js
const Quantity = require('quantity');

const api = new Quantity.LaborApi()

const body = ; // {SystemOfUnits} The new `Unit` object to be added.**Important**: The `name` of the labor `Unit`, i.e., "`work-hour`".**Case-sensitivity**: `name's` value is **case-sensitive**. For example, "`work-hour`" will return data, but "Work-Hour" will result in an HTTP status code of 404 (`NotFoundError`).**Format**: `name's` value must be given in [**kebab case**](https://runkit.com/commonality/59a1c3805d3740001245a72d). For example, "`work-hour`" will return data, but "work hour" (with whitespace) or "`WorkHour`" (in [`PascalCase`](http://wiki.c2.com/?PascalCase)) will result in an HTTP status code of 404 (`NotFoundError`).

const callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.createLaborUnit(body, callback);
```

**C#**

```cs
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class createLaborUnitExample
    {
        public void main()
        {

            const apiInstance = new LaborApi();
            const body = new SystemOfUnits(); // SystemOfUnits | The new `Unit` object to be added.**Important**: The `name` of the labor `Unit`, i.e., "`work-hour`".**Case-sensitivity**: `name's` value is **case-sensitive**. For example, "`work-hour`" will return data, but "Work-Hour" will result in an HTTP status code of 404 (`NotFoundError`).**Format**: `name's` value must be given in [**kebab case**](https://runkit.com/commonality/59a1c3805d3740001245a72d). For example, "`work-hour`" will return data, but "work hour" (with whitespace) or "`WorkHour`" (in [`PascalCase`](http://wiki.c2.com/?PascalCase)) will result in an HTTP status code of 404 (`NotFoundError`).

            try
            {
                // Create an new Unit of Labor.
                SystemOfUnits result = apiInstance.createLaborUnit(body);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling LaborApi.createLaborUnit: " + e.Message );
            }
        }
    }
}
```

**PHP**

```php
**Important**: The `name` of the labor `Unit`, i.e., "`work-hour`".**Case-sensitivity**: `name's` value is **case-sensitive**. For example, "`work-hour`" will return data, but "Work-Hour" will result in an HTTP status code of 404 (`NotFoundError`).**Format**: `name's` value must be given in [**kebab case**](https://runkit.com/commonality/59a1c3805d3740001245a72d). For example, "`work-hour`" will return data, but "work hour" (with whitespace) or "`WorkHour`" (in [`PascalCase`](http://wiki.c2.com/?PascalCase)) will result in an HTTP status code of 404 (`NotFoundError`).

try {
    $result = $api_instance->createLaborUnit($body);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling LaborApi->createLaborUnit: ', $e->getMessage(), PHP_EOL;
}
?>
```

**Perl**

```perl
use Data::Dumper;
use WWW::SwaggerClient::Configuration;
use WWW::SwaggerClient::LaborApi;

my $api_instance = WWW::SwaggerClient::LaborApi->new();
my $body = WWW::SwaggerClient::Object::SystemOfUnits->new(); # SystemOfUnits | The new `Unit` object to be added.**Important**: The `name` of the labor `Unit`, i.e., "`work-hour`".**Case-sensitivity**: `name's` value is **case-sensitive**. For example, "`work-hour`" will return data, but "Work-Hour" will result in an HTTP status code of 404 (`NotFoundError`).**Format**: `name's` value must be given in [**kebab case**](https://runkit.com/commonality/59a1c3805d3740001245a72d). For example, "`work-hour`" will return data, but "work hour" (with whitespace) or "`WorkHour`" (in [`PascalCase`](http://wiki.c2.com/?PascalCase)) will result in an HTTP status code of 404 (`NotFoundError`).

eval {
    my $result = $api_instance->createLaborUnit(body => $body);
    print Dumper($result);
};
if ($@) {
    warn "Exception when calling LaborApi->createLaborUnit: $@\n";
}
```

**Python**

```python
from __future__ import print_statement
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

## create an instance of the API class
api_instance = swagger_client.LaborApi()
body =  # SystemOfUnits | The new `Unit` object to be added.**Important**: The `name` of the labor `Unit`, i.e., "`work-hour`".**Case-sensitivity**: `name's` value is **case-sensitive**. For example, "`work-hour`" will return data, but "Work-Hour" will result in an HTTP status code of 404 (`NotFoundError`).**Format**: `name's` value must be given in [**kebab case**](https://runkit.com/commonality/59a1c3805d3740001245a72d). For example, "`work-hour`" will return data, but "work hour" (with whitespace) or "`WorkHour`" (in [`PascalCase`](http://wiki.c2.com/?PascalCase)) will result in an HTTP status code of 404 (`NotFoundError`).

try:
    # Create an new Unit of Labor.
    api_response = api_instance.create_labor_unit(body)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling LaborApi->createLaborUnit: %s\n" % e)
```

#### Parameters

Body parameters

| Name | Description |
| --- | --- |
| body * |  |

#### Responses

#####  Status: 201 - Created

* [Schema](#responses-createlaborunit-201-schema)

***

### `getLaborUnitByName`
> Retrieve a metric or unit by name.

The `name` of the labor `Unit`, i.e., "`work-hour`".

* **Case-sensitivity**: `name's` value is **case-sensitive**. For example, "`work-hour`" will return data, but "Work-Hour" will result in an HTTP status code of 404 (`NotFoundError`).
* **Format**: `name's` value must be given in [kebab case](https://runkit.com/commonality/59a1c3805d3740001245a72d). For example, "`work-hour`" will return data, but "work hour" (with whitespace) or "`WorkHour`" (in [`PascalCase`](http://wiki.c2.com/?PascalCase)) will result in an HTTP status code of 404 (`NotFoundError`).

```
GET /systems-of-units/labor/{name}
```

#### Usage and SDK Samples

**Curl**

```bash
curl -X GET "http://api.swindle.net/archetypes/v1/quantities/systems-of-units/labor/{name}"
```

**Java**

```java
import io.swagger.client.*;
import io.swagger.client.auth.*;
import io.swagger.client.model.*;
import io.swagger.client.api.LaborApi;

import java.io.File;
import java.util.*;

public class LaborApiExample {

    public static void main(String[] args) {

        LaborApi apiInstance = new LaborApi();
        String name = name_example; // String | The `name` of the labor `Unit`, i.e., "`work-hour`".**Case-sensitivity**: `name's` value is **case-sensitive**. For example, "`work-hour`" will return data, but "Work-Hour" will result in an HTTP status code of 404 (`NotFoundError`).**Format**: `name's` value must be given in [**kebab case**](https://runkit.com/commonality/59a1c3805d3740001245a72d). For example, "`work-hour`" will return data, but "work hour" (with whitespace) or "`WorkHour`" (in [`PascalCase`](http://wiki.c2.com/?PascalCase)) will result in an HTTP status code of 404 (`NotFoundError`).
        try {
            Unit result = apiInstance.getLaborUnitByName(name);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling LaborApi#getLaborUnitByName");
            e.printStackTrace();
        }
    }
}
```

**Android**

```java
import io.swagger.client.api.LaborApi;

public class LaborApiExample {

    public static void main(String[] args) {
        LaborApi apiInstance = new LaborApi();
        String name = name_example; // String | The `name` of the labor `Unit`, i.e., "`work-hour`".**Case-sensitivity**: `name's` value is **case-sensitive**. For example, "`work-hour`" will return data, but "Work-Hour" will result in an HTTP status code of 404 (`NotFoundError`).**Format**: `name's` value must be given in [**kebab case**](https://runkit.com/commonality/59a1c3805d3740001245a72d). For example, "`work-hour`" will return data, but "work hour" (with whitespace) or "`WorkHour`" (in [`PascalCase`](http://wiki.c2.com/?PascalCase)) will result in an HTTP status code of 404 (`NotFoundError`).
        try {
            Unit result = apiInstance.getLaborUnitByName(name);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling LaborApi#getLaborUnitByName");
            e.printStackTrace();
        }
    }
}
```


**Objective-C**

```cpp
String *name = name_example; // The `name` of the labor `Unit`, i.e., "`work-hour`".**Case-sensitivity**: `name's` value is **case-sensitive**. For example, "`work-hour`" will return data, but "Work-Hour" will result in an HTTP status code of 404 (`NotFoundError`).**Format**: `name's` value must be given in [**kebab case**](https://runkit.com/commonality/59a1c3805d3740001245a72d). For example, "`work-hour`" will return data, but "work hour" (with whitespace) or "`WorkHour`" (in [`PascalCase`](http://wiki.c2.com/?PascalCase)) will result in an HTTP status code of 404 (`NotFoundError`).

LaborApi *apiInstance = [[LaborApi alloc] init];

// Retrieve a metric or unit by name.
[apiInstance getLaborUnitByNameWith:name
              completionHandler: ^(Unit output, NSError* error) {
                            if (output) {
                                NSLog(@"%@", output);
                            }
                            if (error) {
                                NSLog(@"Error: %@", error);
                            }
                        }];
```


**JavaScript**

```js
const Quantity = require('quantity');

const api = new Quantity.LaborApi()

const name = name_example; // {String} The `name` of the labor `Unit`, i.e., "`work-hour`".**Case-sensitivity**: `name's` value is **case-sensitive**. For example, "`work-hour`" will return data, but "Work-Hour" will result in an HTTP status code of 404 (`NotFoundError`).**Format**: `name's` value must be given in [**kebab case**](https://runkit.com/commonality/59a1c3805d3740001245a72d). For example, "`work-hour`" will return data, but "work hour" (with whitespace) or "`WorkHour`" (in [`PascalCase`](http://wiki.c2.com/?PascalCase)) will result in an HTTP status code of 404 (`NotFoundError`).

const callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.getLaborUnitByName(name, callback);
```


**C#**

```cs
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class getLaborUnitByNameExample
    {
        public void main()
        {

            const apiInstance = new LaborApi();
            const name = name_example;  // String | The `name` of the labor `Unit`, i.e., "`work-hour`".**Case-sensitivity**: `name's` value is **case-sensitive**. For example, "`work-hour`" will return data, but "Work-Hour" will result in an HTTP status code of 404 (`NotFoundError`).**Format**: `name's` value must be given in [**kebab case**](https://runkit.com/commonality/59a1c3805d3740001245a72d). For example, "`work-hour`" will return data, but "work hour" (with whitespace) or "`WorkHour`" (in [`PascalCase`](http://wiki.c2.com/?PascalCase)) will result in an HTTP status code of 404 (`NotFoundError`).

            try
            {
                // Retrieve a metric or unit by name.
                Unit result = apiInstance.getLaborUnitByName(name);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling LaborApi.getLaborUnitByName: " + e.Message );
            }
        }
    }
}
```


**PHP**

```php
**Case-sensitivity**: `name's` value is **case-sensitive**. For example, "`work-hour`" will return data, but "Work-Hour" will result in an HTTP status code of 404 (`NotFoundError`).**Format**: `name's` value must be given in [**kebab case**](https://runkit.com/commonality/59a1c3805d3740001245a72d). For example, "`work-hour`" will return data, but "work hour" (with whitespace) or "`WorkHour`" (in [`PascalCase`](http://wiki.c2.com/?PascalCase)) will result in an HTTP status code of 404 (`NotFoundError`).

try {
    $result = $api_instance->getLaborUnitByName($name);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling LaborApi->getLaborUnitByName: ', $e->getMessage(), PHP_EOL;
}
?>
```


**Perl**

```perl
use Data::Dumper;
use WWW::SwaggerClient::Configuration;
use WWW::SwaggerClient::LaborApi;

my $api_instance = WWW::SwaggerClient::LaborApi->new();
my $name = name_example; # String | The `name` of the labor `Unit`, i.e., "`work-hour`".**Case-sensitivity**: `name's` value is **case-sensitive**. For example, "`work-hour`" will return data, but "Work-Hour" will result in an HTTP status code of 404 (`NotFoundError`).**Format**: `name's` value must be given in [**kebab case**](https://runkit.com/commonality/59a1c3805d3740001245a72d). For example, "`work-hour`" will return data, but "work hour" (with whitespace) or "`WorkHour`" (in [`PascalCase`](http://wiki.c2.com/?PascalCase)) will result in an HTTP status code of 404 (`NotFoundError`).

eval {
    my $result = $api_instance->getLaborUnitByName(name => $name);
    print Dumper($result);
};
if ($@) {
    warn "Exception when calling LaborApi->getLaborUnitByName: $@\n";
}
```


**Python**

```python
from __future__ import print_statement
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

## create an instance of the API class
api_instance = swagger_client.LaborApi()
name = name_example # String | The `name` of the labor `Unit`, i.e., "`work-hour`".**Case-sensitivity**: `name's` value is **case-sensitive**. For example, "`work-hour`" will return data, but "Work-Hour" will result in an HTTP status code of 404 (`NotFoundError`).**Format**: `name's` value must be given in [**kebab case**](https://runkit.com/commonality/59a1c3805d3740001245a72d). For example, "`work-hour`" will return data, but "work hour" (with whitespace) or "`WorkHour`" (in [`PascalCase`](http://wiki.c2.com/?PascalCase)) will result in an HTTP status code of 404 (`NotFoundError`).

try:
    # Retrieve a metric or unit by name.
    api_response = api_instance.get_labor_unit_by_name(name)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling LaborApi->getLaborUnitByName: %s\n" % e)
```

#### Parameters

Path parameters

| Name | Description |
| --- | --- |
| name* |String The `name` of the labor `Unit`, i.e., "`work-hour`".<ul><li>**Case-sensitivity**: `name's` value is **case-sensitive**. For example, "`work-hour`" will return data, but "Work-Hour" will result in an HTTP status code of 404 (`NotFoundError`).<li>**Format**: `name's` value must be given in [**kebab case**](https://runkit.com/commonality/59a1c3805d3740001245a72d). For example, "`work-hour`" will return data, but "work hour" (with whitespace) or "`WorkHour`" (in [`PascalCase`](http://wiki.c2.com/?PascalCase)) will result in an HTTP status code of 404 (`NotFoundError`). Required |

#### Responses

#####  Status: 200 - OK

* [Schema](#responses-getlaborunitbyname-200-schema)

***

## `SIInternationalSystemOfUnits`

### `getSiBaseUnitByName`

Retrieve a metric or unit by its SI name.

Retrieve a specific `SiBaseUnit` using its `name` property's _case-sensitive_ value.

```
GET /systems-of-units/SI/base-units/{name}
```

#### Usage and SDK Samples

**Curl**

```bash
curl -X GET "http://api.swindle.net/archetypes/v1/quantities/systems-of-units/SI/base-units/{name}"
```

**Java**

```java
import io.swagger.client.*;
import io.swagger.client.auth.*;
import io.swagger.client.model.*;
import io.swagger.client.api.SIInternationalSystemOfUnitsApi;

import java.io.File;
import java.util.*;

public class SIInternationalSystemOfUnitsApiExample {

    public static void main(String[] args) {

        SIInternationalSystemOfUnitsApi apiInstance = new SIInternationalSystemOfUnitsApi();
        String name = name_example; // String | The `name` of the `SiBaseUnit`, e.g., "`metric`".**Case-sensitivity**: `name's` value is **case-sensitive**. For example, "`ampere`" will return data, but capitalized "`Meter`" will result in an HTTP status code of 404 (`NotFoundError`).
        try {
            SiBaseUnit result = apiInstance.getSiBaseUnitByName(name);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling SIInternationalSystemOfUnitsApi#getSiBaseUnitByName");
            e.printStackTrace();
        }
    }
}
```

**Android**

```java
import io.swagger.client.api.SIInternationalSystemOfUnitsApi;

public class SIInternationalSystemOfUnitsApiExample {

    public static void main(String[] args) {
        SIInternationalSystemOfUnitsApi apiInstance = new SIInternationalSystemOfUnitsApi();
        String name = name_example; // String | The `name` of the `SiBaseUnit`, e.g., "`metric`".**Case-sensitivity**: `name's` value is **case-sensitive**. For example, "`ampere`" will return data, but capitalized "`Meter`" will result in an HTTP status code of 404 (`NotFoundError`).
        try {
            SiBaseUnit result = apiInstance.getSiBaseUnitByName(name);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling SIInternationalSystemOfUnitsApi#getSiBaseUnitByName");
            e.printStackTrace();
        }
    }
}
```

**Objective-C**

```cpp
String *name = name_example; // The `name` of the `SiBaseUnit`, e.g., "`metric`".**Case-sensitivity**: `name's` value is **case-sensitive**. For example, "`ampere`" will return data, but capitalized "`Meter`" will result in an HTTP status code of 404 (`NotFoundError`).

SIInternationalSystemOfUnitsApi *apiInstance = [[SIInternationalSystemOfUnitsApi alloc] init];

// Retrieve a metric or unit by its SI name.
[apiInstance getSiBaseUnitByNameWith:name
              completionHandler: ^(SiBaseUnit output, NSError* error) {
                            if (output) {
                                NSLog(@"%@", output);
                            }
                            if (error) {
                                NSLog(@"Error: %@", error);
                            }
                        }];
```

**JavaScript**

```js
const Quantity = require('quantity');

const api = new Quantity.SIInternationalSystemOfUnitsApi()

const name = name_example; // {String} The `name` of the `SiBaseUnit`, e.g., "`metric`".**Case-sensitivity**: `name's` value is **case-sensitive**. For example, "`ampere`" will return data, but capitalized "`Meter`" will result in an HTTP status code of 404 (`NotFoundError`).

const callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.getSiBaseUnitByName(name, callback);
```

**C#**

```cs
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class getSiBaseUnitByNameExample
    {
        public void main()
        {

            const apiInstance = new SIInternationalSystemOfUnitsApi();
            const name = name_example;  // String | The `name` of the `SiBaseUnit`, e.g., "`metric`".**Case-sensitivity**: `name's` value is **case-sensitive**. For example, "`ampere`" will return data, but capitalized "`Meter`" will result in an HTTP status code of 404 (`NotFoundError`).

            try
            {
                // Retrieve a metric or unit by its SI name.
                SiBaseUnit result = apiInstance.getSiBaseUnitByName(name);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling SIInternationalSystemOfUnitsApi.getSiBaseUnitByName: " + e.Message );
            }
        }
    }
}
```

**PHP**

```php
**Case-sensitivity**: `name's` value is **case-sensitive**. For example, "`ampere`" will return data, but capitalized "`Meter`" will result in an HTTP status code of 404 (`NotFoundError`).

try {
    $result = $api_instance->getSiBaseUnitByName($name);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling SIInternationalSystemOfUnitsApi->getSiBaseUnitByName: ', $e->getMessage(), PHP_EOL;
}
?>
```


**Perl**

```perl
use Data::Dumper;
use WWW::SwaggerClient::Configuration;
use WWW::SwaggerClient::SIInternationalSystemOfUnitsApi;

my $api_instance = WWW::SwaggerClient::SIInternationalSystemOfUnitsApi->new();
my $name = name_example; # String | The `name` of the `SiBaseUnit`, e.g., "`metric`".**Case-sensitivity**: `name's` value is **case-sensitive**. For example, "`ampere`" will return data, but capitalized "`Meter`" will result in an HTTP status code of 404 (`NotFoundError`).

eval {
    my $result = $api_instance->getSiBaseUnitByName(name => $name);
    print Dumper($result);
};
if ($@) {
    warn "Exception when calling SIInternationalSystemOfUnitsApi->getSiBaseUnitByName: $@\n";
}
```

**Python**

```python
from __future__ import print_statement
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

## create an instance of the API class
api_instance = swagger_client.SIInternationalSystemOfUnitsApi()
name = name_example # String | The `name` of the `SiBaseUnit`, e.g., "`metric`".**Case-sensitivity**: `name's` value is **case-sensitive**. For example, "`ampere`" will return data, but capitalized "`Meter`" will result in an HTTP status code of 404 (`NotFoundError`).

try:
    # Retrieve a metric or unit by its SI name.
    api_response = api_instance.get_si_base_unit_by_name(name)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling SIInternationalSystemOfUnitsApi->getSiBaseUnitByName: %s\n" % e)
```

#### Parameters

Path parameters

| Name | Description |
| --- | --- |
| name* |String The `name` of the `SiBaseUnit`, e.g., "`metric`".<br><br>**Case-sensitivity**: `name's` value is **case-sensitive**. For example, "`ampere`" will return data, but capitalized "`Meter`" will result in an HTTP status code of 404 (`NotFoundError`). Required |

#### Responses

#####  Status: 200 - OK

* [Schema](#responses-getsibaseunitbyname-200-schema)

***

## `SystemsOfUnits`

### `createSystemOfUnits`
> Create a new `SystemOfUnits`.

```
POST /systems-of-units
```

#### Usage and SDK Samples

**Curl**

```bash
curl -X POST "http://api.swindle.net/archetypes/v1/quantities/systems-of-units"
```


**Java**

```java
import io.swagger.client.*;
import io.swagger.client.auth.*;
import io.swagger.client.model.*;
import io.swagger.client.api.SystemsOfUnitsApi;

import java.io.File;
import java.util.*;

public class SystemsOfUnitsApiExample {

    public static void main(String[] args) {

        SystemsOfUnitsApi apiInstance = new SystemsOfUnitsApi();
        SystemOfUnits body = ; // SystemOfUnits | The `SystemOfUnits` to be added.
        try {
            SystemOfUnits result = apiInstance.createSystemOfUnits(body);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling SystemsOfUnitsApi#createSystemOfUnits");
            e.printStackTrace();
        }
    }
}
```


**Android**

```java
import io.swagger.client.api.SystemsOfUnitsApi;

public class SystemsOfUnitsApiExample {

    public static void main(String[] args) {
        SystemsOfUnitsApi apiInstance = new SystemsOfUnitsApi();
        SystemOfUnits body = ; // SystemOfUnits | The `SystemOfUnits` to be added.
        try {
            SystemOfUnits result = apiInstance.createSystemOfUnits(body);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling SystemsOfUnitsApi#createSystemOfUnits");
            e.printStackTrace();
        }
    }
}
```


**Objective-C**

```cpp
SystemOfUnits *body = ; // The `SystemOfUnits` to be added.

SystemsOfUnitsApi *apiInstance = [[SystemsOfUnitsApi alloc] init];

// Create an new SystemOfUnits.
[apiInstance createSystemOfUnitsWith:body
              completionHandler: ^(SystemOfUnits output, NSError* error) {
                            if (output) {
                                NSLog(@"%@", output);
                            }
                            if (error) {
                                NSLog(@"Error: %@", error);
                            }
                        }];
```


**JavaScript**

```js
const Quantity = require('quantity');

const api = new Quantity.SystemsOfUnitsApi()

const body = ; // {SystemOfUnits} The `SystemOfUnits` to be added.

const callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.createSystemOfUnits(body, callback);
```


**C#**

```cs
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class createSystemOfUnitsExample
    {
        public void main()
        {

            const apiInstance = new SystemsOfUnitsApi();
            const body = new SystemOfUnits(); // SystemOfUnits | The `SystemOfUnits` to be added.

            try
            {
                // Create an new SystemOfUnits.
                SystemOfUnits result = apiInstance.createSystemOfUnits(body);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling SystemsOfUnitsApi.createSystemOfUnits: " + e.Message );
            }
        }
    }
}
```


**PHP**

```php
createSystemOfUnits($body);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling SystemsOfUnitsApi->createSystemOfUnits: ', $e->getMessage(), PHP_EOL;
}
?>
```


**Perl**

```perl
use Data::Dumper;
use WWW::SwaggerClient::Configuration;
use WWW::SwaggerClient::SystemsOfUnitsApi;

my $api_instance = WWW::SwaggerClient::SystemsOfUnitsApi->new();
my $body = WWW::SwaggerClient::Object::SystemOfUnits->new(); # SystemOfUnits | The `SystemOfUnits` to be added.

eval {
    my $result = $api_instance->createSystemOfUnits(body => $body);
    print Dumper($result);
};
if ($@) {
    warn "Exception when calling SystemsOfUnitsApi->createSystemOfUnits: $@\n";
}
```


**Python**

```python
from __future__ import print_statement
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

## create an instance of the API class
api_instance = swagger_client.SystemsOfUnitsApi()
body =  # SystemOfUnits | The `SystemOfUnits` to be added.

try:
    # Create an new SystemOfUnits.
    api_response = api_instance.create_system_of_units(body)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling SystemsOfUnitsApi->createSystemOfUnits: %s\n" % e)
```

#### Parameters

Body parameters

| Name | Description |
| --- | --- |
| body * |  |

#### Responses

#####  Status: 201 - Created

* [Schema](#responses-createsystemofunits-201-schema)

***

### `getSystemOfUnitsByName`

Retrieve a specific `SystemOfUnits` using its `nameOfSystem` property's _case-sensitive_ value.


```
GET /systems-of-units/{name-of-system}
```

#### Usage and SDK Samples

**Curl**

```bash
curl -X GET "http://api.swindle.net/archetypes/v1/quantities/systems-of-units/{name-of-system}"
```


**Java**

```java
import io.swagger.client.*;
import io.swagger.client.auth.*;
import io.swagger.client.model.*;
import io.swagger.client.api.SystemsOfUnitsApi;

import java.io.File;
import java.util.*;

public class SystemsOfUnitsApiExample {

    public static void main(String[] args) {

        SystemsOfUnitsApi apiInstance = new SystemsOfUnitsApi();
        String nameOfSystem = nameOfSystem_example; // String | The name of the system of units, e.g., "SI" for the International System of Units (SI). **Case-sensitivity**: `name-of-system's` value is **case-sensitive**. For example, "SI" will return data, but lower-case "si" will result in an HTTP status code of 404 (`NotFoundError`).
        try {
            SystemOfUnits result = apiInstance.getSystemOfUnitsByName(nameOfSystem);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling SystemsOfUnitsApi#getSystemOfUnitsByName");
            e.printStackTrace();
        }
    }
}
```


**Android**

```java
import io.swagger.client.api.SystemsOfUnitsApi;

public class SystemsOfUnitsApiExample {

    public static void main(String[] args) {
        SystemsOfUnitsApi apiInstance = new SystemsOfUnitsApi();
        String nameOfSystem = nameOfSystem_example; // String | The name of the system of units, e.g., "SI" for the International System of Units (SI). **Case-sensitivity**: `name-of-system's` value is **case-sensitive**. For example, "SI" will return data, but lower-case "si" will result in an HTTP status code of 404 (`NotFoundError`).
        try {
            SystemOfUnits result = apiInstance.getSystemOfUnitsByName(nameOfSystem);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling SystemsOfUnitsApi#getSystemOfUnitsByName");
            e.printStackTrace();
        }
    }
}
```


**Objective-C**

```cpp
String *nameOfSystem = nameOfSystem_example; // The name of the system of units, e.g., "SI" for the International System of Units (SI). **Case-sensitivity**: `name-of-system's` value is **case-sensitive**. For example, "SI" will return data, but lower-case "si" will result in an HTTP status code of 404 (`NotFoundError`).

SystemsOfUnitsApi *apiInstance = [[SystemsOfUnitsApi alloc] init];

// Retrieve a specific system of units by name.
[apiInstance getSystemOfUnitsByNameWith:nameOfSystem
              completionHandler: ^(SystemOfUnits output, NSError* error) {
                            if (output) {
                                NSLog(@"%@", output);
                            }
                            if (error) {
                                NSLog(@"Error: %@", error);
                            }
                        }];
```


**JavaScript**

```js
const Quantity = require('quantity');

const api = new Quantity.SystemsOfUnitsApi()

const nameOfSystem = nameOfSystem_example; // {String} The name of the system of units, e.g., "SI" for the International System of Units (SI). **Case-sensitivity**: `name-of-system's` value is **case-sensitive**. For example, "SI" will return data, but lower-case "si" will result in an HTTP status code of 404 (`NotFoundError`).

const callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.getSystemOfUnitsByName(nameOfSystem, callback);
```


**C#**

```cs
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class getSystemOfUnitsByNameExample
    {
        public void main()
        {

            const apiInstance = new SystemsOfUnitsApi();
            const nameOfSystem = nameOfSystem_example;  // String | The name of the system of units, e.g., "SI" for the International System of Units (SI). **Case-sensitivity**: `name-of-system's` value is **case-sensitive**. For example, "SI" will return data, but lower-case "si" will result in an HTTP status code of 404 (`NotFoundError`).

            try
            {
                // Retrieve a specific system of units by name.
                SystemOfUnits result = apiInstance.getSystemOfUnitsByName(nameOfSystem);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling SystemsOfUnitsApi.getSystemOfUnitsByName: " + e.Message );
            }
        }
    }
}
```


**PHP**

```php
**Case-sensitivity**: `name-of-system's` value is **case-sensitive**. For example, "SI" will return data, but lower-case "si" will result in an HTTP status code of 404 (`NotFoundError`).

try {
    $result = $api_instance->getSystemOfUnitsByName($nameOfSystem);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling SystemsOfUnitsApi->getSystemOfUnitsByName: ', $e->getMessage(), PHP_EOL;
}
?>
```


**Perl**

```perl
use Data::Dumper;
use WWW::SwaggerClient::Configuration;
use WWW::SwaggerClient::SystemsOfUnitsApi;

my $api_instance = WWW::SwaggerClient::SystemsOfUnitsApi->new();
my $nameOfSystem = nameOfSystem_example; # String | The name of the system of units, e.g., "SI" for the International System of Units (SI). **Case-sensitivity**: `name-of-system's` value is **case-sensitive**. For example, "SI" will return data, but lower-case "si" will result in an HTTP status code of 404 (`NotFoundError`).

eval {
    my $result = $api_instance->getSystemOfUnitsByName(nameOfSystem => $nameOfSystem);
    print Dumper($result);
};
if ($@) {
    warn "Exception when calling SystemsOfUnitsApi->getSystemOfUnitsByName: $@\n";
}
```


**Python**

```python
from __future__ import print_statement
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

## create an instance of the API class
api_instance = swagger_client.SystemsOfUnitsApi()
nameOfSystem = nameOfSystem_example # String | The name of the system of units, e.g., "SI" for the International System of Units (SI). **Case-sensitivity**: `name-of-system's` value is **case-sensitive**. For example, "SI" will return data, but lower-case "si" will result in an HTTP status code of 404 (`NotFoundError`).

try:
    # Retrieve a specific system of units by name.
    api_response = api_instance.get_system_of_units_by_name(nameOfSystem)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling SystemsOfUnitsApi->getSystemOfUnitsByName: %s\n" % e)
```

#### Parameters

Path parameters

| Name | Description |
| --- | --- |
| name-of-system* |String The name of the system of units, e.g., "SI" for the International System of Units (SI). <br><br>**Case-sensitivity**: `name-of-system's` value is **case-sensitive**. For example, "SI" will return data, but lower-case "si" will result in an HTTP status code of 404 (`NotFoundError`). Required |

#### Responses

#####  Status: 200 - OK

* [Schema](#responses-getsystemofunitsbyname-200-schema)

***

### `getSystemsOfUnits`
> Retrieve a list of all `SystemOfUnits`.


```
GET /systems-of-units
```

**Curl**

```bash
curl -X GET "http://api.swindle.net/archetypes/v1/quantities/systems-of-units"
```


**Java**

```java
import io.swagger.client.*;
import io.swagger.client.auth.*;
import io.swagger.client.model.*;
import io.swagger.client.api.SystemsOfUnitsApi;

import java.io.File;
import java.util.*;

public class SystemsOfUnitsApiExample {

    public static void main(String[] args) {

        SystemsOfUnitsApi apiInstance = new SystemsOfUnitsApi();
        try {
            SystemOfUnits result = apiInstance.getSystemsOfUnits();
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling SystemsOfUnitsApi#getSystemsOfUnits");
            e.printStackTrace();
        }
    }
}
```


**Android**

```java
import io.swagger.client.api.SystemsOfUnitsApi;

public class SystemsOfUnitsApiExample {

    public static void main(String[] args) {
        SystemsOfUnitsApi apiInstance = new SystemsOfUnitsApi();
        try {
            SystemOfUnits result = apiInstance.getSystemsOfUnits();
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling SystemsOfUnitsApi#getSystemsOfUnits");
            e.printStackTrace();
        }
    }
}
```


**Objective-C**

```cpp

SystemsOfUnitsApi *apiInstance = [[SystemsOfUnitsApi alloc] init];

// Retrieve all systems of units.
[apiInstance getSystemsOfUnitsWithCompletionHandler:
              ^(SystemOfUnits output, NSError* error) {
                            if (output) {
                                NSLog(@"%@", output);
                            }
                            if (error) {
                                NSLog(@"Error: %@", error);
                            }
                        }];
```


**JavaScript**

```js
const Quantity = require('quantity');

const api = new Quantity.SystemsOfUnitsApi()

const callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.getSystemsOfUnits(callback);
```


**C#**

```cs
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class getSystemsOfUnitsExample
    {
        public void main()
        {

            const apiInstance = new SystemsOfUnitsApi();

            try
            {
                // Retrieve all systems of units.
                SystemOfUnits result = apiInstance.getSystemsOfUnits();
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling SystemsOfUnitsApi.getSystemsOfUnits: " + e.Message );
            }
        }
    }
}
```


**PHP**

```php
getSystemsOfUnits();
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling SystemsOfUnitsApi->getSystemsOfUnits: ', $e->getMessage(), PHP_EOL;
}
?>
```


**Perl**

```perl
use Data::Dumper;
use WWW::SwaggerClient::Configuration;
use WWW::SwaggerClient::SystemsOfUnitsApi;

my $api_instance = WWW::SwaggerClient::SystemsOfUnitsApi->new();

eval {
    my $result = $api_instance->getSystemsOfUnits();
    print Dumper($result);
};
if ($@) {
    warn "Exception when calling SystemsOfUnitsApi->getSystemsOfUnits: $@\n";
}
```


**Python**

```python
from __future__ import print_statement
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

## create an instance of the API class
api_instance = swagger_client.SystemsOfUnitsApi()

try:
    # Retrieve all systems of units.
    api_response = api_instance.get_systems_of_units()
    pprint(api_response)
except ApiException as e:
    print("Exception when calling SystemsOfUnitsApi->getSystemsOfUnits: %s\n" % e)
```

#### Parameters

#### Responses

#####  Status: 200 - OK

* [Schema](#responses-getsystemsofunits-200-schema)

***

Suggestions, contact, support and error reporting;
Information URL: [https://github.com/commonality](https://github.com/commonality)
Contact Info: [hello@helloreverb.com](hello@helloreverb.com)

Apache License 2.0 http://www.apache.org/licenses/LICENSE-2.0.html Generated 2017-09-05T08:15:28.357Z


[icon-rest-client-image]: /docs/img/icon-rest-client.png
[logo-commonalaxy-image]: /docs/img/logo-commonalaxy.png
[mda-book-url]: https://www.amazon.com/Enterprise-Patterns-MDA-Building-Archetype/dp/032111230X
[quote-left-image]: /docs/img/quote-left-25.png
[icon-rest-api-image]: /docs/img/icon-rest-api.png
[swagger-ui-party-url]: http://api.swindle.net/swagger-ui/#/
