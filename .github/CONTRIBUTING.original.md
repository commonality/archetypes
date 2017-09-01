[![Generator Community Repo][product-repo-logo-image]][product-repo-url]

# Contributing to `generator-community`
> [![PRs Welcome][makeapullrequest-image]][makeapullrequest-url] Contributions are stories with a beginning, a middle, and an end, all told through issues, comments, commit logs, and pull requests.

## 1. Table of contents

<!-- toc -->

- [1. "User Story" issues and defects](#1-user-story-issues-and-defects)
- [2. Issue labels](#2-issue-labels)
  * [2.1. Priority labels](#21-priority-labels)
  * [2.2. Status labels](#22-status-labels)
  * [2.3. Type labels](#23-type-labels)
  * [2.4. Contributor License Agreement (CLI) labels](#24-contributor-license-agreement-cli-labels)
- [3. Topic branches](#3-topic-branches)
- [4. Pull requests (PRs)](#4-pull-requests-prs)
- [5. `conventional commit messages` and change `types`](#5-conventional-commit-messages-and-change-types)
  * [5.1. `build` commit messages](#51-build-commit-messages)
  * [5.2. `chore` commit messages](#52-chore-commit-messages)
  * [5.3. `ci` commit messages](#53-ci-commit-messages)
  * [5.4. `docs` commit messages](#54-docs-commit-messages)
  * [5.5. `feat` (feature) commit messages](#55-feat-feature-commit-messages)
  * [5.6. `fix` commit messages](#56-fix-commit-messages)
  * [5.7. `perf` (performance) commit messages](#57-perf-performance-commit-messages)
  * [5.8. `refactor` commit messages](#58-refactor-commit-messages)
  * [5.9. `revert` commit messages](#59-revert-commit-messages)
  * [5.10. `style` commit messages](#510-style-commit-messages)
  * [5.11. `test` commit messages](#511-test-commit-messages)
- [6. Development](#6-development)
  * [6.1. Code standards](#61-code-standards)
  * [6.2. Testing](#62-testing)
      - [:100: Write specs (i.e., unit tests).](#100-write-specs-ie-unit-tests)
- [7. Contributors](#7-contributors)

<!-- tocstop -->

<!-- tocend -->

## 1. "User Story" issues and defects
> [Submit a new issue][issues-new-url] or [assign yourself an open issue][issues-url] to begin collaboration.

Contributions start with clear communication, and issues – not e-mails! – are the best way to collaborate with colleagues.

## 2. Issue labels

In his article ["Sane GitHub Labels,"](https://medium.com/@dave_lunny/sane-github-labels-c5d2e6004b63) Dave Lunny advocates a standard set of issue labels prefixed by type. His `Node.js` package `git-labelmaker` simplifies standardization with a CLI app that adds and removes repository labels. We have adapted his labels to match our commit message guidelines.

### 2.1. Priority labels

### 2.2. Status labels

### 2.3. Type labels

### 2.4. Contributor License Agreement (CLI) labels

## 3. Topic branches

We use "topic" branches to allow for parallel product development. Once you've committed to working on an issue, follow these steps.

> :information_source: Valid branch prefix names
>
> Topic branches must start with either one of the conventional commit types or a valid Bitbucket branch prefix.

The following branch prefixes are allowed.

* `bugfix/`
    * **Example**: bugfix/ONEAPI-330-setup-scm
    * **Regular expression**: `^bugfix\/(.*){1,255}$`
* `build/`
    * **Example**: build/ONEAPI-330-setup-scm
    * **Regular expression**: `^build\/(.*){1,255}$`
* `chore/`
    * **Example**: chore/ONEAPI-330-setup-scm
    * **Regular expression**: `^chore\/(.*){1,255}$`
* `ci/`
    * **Example**: ci/ONEAPI-330-setup-scm
    * **Regular expression**: `^ci\/(.*){1,255}$`
* `docs/`
    * **Example**: docs/ONEAPI-330-setup-scm
    * **Regular expression**: `^docs\/(.*){1,255}$`
* `feat/`
    * **Example**: feat/ONEAPI-330-setup-scm
    * **Regular expression**: `^feat\/(.*){1,255}$`
* `feature/`
    * **Example**: feature/ONEAPI-330-setup-scm
    * **Regular expression**: `^feature\/(.*){1,255}$`
* `fix/`
    * **Example**: fix/ONEAPI-330-setup-scm
    * **Regular expression**: `^fix\/(.*){1,255}$`
* `hotfix/`
    * **Example**: hotfix/ONEAPI-330-setup-scm
    * **Regular expression**: `^hotfix\/(.*){1,255}$`
* `perf/`
    * **Example**: perf/ONEAPI-330-setup-scm
    * **Regular expression**: `^perf\/(.*){1,255}$`
* `refactor/`
    * **Example**: refactor/ONEAPI-330-setup-scm
    * **Regular expression**: `^refactor\/(.*){1,255}$`
* `revert/`
    * **Example**: revert/ONEAPI-330-setup-scm
    * **Regular expression**: `^revert\/(.*){1,255}$`
* `spike/`
    * **Example**: spike/ONEAPI-330-setup-scm
    * **Regular expression**: `^spike\/(.*){1,255}$`
* `style/`
    * **Example**: style/ONEAPI-330-setup-scm
    * **Regular expression**: `^style\/(.*){1,255}$`
* `test/`
    * **Example**: test/ONEAPI-330-setup-scm
    * **Regular expression**: `^test\/(.*){1,255}$`

> :microscope: Not sure whether your branch name will be rejected? [Test your branch name][branch-name-test-url] against the regular expressions below in a Web browser.

## 4. Pull requests (PRs)
> [Submit a pull request (PR)][pr-url] immediately after your first push to `origin`.

4.1. Open GitHub in a Web browser and select your topic branch.

4.2. Follow the instructions in the pull request template and submit it.

> :raising_hand: Working on your first Pull Request?
>
> You can learn how from this *free* series
> [How to Contribute to an Open Source Project on GitHub][pr-course-url].

## 5. `conventional commit messages` and change `types`

This project enforces [AngularJS Git Commit Guidelines][git-commit-guidelines-url] (aka [`conventional commit messages`][git-commit-guidelines-url]) with [`commitplease`][commitplease-url] pre-commit hooks.
>
> Consistent, legible Git logs not only facilitate communication, but also enable automated CHANGELOG generation and semantic versioning with [`standard-version`][standard-version-url].

### 5.1. `build` commit messages

Issues related to product builds. The AngularJS Git commit message format is

```
build(<scope>): <subject>
<BLANK LINE>
<[body]>
<BLANK LINE>
<footer>
```

### 5.2. `chore` commit messages

Issues related to miscellaneous non-functional changes (usually "maintenance" changes). The AngularJS Git commit message format is

```
chore(<scope>): <subject>
<BLANK LINE>
<[body]>
<BLANK LINE>
<footer>
```

### 5.3. `ci` commit messages

Issues related to continuous integration, delivery, and deployment tasks. The AngularJS Git commit message format is

```
ci(<scope>): <subject>
<BLANK LINE>
<[body]>
<BLANK LINE>
<footer>
```

### 5.4. `docs` commit messages

Issues related to documentation. The AngularJS Git commit message format is

```
docs(<scope>): <subject>
<BLANK LINE>
<[body]>
<BLANK LINE>
<footer>
```

### 5.5. `feat` (feature) commit messages

New feature or enhancement requests. The AngularJS Git commit message format is

```
feat(<scope>): <subject>
<BLANK LINE>
<[body]>
<BLANK LINE>
<footer>
```

### 5.6. `fix` commit messages

Defect (bug) repair issues. The AngularJS Git commit message format is

```
fix(<scope>): <subject>
<BLANK LINE>
<[body]>
<BLANK LINE>
<footer>
```

### 5.7. `perf` (performance) commit messages

Performance improvement issues. The AngularJS Git commit message format is

```
perf(<scope>): <subject>
<BLANK LINE>
<[body]>
<BLANK LINE>
<footer>
```

### 5.8. `refactor` commit messages

Source code design **improvements that do not affect product behavior**. The AngularJS Git commit message format is

```
refactor(<scope>): <subject>
<BLANK LINE>
<[body]>
<BLANK LINE>
<footer>
```

### 5.9. `revert` commit messages

Tasks that revert to a previous commit hash. Your message should begin with `revert:`, followed by the header of the reverted commit.

In the body it should say: `This reverts commit <hash>.`, where the hash is the SHA of the commit being reverted.

```
revert: <hash>
<BLANK LINE>
This reverts commit <hash>.
<BLANK LINE>
<footer>
```

### 5.10. `style` commit messages

Issues related to style guideline compliance, especially `ESLint` errors and warnings. The AngularJS Git commit message format is

```
style(<scope>): <subject>
<BLANK LINE>
<[body]>
<BLANK LINE>
<footer>
```

### 5.11. `test` commit messages

Test coverage tasks. The AngularJS Git commit message format is

```
test(<scope>): <subject>
<BLANK LINE>
<[body]>
<BLANK LINE>
<footer>
```

## 6. Development
`generator-community` is dedicated to enabling best practices. It is therefore crucial that the generator itself follows strong engineering standards to assure quality and performance.

### 6.1. Code standards

ESLint evaluates Javascript code standards before each test run with the `npm-script pretest`.
Heres' a [table of `generator-community's` ESLint rules][eslint-rules-table-url] and their enforcement.

### 6.2. Testing

> ##### :100: Write specs (i.e., unit tests).
>
> Behavior-driven development specifications are executable documentation. By the way, 100% code coverage is the norm, not the exception.

Open a terminal and run

```bash
$ npm test
```

## 7. Contributors

Thanks goes to these wonderful people ([emoji key](https://github.com/kentcdodds/all-contributors#emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
| [<img src="https://avatars3.githubusercontent.com/u/6599333?v=4" width="100px;"/><br /><sub>rm-cortez</sub>](https://github.com/rm-cortez)<br />[👀](#review-rm-cortez "Reviewed Pull Requests") [📖](https://github.com/@commonality/generator-community/commits?author=rm-cortez "Documentation") | [<img src="https://avatars2.githubusercontent.com/u/1043478?v=4" width="100px;"/><br /><sub>Spencer Hamm</sub>](http://spencerhamm.com)<br />[👀](#review-spentacular "Reviewed Pull Requests") |
| :---: | :---: |
<!-- ALL-CONTRIBUTORS-LIST:END -->

Thank you for contributing, and welcome to the community!

---

[![License][license-image]][license-url] © [Greg Swindle](mailto:gregory.jay.swindle@verizon.com).


[bdd-url]: https://en.wikipedia.org/wiki/Behavior-driven_development
[behat-url]: http://behat.org/en/latest/
[branch-name-test-url]: https://regex101.com/
[commitplease-url]: https://www.npmjs.com/package/commitplease
[coolors-palette-url]: https://coolors.co/cfdbd5-e8eddf-f5cb5c-242423-333533
[eslint-rules-table-url]: ESLINT_RULES.md
[git-commit-guidelines-url]: https://github.com/angular/angular.js/blob/master/CONTRIBUTING.md#commit
[issues-new-defect-url]: https://github.com/commonality/generator-community/issues/new?title=fix(scope-of-issue):%20provide%20simple%20summary&labels=Type:%20Defect,Status:%20Review%20Needed,Priority:%20Medium&body=%3C%21--+DEFECTS%3A++Tell+us+what+should+happen+--%3E%0D%0A%23%23+Expected+Behavior%0D%0A%0D%0A%0D%0A%23%23+Current+Behavior+%0D%0A%3C%21---+Tell+us+what+happens+instead+of+the+expected+behavior.+--%3E%0D%0A%0D%0A%23%23+Possible+Solution%0D%0A%3C%21---+Not+obligatory%2C+but+suggest+a+fix%2Freason+for+the+bug%2C%0D%0A++++++++or+ideas+how+to+implement+the+addition+or+change.+--%3E%0D%0A%0D%0A%23%23+Steps+to+Reproduce%0D%0A%3C%21---+Provide+a+link+to+a+live+example%2C+or+an+unambiguous+set+of+steps+to+%0D%0A++++++++reproduce+this+bug.+Include+code+to+reproduce%2C+if+relevant.+--%3E%0D%0A1.+%0D%0A2.+%0D%0A3.+%0D%0A4.+%0D%0A%0D%0A%23%23+Context%0D%0A%3C%21---+How+has+this+issue+affected+you%3F+What+are+you+trying+to+accomplish%3F+--%3E%0D%0A%3C%21---+Providing+context+helps+us+come+up+with+a+solution+that+is+most+useful+in+the+real+world+--%3E%0D%0A%0D%0A%23%23+Your+Environment%0D%0A%3C%21---+Include+as+many+relevant+details+about+the+environment+in+which+this+happened.+--%3E%0D%0A%2A+Version+used%3A%0D%0A%2A+Environment+name+and+version+%28e.g.+Chrome+39%2C+node.js+5.4%29%3A%0D%0A%2A+Operating+System+and+version+%28desktop+or+mobile%29%3A%0D%0A%2A+Link+to+your+project%3A
[issues-new-url]: https://github.com/commonality/generator-community/issues/new
[issues-url]: https://github.com/commonality/generator-community/issues
[label-status-available-url]: ../labels/Status%3A%20Available
[license-image]: https://img.shields.io/badge/License-Apache%202.0-blue.svg?style=flat
[license-url]: ../LICENSE
[lint-software-url]: https://en.wikipedia.org/wiki/Lint_(software)
[makeapullrequest-image]: https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square
[makeapullrequest-url]: http://makeapullrequest.com
[new-issue-url]: https://oneconfluence.verizon.com/x/So_PCw
[php-codesniffer-url]: https://github.com/squizlabs/ESLint
[pr-course-url]: https://egghead.io/series/how-to-contribute-to-an-open-source-project-on-github
[pr-url]: https://github.com/commonality/generator-community/pulls
[product-repo-logo-image]: ../docs/img/logo-commonalaxy.png
[product-repo-url]: https://github.com/commonality/generator-community
[standard-version-url]: https://github.com/conventional-changelog/standard-version
