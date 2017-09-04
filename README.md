![Business archetypes logo][business-archetypes-logo-image]

# `archetypes`  ⍟  [![NPM version][npm-badge-image]][npm-url]

[![License][license-image]][license-url] [![Dependencies' licenses][fossa-badge-image]][fossa-url] [![NSP Status][nsp-badge-image]][nsp-url] [![Synk Vulnerabilities][snyk-vulnerabilities-badge-image]][snyk-vulnerabilities-url]<br>[![StackShare][stack-share-badge-image]][stack-share-url] [![Dependency Status][david-dm-badge-image]][daviddm-url] [![devDependencies Status][david-dm-dev-badge-image]][daviddm-dev-url] <br>[![Build Status][travis-badge-image]][travis-url] [![Coverage percentage][coveralls-badge-image]][coveralls-url] [![Codacy quality][codacy-badge-image]][codacy-url]

> ![Quote][quote-left-img] A business archetype is a primordial thing that occurs consistently and universally in business domains and business software systems.
>
> (Arlow & Neustadt, [_Enterprise patterns and MDA: building better software with archetype patterns and UML_][mda-book-url], 2006, p. 5)

__`archetypes` model how `Parties`&mdash;`People` and `Companies`&mdash;exchange `Products` and `Services` with `Payments` (normally `Money` or other `Locale`-based `Currencies` like gift-cards). The exchanges are recorded from beginning to end as `Orders` and managed as Customer Relationships (CRM) between buyers and sellers (with `PartyRelationships`). When necessary, `Rules` constrain and determine the types of relationships allowed; how products can be packaged; and whether discounts can be applied.__

These __business `archetypes`__ are expressed as __models__ in open, vendor-neutral __OpenAPI/Swagger__ specifications, which provide:

1. __A common vocabulary and operating framework__ for how `Parties`&mdash;`People` and `Companies`&mdash;exchange goods and services for `Money` (with `Locale`-based `Currencies`), as well as managing these relationships as `Customers` (CRM).
2. __Executable documentation__ that articulates these models and how they interact.
3. __Open-source tools that automatically generate microservice "stubs" and client SDKs__.

## Table of contents

<!-- toc -->

- [1. Installation](#1-installation)
  * [1.2. Generating servers and clients](#12-generating-servers-and-clients)
    + [1.2.1. `swagger-api` and `swagger-codegen`](#121-swagger-api-and-swagger-codegen)
    + [1.2.2. Swagger Editor](#122-swagger-editor)
- [2. Usage and API reference](#2-usage-and-api-reference)
  * [2.1. `curl`](#21-curl)
  * [2.2. Swagger-UI](#22-swagger-ui)
- [3. `Party` :package:](#3-party-package)
  * [3.1. Standards compliance](#31-standards-compliance)
  * [3.2. Resources](#32-resources)
  * [3.3. OpenAPI 2.0 Specs](#33-openapi-20-specs)
  * [3.4. API and SDK documentation](#34-api-and-sdk-documentation)
  * [3.5. Usage example](#35-usage-example)
- [4. `Quantity` :package:](#4-quantity-package)
  * [4.1. Standards compliance](#41-standards-compliance)
  * [4.2. OpenAPI 2.0 Specs](#42-openapi-20-specs)
  * [4.3. API and SDK documentation](#43-api-and-sdk-documentation)
  * [4.4. Usage example](#44-usage-example)
- [5. `Money`](#5-money)
  * [Roadmap](#roadmap)
- [6. `PartyRelationship`](#6-partyrelationship)
  * [Roadmap](#roadmap-1)
- [7. `Rule`](#7-rule)
  * [Roadmap](#roadmap-2)
- [8. Customer relationship management (CRM)](#8-customer-relationship-management-crm)
  * [Roadmap](#roadmap-3)
- [9. `Product`](#9-product)
  * [Roadmap](#roadmap-4)
- [10. `Inventory`](#10-inventory)
  * [Roadmap](#roadmap-5)
- [11. `Order`](#11-order)
  * [Roadmap](#roadmap-6)
- [12. Product development and delivery](#12-product-development-and-delivery)
  * [12.1. Built With](#121-built-with)
  * [12.2. Prerequisites](#122-prerequisites)
  * [12.3. Set up a development environment](#123-set-up-a-development-environment)
  * [12.4. `npm-scripts`](#124-npm-scripts)
- [13. DevSecOps](#13-devsecops)
  * [13.1. Builds](#131-builds)
  * [13.2. Tests and quality gates](#132-tests-and-quality-gates)
    + [13.2.1. Swagger validation](#1321-swagger-validation)
    + [13.2.2. Linting](#1322-linting)
    + [13.3.3. Spec (unit test) execution and code coverage](#1333-spec-unit-test-execution-and-code-coverage)
  * [13.3.4. Deploy/Publish](#1334-deploypublish)
    + [13.3.4.1. Prerequisites](#13341-prerequisites)
    + [13.3.4.2. Publish on `npm`](#13342-publish-on-npm)
- [14. Style guides](#14-style-guides)
  * [14.1. JavaScript source code](#141-javascript-source-code)
  * [14.2. Color palette](#142-color-palette)
- [15. Semantic version and `CHANGELOG`](#15-semantic-version-and-changelog)
- [16. Contributing to `commonality/archetypes`](#16-contributing-to-commonalityarchetypes)
  * [16.1. Contribution workflows summarized](#161-contribution-workflows-summarized)
  * [16.2. Contributors](#162-contributors)
- [17. Licenses](#17-licenses)

<!-- tocstop -->

## 1. Installation

Open a Terminal and run this command:

```bash
$ npm install --save archetypes
```

If your team prefers Yarn:

```bash
$ yarn add archetypes
```

### 1.2. Generating servers and clients

[Swagger Codegen][swagger-codegen-url] will generate servers and clients in many different languages and frameworks.

#### 1.2.1. `swagger-api` and `swagger-codegen`

> ![Quote][quote-left-img] [`swagger-api/swagger-codegen`][swagger-codegen-url] contains a template-driven engine to generate documentation, API clients and server stubs in different languages by parsing your OpenAPI / Swagger definition.
>
> Cheng, W., & Tam, T. (2011, August 15). swagger-api/swagger-codegen. Retrieved August 27, 2017, from https://github.com/swagger-api/swagger-codegen

Follow the [Installation][swagger-codegen-installation-url] and [Getting Starting][swagger-codegen-getting-started-url] instructions to generate and build servers and clients from workstations, CI-services, or Docker containers.

#### 1.2.2. Swagger Editor

1. Go to https://editor.swagger.io/.
1. Copy the `/archetypes/v1/{archetype}/{archetype}.swagger.yaml` specification of interest.
1. Paste the `*.swagger.json` source into the editor pane.
1. Select "Generate Server" or "Generate Client" and choose an option.
1. If successful, you will prompted to download the ZIPped source code.

## 2. Usage and API reference

### 2.1. `curl`

The simplest way to test against mock objects at `http://api.swindle.net/archetypes/v1/parties` with `curl` in a Terminal.

```bash
$ curl -X GET "http://api.swindle.net/archetypes/v1/parties/2e908e75-69a9-47e2-83ae-0c3cc52da84c" \
  -H "accept: application/json"
```

### 2.2. Swagger-UI

Go to the [api.swindle.net Swagger-UI](http://api.swindle.net/swagger-ui/#/)'s "__About__" section and "__Explore__" the available Swagger Specs.

The following sections summarize all twelve business archetype patterns as they are released.

## 3. `Party` :package:

![REST API][rest-api-image]

> ![Quote][quote-left-img] The [`Party`](./docs/api/archetypes/v1/party/js/README.md) archetype represents an identifiable, addressable entity that may have a legal status and that normally has autonomous control over (at least some of) its actions.
>
> Arlow, J., & Neustadt, I. (2006). Party archetype pattern. In [_Enterprise patterns and MDA: building better software with archetype patterns and UML_][mda-book-url] (p. 122). Boston: Addison-Wesley.

### 3.1. Standards compliance

| Standard | Contents |
| --- | --- |
| [OMG Party Management Facility Specification](http://www.omg.org/spec/PARTY/1.0/PDF) | A standard that supports party management. |
| [ISO 3166](https://www.iso.org/iso-3166-country-codes.html) | Two- and three-letter country codes and country names. |
| [ISO/IEC 5218:2004](https://www.iso.org/standard/36266.html) | Codes for the representation of human sexes. |
| [ITU-T Recommendations](http://www.itu.int/rec/T-REC-E.164/en) | Telecommunication numbering plan. |

### 3.2. Resources

| Proposal | Contents |
| --- | --- |
| [63 Genders](https://apath.org/63-genders/) | A proposal for describing Gender as a combination of Physical, Personality and Preferential groups. |


### 3.3. OpenAPI 2.0 Specs

[![Party's Swagger validity][swagger-validity-party-badge-image]][swagger-validity-party-url] [`YAML`](http://api.swindle.net/archetypes/v1/schemas/parties/parties.yaml)

<!-- AUTO-GENERATED-CONTENT:START (DIRTREE:dir=./schemas/v1/parties&depth=1) -->
```shell
# Party archetype pattern OpenAPI specs
schemas/v1/parties/
├── nominative.yaml
├── parties.yaml
└── unique-identifier.yaml
```
<!-- AUTO-GENERATED-CONTENT:START (DIRTREE:dir=./schemas/v1/parties&depth=1) --><!-- AUTO-GENERATED-CONTENT:END -->


### 3.4. API and SDK documentation

| Business archetype | Definition |
|----|----|
| [`Organizations`][api-sdk-doc-party-organizations-url] | Administrative and functional structures |
| [`Parties`][api-sdk-doc-party-parties-url] | Identifiable, addressable entity that may have a legal status and that normally has autonomous control over (at least some of) its actions. |
| [`People`][api-sdk-doc-party-people-url] | Human beings. |
| [`Preferences`][api-sdk-doc-party-preferences-url] | Choices of (or liking for) something, often from a set of possible or offered options. |

### 3.5. Usage example

**Retrieve a `Party` by identifier** with JavaScript:

```js
const Party = require('party')

const api = new Party.PartiesApi()

// {String} The universally unique identifier associated with a Party.
const partyIdentifier = '2e908e75-69a9-47e2-83ae-0c3cc52da84c'

const callback = (error, data, response) => {
  if (error) {
    console.error(error)
  } else {
    console.log(
      'API called successfully. Returned data: ' +
      JSON.stringify(data, null, 2)
    )
  }
  console.log(response)
}
api.getByPartyIdentifier(partyIdentifier, callback)
```

## 4. `Quantity` :package:

![REST API][rest-api-image]

> ![Quote][quote-left-img] The [`Quantity`](./docs/api/archetypes/v1/quantity/js/README.md) archetype represents an amount of something measured according to some standard of measurement.
>
> Arlow, J., & Neustadt, I. (2006). Quantity archetype pattern. In [_Enterprise patterns and MDA: building better software with archetype patterns and UML_][mda-book-url] (p. 400). Boston: Addison-Wesley.

### 4.1. Standards compliance

<table>   <thead>     <tr><th>Standard</th><th>Contents</th></tr>   </thead>   <tfoot>   </tfoot>   <tbody>     <tr>       <td><a href=\"http://www.bipm.org/en/measurement-units/\">SI</a>       <td>International System of Units&mdash;Bureau International des Poids et Mesures (BIPM).     </tr>   </tbody> </table>

### 4.2. OpenAPI 2.0 Specs

[![Quantity's Swagger validity][swagger-validity-quantity-badge-image]][swagger-validity-quantity-url] [`YAML`](http://api.swindle.net/archetypes/v1/schemas/quantities/quantities.yaml)

<!-- AUTO-GENERATED-CONTENT:START (DIRTREE:dir=./schemas/v1/quantities&depth=1) -->
```
schemas/v1/quantities/
├── metric.yaml
├── quantities.yaml
├── quantity.yaml
├── rounding-strategy.yaml
├── si-system-of-units.yaml
└── system-of-units.yaml
```
<!-- AUTO-GENERATED-CONTENT:START (DIRTREE:dir=./schemas/v1/quantities&depth=1) --><!-- AUTO-GENERATED-CONTENT:END -->

### 4.3. API and SDK documentation

* [`JavaScript`](./docs/api/archetypes/v1/quantity/js/README.md)
* [`Ruby`](./docs/api/archetypes/v1/party/quantity/ruby/README.md)


### 4.4. Usage example

**Retrieve an `SiBaseUnit` by identifier** with JavaScript:

```js
const Quantity = require('quantity')

const api = new Quantity.SIInternationalSystemOfUnitsApi()

// {String} The name of the unit/metric.
const name = 'meter'

const callback = (error, data, response) => {
  if (error) {
    console.error(error)
  } else {
    console.log(
      'API called successfully. Returned data: ' +
      JSON.stringify(data, null, 2)
    )
  }
  console.log(response)
}

api.getBaseUnitByName(name, callback)
```

## 5. `Money`

![REST API][rest-api-image]

> ![Quote][quote-left-img] The [`Money`](./docs/api/archetypes/v1/money/js/README.md) archetype represents an amount of a specific `Currency` that is `acceptedIn` one or more `Locales`.
>
> Arlow, J., & Neustadt, I. (2006). Money archetype pattern. In [_Enterprise patterns and MDA: building better software with archetype patterns and UML_][mda-book-url] (p. 413). Boston: Addison-Wesley.

### Roadmap

[![icon-road-milestone-image] MVP2: Money](https://github.com/commonality/archetypes/milestone/2)

<!--
      ### 5.1. OpenAPI 2.0 Specs

      [![Quantity's Swagger validity][swagger-validity-money-badge-image]][swagger-validity-money-url]

      * [`JSON`](http://api.swindle.net/archetypes/v1/schemas/money/money.swagger.json)
      * [`YAML`](http://api.swindle.net/archetypes/v1/schemas/money/money.swagger.yaml)

      ### 5.2. API documentation

      * [`JavaScript`](./docs/api/archetypes/v1/money/js/README.md)
      * [`Ruby`](./docs/api/archetypes/v1/party/money/README.md)


      ### 5.3. Usage example

      **Retrieve an `` by identifier** with JavaScript:

      ```js

      ```
-->

## 6. `PartyRelationship`

![REST API][rest-api-image]

> ![Quote][quote-left-img] The [`PartyRelationship`](./docs/api/archetypes/v1/party-relationship/js/README.md) captures the fact that there is a semantic relationship between two `Parties` in which each `Party` plays a specific role.
>
> Arlow, J., & Neustadt, I. (2006). Archetype glossary. In [_Enterprise patterns and MDA: building better software with archetype patterns and UML_][mda-book-url] (p. 160). Boston: Addison-Wesley.

### Roadmap

[![icon-road-milestone-image] MVP3: PartyRelationships and Rules](https://github.com/commonality/archetypes/milestone/3)

<!--
      ### 6.1. OpenAPI 2.0 Specs

      [![Quantity's Swagger validity][swagger-validity-quantity-badge-image]][swagger-validity-quantity-url]

      * [`JSON`](http://api.swindle.net/archetypes/v1/schemas/party-relationship/party-relationship.swagger.json)
      * [`YAML`](http://api.swindle.net/archetypes/v1/schemas/party-relationship/party-relationship.swagger.yaml)

      ### 6.2. API documentation

      * [`JavaScript`](./docs/api/archetypes/v1/party-relationship/js/README.md)
      * [`Ruby`](./docs/api/archetypes/v1/party/party-relationship/README.md)


      ### 6.3. Usage example

      **Retrieve an `` by identifier** with JavaScript:

      ```js

      ```
-->

## 7. `Rule`

![REST API][rest-api-image]

> ![Quote][quote-left-img] The [`Rule`](./docs/api/archetypes/v1/rule/js/README.md) archetype represents a constraint on the operation of the software systems of the business&mdash;its semantics are defined by a sequence of `RuleElements`.
>
> Arlow, J., & Neustadt, I. (2006). Archetype glossary. In [_Enterprise patterns and MDA: building better software with archetype patterns and UML_][mda-book-url] (p. 449). Boston: Addison-Wesley.

### Roadmap

[![icon-road-milestone-image] MVP3: PartyRelationships and Rules](https://github.com/commonality/archetypes/milestone/3)

<!--
      ### 7.1. OpenAPI 2.0 Specs

      [![Rule's Swagger validity][swagger-validity-rules-badge-image]][swagger-validity-rules-url]

      * [`JSON`](http://api.swindle.net/archetypes/v1/schemas/rules/rules.swagger.json)
      * [`YAML`](http://api.swindle.net/archetypes/v1/schemas/rules/rules.swagger.yaml)

      ### 7.2. API documentation

      * [`JavaScript`](./docs/api/archetypes/v1/rules/js/README.md)
      * [`Ruby`](./docs/api/archetypes/v1/rules/README.md)


      ### 7.3. Usage example

      **Retrieve an `` by identifier** with JavaScript:

      ```js

      ```
-->

## 8. Customer relationship management (CRM)

![REST API][rest-api-image]

> ![Quote][quote-left-img] [Customer relationship management (CRM)](./docs/api/archetypes/v1/crm/README.md) is about actively managing the relationships between your business and your customers, in order to understand and increase customer value, motivation, and loyalty.
>
> Arlow, J., & Neustadt, I. (2006). Customer relationship management archetype pattern. In [_Enterprise patterns and MDA: building better software with archetype patterns and UML_][mda-book-url] (p. 187). Boston: Addison-Wesley.

### Roadmap

[![icon-road-milestone-image] MVP4: Customer relationship management (CRM)](https://github.com/commonality/archetypes/milestone/4)

<!--
      ### 8.1. OpenAPI 2.0 Specs

      [![Customer relationship management (CRM) Swagger validity][swagger-validity-crm-badge-image]][swagger-validity-crm-url]

      * [`JSON`](http://api.swindle.net/archetypes/v1/schemas/crm/crm.swagger.json)
      * [`YAML`](http://api.swindle.net/archetypes/v1/schemas/crm/crm.swagger.yaml)

      ### 8.2. API documentation

      * [`JavaScript`](./docs/api/archetypes/v1/crm/js/README.md)
      * [`Ruby`](./docs/api/archetypes/v1/crm/README.md)


      ### 8.3. Usage example

      **Retrieve an `` by identifier** with JavaScript:

      ```js

      ```
-->

## 9. `Product`

![REST API][rest-api-image]

> ![Quote][quote-left-img] The [`Product`](./docs/api/archetypes/v1/product/js/README.md) archetype pattern represents a generalized model for products.
>
> Arlow, J., & Neustadt, I. (2006). Product archetype pattern. In [_Enterprise patterns and MDA: building better software with archetype patterns and UML_][mda-book-url] (p. 207). Boston: Addison-Wesley.

### Roadmap

[![icon-road-milestone-image] MVP5: Product](https://github.com/commonality/archetypes/milestone/5)

<!--
      ### 9.1. OpenAPI 2.0 Specs

      [![Product's Swagger validity][swagger-validity-product-badge-image]][swagger-validity-product-url]

      * [`JSON`](http://api.swindle.net/archetypes/v1/schemas/product/product.swagger.json)
      * [`YAML`](http://api.swindle.net/archetypes/v1/schemas/product/product.swagger.yaml)

      ### 9.2. API documentation

      * [`JavaScript`](./docs/api/archetypes/v1/product/js/README.md)
      * [`Ruby`](./docs/api/archetypes/v1/product/README.md)


      ### 9.3. Usage example

      **Retrieve an `` by identifier** with JavaScript:

      ```js

      ```
-->

## 10. `Inventory`

![REST API][rest-api-image]

> ![Quote][quote-left-img] The [`Inventory`](./docs/api/archetypes/v1/inventory/js/README.md) archetype represents a collection of `InventoryEntries` held in stock by a business.
>
> Arlow, J., & Neustadt, I. (2006). Inventory archetype pattern. In [_Enterprise patterns and MDA: building better software with archetype patterns and UML_][mda-book-url] (p. 271). Boston: Addison-Wesley.

### Roadmap

[![icon-road-milestone-image] MVP6: Inventory](https://github.com/commonality/archetypes/milestone/6)

<!--
      ### 10.1. OpenAPI 2.0 Specs

      [![Inventory's Swagger validity][swagger-validity-inventory-badge-image]][swagger-validity-inventory-url]

      * [`JSON`](http://api.swindle.net/archetypes/v1/schemas/inventory/inventory.swagger.json)
      * [`YAML`](http://api.swindle.net/archetypes/v1/schemas/inventory/inventory.swagger.yaml)

      ### 10.2. API documentation

      * [`JavaScript`](./docs/api/archetypes/v1/inventory/js/README.md)
      * [`Ruby`](./docs/api/archetypes/v1/inventory/README.md)


      ### 10.3. Usage example

      **Retrieve an `` by identifier** with JavaScript:

      ```js

      ```
-->

## 11. `Order`

![REST API][rest-api-image]

> ![Quote][quote-left-img] The [`Order`](./docs/api/archetypes/v1/order/js/README.md) archetype represents a request by a buyer for a seller to supply some goods or services.
>
> Arlow, J., & Neustadt, I. (2006). Inventory archetype pattern. In [_Enterprise patterns and MDA: building better software with archetype patterns and UML_][mda-book-url] (p. 271). Boston: Addison-Wesley.

### Roadmap

[![icon-road-milestone-image] MVP7: Inventory](https://github.com/commonality/archetypes/milestone/7)

## 12. Product development and delivery
![Packaging][icon-package-image]


> [![PRs Welcome][prs-welcome-badge-image]][prs-welcome-url] We welcome contributors and pull requests!
>
> Interested in development contributions? Great! Check out our guidelines for [Contributing to `archetypes`][contributing-url] for details.

### 12.1. Built With

[![StackShare][stack-share-badge-image]][stack-share-news-feed-url]

`archetypes` requires the following [tech-stack][stack-share-news-feed-url] to either run, build, test, or deploy:

<!-- AUTO-GENERATED-CONTENT:START (DEPENDENCYTABLE:dev=true) -->
| **Dependency** | **Description** | **Version** | **Type** |
| -------------- | --------------- | ----------- | -------- |
 | [lodash@^4.17.4](https://lodash.com/) | Lodash modular utilities. | 4.17.4 | production |
 | [standard-readme-spec@1.1.3](https://github.com/RichardLitt/standard-readme) | Readme Standard Style | 1.1.3 | production |
 | [babel-jest@20.0.3](https://github.com/facebook/jest#readme) | Jest plugin to use babel for transformation. | 20.0.3 | dev |
 | [babel-preset-env@1.6.0](https://babeljs.io/) | A Babel preset for each environment. | 1.6.0 | dev |
 | [babelify@7.3.0](https://github.com/babel/babelify) | Babel browserify transform | 7.3.0 | dev |
 | [commitplease@2.7.10](https://github.com/jzaefferer/commitplease#readme) | Validates strings as commit messages | 2.7.10 | dev |
 | [coveralls@^2.13.1](https://github.com/nickmerwin/node-coveralls#readme) | takes json-cov output into stdin and POSTs to coveralls.io | 2.13.1 | dev |
 | [eslint@4.5.0](http://eslint.org) | An AST-based pattern checker for JavaScript. | 4.5.0 | dev |
 | [eslint-config-xo-space@0.16.0](https://github.com/sindresorhus/eslint-config-xo-space#readme) | ESLint shareable config for XO with 2-space indent | 0.16.0 | dev |
 | [eslint-plugin-import@2.7.0](https://github.com/benmosher/eslint-plugin-import) | Import with sanity. | 2.7.0 | dev |
 | [eslint-plugin-jest@20.0.3](https://github.com/facebook/jest#readme) | Eslint rules for Jest | 20.0.3 | dev |
 | [eslint-plugin-jsdoc@3.1.2](https://github.com/gajus/eslint-plugin-jsdoc#readme) | JSDoc linting rules for ESLint. | 3.1.2 | dev |
 | [eslint-plugin-no-unsafe-innerhtml@1.0.16](https://github.com/mozfreddyb/eslint-plugin-no-unsafe-innerhtml/) | custom ESLint rule to disallows unsafe innerHTML, outerHTML and insertAdjacentHTML | 1.0.16 | dev |
 | [eslint-plugin-no-unsanitized@2.0.1](https://github.com/mozilla/eslint-plugin-no-unsanitized/) | ESLint rule to disallow unsanitized code | 2.0.1 | dev |
 | [eslint-plugin-node@5.1.1](https://github.com/mysticatea/eslint-plugin-node#readme) | Additional ESLint's rules for Node.js | 5.1.1 | dev |
 | [eslint-plugin-promise@3.5.0](https://github.com/xjamundx/eslint-plugin-promise#readme) | Enforce best practices for JavaScript promises | 3.5.0 | dev |
 | [eslint-plugin-scanjs-rules@0.2.1](https://github.com/mozfreddyb/eslint-plugin-scanjs-rules/) | ESLint plugin that contains ScanJS rules | 0.2.1 | dev |
 | [eslint-plugin-security@1.4.0](https://github.com/nodesecurity/eslint-plugin-security#readme) | Security rules for eslint | 1.4.0 | dev |
 | [eslint-plugin-standard@3.0.1](https://github.com/xjamundx/eslint-plugin-standard#readme) | ESlint Plugin for the Standard Linter | 3.0.1 | dev |
 | [eslint-plugin-xss@0.1.8](https://npmjs.org/package/eslint-plugin-xss) | Validates XSS related issues of mixing HTML and non-HTML content in variables. | 0.1.8 | dev |
 | [jest@20.0.4](http://facebook.github.io/jest/) | Delightful JavaScript Testing. | 20.0.4 | dev |
 | [jest-cli@20.0.4](http://facebook.github.io/jest/) | Delightful JavaScript Testing. | 20.0.4 | dev |
 | [markdown-magic@0.1.18](https://npmjs.org/package/markdown-magic) | Automatically update markdown files with content from external sources | 0.1.18 | dev |
 | [markdown-magic-dependency-table@1.2.2](https://github.com/camacho/markdown-magic-dependency-table#readme) | Generate table of information about dependencies automatically in markdown | 1.2.2 | dev |
 | [markdown-magic-package-scripts@1.2.0](https://github.com/camacho/markdown-magic-package-scripts#readme) | Print list of scripts in package.json with descriptions | 1.2.0 | dev |
 | [markdown-magic-subpackage-list@1.1.1](https://github.com/camacho/markdown-magic-subpackage-list#readme) | Print a list of subpackages for markdown file | 1.1.1 | dev |
 | [nsp@2.7.0](https://github.com/nodesecurity/nsp#readme) | The Node Security (nodesecurity.io) command line interface | 2.7.0 | dev |
 | [snyk@1.40.2](https://github.com/snyk/snyk#readme) | snyk library and cli utility | 1.40.2 | dev |
 | [sonar-scanner@3.0.3](https://github.com/bcaudan/node-sonar-scanner) | Wrap sonar-scanner as a node module | 3.0.3 | dev |
 | [standard-version@4.2.0](https://github.com/conventional-changelog/standard-version#readme) | replacement for `npm version` with automatic CHANGELOG generation | 4.2.0 | dev |
 | [swagger-cli@1.0.0-beta.2](https://github.com/BigstickCarpet/swagger-cli) | Swagger 2.0 command-line tool | 1.0.0-beta.2 | dev |
<!-- AUTO-GENERATED-CONTENT:END -->

__*Keep track of `archetypes'` tech-stack with these news and RSS feeds.*__
> * [![StackShare news feed][stack-share-news-feed-image] __StackShare News Feed:__ Read the latest news about the tools and dependencies `commonality/archetypes`][stack-share-news-feed-url].
> * [![StackShare RSS feed][stack-share-rss-feed-image] __StackShare RSS Feed:__ Subscribe to news about `archetypes's` tools and dependencies][stack-share-rss-feed-url].

### 12.2. Prerequisites

 1. [__`Node.js`__][nodejs-url]: `commonality/archetypes` product development and delivery requires `Node.js` and its package manager, `npm`.
 2. [__`markdown-toc`__][markdown-toc-url] is recommended, but not required, as long as the REAME's table of contents work and accurately reflects header changes.


### 12.3. Set up a development environment

Here's a brief intro about what a developer must do in order to start developing the project further:

```shell
$ git clone https://github.com/commonality/archetypes.git
$ cd archetypes/
$ npm install
```

### 12.4. `npm-scripts`

The following CLI [`npm-scripts`][npm-scripts-docs-url] are available to you (assuming you're human, gentle reader) and CI-services.

<!-- AUTO-GENERATED-CONTENT:START (SCRIPTS) -->
| Script | Description |
|--------|-------------|
| `docs` | `node generate-docs.js && npm run docs:toc` |
| `docs:toc` | `./node_modules/.bin/markdown-toc -i README.md` |
| `lint` | `npm run lint:js && npm run lint:swagger:all` |
| `lint:js` | `eslint . --fix ` |
| `lint:sonar` | `node_modules/sonar-scanner/bin/sonar-scanner` |
| `lint:swagger:all` | `npm run lint:swagger:parties` |
| `lint:swagger:parties` | `swagger validate schemas/v1/parties/parties.yaml --debug` |
| `prepare` | `npm run security` |
| `prepublishOnly` | `npm run docs` |
| `preversion` | `npm run docs` |
| `release` | `standard-version` |
| `security` | `npm run security:nsp:scan && npm run security:snyk:all` |
| `security:nsp` | `nsp` |
| `security:nsp:scan` | `nsp check` |
| `security:snyk` | `snyk` |
| `security:snyk:all` | `npm run security:snyk:auth && npm run security:snyk:monitor && npm run security:snyk:scan` |
| `security:snyk:auth` | `snyk auth $SNYK_TOKEN` |
| `security:snyk:monitor` | `snyk monitor --org=commonality` |
| `security:snyk:scan` | `snyk test` |
| `pretest` | `npm run lint` |
| `test` | `jest --config=jest.config.json` |
| `posttest` | `npm run security && npm run docs` |
<!-- AUTO-GENERATED-CONTENT:START (SCRIPTS) -->
<!-- AUTO-GENERATED-CONTENT:END -->

## 13. DevSecOps

`commonality/archetypes` triggers Travis CI builds to execute the `ESLint`, the `Jest` test runner, and `Node Security Platform (NSP)` analysis. Code coverage reports are then sent to Coveralls and SonarCloud.

### 13.1. Builds

> ![Travis CI][icon-travis-image]
>
> `commonality/archetypes` uses [Travis CI][travis-url] for continuous integration.

For details, please review the [`.travis.yml` build file](./.travis.yml).

### 13.2. Tests and quality gates

This repository enforces Swagger quality; Javascript quality; and Javascript unit tests and code coverage.

#### 13.2.1. Swagger validation
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

#### 13.2.2. Linting
> ![ESLint][icon-eslint-image]
>
>  `commonality/archetypes` lints with `ESLint` and displays real-time results with README badges.

```bash
# Code quality analysis runs before every test execution:
$ npm test

# Only validate JavaScript and OpenAPI specs
$ npm run lint

# Only run ESLint:
$ npm run lint:js
```

#### 13.3.3. Spec (unit test) execution and code coverage
> ![Jest][icon-jest-image]
>
> `commonality/archetypes` uses `jest` for BDD spec execution and code coverage analysis. The results are displayed real-time with README badges.

Generate detailed code coverage reports at `coverage/lcov-report/index.html` and `lcov.info` and `clover.xml` files  (which you can send to CI test coverage services like  Coveralls and  [OneSonarQube][one-sonar-url] or [SonarCloud][sonarcloud-url]):

```bash
$ npm test
```


### 13.3.4. Deploy/Publish
> __[![Conventional Commits][conventional-commits-badge-image]][conventional-commits-url] with [Angular commit conventions][angularjs-commit-message-guidelines-url]__
>
> Contributors must follow the [Angular commit conventions][angularjs-commit-message-guidelines-url] in order to support automated `CHANGELOG`, `package.json`, Git release `tags`, and semantic version updates.

#### 13.3.4.1. Prerequisites

Once a PR has been approved (and passes all checks), topic branches are are merged into `master` on GitHub.

1. On the GitHub PR page, select _Squash and Merge_.
2. Add a `<title>`, `<body>`, and `<footer>` that comply with the [Conventional Commits Specfication][conventional-commits-url].

#### 13.3.4.2. Publish on `npm`

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

3. Push all changes, the new version `tag` to `master`, and publish on `npm`:
```shell
$ git push --follow-tags origin master; npm publish
```
> ![Read more...][icon-user-manual-image] For `standard-version` configuration details, [read "Cut a Release" on the `conventional-changelog/standard-version's README` page][standard-version-cut-a-release-url].

## 14. Style guides

### 14.1. JavaScript source code
> [![JavaScript Style Guide][standardjs-badge-image]][standardjs-url]
>
> Whenever you run `npm test`, `ESLint` will automatically reformat your JavaScript to ensure that all souce code conforms to the [JavaScript Standard Style][standardjs-url].

Open a Terminal and run any of these commands to ensure your JavaScript source code meets the [JavaScript Standard Style][standardjs-url]:

* __Only lint JavaScript source code__ (with `ESLint`):
```shell
# Runs eslint . --fix
$ npm run lint:js
```
* __Lint source _and_ validate OpenAPI specs:__
```shell
# Lint source and validate OpenAPI specs:
$ npm run pretest
```
* __Or run _all_ quality gates__ (including source code linting):
```shell
# Or run lint and all other quality gates:
$ npm test
```

### 14.2. Color palette

The `archetypes` documentation uses this color palette:

[![Color palette][archetypes-color-palette-image]][coolor-palette-url]

The colors are (from left to right):

* `#CFDBD5`: Light Grey
* `#E8EDDF`: Platinum
* `#F5CB5C`: Stil de Grain Yellow
* `#242423`: Raisin Black
* `#333533`: Jet

View the palette as [PDF][archetypes-color-palette-pdf-url], [PNG][archetypes-color-palette-png-url], [SCSS][archetypes-color-palette-scss-url], or on [coolors.com][coolor-palette-url].

## 15. Semantic version and `CHANGELOG`

The latest version of `commonality/archetypes` is `0.0.0`. View the [`CHANGELOG`][changelog-url] for details.

## 16. Contributing to `commonality/archetypes`
__[![PRs Welcome][prs-welcome-badge-image]][prs-welcome-url] We welcome contributors and pull requests!__

Contributions are community-driven stories with a beginning, a middle, and an end, all told through issues, comments, and pull requests. If you're interested in collaborating, please review the:

* [Code of Conduct][code-of-conduct-url]
* [Contributing][contributing-url] to `commonality/archetypes`


### 16.1. Contribution workflows summarized

We use the [feature-branch-workflow][] to accept modifications, where contributors:

1. Create an issue related to the problem you want to fix (good for traceability and cross-reference)
2. Fork the repository
3. Create a branch (optionally with the reference to the issue in the name)
4. Work it
5. Commit incrementally with readable and detailed commit messages
6. Submit a pull-request against the master branch of this repository.

We'll take care of tagging your issue with the appropriated labels and answer within a week (hopefully less!) to the problem you encounter.

### 16.2. Contributors

Thanks goes to these wonderful people:

<!-- ⛔️ AUTO-GENERATED-CONTENT:START (CONTRIBUTORS) -->
| **Commits** | **Contributor** |
| --- | --- |
| 8 | [gregswindle](https://github.com/gregswindle) |

<!-- ⛔️ AUTO-GENERATED-CONTENT:END -->

## 17. Licenses

[Apache-2.0][license-url] © [Greg Swindle](https://githbub.com/commonality).

---

[![Code Style Guide for JavaScript][standardjs-badge-image]][standardjs-url]
[![Conventional Commits][conventional-commits-badge-image]][conventional-commits-url]
[![Greenkeeper badge][greenkeeper-badge-image]][greenkeeper-url]
[![Readme Score][readme-score-badge-image]][readme-score-url]
[![StackShare][stack-share-badge-image]][stack-share-url]

Graphic art by [icons8][icons8-license-url].

---

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
[codacy-url]: https://www.codacy.com/app/commonality/archetypes?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=commonality/archetypes&amp;utm_campaign=Badge_Grade
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
[fossa-badge-image]: https://app.fossa.io/api/projects/git%2Bhttps%3A%2F%2Fgithub.com%2Fcommonality%2Farchetypes.svg?type=shield&style=flat-square
[fossa-url]: (https://app.fossa.io/projects/git%2Bhttps%3A%2F%2Fgithub.com%2Fcommonality%2Farchetypes?ref=badge_shield
[gh-standardjs-url]: https://github.com/feross/standard
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
[quote-left-img]: ./docs/img/icons8/quote-left-25.png
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
[swagger-validity-party-badge-image]: https://img.shields.io/swagger/valid/2.0/http/api.swindle.net/archetypes/v1/schemas/parties/parties.yaml.svg?style=flat-square
[swagger-validity-party-url]: https://online.swagger.io/validator/debug?url=http://api.swindle.net/archetypes/v1/schemas/parties/parties.yaml
[swagger-validity-quantity-badge-image]: https://img.shields.io/swagger/valid/2.0/http/api.swindle.net/archetypes/v1/schemas/quantities/quantities.yaml.svg?style=flat-square
[swagger-validity-quantity-url]: https://online.swagger.io/validator/debug?url=http://api.swindle.net/archetypes/v1/schemas/quantities/quantities.yaml
[travis-badge-image]: https://img.shields.io/travis/commonality/archetypes.svg?branch=master&style=flat-square
[travis-url]: https://travis-ci.org/commonality/archetypes
