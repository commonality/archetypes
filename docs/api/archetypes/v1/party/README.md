![Business archetypes logo][logo-commonalaxy-image]

# `Party` API and SDK Documentation  <small> ⍟ v1.0.0</small>
> The `Party` archetype represents an identifiable, addressable entity that may have a legal status and that normally has autonomous control over (at least some of) its actions.

## Table of contents

<!-- toc -->

- [Standards compliance](#standards-compliance)
- [Resources](#resources)
- [Business archetypes defined](#business-archetypes-defined)
- [Explore other business archetype patterns](#explore-other-business-archetype-patterns)
- [`Organizations` API](#organizations-api)
  * [`getOrganizationByPartyIdentifier`](#getorganizationbypartyidentifier)
    + [Usage and SDK Samples](#usage-and-sdk-samples)
    + [Parameters](#parameters)
    + [Responses](#responses)
  * [`getOrganizations`](#getorganizations)
    + [Usage and SDK Samples](#usage-and-sdk-samples-1)
    + [Parameters](#parameters-1)
    + [Responses](#responses-1)
- [`Parties` API](#parties-api)
  * [`getParties`](#getparties)
    + [Usage and SDK Samples](#usage-and-sdk-samples-2)
    + [Parameters](#parameters-2)
    + [Responses](#responses-2)
  * [`getPartyByPartyIdentifier`](#getpartybypartyidentifier)
    + [Usage and SDK Samples](#usage-and-sdk-samples-3)
    + [Parameters](#parameters-3)
    + [Responses](#responses-3)
- [`People` API](#people-api)
  * [`getPeople`](#getpeople)
    + [Usage and SDK Samples](#usage-and-sdk-samples-4)
    + [Parameters](#parameters-4)
    + [Responses](#responses-4)
  * [`getPersonByPartyIdentifier`](#getpersonbypartyidentifier)
    + [Usage and SDK Samples](#usage-and-sdk-samples-5)
    + [Parameters](#parameters-5)
    + [Responses](#responses-5)
- [`Preferences` API](#preferences-api)
  * [`getPreferenceByUniqueIdentifier`](#getpreferencebyuniqueidentifier)
    + [Usage and SDK Samples](#usage-and-sdk-samples-6)
    + [Parameters](#parameters-6)
    + [Responses](#responses-6)
  * [`getPreferences`](#getpreferences)
    + [Usage and SDK Samples](#usage-and-sdk-samples-7)
    + [Parameters](#parameters-7)
    + [Responses](#responses-7)

<!-- tocstop -->

<!-- tocend -->

***

## Standards compliance

| Standard | Contents |
| --- | --- |
| [OMG Party Management Facility Specification](http://www.omg.org/spec/PARTY/1.0/PDF) | A standard that supports party management. |
| [ISO 3166](https://www.iso.org/iso-3166-country-codes.html) | Two- and three-letter country codes and country names. |
| [ISO/IEC 5218:2004](https://www.iso.org/standard/36266.html) | Codes for the representation of human sexes. |
| [ITU-T Recommendations](http://www.itu.int/rec/T-REC-E.164/en) | Telecommunication numbering plan. |

## Resources

| Proposal | Contents |
| --- | --- |
| [63 Genders](https://apath.org/63-genders/) | A proposal for describing Gender as a combination of Physical, Personality and Preferential groups. |


## Business archetypes defined

"A business archetype is a primordial thing that occurs consistently and universally in business domains and business software systems." (Arlow & Neustadt, [_Enterprise patterns and MDA: building better software with archetype patterns and UML_](https://www.amazon.com/Enterprise-Patterns-MDA-Building-Archetype/dp/032111230X), 2006, p. 5)

## Explore other business archetype patterns

[Open a Swagger-UI](http://api.swindle.net/swagger-ui/#/) instance, then copy and paste the following Swagger specification URLs into the "Explore" text field and select the "Explore" button for additional APIs.

1. `Locale`: http://api.swindle.net/archetypes/v1/schemas/locale/locale.swagger.json
2. `Party`: http://api.swindle.net/archetypes/v1/schemas/party/party.swagger.json
3. `Quantity`: http://api.swindle.net/archetypes/v1/schemas/quantity/quantity.swagger.json

***


## `Organizations` API

![API Client][icon-rest-client-image] `Organization`

### `getOrganizationByPartyIdentifier`

Retrieve a specific `Organization` by its unique identifier.


```
GET /organizations/{party-identifier}
```

#### Usage and SDK Samples

**Curl**
```bash
curl -X GET "http://api.swindle.net/archetypes/v1/parties/organizations/{party-identifier}"
```

**Java**

```java
import io.swagger.client.*;
import io.swagger.client.auth.*;
import io.swagger.client.model.*;
import io.swagger.client.api.OrganizationsApi;

import java.io.File;
import java.util.*;

public class OrganizationsApiExample {

    public static void main(String[] args) {

        OrganizationsApi apiInstance = new OrganizationsApi();
        String partyIdentifier = partyIdentifier_example; // String | The unique identifier associated with an Organization.
        try {
            Organization result = apiInstance.getOrganizationByPartyIdentifier(partyIdentifier);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling OrganizationsApi#getOrganizationByPartyIdentifier");
            e.printStackTrace();
        }
    }
}
```

**Android**

```java
import io.swagger.client.api.OrganizationsApi;

public class OrganizationsApiExample {

    public static void main(String[] args) {
        OrganizationsApi apiInstance = new OrganizationsApi();
        String partyIdentifier = partyIdentifier_example; // String | The unique identifier associated with an Organization.
        try {
            Organization result = apiInstance.getOrganizationByPartyIdentifier(partyIdentifier);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling OrganizationsApi#getOrganizationByPartyIdentifier");
            e.printStackTrace();
        }
    }
}
```

**ObjectiveC**

```cpp
String *partyIdentifier = partyIdentifier_example; // The unique identifier associated with an Organization.

OrganizationsApi *apiInstance = [[OrganizationsApi alloc] init];

// Retrieve a specific Organization.
[apiInstance getOrganizationByPartyIdentifierWith:partyIdentifier
              completionHandler: ^(Organization output, NSError* error) {
                            if (output) {
                                NSLog(@"%@", output);
                            }
                            if (error) {
                                NSLog(@"Error: %@", error);
                            }
                        }];
```

**Node.js**

```js
var Party = require('party');

var api = new Party.OrganizationsApi()

var partyIdentifier = partyIdentifier_example; // {String} The unique identifier associated with an Organization.

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.getOrganizationByPartyIdentifier(partyIdentifier, callback);
```

**CSharp**

```cs
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class getOrganizationByPartyIdentifierExample
    {
        public void main()
        {

            var apiInstance = new OrganizationsApi();
            var partyIdentifier = partyIdentifier_example;  // String | The unique identifier associated with an Organization.

            try
            {
                // Retrieve a specific Organization.
                Organization result = apiInstance.getOrganizationByPartyIdentifier(partyIdentifier);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling OrganizationsApi.getOrganizationByPartyIdentifier: " + e.Message );
            }
        }
    }
}
```

**PHP**

```php
getOrganizationByPartyIdentifier($partyIdentifier);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling OrganizationsApi->getOrganizationByPartyIdentifier: ', $e->getMessage(), PHP_EOL;
}
```

**Perl**

```perl
use Data::Dumper;
use WWW::SwaggerClient::Configuration;
use WWW::SwaggerClient::OrganizationsApi;

my $api_instance = WWW::SwaggerClient::OrganizationsApi->new();
my $partyIdentifier = partyIdentifier_example; # String | The unique identifier associated with an Organization.

eval {
    my $result = $api_instance->getOrganizationByPartyIdentifier(partyIdentifier => $partyIdentifier);
    print Dumper($result);
};
if ($@) {
    warn "Exception when calling OrganizationsApi->getOrganizationByPartyIdentifier: $@\n";
}
```

**Python**

```python
from __future__ import print_statement
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.OrganizationsApi()
partyIdentifier = partyIdentifier_example # String | The unique identifier associated with an Organization.

try:
    # Retrieve a specific Organization.
    api_response = api_instance.get_organization_by_party_identifier(partyIdentifier)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling OrganizationsApi->getOrganizationByPartyIdentifier: %s\n" % e)
```

#### Parameters

Path parameters

| Name | Description |
| --- | --- |
| `party-identifier`* |String The unique identifier associated with an `Organization`. Required |

#### Responses

* Status: `200 OK`.
* Status: `400 Bad Request`.
* Status: `401 Unauthorized`.
* Status: `403 Forbidden`.
* Status: `404  Not Found`.
* Status: `405 Method Not Allowed`.

***

![API Client][icon-rest-client-image] `Organization`

### `getOrganizations`

Retrieve all `Organizations`.

```
GET /organizations/
```

#### Usage and SDK Samples

**Curl**

```bash
curl -X GET "http://api.swindle.net/archetypes/v1/parties/organizations/"
```

**Java**

```java
import io.swagger.client.*;
import io.swagger.client.auth.*;
import io.swagger.client.model.*;
import io.swagger.client.api.OrganizationsApi;

import java.io.File;
import java.util.*;

public class OrganizationsApiExample {

    public static void main(String[] args) {

        OrganizationsApi apiInstance = new OrganizationsApi();
        try {
            array[Organization] result = apiInstance.getOrganizations();
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling OrganizationsApi#getOrganizations");
            e.printStackTrace();
        }
    }
}
```

**Android**

```java
import io.swagger.client.api.OrganizationsApi;

public class OrganizationsApiExample {

    public static void main(String[] args) {
        OrganizationsApi apiInstance = new OrganizationsApi();
        try {
            array[Organization] result = apiInstance.getOrganizations();
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling OrganizationsApi#getOrganizations");
            e.printStackTrace();
        }
    }
}
```

**ObjectiveC**

```cpp

OrganizationsApi *apiInstance = [[OrganizationsApi alloc] init];

// Retrieve all Organizations.
[apiInstance getOrganizationsWithCompletionHandler:
              ^(array[Organization] output, NSError* error) {
                            if (output) {
                                NSLog(@"%@", output);
                            }
                            if (error) {
                                NSLog(@"Error: %@", error);
                            }
                        }];
```

**Node.js**

```js
var Party = require('party');

var api = new Party.OrganizationsApi()

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.getOrganizations(callback);
```

**CSharp**

```cs
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class getOrganizationsExample
    {
        public void main()
        {

            var apiInstance = new OrganizationsApi();

            try
            {
                // Retrieve all Organizations.
                array[Organization] result = apiInstance.getOrganizations();
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling OrganizationsApi.getOrganizations: " + e.Message );
            }
        }
    }
}
```

**PHP**

```php
getOrganizations();
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling OrganizationsApi->getOrganizations: ', $e->getMessage(), PHP_EOL;
}
```

**Perl**

```perl
use Data::Dumper;
use WWW::SwaggerClient::Configuration;
use WWW::SwaggerClient::OrganizationsApi;

my $api_instance = WWW::SwaggerClient::OrganizationsApi->new();

eval {
    my $result = $api_instance->getOrganizations();
    print Dumper($result);
};
if ($@) {
    warn "Exception when calling OrganizationsApi->getOrganizations: $@\n";
}
```

**Python**

```python
from __future__ import print_statement
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.OrganizationsApi()

try:
    # Retrieve all Organizations.
    api_response = api_instance.get_organizations()
    pprint(api_response)
except ApiException as e:
    print("Exception when calling OrganizationsApi->getOrganizations: %s\n" % e)
```

#### Parameters

None.

#### Responses

* Status: `200 OK`.
* Status: `400 Bad Request`.
* Status: `401 Unauthorized`.
* Status: `403 Forbidden`.
* Status: `404  Not Found`.
* Status: `405 Method Not Allowed`.

***

## `Parties` API

![API Client][icon-rest-client-image] `Party`

### `getParties`

Retrieve all `Parties`.

```
GET /
```

#### Usage and SDK Samples


**Curl**

```bash
curl -X GET "http://api.swindle.net/archetypes/v1/parties/"
```

**Java**

```java
import io.swagger.client.*;
import io.swagger.client.auth.*;
import io.swagger.client.model.*;
import io.swagger.client.api.PartiesApi;

import java.io.File;
import java.util.*;

public class PartiesApiExample {

    public static void main(String[] args) {

        PartiesApi apiInstance = new PartiesApi();
        try {
            array[inline_response] result = apiInstance.getParties();
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling PartiesApi#getParties");
            e.printStackTrace();
        }
    }
}
```

**Android**

```java
import io.swagger.client.api.PartiesApi;

public class PartiesApiExample {

    public static void main(String[] args) {
        PartiesApi apiInstance = new PartiesApi();
        try {
            array[inline_response] result = apiInstance.getParties();
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling PartiesApi#getParties");
            e.printStackTrace();
        }
    }
}
```

**ObjectiveC**

```cpp
PartiesApi *apiInstance = [[PartiesApi alloc] init];

// Retrieve all Parties.
[apiInstance getPartiesWithCompletionHandler:
              ^(array[inline_response] output, NSError* error) {
                            if (output) {
                                NSLog(@"%@", output);
                            }
                            if (error) {
                                NSLog(@"Error: %@", error);
                            }
                        }];
```

**Node.js**

```js
var Party = require('party');

var api = new Party.PartiesApi()

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.getParties(callback);
```

**CSharp**

```cs
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class getPartiesExample
    {
        public void main()
        {

            var apiInstance = new PartiesApi();

            try
            {
                // Retrieve all Parties.
                array[inline_response] result = apiInstance.getParties();
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling PartiesApi.getParties: " + e.Message );
            }
        }
    }
}
```

**PHP**

```php
getParties();
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling PartiesApi->getParties: ', $e->getMessage(), PHP_EOL;
}

```

**Perl**

```perl
use Data::Dumper;
use WWW::SwaggerClient::Configuration;
use WWW::SwaggerClient::PartiesApi;

my $api_instance = WWW::SwaggerClient::PartiesApi->new();

eval {
    my $result = $api_instance->getParties();
    print Dumper($result);
};
if ($@) {
    warn "Exception when calling PartiesApi->getParties: $@\n";
}
```

**Python**

```python
from __future__ import print_statement
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.PartiesApi()

try:
    # Retrieve all Parties.
    api_response = api_instance.get_parties()
    pprint(api_response)
except ApiException as e:
    print("Exception when calling PartiesApi->getParties: %s\n" % e)
```

#### Parameters

None.

#### Responses

* Status: `200 OK`.
* Status: `400 Bad Request`.
* Status: `401 Unauthorized`.
* Status: `403 Forbidden`.
* Status: `404  Not Found`.
* Status: `405 Method Not Allowed`.

***

![API Client][icon-rest-client-image] `Party`

### `getPartyByPartyIdentifier`

Retrieve a Party by its unique identifier.

```
GET /{party-identifier}
```

#### Usage and SDK Samples

**Curl**

```bash
curl -X GET "http://api.swindle.net/archetypes/v1/parties/{party-identifier}"
```

**Java**

```java
import io.swagger.client.*;
import io.swagger.client.auth.*;
import io.swagger.client.model.*;
import io.swagger.client.api.PartiesApi;

import java.io.File;
import java.util.*;

public class PartiesApiExample {

    public static void main(String[] args) {

        PartiesApi apiInstance = new PartiesApi();
        String partyIdentifier = partyIdentifier_example; // String | The unique identifier of the Party.
        try {
            inline_response result = apiInstance.getPartyByPartyIdentifier(partyIdentifier);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling PartiesApi#getPartyByPartyIdentifier");
            e.printStackTrace();
        }
    }
}
```

**Android**

```java
import io.swagger.client.api.PartiesApi;

public class PartiesApiExample {

    public static void main(String[] args) {
        PartiesApi apiInstance = new PartiesApi();
        String partyIdentifier = partyIdentifier_example; // String | The unique identifier of the Party.
        try {
            inline_response result = apiInstance.getPartyByPartyIdentifier(partyIdentifier);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling PartiesApi#getPartyByPartyIdentifier");
            e.printStackTrace();
        }
    }
}
```

**ObjectiveC**

```cpp
String *partyIdentifier = partyIdentifier_example; // The unique identifier of the Party.

PartiesApi *apiInstance = [[PartiesApi alloc] init];

// Retrieve a specific Party entity.
[apiInstance getPartyByPartyIdentifierWith:partyIdentifier
              completionHandler: ^(inline_response output, NSError* error) {
                            if (output) {
                                NSLog(@"%@", output);
                            }
                            if (error) {
                                NSLog(@"Error: %@", error);
                            }
                        }];
```

**Node.js**

```js
var Party = require('party');

var api = new Party.PartiesApi()

var partyIdentifier = partyIdentifier_example; // {String} The unique identifier of the Party.

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.getPartyByPartyIdentifier(partyIdentifier, callback);
```

**CSharp**

```cs
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class getPartyByPartyIdentifierExample
    {
        public void main()
        {

            var apiInstance = new PartiesApi();
            var partyIdentifier = partyIdentifier_example;  // String | The unique identifier of the Party.

            try
            {
                // Retrieve a specific Party entity.
                inline_response result = apiInstance.getPartyByPartyIdentifier(partyIdentifier);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling PartiesApi.getPartyByPartyIdentifier: " + e.Message );
            }
        }
    }
}
```

**PHP**

```php
getPartyByPartyIdentifier($partyIdentifier);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling PartiesApi->getPartyByPartyIdentifier: ', $e->getMessage(), PHP_EOL;
}

```

**Perl**

```perl
use Data::Dumper;
use WWW::SwaggerClient::Configuration;
use WWW::SwaggerClient::PartiesApi;

my $api_instance = WWW::SwaggerClient::PartiesApi->new();
my $partyIdentifier = partyIdentifier_example; # String | The unique identifier of the Party.

eval {
    my $result = $api_instance->getPartyByPartyIdentifier(partyIdentifier => $partyIdentifier);
    print Dumper($result);
};
if ($@) {
    warn "Exception when calling PartiesApi->getPartyByPartyIdentifier: $@\n";
}
```

**Python**

```python
from __future__ import print_statement
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.PartiesApi()
partyIdentifier = partyIdentifier_example # String | The unique identifier of the Party.

try:
    # Retrieve a specific Party entity.
    api_response = api_instance.get_party_by_party_identifier(partyIdentifier)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling PartiesApi->getPartyByPartyIdentifier: %s\n" % e)
```

#### Parameters

Path parameters

| Name | Description |
| --- | --- |
| `party-identifier`* |String The unique identifier of the `Party`. Required |

#### Responses

* Status: `200 OK`.
* Status: `400 Bad Request`.
* Status: `401 Unauthorized`.
* Status: `403 Forbidden`.
* Status: `404  Not Found`.
* Status: `405 Method Not Allowed`.

***

## `People` API

![API Client][icon-rest-client-image] `Person`

### `getPeople`

Retrieve all `People`.

```
GET /people/
```

#### Usage and SDK Samples

**Curl**

```bash
curl -X GET "http://api.swindle.net/archetypes/v1/parties/people/"
```

**Java**

```java
import io.swagger.client.*;
import io.swagger.client.auth.*;
import io.swagger.client.model.*;
import io.swagger.client.api.PeopleApi;

import java.io.File;
import java.util.*;

public class PeopleApiExample {

    public static void main(String[] args) {

        PeopleApi apiInstance = new PeopleApi();
        try {
            array[Person] result = apiInstance.getPeople();
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling PeopleApi#getPeople");
            e.printStackTrace();
        }
    }
}
```

**Android**

```java
import io.swagger.client.api.PeopleApi;

public class PeopleApiExample {

    public static void main(String[] args) {
        PeopleApi apiInstance = new PeopleApi();
        try {
            array[Person] result = apiInstance.getPeople();
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling PeopleApi#getPeople");
            e.printStackTrace();
        }
    }
}
```

**ObjectiveC**

```cpp
PeopleApi *apiInstance = [[PeopleApi alloc] init];

// Retrieve all People.
[apiInstance getPeopleWithCompletionHandler:
              ^(array[Person] output, NSError* error) {
                            if (output) {
                                NSLog(@"%@", output);
                            }
                            if (error) {
                                NSLog(@"Error: %@", error);
                            }
                        }];
```

**Node.js**

```js
var Party = require('party');

var api = new Party.PeopleApi()

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.getPeople(callback);
```

**CSharp**

```cs
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class getPeopleExample
    {
        public void main()
        {

            var apiInstance = new PeopleApi();

            try
            {
                // Retrieve all People.
                array[Person] result = apiInstance.getPeople();
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling PeopleApi.getPeople: " + e.Message );
            }
        }
    }
}
```

**PHP**

```php
getPeople();
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling PeopleApi->getPeople: ', $e->getMessage(), PHP_EOL;
}

```

**Perl**

```perl
use Data::Dumper;
use WWW::SwaggerClient::Configuration;
use WWW::SwaggerClient::PeopleApi;

my $api_instance = WWW::SwaggerClient::PeopleApi->new();

eval {
    my $result = $api_instance->getPeople();
    print Dumper($result);
};
if ($@) {
    warn "Exception when calling PeopleApi->getPeople: $@\n";
}
```

**Python**

```python
from __future__ import print_statement
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.PeopleApi()

try:
    # Retrieve all People.
    api_response = api_instance.get_people()
    pprint(api_response)
except ApiException as e:
    print("Exception when calling PeopleApi->getPeople: %s\n" % e)
```

#### Parameters

None.

#### Responses

* Status: `200 OK`.
* Status: `400 Bad Request`.
* Status: `401 Unauthorized`.
* Status: `403 Forbidden`.
* Status: `404  Not Found`.
* Status: `405 Method Not Allowed`.

***

![API Client][icon-rest-client-image] `Person`

### `getPersonByPartyIdentifier`

Retrieve a `Person` by their unique identifier.

```
GET /people/{party-identifier}
```

#### Usage and SDK Samples

**Curl**

```bash
curl -X GET "http://api.swindle.net/archetypes/v1/parties/people/{party-identifier}"
```

**Java**

```java
import io.swagger.client.*;
import io.swagger.client.auth.*;
import io.swagger.client.model.*;
import io.swagger.client.api.PeopleApi;

import java.io.File;
import java.util.*;

public class PeopleApiExample {

    public static void main(String[] args) {

        PeopleApi apiInstance = new PeopleApi();
        String partyIdentifier = partyIdentifier_example; // String | The unique identifier associated with a Person.
        try {
            Person result = apiInstance.getPersonByPartyIdentifier(partyIdentifier);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling PeopleApi#getPersonByPartyIdentifier");
            e.printStackTrace();
        }
    }
}
```

**Android**

```java
import io.swagger.client.api.PeopleApi;

public class PeopleApiExample {

    public static void main(String[] args) {
        PeopleApi apiInstance = new PeopleApi();
        String partyIdentifier = partyIdentifier_example; // String | The unique identifier associated with a Person.
        try {
            Person result = apiInstance.getPersonByPartyIdentifier(partyIdentifier);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling PeopleApi#getPersonByPartyIdentifier");
            e.printStackTrace();
        }
    }
}
```

**ObjectiveC**

```cpp
String *partyIdentifier = partyIdentifier_example; // The unique identifier associated with a Person.

PeopleApi *apiInstance = [[PeopleApi alloc] init];

// Retrieve a specific Person entity.
[apiInstance getPersonByPartyIdentifierWith:partyIdentifier
              completionHandler: ^(Person output, NSError* error) {
                            if (output) {
                                NSLog(@"%@", output);
                            }
                            if (error) {
                                NSLog(@"Error: %@", error);
                            }
                        }];
```

**Node.js**

```js
var Party = require('party');

var api = new Party.PeopleApi()

var partyIdentifier = partyIdentifier_example; // {String} The unique identifier associated with a Person.

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.getPersonByPartyIdentifier(partyIdentifier, callback);
```

**CSharp**

```cs
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class getPersonByPartyIdentifierExample
    {
        public void main()
        {

            var apiInstance = new PeopleApi();
            var partyIdentifier = partyIdentifier_example;  // String | The unique identifier associated with a Person.

            try
            {
                // Retrieve a specific Person entity.
                Person result = apiInstance.getPersonByPartyIdentifier(partyIdentifier);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling PeopleApi.getPersonByPartyIdentifier: " + e.Message );
            }
        }
    }
}
```

**PHP**

```php
getPersonByPartyIdentifier($partyIdentifier);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling PeopleApi->getPersonByPartyIdentifier: ', $e->getMessage(), PHP_EOL;
}

```

**Perl**

```perl
use Data::Dumper;
use WWW::SwaggerClient::Configuration;
use WWW::SwaggerClient::PeopleApi;

my $api_instance = WWW::SwaggerClient::PeopleApi->new();
my $partyIdentifier = partyIdentifier_example; # String | The unique identifier associated with a Person.

eval {
    my $result = $api_instance->getPersonByPartyIdentifier(partyIdentifier => $partyIdentifier);
    print Dumper($result);
};
if ($@) {
    warn "Exception when calling PeopleApi->getPersonByPartyIdentifier: $@\n";
}
```

**Python**

```python
from __future__ import print_statement
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.PeopleApi()
partyIdentifier = partyIdentifier_example # String | The unique identifier associated with a Person.

try:
    # Retrieve a specific Person entity.
    api_response = api_instance.get_person_by_party_identifier(partyIdentifier)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling PeopleApi->getPersonByPartyIdentifier: %s\n" % e)
```

#### Parameters

None.

Path parameters

| Name | Description |
| --- | --- |
| `party-identifier`* |String The unique identifier associated with a Person. Required |

#### Responses

* Status: `200 OK`.
* Status: `400 Bad Request`.
* Status: `401 Unauthorized`.
* Status: `403 Forbidden`.
* Status: `404  Not Found`.
* Status: `405 Method Not Allowed`.

***

## `Preferences` API

![API Client][icon-rest-client-image] `Preference`

### `getPreferenceByUniqueIdentifier`

Retrieve a `Preference` by its unique identifier.

```
GET /preferences/{unique-identifier}
```

#### Usage and SDK Samples

**Curl**

```bash
curl -X GET "http://api.swindle.net/archetypes/v1/parties/preferences/{unique-identifier}"
```

**Java**

```java
import io.swagger.client.*;
import io.swagger.client.auth.*;
import io.swagger.client.model.*;
import io.swagger.client.api.PreferencesApi;

import java.io.File;
import java.util.*;

public class PreferencesApiExample {

    public static void main(String[] args) {

        PreferencesApi apiInstance = new PreferencesApi();
        String uniqueIdentifier = uniqueIdentifier_example; // String | The unique identifier associated with a Preference.
        try {
            _preferences result = apiInstance.getPreferenceByUniqueIdentifier(uniqueIdentifier);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling PreferencesApi#getPreferenceByUniqueIdentifier");
            e.printStackTrace();
        }
    }
}
```

**Android**

```java
import io.swagger.client.api.PreferencesApi;

public class PreferencesApiExample {

    public static void main(String[] args) {
        PreferencesApi apiInstance = new PreferencesApi();
        String uniqueIdentifier = uniqueIdentifier_example; // String | The unique identifier associated with a Preference.
        try {
            _preferences result = apiInstance.getPreferenceByUniqueIdentifier(uniqueIdentifier);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling PreferencesApi#getPreferenceByUniqueIdentifier");
            e.printStackTrace();
        }
    }
}
```

**ObjectiveC**

```cpp
String *uniqueIdentifier = uniqueIdentifier_example; // The unique identifier associated with a Preference.

PreferencesApi *apiInstance = [[PreferencesApi alloc] init];

// Retrieve a specific Preference.
[apiInstance getPreferenceByUniqueIdentifierWith:uniqueIdentifier
              completionHandler: ^(_preferences output, NSError* error) {
                            if (output) {
                                NSLog(@"%@", output);
                            }
                            if (error) {
                                NSLog(@"Error: %@", error);
                            }
                        }];
```

**Node.js**

```js
var Party = require('party');

var api = new Party.PreferencesApi()

var uniqueIdentifier = uniqueIdentifier_example; // {String} The unique identifier associated with a Preference.

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.getPreferenceByUniqueIdentifier(uniqueIdentifier, callback);
```

**CSharp**

```cs
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class getPreferenceByUniqueIdentifierExample
    {
        public void main()
        {

            var apiInstance = new PreferencesApi();
            var uniqueIdentifier = uniqueIdentifier_example;  // String | The unique identifier associated with a Preference.

            try
            {
                // Retrieve a specific Preference.
                _preferences result = apiInstance.getPreferenceByUniqueIdentifier(uniqueIdentifier);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling PreferencesApi.getPreferenceByUniqueIdentifier: " + e.Message );
            }
        }
    }
}
```

**PHP**

```php
getPreferenceByUniqueIdentifier($uniqueIdentifier);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling PreferencesApi->getPreferenceByUniqueIdentifier: ', $e->getMessage(), PHP_EOL;
}

```

**Perl**

```perl
use Data::Dumper;
use WWW::SwaggerClient::Configuration;
use WWW::SwaggerClient::PreferencesApi;

my $api_instance = WWW::SwaggerClient::PreferencesApi->new();
my $uniqueIdentifier = uniqueIdentifier_example; # String | The unique identifier associated with a Preference.

eval {
    my $result = $api_instance->getPreferenceByUniqueIdentifier(uniqueIdentifier => $uniqueIdentifier);
    print Dumper($result);
};
if ($@) {
    warn "Exception when calling PreferencesApi->getPreferenceByUniqueIdentifier: $@\n";
}
```

**Python**

```python
from __future__ import print_statement
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.PreferencesApi()
uniqueIdentifier = uniqueIdentifier_example # String | The unique identifier associated with a Preference.

try:
    # Retrieve a specific Preference.
    api_response = api_instance.get_preference_by_unique_identifier(uniqueIdentifier)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling PreferencesApi->getPreferenceByUniqueIdentifier: %s\n" % e)
```

#### Parameters

Path parameters

| Name | Description |
| --- | --- |
| `unique-identifier`* |String The unique identifier associated with a `Preference`. Required |

#### Responses

* Status: `200 OK`.
* Status: `400 Bad Request`.
* Status: `401 Unauthorized`.
* Status: `403 Forbidden`.
* Status: `404  Not Found`.
* Status: `405 Method Not Allowed`.

***

![API Client][icon-rest-client-image] `Preference`

### `getPreferences`

Retrieve all `Preferences`.

```
GET /preferences/
```

#### Usage and SDK Samples

**Curl**

```bash
curl -X GET "http://api.swindle.net/archetypes/v1/parties/preferences/"
```

**Java**

```java
import io.swagger.client.*;
import io.swagger.client.auth.*;
import io.swagger.client.model.*;
import io.swagger.client.api.PreferencesApi;

import java.io.File;
import java.util.*;

public class PreferencesApiExample {

    public static void main(String[] args) {

        PreferencesApi apiInstance = new PreferencesApi();
        try {
            array[_preferences] result = apiInstance.getPreferences();
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling PreferencesApi#getPreferences");
            e.printStackTrace();
        }
    }
}
```

**Android**

```java
import io.swagger.client.api.PreferencesApi;

public class PreferencesApiExample {

    public static void main(String[] args) {
        PreferencesApi apiInstance = new PreferencesApi();
        try {
            array[_preferences] result = apiInstance.getPreferences();
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling PreferencesApi#getPreferences");
            e.printStackTrace();
        }
    }
}
```

**ObjectiveC**

```cpp
PreferencesApi *apiInstance = [[PreferencesApi alloc] init];

// Retrieve all Preferences.
[apiInstance getPreferencesWithCompletionHandler:
              ^(array[_preferences] output, NSError* error) {
                            if (output) {
                                NSLog(@"%@", output);
                            }
                            if (error) {
                                NSLog(@"Error: %@", error);
                            }
                        }];
```

**Node.js**

```js
var Party = require('party');

var api = new Party.PreferencesApi()

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.getPreferences(callback);
```

**CSharp**

```cs
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class getPreferencesExample
    {
        public void main()
        {

            var apiInstance = new PreferencesApi();

            try
            {
                // Retrieve all Preferences.
                array[_preferences] result = apiInstance.getPreferences();
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling PreferencesApi.getPreferences: " + e.Message );
            }
        }
    }
}
```

**PHP**

```php
getPreferences();
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling PreferencesApi->getPreferences: ', $e->getMessage(), PHP_EOL;
}

```

**Perl**

```perl
use Data::Dumper;
use WWW::SwaggerClient::Configuration;
use WWW::SwaggerClient::PreferencesApi;

my $api_instance = WWW::SwaggerClient::PreferencesApi->new();

eval {
    my $result = $api_instance->getPreferences();
    print Dumper($result);
};
if ($@) {
    warn "Exception when calling PreferencesApi->getPreferences: $@\n";
}
```

**Python**

```python
from __future__ import print_statement
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.PreferencesApi()

try:
    # Retrieve all Preferences.
    api_response = api_instance.get_preferences()
    pprint(api_response)
except ApiException as e:
    print("Exception when calling PreferencesApi->getPreferences: %s\n" % e)
```

#### Parameters

None.

#### Responses

* Status: `200 OK`.
* Status: `400 Bad Request`.
* Status: `401 Unauthorized`.
* Status: `403 Forbidden`.
* Status: `404  Not Found`.
* Status: `405 Method Not Allowed`.

***


[Report an issue](https://github.com/commonality/archetypes/issues/new).

[Apache License 2.0](http://www.apache.org/licenses/LICENSE-2.0.html)

Generated 2017-08-29T02:23:40.011Z


[icon-rest-client-image]: /docs/img/icon-rest-client.png
[logo-commonalaxy-image]: /docs/img/logo-commonalaxy.png
[mda-book-url]: https://www.amazon.com/Enterprise-Patterns-MDA-Building-Archetype/dp/032111230X
[quote-left-image]: /docs/img/quote-left-25.png
[icon-rest-api-image]: /docs/img/icon-rest-api.png
[swagger-ui-party-url]: http://api.swindle.net/swagger-ui/#/
