![Business archetypes logo][business-archetypes-logo-image]

# `archetypes`

[![License][license-image]][license-url] [![FOSSA Status][badge-fossa-image]][fossa-url] [![NPM version][npm-image]][npm-url] <br>[![NSP Status][badge-nsp-image]][nsp-url] [![Dependency Status][badge-coveralls-image]][daviddm-url] [![devDependencies Status][badge-coveralls-image]][daviddm-dev-url] <br>[![Build Status][badge-travis-image]][travis-url] [![Coverage percentage][badge-coveralls-image]][coveralls-url] [![Codacy quality][badge-codacy-image]][codacy-url]

> ![Quote][quote-left-img] A business archetype is a primordial thing that occurs consistently and universally in business domainMs and business software systems.
>
> (Arlow & Neustadt, [_Enterprise patterns and MDA: building better software with archetype patterns and UML_][mda-book-url], 2006, p. 5)

## Table of contents

<!-- toc -->

- [1. Getting started](#1-getting-started)
  * [1.1. Installation](#11-installation)
  * [1.2. Generating servers and clients](#12-generating-servers-and-clients)
    + [1.2.1. `swagger-api/swagger-codegen`](#121-swagger-apiswagger-codegen)
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
  * [4.2. OpenAPI 2.0 specifications](#42-openapi-20-specifications)
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
- [12. Development](#12-development)
  * [12.1. Built With](#121-built-with)
  * [12.2. Prerequisites](#122-prerequisites)
  * [12.3. Set up a development environment](#123-set-up-a-development-environment)
- [13. DevSecOps](#13-devsecops)
  * [13.1. Builds](#131-builds)
  * [13.2. Test and quality gates](#132-test-and-quality-gates)
    + [13.2.1. Swagger validation](#1321-swagger-validation)
    + [13.2.2. Linting](#1322-linting)
    + [13.3.3. Spec (unit test) execution and code coverage](#1333-spec-unit-test-execution-and-code-coverage)
  * [13.3.4. Deploy/Publish](#1334-deploypublish)
- [14. Style guide](#14-style-guide)
- [15. Semantic version and CHANGELOG](#15-semantic-version-and-changelog)
- [16. Contributing to `commonality/archetypes`](#16-contributing-to-commonalityarchetypes)
- [17. Licenses](#17-licenses)

<!-- tocstop -->

## 1. Getting started

### 1.1. Installation

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

#### 1.2.1. `swagger-api/swagger-codegen`

> [`swagger-api/swagger-codegen`][swagger-codegen-url] contains a template-driven engine to generate documentation, API clients and server stubs in different languages by parsing your OpenAPI / Swagger definition.
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

Go to the [api.swindle.net Swagger-UI](http://api.swindle.net/swagger-ui/#/)'s "__About__" section and "__Explore__" the available Swagger specifications.

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

[![Party's Swagger validity][badge-swagger-validity-party-image]][swagger-validity-party-url]

* [`JSON`](http://api.swindle.net/archetypes/v1/schemas/party/party.swagger.json)
* [`YAML`](http://api.swindle.net/archetypes/v1/schemas/party/party.swagger.yaml)

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

<table>   <thead>     <tr><th>Standard</th><th>Contents</th></tr>   </thead>   <tfoot>   </tfoot>   <tbody>     <tr>       <td><a href=\"http://www.bipm.org/en/measurement-units/\">SI</a></td>       <td>International System of Units&mdash;Bureau International des Poids et Mesures (BIPM).</td>     </tr>   </tbody> </table>

### 4.2. OpenAPI 2.0 specifications

[![Quantity's Swagger validity][badge-swagger-validity-quantity-image]][swagger-validity-quantity-url]

* [`JSON`](http://api.swindle.net/archetypes/v1/schemas/quantity/quantity.swagger.json)
* [`YAML`](http://api.swindle.net/archetypes/v1/schemas/quantity/quantity.swagger.yaml)

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

[![icon-road-milestone-image] MVP2: Money](https://github.com/gregswindle/archetypes/milestone/2)

<!--
### 5.1. OpenAPI 2.0 specifications

[![Quantity's Swagger validity][badge-swagger-validity-money-image]][swagger-validity-money-url]

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

[![icon-road-milestone-image] MVP3: PartyRelationships and Rules](https://github.com/gregswindle/archetypes/milestone/3)

<!--
### 6.1. OpenAPI 2.0 specifications

[![Quantity's Swagger validity][badge-swagger-validity-quantity-image]][swagger-validity-quantity-url]

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

[![icon-road-milestone-image] MVP3: PartyRelationships and Rules](https://github.com/gregswindle/archetypes/milestone/3)

<!--
### 7.1. OpenAPI 2.0 specifications

[![Rule's Swagger validity][badge-swagger-validity-rules-image]][swagger-validity-rules-url]

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

[![icon-road-milestone-image] MVP4: Customer relationship management (CRM)](https://github.com/gregswindle/archetypes/milestone/4)

<!--
### 8.1. OpenAPI 2.0 specifications

[![Customer relationship management (CRM) Swagger validity][badge-swagger-validity-crm-image]][swagger-validity-crm-url]

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

[![icon-road-milestone-image] MVP5: Product](https://github.com/gregswindle/archetypes/milestone/5)

<!--
### 9.1. OpenAPI 2.0 specifications

[![Product's Swagger validity][badge-swagger-validity-product-image]][swagger-validity-product-url]

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

[![icon-road-milestone-image] MVP6: Inventory](https://github.com/gregswindle/archetypes/milestone/6)

<!--
### 10.1. OpenAPI 2.0 specifications

[![Inventory's Swagger validity][badge-swagger-validity-inventory-image]][swagger-validity-inventory-url]

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

[![icon-road-milestone-image] MVP7: Inventory](https://github.com/gregswindle/archetypes/milestone/7)

## 12. Development
> [![PRs Welcome][badge-prs-welcome-image]][badge-prs-welcome-url] We welcome contributors and pull requests!
>
> Interested in development contributions? Great! Check out our guidelines for [Contributing to `product-name`][contributing-url] for details.

### 12.1. Built With
> :eyes: I'm looking for a tool like [`markdown-magic-dependency-table`](https://www.npmjs.com/package/markdown-magic-dependency-table) to auto-generate a table of dependencies from `package.json's` data, but nothing works, yet.

### 12.2. Prerequisites

[offsite-nodejs-url]: https://nodejs.org/
[offsite-markdown-toc-url]: https://github.com/jonschlinkert/markdown-toc

 1. [__`Node.js`__][offsite-nodejs-url]: `archetypes` product development and delivery requires `Node.js` and its package manager, `npm`.
 2. [__`markdown-toc`__][offsite-markdown-toc-url] is recommended, but not required, as long as the REAME's table of contents work and accurately reflects header changes.


### 12.3. Set up a development environment

Here's a brief intro about what a developer must do in order to start developing the project further:

```shell
$ git clone https://github.com/commonality/archetypes.git
$ cd archetypes/
$ npm install
```

<!-- ### Configuration

Here you should write what are all of the configurations a user can enter when using the project. -->

<!-- ### Data persistence

Explain what database/datastore (and version) is used (if any). Provide

 * Download links,
 * Datastore design and schemas, relations etc... -->

## 13. DevSecOps

`archetypes` triggers Travis CI builds to execute the `ESLint`, the `Jest` test runner, and `Node Security Platform (NSP)` analysis. Code coverage reports are then sent to Coveralls and SonarCloud.

### 13.1. Builds

[![Travis CI][icon-travis-image] `archetypes` uses Travis CI][travis-url] for continuous integration.

For details, please review the [`.travis.yml` build file](./.travis.yml).

### 13.2. Test and quality gates

This repository enforces Swagger quality; Javascript quality; and Javascript unit tests and code coverage.

#### 13.2.1. Swagger validation
> ![Swagger][icon-swagger-image]
>
> `archetypes` validates Swagger docs with [`swagger-cli`][swagger-cli-url].

[`swagger-cli`][swagger-cli-url] validation runs before every test execution:

```bash
# These two npm-scripts run lint automatically:
$ npm run pretest

$ npm test

# Lint Javascript callouts and Swagger *.yml or *.json docs:
$ npm run lint

# You can also validate your Swagger docs independently with:
$ npm run swagger:lint

```

[`swagger-api/validator-badge`](https://github.com/swagger-api/validator-badge)s display whether there are syntactic issues with you Swagger/OpenAPI 2.0 document.

#### 13.2.2. Linting
> ![ESLint][icon-eslint-image]
>
>  `archetypes` lints with `ESLint` and displays real-time results with README badges.

```bash
# Code quality analysis runs before every test execution:
$ npm test

# Validate Swagger and analyze Javascript callouts:
$ npm run lint

# Only run ESLint for a CLI summary:
$ npm run eslint:stylish

# Generate an HTML report with links to errors and warnings:
$ npm run eslint:html
```

#### 13.3.3. Spec (unit test) execution and code coverage
> ![Jest][icon-jest-image]
>
> `archetypes` uses `jest` for BDD spec execution and code coverage analysis. The results are displayed real-time with README badges.

Generate detailed code coverage reports at `coverage/lcov-report/index.html` and `lcov.info` and `clover.xml` files  (which you can send to CI test coverage services like  Coveralls and  [OneSonarQube][one-sonar-url] or [SonarCloud][sonarcloud-url]):

```bash
$ npm test
```


### 13.3.4. Deploy/Publish

Give instructions on how to build and release a new version.
In case there's some step you have to take that publishes this project to a
server, this is the right time to state it.

```shell
packagemanager deploy your-project -s server.com -u username -p password
```

And again you'd need to tell what the previous code actually does.

## 14. Style guide

[![JavaScript Style Guide][badge-standardjs-image]][offsite-standardjs-url]

[`archetypes` uses the JavaScript Standard Style][offsite-standardjs-url] .

## 15. Semantic version and CHANGELOG

The latest version of `archetypes` is `0.0.0`. View the [CHANGELOG][changelog-url] for details.

## 16. Contributing to `commonality/archetypes`
>  [![PRs Welcome][badge-prs-welcome-image]][badge-prs-welcome-url] We welcome contributors and pull requests!

Contributions are community-driven stories with a beginning, a middle, and an end, all told through issues, comments, and pull requests. If you're interested in collaborating, please review the:

* [Code of Conduct][code-of-conduct-url]
* [Contributing][contributing-url] to `archetypes`

## 17. Licenses

[![License][license-image]][license-url] © [Greg Swindle](https://githbub.com/gregswindle)

You can review all __third-party dependencies' licenses__ on [FOSSA][badge-fossa-large-image].

![FOSSA Status][badge-fossa-large-image]

---
[![Greenkeeper badge][badge-greenkeeper-image]][greenkeeper-url] [![Readme Score][badge-readme-score-image]][readme-score-url]

Graphic art by [icons8][icons8-license-url].

[api-sdk-doc-party-organizations-url]: https://github.com/gregswindle/archetypes/wiki/SDK:-Party-API#organizations-api
[api-sdk-doc-party-parties-url]: https://github.com/gregswindle/archetypes/wiki/SDK:-Party-API#parties-api
[api-sdk-doc-party-people-url]: https://github.com/gregswindle/archetypes/wiki/SDK:-Party-API#people-api
[api-sdk-doc-party-preferences-url]: https://github.com/gregswindle/archetypes/wiki/SDK:-Party-API#preferences-api
[badge-codacy-image]: https://api.codacy.com/project/badge/Grade/de7b30825ac649de8b7255e4303fb069
[badge-coveralls-image]: https://coveralls.io/repos/gregswindle/archetypes/badge.svg
[badge-coveralls-image]: https://david-dm.org/gregswindle/archetypes.svg?theme=shields.io
[badge-coveralls-image]: https://david-dm.org/gregswindle/archetypes/dev-status.svg
[badge-fossa-image]: https://app.fossa.io/api/projects/git%2Bhttps%3A%2F%2Fgithub.com%2Fgregswindle%2Farchetypes.svg?type=shield
[badge-fossa-large-image]: https://app.fossa.io/api/projects/git%2Bhttps%3A%2F%2Fgithub.com%2Fgregswindle%2Farchetypes.svg?type=large
[badge-greenkeeper-image]: https://badges.greenkeeper.io/gregswindle/archetypes.svg
[badge-nsp-image]: https://nodesecurity.io/orgs/commonality/projects/3706b82c-bf9a-44f0-9d77-c489b6c11dff/badge
[badge-prs-welcome-image]: https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square
[badge-prs-welcome-url]: http://makeapullrequest.com
[badge-readme-score-image]: http://readme-score-api.herokuapp.com/score.svg?url=https://github.com/gregswindle/archetypes
[badge-standardjs-image]: https://cdn.rawgit.com/feross/standard/master/badge.svg
[badge-swagger-validity-party-image]: https://img.shields.io/swagger/valid/2.0/http/api.swindle.net/archetypes/v1/schemas/party/party.swagger.json.svg
[badge-swagger-validity-quantity-image]: https://img.shields.io/swagger/valid/2.0/http/api.swindle.net/archetypes/v1/schemas/quantity/quantity.swagger.json.svg
[badge-travis-image]: https://travis-ci.org/gregswindle/archetypes.svg?branch=master
[business-archetypes-logo-image]: ./docs/img/logo-commonalaxy.png
[changelog-url]: ./CHANGELOG.md
[cla-url]: https://www.clahub.com/agreements/gregswindle/archetypes
[codacy-url]: https://www.codacy.com/app/commonality/archetypes?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=commonality/archetypes&amp;utm_campaign=Badge_Grade
[code-of-conduct-url]: ./.github/CODE_OF_CONDUCT.md
[complexity-report-url]: ./docs/COMPLEXITY.md
[contributing-url]: ./.github/CONTRIBUTING.md
[coveralls-url]: https://coveralls.io/r/gregswindle/archetypes
[daviddm-dev-url]: https://david-dm.org/gregswindle/archetypes?type=dev
[daviddm-url]: https://david-dm.org/gregswindle/archetypes
[fossa-url]: https://app.fossa.io/projects/git%2Bhttps%3A%2F%2Fgithub.com%2Fgregswindle%2Farchetypes?ref=badge_shield
[gh-standardjs-url]: https://github.com/feross/standard
[go-api-url]: ./docs/api/archetypes/v1/party/golang/README.md
[greenkeeper-url]: https://greenkeeper.io/
[icon-eslint-image]: ./docs/img/tech-stack/icon-eslint-50.jpeg
[icon-jest-image]: ./docs/img/tech-stack/icon-jest-50.jpeg
[icon-nodejs-image]: ./docs/img/tech-stack/icon-nodejs-50.png
[icon-npm-image]: ./docs/img/tech-stack/icon-npm-50.png
[icon-road-milestone-image]: ./docs/img/icons8/img-goal-filled-50.png
[icon-standardjs-image]: ./docs/img/tech-stack/icon-standardjs-50.png
[icon-swagger-image]: ./docs/img/tech-stack/icon-swagger-50.png
[icon-travis-image]: ./docs/img/icons8/travis-ci-50.png
[icon-yeoman-image]: ./docs/img/tech-stack/icon-yeoman-50.png
[icons8-license-url]: https://icons8.com/license/
[issues-new-url]: https://github.com/gregswindle/archetypes/issues/new
[issues-url]: https://github.com/gregswindle/archetypes/issues
[js-api-url]: ./docs/api/archetypes/v1/party/js/README.md
[license-image]: https://img.shields.io/badge/License-Apache%202.0-blue.svg?style=flat
[license-url]: LICENSE
[mda-book-url]: https://www.amazon.com/Enterprise-Patterns-MDA-Building-Archetype/dp/032111230X
[npm-image]: https://badge.fury.io/js/archetypes.svg
[npm-url]: https://npmjs.org/package/archetypes
[nsp-sign-up-url]: https://nodesecurity.io/signup
[nsp-url]: https://nodesecurity.io/orgs/commonality/projects/3706b82c-bf9a-44f0-9d77-c489b6c11dff
[offsite-standardjs-url]: https://standardjs.com/
[party-swagger-json-url]: http://api.swindle.net/archetypes/v1/schemas/party/party.swagger.json
[party-swagger-yaml-url]: http://api.swindle.net/archetypes/v1/schemas/party/party.swagger.yaml
[pr-url]: /gregswindle/archetypes/pulls
[product-development-guidelines-url]: ./.github/PRODUCT_DEVELOPEMENT_GUIDELINES.md
[quote-left-img]: ./docs/img/icons8/quote-left-25.png
[rb-api-url]: ./docs/api/archetypes/v1/party/ruby/README.md
[readme-score-url]: http://clayallsopp.github.io/readme-score?url=https://github.com/gregswindle/archetypes
[rest-api-image]: ./docs/img/icons8/icon-rest-api.png
[sonarcloud-url]: https://sonarcloud.io
[swagger-api-docs-url]: ./docs/SWAGGER.md
[swagger-cli-url]: https://github.com/BigstickCarpet/swagger-cli
[swagger-codegen-getting-started-url]: https://github.com/swagger-api/swagger-codegen#getting-started
[swagger-codegen-installation-url]: https://github.com/swagger-api/swagger-codegen#compatibility
[swagger-codegen-url]: https://github.com/swagger-api/swagger-codegen
[swagger-io-url]: http://swagger.io
[swagger-markdown-url]: https://github.com/syroegkin/swagger-markdown
[swagger-validity-party-url]: https://online.swagger.io/validator?url=http://api.swindle.net/archetypes/v1/schemas/party/party.swagger.json
[swagger-validity-quantity-url]: https://online.swagger.io/validator?url=http://api.swindle.net/archetypes/v1/schemas/quantity/quantity.swagger.json
[swagger-validity-url]: https://online.swagger.io/validator?url=http://api.swindle.net/archetypes/v1/schemas/party/party.swagger.json
[travis-url]: https://travis-ci.org/gregswindle/archetypes
