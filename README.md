# `archetypes` ⍟ [![NPM version][npm-badge-image]][npm-url]

![Business archetypes logo][business-archetypes-logo-image]

[![License][license-image]][license-url]
[![Dependencies' licenses][fossa-badge-image]][fossa-url]
[![NSP Status][nsp-badge-image]][nsp-url]
[![Synk Vulnerabilities][snyk-vulnerabilities-badge-image]][snyk-vulnerabilities-url]<br>
[![StackShare][stack-share-badge-image]][stack-share-url]
[![Dependency Status][david-dm-badge-image]][daviddm-url]
[![devDependencies Status][david-dm-dev-badge-image]][daviddm-dev-url] <br>
[![Build Status][travis-badge-image]][travis-url] [![Coverage percentage][coveralls-badge-image]][coveralls-url]
[![Codacy quality][codacy-badge-image]][codacy-url]
[![All Contributors](https://img.shields.io/badge/all_contributors-2-orange.svg?style=flat-square)](#contributors)

> ![quote][octicon-quote] A business archetype is a primordial thing that occurs consistently and universally in business domains and business software systems.
>
> (Arlow & Neustadt, [_Enterprise patterns and MDA: building better software with archetype patterns and UML_][mda-book-url], 2006, p. 5)

`commonality/archetypes` provides universal, rule-based business collaboration APIs for e-commerce and customer relationship management (CRM). `commonality/archetypes` specifies semantically-rich models of universally recurring business entities, events, and relationships with OpenAPI 2.0.

## What are `archetypes`?

**`archetypes` model how `Parties`&mdash;`People` and `Companies`&mdash;exchange `Products` and `Services` with `Payments` (normally `Money` or other `Locale`-based `Currencies` like gift-cards). The exchanges are recorded from beginning to end as `Orders` and managed as Customer Relationships (CRM) between buyers and sellers (with `PartyRelationships`). When necessary, `Rules` constrain and determine the types of relationships allowed; how products can be packaged; and whether discounts can be applied.**

These **business `archetypes`** are expressed as **models** in open, vendor-neutral **OpenAPI/Swagger** specifications, which provide:

1. **A common vocabulary and operating framework** for how `Parties`&mdash;`People` and `Companies`&mdash;exchange goods and services for `Money` (with `Locale`-based `Currencies`), as well as managing these relationships as `Customers` (CRM).
2. **Executable documentation** that articulates these models and how they interact.
3. **Open-source tools that automatically generate microservice "stubs" and client SDKs**.

## Table of contents

<!-- toc -->

- [1. Security](#1-security)
- [2. Installation](#2-installation)
  * [2.1. Generating servers and clients](#21-generating-servers-and-clients)
  * [2.2. Editing OpenAPI specs](#22-editing-openapi-specs)
- [3. Usage: API HTTP responses](#3-usage-api-http-responses)
  * [3.1. `curl`](#31-curl)
  * [3.2. Swagger-UI](#32-swagger-ui)
- [4. `Party` API :package:](#4-party-api-package)
  * [4.1. Standards compliance](#41-standards-compliance)
  * [4.2. Resources](#42-resources)
  * [4.3. OpenAPI 2.0 Specs](#43-openapi-20-specs)
  * [4.4. API and SDK documentation](#44-api-and-sdk-documentation)
  * [4.5. Usage example](#45-usage-example)
- [5. `Quantity` API :package:](#5-quantity-api-package)
  * [5.1. Standards compliance](#51-standards-compliance)
  * [5.2. OpenAPI 2.0 Specs](#52-openapi-20-specs)
  * [5.3. API and SDK documentation](#53-api-and-sdk-documentation)
  * [5.4. Usage example](#54-usage-example)
- [6. `Money` API :package:](#6-money-api-package)
  * [6.1. Standards compliance](#61-standards-compliance)
  * [6.2. OpenAPI 2.0 Specs](#62-openapi-20-specs)
  * [6.3. API documentation](#63-api-documentation)
  * [6.4. Usage examples](#64-usage-examples)
- [7. `PartyRelationship` API](#7-partyrelationship-api)
  * [Roadmap](#roadmap)
- [8. `Rule` API](#8-rule-api)
  * [Roadmap](#roadmap-1)
- [9. Customer relationship management (CRM) API](#9-customer-relationship-management-crm-api)
  * [Roadmap](#roadmap-2)
- [10. `Product` API](#10-product-api)
  * [Roadmap](#roadmap-3)
- [11. `Inventory` API](#11-inventory-api)
  * [Roadmap](#roadmap-4)
- [12. `Order` API](#12-order-api)
  * [Roadmap](#roadmap-5)
- [13. Product development and delivery](#13-product-development-and-delivery)
  * [13.1. Built With](#131-built-with)
  * [13.2. Prerequisite](#132-prerequisite)
  * [13.3. Set up a development environment](#133-set-up-a-development-environment)
  * [13.4. `npm-scripts`](#134-npm-scripts)
- [14. DevSecOps](#14-devsecops)
  * [14.1. Builds](#141-builds)
  * [14.2. Tests and quality gates](#142-tests-and-quality-gates)
    + [14.2.1. Swagger validation](#1421-swagger-validation)
    + [14.2.2. Linting](#1422-linting)
    + [14.3.3. Spec (unit test) execution and code coverage](#1433-spec-unit-test-execution-and-code-coverage)
  * [14.3.4. Deploy/Publish](#1434-deploypublish)
    + [14.3.4.1. Prerequisites](#14341-prerequisites)
    + [14.3.4.2. Publish on `npm`](#14342-publish-on-npm)
- [15. Style guides](#15-style-guides)
  * [15.1. JavaScript source code](#151-javascript-source-code)
  * [15.2. Color palette](#152-color-palette)
- [16. Semantic version and `CHANGELOG`](#16-semantic-version-and-changelog)
- [17. Contributing to `commonality/archetypes`](#17-contributing-to-commonalityarchetypes)
  * [17.1. Contribution workflows summarized](#171-contribution-workflows-summarized)
  * [17.2. Contributors](#172-contributors)
- [18. Licenses](#18-licenses)

<!-- tocstop -->

## 1. Security

`commonality/archetypes` provide model-driven OpenAPI specifications for pervasive business patterns. Some of these models contain sensitive personal or company data that require access control and privacy safeguards.

None of `commonality/archetypes'` specifications come with OpenAPI `securityDefinitions`. Before exposing any data, please apply the [principle of least privilege][least-privilege-url] with your own `securityDefinitions` as appropriate. _You must secure_ how sensitive data are stored and shared.

## 2. Installation

Open a Terminal and run this command:

```bash
npm install --save archetypes
```

If your team prefers Yarn:

```bash
yarn add archetypes
```

### 2.1. Generating servers and clients

> ![quote][octicon-quote] [`swagger-api/swagger-codegen`][swagger-codegen-url] contains a template-driven engine to generate documentation, API clients and server stubs in different languages by parsing your OpenAPI / Swagger definition.
>
> Cheng, W., & Tam, T. (2011, August 15). swagger-api/swagger-codegen. Retrieved August 27, 2017, from https://github.com/swagger-api/swagger-codegen

[Swagger Codegen][swagger-codegen-url] will generate servers and clients in many different languages and frameworks.

Follow the [Installation][swagger-codegen-installation-url] and [Getting Starting][swagger-codegen-getting-started-url] instructions to generate and build servers and clients from workstations, CI-services, or Docker containers.

### 2.2. Editing OpenAPI specs

1. Go to https://editor.swagger.io/.
1. Copy the `/archetypes/v1/{archetype}/{archetype}.yaml` specification of interest.
1. Paste the `*.yaml` source into the editor pane.
1. Select "Generate Server" or "Generate Client" and choose an option.
1. If successful, you will prompted to download the ZIPped source code.

## 3. Usage: API HTTP responses

### 3.1. `curl`

The simplest way to test against mock objects at `http://api.swindle.net/archetypes/v1/parties` with `curl` in a Terminal.

```bash
$ curl \
  -X GET "http://api.swindle.net/archetypes/v1/parties/2e908e75-69a9-47e2-83ae-0c3cc52da84c" \
  -H "accept: application/json"
```

### 3.2. Swagger-UI

Go to the [api.swindle.net Swagger-UI](http://api.swindle.net/swagger-ui/#/)'s "**About**" section and "**Explore**" the available Swagger Specs.

The following sections summarize all twelve business archetype patterns as they are released.

## 4. `Party` API :package:

![REST API][rest-api-image]

> ![quote][octicon-quote] The [`Party`](./docs/api/archetypes/v1/party/js/README.md) archetype represents an identifiable, addressable entity that may have a legal status and that normally has autonomous control over (at least some of) its actions.
>
> Arlow, J., & Neustadt, I. (2006). Party archetype pattern. In [_Enterprise patterns and MDA: building better software with archetype patterns and UML_][mda-book-url] (p. 122). Boston: Addison-Wesley.

### 4.1. Standards compliance

| Standard                                                                             | Contents                                               |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------ |
| [OMG Party Management Facility Specification](http://www.omg.org/spec/PARTY/1.0/PDF) | A standard that supports party management.             |
| [ISO 3166](https://www.iso.org/iso-3166-country-codes.html)                          | Two- and three-letter country codes and country names. |
| [ISO/IEC 5218:2004](https://www.iso.org/standard/36266.html)                         | Codes for the representation of human sexes.           |
| [ITU-T Recommendations](http://www.itu.int/rec/T-REC-E.164/en)                       | Telecommunication numbering plan.                      |

### 4.2. Resources

| Proposal                                    | Contents                                                                                            |
| ------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| [63 Genders](https://apath.org/63-genders/) | A proposal for describing Gender as a combination of Physical, Personality and Preferential groups. |

### 4.3. OpenAPI 2.0 Specs

[![Party's Swagger validity][swagger-validity-party-badge-image]][swagger-validity-party-url] [`YAML`](http://api.swindle.net/archetypes/v1/schemas/parties/parties.yaml) (Content-Type: `application/x-yaml`)

<!-- AUTO-GENERATED-CONTENT:START (DIRTREE:dir=./schemas/v1/parties&depth=1) -->
```
parties/
├── nominative.yaml
├── parties.yaml
└── unique-identifier.yaml
```
<!-- AUTO-GENERATED-CONTENT:START (DIRTREE:dir=./schemas/v1/parties&depth=1) --><!-- AUTO-GENERATED-CONTENT:END -->

### 4.4. API and SDK documentation

| Business archetype                                     | Definition                                                                                                                                  |
| ------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------- |
| [`Organizations`][api-sdk-doc-party-organizations-url] | Administrative and functional structures                                                                                                    |
| [`Parties`][api-sdk-doc-party-parties-url]             | Identifiable, addressable entity that may have a legal status and that normally has autonomous control over (at least some of) its actions. |
| [`People`][api-sdk-doc-party-people-url]               | Human beings.                                                                                                                               |
| [`Preferences`][api-sdk-doc-party-preferences-url]     | Choices of (or liking for) something, often from a set of possible or offered options.                                                      |

### 4.5. Usage example

**Retrieve a `Party` by identifier** with JavaScript:

```js
const Party = require("party");

const api = new Party.PartiesApi();

// {String} The universally unique identifier associated with a Party.
const partyIdentifier = "2e908e75-69a9-47e2-83ae-0c3cc52da84c";

const callback = (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data, null, 2)
    );
  }
  console.log(response);
};
api.getByPartyIdentifier(partyIdentifier, callback);
```

## 5. `Quantity` API :package:

![REST API][rest-api-image]

> ![quote][octicon-quote] The [`Quantity`](./docs/api/archetypes/v1/quantity/js/README.md) archetype represents an amount of something measured according to some standard of measurement.
>
> Arlow, J., & Neustadt, I. (2006). Quantity archetype pattern. In [_Enterprise patterns and MDA: building better software with archetype patterns and UML_][mda-book-url] (p. 400). Boston: Addison-Wesley.

### 5.1. Standards compliance

<table>   <thead>     <tr><th>Standard</th><th>Contents</th></tr>   </thead>   <tfoot>   </tfoot>   <tbody>     <tr>       <td><a href=\"http://www.bipm.org/en/measurement-units/\">SI</a>       <td>International System of Units&mdash;Bureau International des Poids et Mesures (BIPM).     </tr>   </tbody> </table>

### 5.2. OpenAPI 2.0 Specs

[![Quantity's Swagger validity][swagger-validity-quantity-badge-image]][swagger-validity-quantity-url] [`YAML`](http://api.swindle.net/archetypes/v1/schemas/quantities/quantities.yaml) (Content-Type: `application/x-yaml`)

<!-- AUTO-GENERATED-CONTENT:START (DIRTREE:dir=./schemas/v1/quantities&depth=1) -->
```
quantities/
├── metric.yaml
├── quantities.yaml
├── quantity.yaml
├── rounding-strategy.yaml
├── si-system-of-units.yaml
└── system-of-units.yaml
```
<!-- AUTO-GENERATED-CONTENT:START (DIRTREE:dir=./schemas/v1/quantities&depth=1) --><!-- AUTO-GENERATED-CONTENT:END -->

### 5.3. API and SDK documentation

[`JavaScript` client SDK (Node.js)](./docs/api/archetypes/v1/quantity/js/README.md) client SDK.

### 5.4. Usage example

**Retrieve an `SiBaseUnit` by identifier** with JavaScript:

```js
const Quantity = require("quantity");

const api = new Quantity.SIInternationalSystemOfUnitsApi();

// {String} The name of the unit/metric.
const name = "meter";

const callback = (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data, null, 2)
    );
  }
  console.log(response);
};

api.getBaseUnitByName(name, callback);
```

## 6. `Money` API :package:

![REST API][rest-api-image]

> ![quote][octicon-quote] The [`Money`](./docs/api/archetypes/v1/money/js/README.md) archetype represents an `amount` of a specific `Currency` that is `acceptedIn` one or more `Locales`.
>
> Arlow, J., & Neustadt, I. (2006). Money archetype pattern. In [_Enterprise patterns and MDA: building better software with archetype patterns and UML_][mda-book-url] (p. 413). Boston: Addison-Wesley.

### 6.1. Standards compliance

<table>
  <thead>
    <tr><th>Standard</th><th>Contents</th></tr>
  </thead>
  <tfoot>
  </tfoot>
  <tbody>
    <tr>
      <td><a href="http://www.omg.org/spec/CURR/1.0/PDF">OMG Currency Specification v1.0</a></td>
      <td>A standard to support international currency.</td>
    </tr>
    <tr>
      <td><a href="https://www.iso.org/iso-4217-currency-codes.html">ISO 4217</a></td>
      <td>Three- and two-letter currency codes, currency numbers, and currency names.</td>
    </tr>
    <tr>
      <td><a href="https://www.iso.org/iso-3166-country-codes.html">ISO 3166</a></td>
      <td>Two-letter country codes and country names.</td>
    </tr>
  </tbody>
</table>

### 6.2. OpenAPI 2.0 Specs

[![Quantity's Swagger validity][swagger-validity-money-badge-image]][swagger-validity-money-url] [`YAML`](http://api.swindle.net/archetypes/v1/schemas/money/money.spec.yaml) (Content-Type: `application/x-yaml`)

<!-- AUTO-GENERATED-CONTENT:START (DIRTREE:dir=./schemas/v1/money&depth=1) -->
```
money/
├── currency.definition.yaml
├── money.definition.yaml
├── money.yaml
├── payment-card.definition.yaml
├── payment-method.definition.yaml
├── payment.definition.yaml
└── README.md
```
<!-- AUTO-GENERATED-CONTENT:END -->

### 6.3. API documentation

[`JavaScript` client SDK (Node.js)](./docs/api/archetypes/v1/money/js/README.md)

### 6.4. Usage examples

**Get all ISO 4217 `Currencies`** with JavaScript (Node.js):

```js
const Money = require("money");

const moneyApi = new Money.CurrencyApi();

const callback = (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data, null, 2)
    );
  }
  console.log(response);
};

moneyApi.getCurrencies(callback);
```

**Retrieve a `Currency` by its ISO 4217 alphabetic code** with JavaScript:

```js
const Money = require("money");

const moneyApi = new Money.CurrencyApi();

// String | An alphabetic code that represents the currency.
const alphabeticCode = "USD";

const callback = (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data, null, 2)
    );
  }
  console.log(response);
};

moneyApi.getCurrencyByAlphabeticCode(alphabeticCode, callback);
```

## 7. `PartyRelationship` API

![REST API][rest-api-image]

> ![quote][octicon-quote] The [`PartyRelationship`](./docs/api/archetypes/v1/party-relationship/js/README.md) captures the fact that there is a semantic relationship between two `Parties` in which each `Party` plays a specific role.
>
> Arlow, J., & Neustadt, I. (2006). Archetype glossary. In [_Enterprise patterns and MDA: building better software with archetype patterns and UML_][mda-book-url] (p. 160). Boston: Addison-Wesley.

### Roadmap

[![icon-road-milestone-image] MVP3: PartyRelationships and Rules](https://github.com/commonality/archetypes/milestone/3)

<!--
      ### 7.1. OpenAPI 2.0 Specs

      [![Quantity's Swagger validity][swagger-validity-quantity-badge-image]][swagger-validity-quantity-url]

      * [`JSON`](http://api.swindle.net/archetypes/v1/schemas/party-relationship/party-relationship.swagger.json)
      * [`YAML`](http://api.swindle.net/archetypes/v1/schemas/party-relationship/party-relationship.yaml) (Content-Type: `application/x-yaml`)

      ### 7.2. API documentation

      * [`JavaScript`](./docs/api/archetypes/v1/party-relationship/js/README.md)
      * [`Ruby`](./docs/api/archetypes/v1/party/party-relationship/README.md)


      ### 7.3. Usage example

      **Retrieve an `` by identifier** with JavaScript:

      ```js

      ```
-->

## 8. `Rule` API

![REST API][rest-api-image]

> ![quote][octicon-quote] The [`Rule`](./docs/api/archetypes/v1/rule/js/README.md) archetype represents a constraint on the operation of the software systems of the business&mdash;its semantics are defined by a sequence of `RuleElements`.
>
> Arlow, J., & Neustadt, I. (2006). Archetype glossary. In [_Enterprise patterns and MDA: building better software with archetype patterns and UML_][mda-book-url] (p. 449). Boston: Addison-Wesley.

### Roadmap

[![icon-road-milestone-image] MVP3: PartyRelationships and Rules](https://github.com/commonality/archetypes/milestone/3)

<!--
      ### 8.1. OpenAPI 2.0 Specs

      [![Rule's Swagger validity][swagger-validity-rules-badge-image]][swagger-validity-rules-url]

      * [`JSON`](http://api.swindle.net/archetypes/v1/schemas/rules/rules.swagger.json)
      * [`YAML`](http://api.swindle.net/archetypes/v1/schemas/rules/rules.yaml) (Content-Type: `application/x-yaml`)

      ### 8.2. API documentation

      * [`JavaScript`](./docs/api/archetypes/v1/rules/js/README.md)
      * [`Ruby`](./docs/api/archetypes/v1/rules/README.md)


      ### 8.3. Usage example

      **Retrieve an `` by identifier** with JavaScript:

      ```js

      ```
-->

## 9. Customer relationship management (CRM) API

![REST API][rest-api-image]

> ![quote][octicon-quote] [Customer relationship management (CRM)](./docs/api/archetypes/v1/crm/README.md) is about actively managing the relationships between your business and your customers, in order to understand and increase customer value, motivation, and loyalty.
>
> Arlow, J., & Neustadt, I. (2006). Customer relationship management archetype pattern. In [_Enterprise patterns and MDA: building better software with archetype patterns and UML_][mda-book-url] (p. 187). Boston: Addison-Wesley.

### Roadmap

[![icon-road-milestone-image] MVP4: Customer relationship management (CRM)](https://github.com/commonality/archetypes/milestone/4)

<!--
      ### 9.1. OpenAPI 2.0 Specs

      [![Customer relationship management (CRM) Swagger validity][swagger-validity-crm-badge-image]][swagger-validity-crm-url]

      * [`JSON`](http://api.swindle.net/archetypes/v1/schemas/crm/crm.swagger.json)
      * [`YAML`](http://api.swindle.net/archetypes/v1/schemas/crm/crm.yaml) (Content-Type: `application/x-yaml`)

      ### 9.2. API documentation

      * [`JavaScript`](./docs/api/archetypes/v1/crm/js/README.md)
      * [`Ruby`](./docs/api/archetypes/v1/crm/README.md)


      ### 9.3. Usage example

      **Retrieve an `` by identifier** with JavaScript:

      ```js

      ```
-->

## 10. `Product` API

![REST API][rest-api-image]

> ![quote][octicon-quote] The [`Product`](./docs/api/archetypes/v1/product/js/README.md) archetype pattern represents a generalized model for products.
>
> Arlow, J., & Neustadt, I. (2006). Product archetype pattern. In [_Enterprise patterns and MDA: building better software with archetype patterns and UML_][mda-book-url] (p. 207). Boston: Addison-Wesley.

### Roadmap

[![icon-road-milestone-image] MVP5: Product](https://github.com/commonality/archetypes/milestone/5)

<!--
      ### 10.1. OpenAPI 2.0 Specs

      [![Product's Swagger validity][swagger-validity-product-badge-image]][swagger-validity-product-url]

      * [`JSON`](http://api.swindle.net/archetypes/v1/schemas/product/product.swagger.json)
      * [`YAML`](http://api.swindle.net/archetypes/v1/schemas/product/product.yaml) (Content-Type: `application/x-yaml`)

      ### 10.2. API documentation

      * [`JavaScript`](./docs/api/archetypes/v1/product/js/README.md)
      * [`Ruby`](./docs/api/archetypes/v1/product/README.md)


      ### 10.3. Usage example

      **Retrieve an `` by identifier** with JavaScript:

      ```js

      ```
-->

## 11. `Inventory` API

![REST API][rest-api-image]

> ![quote][octicon-quote] The [`Inventory`](./docs/api/archetypes/v1/inventory/js/README.md) archetype represents a collection of `InventoryEntries` held in stock by a business.
>
> Arlow, J., & Neustadt, I. (2006). Inventory archetype pattern. In [_Enterprise patterns and MDA: building better software with archetype patterns and UML_][mda-book-url] (p. 271). Boston: Addison-Wesley.

### Roadmap

[![icon-road-milestone-image] MVP6: Inventory](https://github.com/commonality/archetypes/milestone/6)

<!--
      ### 11.1. OpenAPI 2.0 Specs

      [![Inventory's Swagger validity][swagger-validity-inventory-badge-image]][swagger-validity-inventory-url]

      * [`JSON`](http://api.swindle.net/archetypes/v1/schemas/inventory/inventory.swagger.json)
      * [`YAML`](http://api.swindle.net/archetypes/v1/schemas/inventory/inventory.yaml) (Content-Type: `application/x-yaml`)

      ### 11.2. API documentation

      * [`JavaScript`](./docs/api/archetypes/v1/inventory/js/README.md)
      * [`Ruby`](./docs/api/archetypes/v1/inventory/README.md)


      ### 11.3. Usage example

      **Retrieve an `` by identifier** with JavaScript:

      ```js

      ```
-->

## 12. `Order` API

![REST API][rest-api-image]

> ![quote][octicon-quote] The [`Order`](./docs/api/archetypes/v1/order/js/README.md) archetype represents a request by a buyer for a seller to supply some goods or services.
>
> Arlow, J., & Neustadt, I. (2006). Inventory archetype pattern. In [_Enterprise patterns and MDA: building better software with archetype patterns and UML_][mda-book-url] (p. 271). Boston: Addison-Wesley.

### Roadmap

[![icon-road-milestone-image] MVP7: Inventory](https://github.com/commonality/archetypes/milestone/7)

## 13. Product development and delivery

![Packaging][icon-package-image]

> [![PRs Welcome][prs-welcome-badge-image]][prs-welcome-url] We welcome contributors and pull requests!
>
> Interested in development contributions? Great! Check out our guidelines for [Contributing to `archetypes`][contributing-url] for details.

### 13.1. Built With

[![StackShare][stack-share-badge-image]][stack-share-news-feed-url]

`archetypes` requires the following [tech-stack][stack-share-news-feed-url] to either run, build, test, or deploy:

<!-- AUTO-GENERATED-CONTENT:START (DEPENDENCYTABLE:dev=true) -->
| **Dependency** | **Description** | **Version** | **License** | **Type** |
| -------------- | --------------- | ----------- | ----------- | -------- |
 | [@babel/core@^7.1.6](https://babeljs.io/) | Babel compiler core. | 7.1.6 | MIT | dev | 
 | [all-contributors-cli@^5.4.1](https://github.com/jfmengels/all-contributors-cli#readme) | Tool to easily add recognition for new contributors | 5.4.1 | MIT | dev | 
 | [audit@0.0.6](https://github.com/Weltschmerz/Audit#readme) | Generate performance statistics for async or sync functions | 0.0.6 | UNLICENSED | dev | 
 | [babel-jest@^23.6.0](https://github.com/facebook/jest#readme) | Jest plugin to use babel for transformation. | 23.6.0 | MIT | dev | 
 | [babel-preset-env@^1.7.0](https://babeljs.io/) | A Babel preset for each environment. | 1.7.0 | MIT | dev | 
 | [babelify@^10.0.0](https://github.com/babel/babelify) | Babel browserify transform | 10.0.0 | MIT | dev | 
 | [commitplease@^3.2.0](https://github.com/jzaefferer/commitplease#readme) | Validates strings as commit messages | 3.2.0 | MIT | dev | 
 | [coveralls@^3.0.2](https://github.com/nickmerwin/node-coveralls#readme) | takes json-cov output into stdin and POSTs to coveralls.io | 3.0.2 | BSD-2-Clause | dev | 
 | [eslint@^5.9.0](https://eslint.org) | An AST-based pattern checker for JavaScript. | 5.9.0 | MIT | dev | 
 | [eslint-config-standard@^12.0.0](https://github.com/standard/eslint-config-standard) | JavaScript Standard Style - ESLint Shareable Config | 12.0.0 | MIT | dev | 
 | [eslint-config-xo-space@^0.20.0](https://github.com/xojs/eslint-config-xo-space#readme) | ESLint shareable config for XO with 2-space indent | 0.20.0 | MIT | dev | 
 | [eslint-plugin-import@^2.14.0](https://github.com/benmosher/eslint-plugin-import) | Import with sanity. | 2.14.0 | MIT | dev | 
 | [eslint-plugin-jest@^22.1.0](https://github.com/jest-community/eslint-plugin-jest#readme) | Eslint rules for Jest | 22.1.0 | MIT | dev | 
 | [eslint-plugin-jsdoc@^3.9.1](https://github.com/gajus/eslint-plugin-jsdoc#readme) | JSDoc linting rules for ESLint. | 3.9.1 | BSD-3-Clause | dev | 
 | [eslint-plugin-no-unsafe-innerhtml@^1.0.16](https://github.com/mozfreddyb/eslint-plugin-no-unsafe-innerhtml/) | custom ESLint rule to disallows unsafe innerHTML, outerHTML and insertAdjacentHTML | 1.0.16 | MPL-2.0 | dev | 
 | [eslint-plugin-no-unsanitized@^3.0.2](https://github.com/mozilla/eslint-plugin-no-unsanitized/) | ESLint rule to disallow unsanitized code | 3.0.2 | MPL-2.0 | dev | 
 | [eslint-plugin-node@^8.0.0](https://github.com/mysticatea/eslint-plugin-node#readme) | Additional ESLint's rules for Node.js | 8.0.0 | MIT | dev | 
 | [eslint-plugin-promise@^4.0.1](https://github.com/xjamundx/eslint-plugin-promise#readme) | Enforce best practices for JavaScript promises | 4.0.1 | ISC | dev | 
 | [eslint-plugin-scanjs-rules@^0.2.1](https://github.com/mozfreddyb/eslint-plugin-scanjs-rules/) | ESLint plugin that contains ScanJS rules | 0.2.1 | MPL-2.0 | dev | 
 | [eslint-plugin-security@^1.4.0](https://github.com/nodesecurity/eslint-plugin-security#readme) | Security rules for eslint | 1.4.0 | Apache-2.0 | dev | 
 | [eslint-plugin-standard@^4.0.0](https://github.com/standard/eslint-plugin-standard#readme) | ESlint Plugin for the Standard Linter | 4.0.0 | MIT | dev | 
 | [eslint-plugin-xss@^0.1.9](https://github.com/Rantanen/eslint-plugin-xss#readme) | Validates XSS related issues of mixing HTML and non-HTML content in variables. | 0.1.9 | ISC | dev | 
 | [jest@^23.6.0](https://jestjs.io/) | Delightful JavaScript Testing. | 23.6.0 | MIT | dev | 
 | [jest-cli@^23.6.0](https://jestjs.io/) | Delightful JavaScript Testing. | 23.6.0 | MIT | dev | 
 | [jest-config@^23.6.0](https://github.com/facebook/jest#readme) |  | 23.6.0 | MIT | dev | 
 | [markdown-magic@^0.1.25](https://github.com/DavidWells/markdown-magic#readme) | Automatically update markdown files with content from external sources | 0.1.25 | MIT | dev | 
 | [markdown-magic-dependency-table@^1.3.2](https://github.com/camacho/markdown-magic-dependency-table#readme) | Generate table of information about dependencies automatically in markdown | 1.3.2 | MIT | dev | 
 | [markdown-magic-directory-tree@^1.2.3](https://github.com/camacho/markdown-magic-directory-tree#readme) | Print an archy tree for markdown file | 1.2.3 | MIT | dev | 
 | [markdown-magic-github-contributors@0.0.3](https://npmjs.org/package/markdown-magic-github-contributors) | Add github contributors to markdown file | 0.0.3 | MIT | dev | 
 | [markdown-magic-package-scripts@^1.2.1](https://github.com/camacho/markdown-magic-package-scripts#readme) | Print list of scripts in package.json with descriptions | 1.2.1 | MIT | dev | 
 | [markdown-magic-subpackage-list@^1.1.1](https://github.com/camacho/markdown-magic-subpackage-list#readme) | Print a list of subpackages for markdown file | 1.1.1 | MIT | dev | 
 | [markdown-toc@^1.2.0](https://github.com/jonschlinkert/markdown-toc) | Generate a markdown TOC (table of contents) with Remarkable. | 1.2.0 | MIT | dev | 
 | [prettier@^1.15.2](https://prettier.io) | Prettier is an opinionated code formatter | 1.15.2 | MIT | dev | 
 | [semantic-release@^15.12....](https://github.com/semantic-release/semantic-release#readme) | Automated semver compliant package publishing | 15.12.2 | MIT | dev | 
 | [snyk@^1.110....](https://github.com/snyk/snyk#readme) | snyk library and cli utility | 1.110.2 | Apache-2.0 | dev | 
 | [sonar-scanner@^3.1.0](https://github.com/bcaudan/node-sonar-scanner) | Wrap sonar-scanner as a node module | 3.1.0 | MIT | dev | 
 | [standard-version@^4.4.0](https://github.com/conventional-changelog/standard-version#readme) | replacement for `npm version` with automatic CHANGELOG generation | 4.4.0 | ISC | dev | 
 | [swagger-parser@^6.0.2](https://apidevtools.org/swagger-parser/) | Swagger 2.0 and OpenAPI 3.0 parser and validator for Node and browsers | 6.0.2 | MIT | dev | 
 | [synk@0.0.2](https://github.com/nicksweet/synk#readme) | schronize a remote directory with a local one, then run a series of preset commands on the server | 0.0.2 | UNLICENSED | dev | 
 | [travis-deploy-once@^5.0.9](https://github.com/semantic-release/travis-deploy-once#readme) | Run a deployment script only once in the Travis test matrix | 5.0.9 | MIT | dev | 
<!-- AUTO-GENERATED-CONTENT:END -->

**_Keep track of `archetypes'` tech-stack with these news and RSS feeds._**

> - [![StackShare news feed][stack-share-news-feed-image] **StackShare News Feed:** Read the latest news about the tools and dependencies `commonality/archetypes`][stack-share-news-feed-url].
> - [![StackShare RSS feed][stack-share-rss-feed-image] **StackShare RSS Feed:** Subscribe to news about `archetypes's` tools and dependencies][stack-share-rss-feed-url].

### 13.2. Prerequisite

[**`Node.js`**][nodejs-url]: `commonality/archetypes` product development and delivery require `Node.js` (version 6.x or greater) and its package manager, `npm`. for build, test, and release tasks.

### 13.3. Set up a development environment

Here's a brief intro about what a developer must do in order to start developing the project further:

```shell
$ git clone https://github.com/commonality/archetypes.git
$ cd archetypes/
$ npm install
```

### 13.4. `npm-scripts`

Software modules often have funky, irrelative names, which is why we **prefix _custom_ tasks** by their responsibility and purpose.

| Prefix      | Definition                                                                            |
| ----------- | ------------------------------------------------------------------------------------- |
| `build*`    | Source code distribution tasks.                                                       |
| `docs*`     | API documentation and automation tasks.                                               |
| `lint*`     | Code style, standards, and vulnerabilty assessments (as well as fixes, if available). |
| `release`   | Bump the product's semver, update docs, commit, and publish to the `npm` registry.    |
| `security*` | Security vulnerabilty checks.                                                         |

The following CLI [`npm-scripts`][npm-scripts-docs-url] are available to you (assuming you're human, gentle reader) and CI-services.

<!-- AUTO-GENERATED-CONTENT:START (SCRIPTS) -->
| Script | Description |
|--------|-------------|
| `build:bundle:all` | `npm run build:bundle:money && npm run build:bundle:parties && npm run build:bundle:quantities` |
| `build:bundle:money` | `swagger bundle --dereference --outfile ./schemas/v1/money/money.bundle.json ./schemas/v1/money/money.spec.yaml` |
| `build:bundle:parties` | `swagger bundle --dereference --outfile ./schemas/v1/parties/parties.bundle.json ./schemas/v1/parties/parties.yaml` |
| `build:bundle:quantities` | `swagger bundle --dereference --outfile ./schemas/v1/quantities/quantities.bundle.json ./schemas/v1/quantities/quantities.yaml` |
| `docs` | `node generate-docs.js && npm run docs:toc` |
| `docs:contributors` | `all-contributors` |
| `docs:contributors:add` | `all-contributors add` |
| `docs:contributors:generate` | `all-contributors generate` |
| `docs:toc` | `./node_modules/.bin/markdown-toc -i README.md` |
| `lint` | `npm run lint:js && npm run lint:swagger:all` |
| `lint:js` | `eslint . --fix` |
| `lint:md` | `prettier --write README.md` |
| `lint:sonar` | `node_modules/sonar-scanner/bin/sonar-scanner` |
| `lint:swagger:all` | `npm run lint:swagger:parties` |
| `lint:swagger:money` | `swagger validate schemas/v1/money/money.spec.yaml --debug` |
| `lint:swagger:parties` | `swagger validate schemas/v1/parties/parties.yaml --debug` |
| `lint:swagger:quantities` | `swagger validate schemas/v1/quantities/quantities.yaml --debug` |
| `postbump` | `echo $npm_package_version` |
| `prepublishOnly` | `npm run docs` |
| `preversion` | `npm run docs` |
| `security` | `npm run security:nsp:scan && npm run security:snyk:all` |
| `security:audit` | `npm run security:audit:scan` |
| `security:audit:scan` | `npm audit` |
| `security:snyk` | `snyk` |
| `security:snyk:all` | `npm run security:snyk:auth && npm run security:snyk:monitor && npm run security:snyk:scan` |
| `security:snyk:auth` | `snyk auth $SNYK_TOKEN` |
| `security:snyk:monitor` | `snyk monitor --org=commonality` |
| `security:snyk:scan` | `snyk test` |
| `standard-version` | `standard-version` |
| `test` | `jest --config=jest.config.json` |
| `posttest` | `npm run security && npm run docs` |
<!-- AUTO-GENERATED-CONTENT:START (SCRIPTS) -->
<!-- AUTO-GENERATED-CONTENT:END -->

## 14. DevSecOps

`commonality/archetypes` triggers Travis CI builds to execute the `ESLint`, the `Jest` test runner, and `Node Security Platform (NSP)` analysis. Code coverage reports are then sent to Coveralls and SonarCloud.

### 14.1. Builds

> ![Travis CI][icon-travis-image]
>
> `commonality/archetypes` uses [Travis CI][travis-url] for continuous integration.

For details, please review the [`.travis.yml` build file](./.travis.yml).

### 14.2. Tests and quality gates

This repository enforces Swagger quality; Javascript quality; and Javascript unit tests and code coverage.

#### 14.2.1. Swagger validation

> ![Swagger][icon-swagger-image]
>
> `commonality/archetypes` validates Swagger docs with [`swagger-cli`][swagger-cli-url].

[`swagger-cli`][swagger-cli-url] validation runs before every test execution:

```bash
# These two npm-scripts run lint automatically:
$ npm run pretest

$ npm test

# Only lint the Party OpenAPI specification:
$ npm run lint:swagger:party

# You can also validate your Swagger docs independently with:
$ npm run lint:swagger:all

```

[`swagger-api/validator-badge`](https://github.com/swagger-api/validator-badge)s display whether there are syntactic issues with you Swagger/OpenAPI 2.0 document.

#### 14.2.2. Linting

> ![ESLint][icon-eslint-image]
>
> `commonality/archetypes` lints with `ESLint` and displays real-time results with README badges.

```bash
# Code quality analysis runs before every test execution:
$ npm test

# Only validate JavaScript and OpenAPI specs
$ npm run lint

# Only run ESLint:
$ npm run lint:js
```

#### 14.3.3. Spec (unit test) execution and code coverage

> ![Jest][icon-jest-image]
>
> `commonality/archetypes` uses `jest` for BDD spec execution and code coverage analysis. The results are displayed real-time with README badges.

Generate detailed code coverage reports at `coverage/lcov-report/index.html` and `lcov.info` and `clover.xml` files (which you can send to CI test coverage services like Coveralls and [OneSonarQube][one-sonar-url] or [SonarCloud][sonarcloud-url]):

```bash
$ npm test
```

### 14.3.4. Deploy/Publish

> **[![Conventional Commits][conventional-commits-badge-image]][conventional-commits-url] with [Angular commit conventions][angularjs-commit-message-guidelines-url]**
>
> Contributors must follow the [Angular commit conventions][angularjs-commit-message-guidelines-url] in order to support automated `CHANGELOG`, `package.json`, Git release `tags`, and semantic version updates.

#### 14.3.4.1. Prerequisites

Once a PR has been approved (and passes all checks), topic branches are are merged into `master` on GitHub.

1. On the GitHub PR page, select _Squash and Merge_.
2. Add a `<title>`, `<body>`, and `<footer>` that comply with the [Conventional Commits Specfication][conventional-commits-url].

#### 14.3.4.2. Publish on `npm`

When you're ready to release (i.e., publish to `npm` or a local Node package registry), open a Terminal and follow these steps:

1. Checkout and pull the latest from `master`:

```shell
$ git checkout master; git pull origin master
```

2. Create and document a new semantic version:

```shell
# The npm-script "release" executes standard-version
$ npm release
```

`npm release` executes an npm-script that will:

1. Bump the version in `package.json`
2. Update `CHANGELOG.md` (with [`conventional-changelog`][conventional-changelog-url])
3. Commit `package.json` and `CHANGELOG.md`
4. Tag a new release

5. Push all changes, the new version `tag` to `master`, and publish on `npm`:

```shell
$ git push --follow-tags origin master; npm publish
```

> ![Read more...][icon-user-manual-image] For `standard-version` configuration details, [read "Cut a Release" on the `conventional-changelog/standard-version's README` page][standard-version-cut-a-release-url].

## 15. Style guides

### 15.1. JavaScript source code

> [![JavaScript Style Guide][standardjs-badge-image]][standardjs-url]
>
> Whenever you run `npm test`, `ESLint` will automatically reformat your JavaScript to ensure that all souce code conforms to the [JavaScript Standard Style][standardjs-url].

Open a Terminal and run any of these commands to ensure your JavaScript source code meets the [JavaScript Standard Style][standardjs-url]:

- **Only lint JavaScript source code** (with `ESLint`):

```shell
# Runs eslint . --fix
$ npm run lint:js
```

- **Lint source _and_ validate OpenAPI specs:**

```shell
# Lint source and validate OpenAPI specs:
$ npm run pretest
```

- **Or run _all_ quality gates** (including source code linting):

```shell
# Or run lint and all other quality gates:
$ npm test
```

### 15.2. Color palette

The `archetypes` documentation uses this color palette:

[![Color palette][archetypes-color-palette-image]][coolor-palette-url]

The colors are (from left to right):

- `#CFDBD5`: Light Grey
- `#E8EDDF`: Platinum
- `#F5CB5C`: Stil de Grain Yellow
- `#242423`: Raisin Black
- `#333533`: Jet

View the palette as [PDF][archetypes-color-palette-pdf-url], [PNG][archetypes-color-palette-png-url], [SCSS][archetypes-color-palette-scss-url], or on [coolors.com][coolor-palette-url].

## 16. Semantic version and `CHANGELOG`

The latest version of `commonality/archetypes` is `0.0.0`. View the [`CHANGELOG`][changelog-url] for details.

## 17. Contributing to `commonality/archetypes`

**[![PRs Welcome][prs-welcome-badge-image]][prs-welcome-url] We welcome contributors and pull requests!**

Contributions are community-driven stories with a beginning, a middle, and an end, all told through issues, comments, and pull requests. If you're interested in collaborating, please review the:

- [Code of Conduct][code-of-conduct-url]
- [Contributing][contributing-url] to `commonality/archetypes`

### 17.1. Contribution workflows summarized

We use the [Git feature-branch-workflow][git-workflow-feature-branch-tutorial-url] to accept modifications, where contributors:

1. Create an issue related to the problem you want to fix (good for traceability and cross-reference)
1. Label the issue as
   - `Type: Defect` or
   - `Type: Feature`
1. Fork the repository
1. Create a branch (optionally with the reference to the issue in the name)
1. Work it
1. Commit incrementally with readable and detailed commit messages
1. Submit a pull-request against the `master` branch of this repository.

We'll take care of tagging your issue with the appropriated labels and answer within a week (hopefully less!) to the problem you encounter.

### 17.2. Contributors

Thanks goes to these wonderful people ([emoji key](https://github.com/kentcdodds/all-contributors#emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore -->
| [<img src="https://avatars3.githubusercontent.com/u/2849690?v=4" width="100px;"/><br /><sub><b>Greg Swindle</b></sub>](http://swindle.net/)<br />[💻](https://github.com/commonality/archetypes/commits?author=gregswindle "Code") [🎨](#design-gregswindle "Design") [📖](https://github.com/commonality/archetypes/commits?author=gregswindle "Documentation") [💡](#example-gregswindle "Examples") [⚠️](https://github.com/commonality/archetypes/commits?author=gregswindle "Tests") | [<img src="https://avatars3.githubusercontent.com/in/505?v=4" width="100px;"/><br /><sub><b>greenkeeper[bot]</b></sub>](https://github.com/apps/greenkeeper)<br />[⚠️](https://github.com/commonality/archetypes/commits?author=greenkeeper[bot] "Tests") |
| :---: | :---: |
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/kentcdodds/all-contributors) specification. Contributions of any kind welcome!

## 18. Licenses

[Apache-2.0][license-url] © [Greg Swindle](https://githbub.com/commonality).

**Third-party licenses:** Please see the [NOTICE](https://app.fossa.io/attribution/996c102c-ccb4-403f-8b02-abdadbbdaaa8) document for 3rd-Party Software information, or select the FOSSA badge below.

[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bhttps%3A%2F%2Fgithub.com%2Fcommonality%2Farchetypes.svg?type=large)](https://app.fossa.io/projects/git%2Bhttps%3A%2F%2Fgithub.com%2Fcommonality%2Farchetypes?ref=badge_large)

---

[![Code Style Guide for JavaScript][standardjs-badge-image]][standardjs-url]
[![Conventional Commits][conventional-commits-badge-image]][conventional-commits-url]
[![Greenkeeper badge][greenkeeper-badge-image]][greenkeeper-url]
[![Readme Score][readme-score-badge-image]][readme-score-url]
[![StackShare][stack-share-badge-image]][stack-share-url]

Graphic art by [icons8][icons8-license-url].

---

<!-- ⛔️ 📝 NOTE: PLEASE ALPHABETIZE LINK REFERENCES. 📝 ⛔️ -->

[angularjs-commit-message-guidelines-url]: https://github.com/angular/angular/blob/master/CONTRIBUTING.md#commit
[api-sdk-doc-party-organizations-url]: https://github.com/commonality/archetypes/wiki/Party-SDK#organizations-api
[api-sdk-doc-party-parties-url]: https://github.com/commonality/archetypes/wiki/Party-SDK#parties-api
[api-sdk-doc-party-people-url]: https://github.com/commonality/archetypes/wiki/Party-SDK#people-api
[api-sdk-doc-party-preferences-url]: https://github.com/commonality/archetypes/wiki/Party-SDK#preferences-api
[archetypes-color-palette-image]: ./docs/style-guide/archetypes-color-palette.png
[archetypes-color-palette-pdf-url]: ./docs/style-guide/archetypes-color-palette.pdf
[archetypes-color-palette-png-url]: ./docs/style-guide/archetypes-color-palette.png
[archetypes-color-palette-scss-url]: ./docs/style-guide/archetypes-color-palette.scss
[business-archetypes-logo-image]: ./docs/img/logo-commonalaxy.png
[changelog-url]: ./CHANGELOG.md
[cla-url]: https://www.clahub.com/agreements/commonality/archetypes
[codacy-badge-image]: https://img.shields.io/codacy/grade/de7b30825ac649de8b7255e4303fb069.svg?style=flat-square
[codacy-url]: https://www.codacy.com/app/commonality/archetypes?utm_source=github.com&utm_medium=referral&utm_content=commonality/archetypes&utm_campaign=Badge_Grade
[code-of-conduct-url]: ./.github/CODE_OF_CONDUCT.md
[complexity-report-url]: ./docs/COMPLEXITY.md
[contributing-url]: ./.github/CONTRIBUTING.md
[conventional-changelog-url]: https://github.com/conventional-changelog/conventional-changelog
[conventional-commits-badge-image]: https://img.shields.io/badge/conventional%20commits-1.0.0-yellow.svg?style=flat-square
[conventional-commits-url]: https://conventionalcommits.org/
[coolor-palette-url]: https://coolors.co/cfdbd5-e8eddf-f5cb5c-242423-333533
[coveralls-badge-image]: https://img.shields.io/coveralls/repos/commonality/archetypes/badge.svg?style=flat-square
[coveralls-url]: https://coveralls.io/r/commonality/archetypes
[david-dm-badge-image]: https://img.shields.io/david/dev/commonality/archetypes.svg?style=flat-square
[david-dm-dev-badge-image]: https://img.shields.io/david/commonality/archetypes.svg?style=flat-square
[daviddm-dev-url]: https://david-dm.org/commonality/archetypes?type=dev
[daviddm-url]: https://david-dm.org/commonality/archetypes
[fossa-badge-image]: https://app.fossa.io/api/projects/git%2Bhttps%3A%2F%2Fgithub.com%2Fcommonality%2Farchetypes.svg?type=shield
[fossa-url]: https://app.fossa.io/projects/git%2Bhttps%3A%2F%2Fgithub.com%2Fcommonality%2Farchetypes?ref=badge_shield
[gh-standardjs-url]: https://github.com/feross/standard
[git-workflow-feature-branch-tutorial-url]: https://www.atlassian.com/git/tutorials/comparing-workflows#feature-branch-workflow
[go-api-url]: ./docs/api/archetypes/v1/party/golang/README.md
[greenkeeper-badge-image]: https://badges.greenkeeper.io/commonality/archetypes.svg?style=flat-square
[greenkeeper-url]: https://greenkeeper.io/
[icon-eslint-image]: ./docs/img/tech-stack/icon-eslint-50.jpeg
[icon-jest-image]: ./docs/img/tech-stack/icon-jest-50.jpeg
[icon-nodejs-image]: ./docs/img/tech-stack/icon-nodejs-50.png
[icon-npm-image]: ./docs/img/tech-stack/icon-npm-50.png
[icon-package-image]: ./docs/img/icons8/icon-package-filled.png
[icon-road-milestone-image]: ./docs/img/icons8/img-goal-filled-50.png
[icon-share-stack-image]: ./docs/img/tech-stack/icon-swagger-50.png
[icon-standardjs-image]: ./docs/img/tech-stack/icon-standardjs-50.png
[icon-swagger-image]: ./docs/img/tech-stack/icon-swagger-50.png
[icon-travis-image]: ./docs/img/icons8/travis-ci-50.png
[icon-user-manual-image]: ./docs/img/icons8/icon-user-manual-grey-50.png
[icon-yeoman-image]: ./docs/img/tech-stack/icon-yeoman-50.png
[icons8-license-url]: https://icons8.com/license/
[issues-new-url]: https://github.com/commonality/archetypes/issues/new
[issues-url]: https://github.com/commonality/archetypes/issues
[js-api-url]: ./docs/api/archetypes/v1/party/js/README.md
[least-privilege-url]: https://en.wikipedia.org/wiki/Principle_of_least_privilege
[license-image]: https://img.shields.io/badge/License-Apache%202.0-blue.svg?style=flat-square
[license-url]: LICENSE
[markdown-toc-url]: https://github.com/jonschlinkert/markdown-toc
[mda-book-url]: https://www.amazon.com/Enterprise-Patterns-MDA-Building-Archetype/dp/032111230X
[nodejs-url]: https://nodejs.org/
[npm-badge-image]: https://img.shields.io/npm/v/archetypes.svg?style=flat-square
[npm-scripts-docs-url]: https://docs.npmjs.com/misc/scripts
[npm-url]: https://npmjs.org/package/archetypes
[nsp-badge-image]: https://nodesecurity.io/orgs/commonality/projects/3706b82c-bf9a-44f0-9d77-c489b6c11dff/badge?style=flat-square
[nsp-sign-up-url]: https://nodesecurity.io/signup
[nsp-url]: https://nodesecurity.io/orgs/commonality/projects/3706b82c-bf9a-44f0-9d77-c489b6c11dff
[party-swagger-json-url]: http://api.swindle.net/archetypes/v1/schemas/parties/parties.yaml
[party-swagger-yaml-url]: http://api.swindle.net/archetypes/v1/schemas/parties/parties.yaml
[pr-url]: /commonality/archetypes/pulls
[product-development-guidelines-url]: ./.github/PRODUCT_DEVELOPEMENT_GUIDELINES.md
[prs-welcome-badge-image]: https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square
[prs-welcome-url]: http://makeapullrequest.com
[rb-api-url]: ./docs/api/archetypes/v1/party/ruby/README.md
[readme-score-badge-image]: http://readme-score-api.herokuapp.com/score.svg?style=flat-square&url=https://github.com/commonality/archetypes
[readme-score-url]: http://clayallsopp.github.io/readme-score?url=https://github.com/commonality/archetypes
[rest-api-image]: ./docs/img/icons8/icon-rest-api.png
[snyk-vulnerabilities-badge-image]: https://snyk.io/test/github/commonality/archetypes/badge.svg?style=flat-square
[snyk-vulnerabilities-url]: https://snyk.io/test/github/commonality/archetypes
[sonarcloud-url]: https://sonarcloud.io
[stack-share-badge-image]: https://img.shields.io/badge/tech-stack-0690fa.svg?style=flat-square
[stack-share-news-feed-image]: ./docs/img/tech-stack/icon-news-feed-50.png
[stack-share-news-feed-url]: https://stackshare.io/news/filter/75847/1724/save
[stack-share-rss-feed-image]: ./docs/img/tech-stack/icon-rss-feed-50.png
[stack-share-rss-feed-url]: https://stackshare.io/news/75847/1724/feed
[stack-share-url]: https://stackshare.io/commonality/archetypes
[standard-version-cut-a-release-url]: https://github.com/conventional-changelog/standard-version#cut-a-release
[standardjs-badge-image]: https://img.shields.io/badge/code_style-standard-brightgreen.svg?style=flat-square
[standardjs-url]: https://standardjs.com/
[swagger-api-docs-url]: ./docs/SWAGGER.md
[swagger-cli-url]: https://github.com/BigstickCarpet/swagger-cli
[swagger-codegen-getting-started-url]: https://github.com/swagger-api/swagger-codegen#getting-started
[swagger-codegen-installation-url]: https://github.com/swagger-api/swagger-codegen#compatibility
[swagger-codegen-url]: https://github.com/swagger-api/swagger-codegen
[swagger-io-url]: http://swagger.io
[swagger-markdown-url]: https://github.com/syroegkin/swagger-markdown
[swagger-validity-money-badge-image]: https://img.shields.io/swagger/valid/2.0/http/api.swindle.net/archetypes/v1/schemas/money/money.spec.yaml.svg?style=flat-square
[swagger-validity-money-url]: https://online.swagger.io/validator/debug?url=http://api.swindle.net/archetypes/v1/schemas/money/money.spec.yaml
[swagger-validity-party-badge-image]: https://img.shields.io/swagger/valid/2.0/http/api.swindle.net/archetypes/v1/schemas/parties/parties.yaml.svg?style=flat-square
[swagger-validity-party-url]: https://online.swagger.io/validator/debug?url=http://api.swindle.net/archetypes/v1/schemas/parties/parties.yaml
[swagger-validity-quantity-badge-image]: https://img.shields.io/swagger/valid/2.0/http/api.swindle.net/archetypes/v1/schemas/quantities/quantities.yaml.svg?style=flat-square
[swagger-validity-quantity-url]: https://online.swagger.io/validator/debug?url=http://api.swindle.net/archetypes/v1/schemas/quantities/quantities.yaml
[travis-badge-image]: https://img.shields.io/travis/commonality/archetypes.svg?branch=master&style=flat-square
[travis-url]: https://travis-ci.org/commonality/archetypes

<!-- ⛔️ Octicon img references ⛔️  -->

[octicon-alert]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/alert.svg
[octicon-arrow-down]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/arrow-down.svg
[octicon-arrow-left]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/arrow-left.svg
[octicon-arrow-right]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/arrow-right.svg
[octicon-arrow-small-down]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/arrow-small-down.svg
[octicon-arrow-small-left]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/arrow-small-left.svg
[octicon-arrow-small-right]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/arrow-small-right.svg
[octicon-arrow-small-up]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/arrow-small-up.svg
[octicon-arrow-up]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/arrow-up.svg
[octicon-beaker]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/beaker.svg
[octicon-bell]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/bell.svg
[octicon-bold]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/bold.svg
[octicon-book]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/book.svg
[octicon-bookmark]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/bookmark.svg
[octicon-briefcase]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/briefcase.svg
[octicon-broadcast]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/broadcast.svg
[octicon-browser]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/browser.svg
[octicon-bug]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/bug.svg
[octicon-calendar]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/calendar.svg
[octicon-check]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/check.svg
[octicon-checklist]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/checklist.svg
[octicon-chevron-down]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/chevron-down.svg
[octicon-chevron-left]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/chevron-left.svg
[octicon-chevron-right]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/chevron-right.svg
[octicon-chevron-up]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/chevron-up.svg
[octicon-circle-slash]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/circle-slash.svg
[octicon-circuit-board]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/circuit-board.svg
[octicon-clippy]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/clippy.svg
[octicon-clock]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/clock.svg
[octicon-cloud-download]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/cloud-download.svg
[octicon-cloud-upload]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/cloud-upload.svg
[octicon-code]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/code.svg
[octicon-comment-discussion]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/comment-discussion.svg
[octicon-comment]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/comment.svg
[octicon-credit-card]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/credit-card.svg
[octicon-dash]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/dash.svg
[octicon-dashboard]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/dashboard.svg
[octicon-database]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/database.svg
[octicon-desktop-download]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/desktop-download.svg
[octicon-device-camera-video]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/device-camera-video.svg
[octicon-device-camera]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/device-camera.svg
[octicon-device-desktop]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/device-desktop.svg
[octicon-device-mobile]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/device-mobile.svg
[octicon-diff-added]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/diff-added.svg
[octicon-diff-ignored]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/diff-ignored.svg
[octicon-diff-modified]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/diff-modified.svg
[octicon-diff-removed]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/diff-removed.svg
[octicon-diff-renamed]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/diff-renamed.svg
[octicon-diff]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/diff.svg
[octicon-ellipses]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/ellipses.svg
[octicon-ellipsis]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/ellipsis.svg
[octicon-eye]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/eye.svg
[octicon-file-binary]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/file-binary.svg
[octicon-file-code]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/file-code.svg
[octicon-file-directory]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/file-directory.svg
[octicon-file-media]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/file-media.svg
[octicon-file-pdf]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/file-pdf.svg
[octicon-file-submodule]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/file-submodule.svg
[octicon-file-symlink-directory]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/file-symlink-directory.svg
[octicon-file-symlink-file]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/file-symlink-file.svg
[octicon-file-text]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/file-text.svg
[octicon-file-zip]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/file-zip.svg
[octicon-file]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/file.svg
[octicon-flame]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/flame.svg
[octicon-fold]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/fold.svg
[octicon-gear]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/gear.svg
[octicon-gift]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/gift.svg
[octicon-gist-secret]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/gist-secret.svg
[octicon-gist]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/gist.svg
[octicon-git-branch]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/git-branch.svg
[octicon-git-commit]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/git-commit.svg
[octicon-git-compare]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/git-compare.svg
[octicon-git-merge]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/git-merge.svg
[octicon-git-pull-request]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/git-pull-request.svg
[octicon-globe]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/globe.svg
[octicon-grabber]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/grabber.svg
[octicon-graph]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/graph.svg
[octicon-heart]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/heart.svg
[octicon-history]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/history.svg
[octicon-home]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/home.svg
[octicon-horizontal-rule]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/horizontal-rule.svg
[octicon-hubot]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/hubot.svg
[octicon-inbox]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/inbox.svg
[octicon-info]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/info.svg
[octicon-issue-closed]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/issue-closed.svg
[octicon-issue-opened]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/issue-opened.svg
[octicon-issue-reopened]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/issue-reopened.svg
[octicon-italic]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/italic.svg
[octicon-jersey]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/jersey.svg
[octicon-key]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/key.svg
[octicon-keyboard]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/keyboard.svg
[octicon-law]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/law.svg
[octicon-light-bulb]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/light-bulb.svg
[octicon-link-external]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/link-external.svg
[octicon-link]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/link.svg
[octicon-list-ordered]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/list-ordered.svg
[octicon-list-unordered]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/list-unordered.svg
[octicon-location]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/location.svg
[octicon-lock]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/lock.svg
[octicon-logo-gist]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/logo-gist.svg
[octicon-logo-github]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/logo-github.svg
[octicon-mail-read]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/mail-read.svg
[octicon-mail-reply]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/mail-reply.svg
[octicon-mail]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/mail.svg
[octicon-mark-github]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/mark-github.svg
[octicon-markdown]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/markdown.svg
[octicon-megaphone]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/megaphone.svg
[octicon-mention]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/mention.svg
[octicon-milestone]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/milestone.svg
[octicon-mirror]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/mirror.svg
[octicon-mortar-board]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/mortar-board.svg
[octicon-mute]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/mute.svg
[octicon-no-newline]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/no-newline.svg
[octicon-octoface]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/octoface.svg
[octicon-organization]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/organization.svg
[octicon-package]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/package.svg
[octicon-paintcan]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/paintcan.svg
[octicon-pencil]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/pencil.svg
[octicon-person]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/person.svg
[octicon-pin]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/pin.svg
[octicon-plug]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/plug.svg
[octicon-plus-small]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/plus-small.svg
[octicon-plus]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/plus.svg
[octicon-primitive-dot]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/primitive-dot.svg
[octicon-primitive-square]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/primitive-square.svg
[octicon-pulse]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/pulse.svg
[octicon-question]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/question.svg
[octicon-quote]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/quote.svg
[octicon-radio-tower]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/radio-tower.svg
[octicon-reply]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/reply.svg
[octicon-repo-clone]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/repo-clone.svg
[octicon-repo-force-push]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/repo-force-push.svg
[octicon-repo-forked]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/repo-forked.svg
[octicon-repo-pull]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/repo-pull.svg
[octicon-repo-push]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/repo-push.svg
[octicon-repo]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/repo.svg
[octicon-rocket]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/rocket.svg
[octicon-rss]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/rss.svg
[octicon-ruby]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/ruby.svg
[octicon-search]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/search.svg
[octicon-server]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/server.svg
[octicon-settings]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/settings.svg
[octicon-shield]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/shield.svg
[octicon-sign-in]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/sign-in.svg
[octicon-sign-out]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/sign-out.svg
[octicon-smiley]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/smiley.svg
[octicon-squirrel]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/squirrel.svg
[octicon-star]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/star.svg
[octicon-stop]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/stop.svg
[octicon-sync]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/sync.svg
[octicon-tag]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/tag.svg
[octicon-tasklist]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/tasklist.svg
[octicon-telescope]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/telescope.svg
[octicon-terminal]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/terminal.svg
[octicon-text-size]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/text-size.svg
[octicon-three-bars]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/three-bars.svg
[octicon-thumbsdown]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/thumbsdown.svg
[octicon-thumbsup]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/thumbsup.svg
[octicon-tools]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/tools.svg
[octicon-trashcan]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/trashcan.svg
[octicon-triangle-down]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/triangle-down.svg
[octicon-triangle-left]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/triangle-left.svg
[octicon-triangle-right]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/triangle-right.svg
[octicon-triangle-up]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/triangle-up.svg
[octicon-unfold]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/unfold.svg
[octicon-unmute]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/unmute.svg
[octicon-unverified]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/unverified.svg
[octicon-verified]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/verified.svg
[octicon-versions]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/versions.svg
[octicon-watch]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/watch.svg
[octicon-x]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/x.svg
