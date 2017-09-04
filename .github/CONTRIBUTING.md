[![Generator Community Repo][product-repo-logo-image]][product-repo-url]

# Contributing to `archetypes`
> [![PRs Welcome][makeapullrequest-image]][makeapullrequest-url]
>
>Contributions are community conversations with a beginning, a middle, and an end, all told through issues, pull requests, comments, and commit logs.

## Table of contents

<!-- toc -->

- [Issues](#issues)
  * [Labels](#labels)
- [Pull requests (PRs)](#pull-requests-prs)

<!-- tocstop -->

<!-- tocend -->

## Issues
> `archetypes` follows an issue-driven product delivery model. Before any work is done, create an Issue, first.

### Labels
> Categorize issuse by **priority**, **status**, **type**, and **complexity**.

| Label                     | Definition                                                                                                                                                                                                                                                                                           |
|---------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `Type: Feature`           | A distinguished or expected characteristic of a product that either differentiates the product from competitors, or whose absence would be diminish the product's value.<br>__Note__ that `Type: Feature` and `Type: Defect` are mutually exclusive: an Issue cannot be both a feature and a defect. |
| `Type: Defect`            | A flaw, fault, or abnormality that deviates from or prevents the product's expected behavior.<br>__Note__ that `Type: Feature` and `Type: Defect` are mutually exclusive: an Issue cannot be both a feature and a defect.                                                                            |
| `CLA: Signed`             | The person who submitted a product change has signed your Contributor License Agreement.<br>_Remove this label if your product owner does not require a CLA._                                                                                                                                        |
| `CLA: Unsigned`           | The person who submitted a product change has __*not*__signed your Contributor License Agreement.<br>_Remove this label if your product owner does not require a CLA._                                                                                                                               |
| `Priority: Critical`      | `Type: Feature`: The proposed enhancement is essential to the success of your product.<br>`Type: Defect`: Your product no longer functions due to internal, `FATAL` errors, and must be addressed immediately in order to maintain consumer loyalty.                                                 |
| `Priority: High`          | `Type: Feature`: The proposed enhancement is central to product's value proposition, and should be implemented as soon as possible.<br>`Type: Defect`: The product functions overall, but with an issue that risks consumer abandonment.                                                             |
| `Priority: Medium`        | `Type: Feature` or `Type: Defect`:  The proposed change should be implemented as long as no `Priority: Critical` or `Priority: High` issues exists.                                                                                                                                                  |
| `Priority: Low`           | `Type: Feature`: A proposal that minimally affects the product's value.`Type: Defect`: Represents "cosmetic" problems like misspelled words or misaligned text that do not affect branding and marketing strategy.                                                                                   |
| `Status: Abandoned`       | `Type: Feature` or `Type: Defect`: The team and community have neglected, forgotten, discarded, or ignored resolving a Issue.                                                                                                                                                                        |
| `Status: Accepted`        | `Type: Feature` or `Type: Defect`:The product owner or maintainers agreed to a product change proposal.                                                                                                                                                                                              |
| `Status: Available`       | `Type: Feature` and `Type: Defect`: The change proposal is ready for team and community members to work on.                                                                                                                                                                                          |
| `Status: Blocked`         | `Type: Feature` and `Type: Defect`: The proposed change cannot be addressed until another issue has been resolved.<br>__Note__ that the Issue blocking the proposed change SHOULD be referenced in the `Blocked` Issue's description field.                                                          |
| `Status: Completed`       | `Type: Feature` and `Type: Defect`: The issue has been resolved and all acceptance criteria validated.                                                                                                                                                                                               |
| `Status: In Progress`     | `Type: Feature` and `Type: Defect`: The team or community is actively working on the Issue's resolution.                                                                                                                                                                                             |
| `Status: On Hold`         | `Type: Feature` and `Type: Defect`: The Product Owner has (temporarily) postponed Issue resolution.<br>__Note__ that the _reason_ for postponement should be stated in the Issue's description field.                                                                                                |
| `Status: Pending`         | `Type: Feature` and `Type: Defect`: product change or resolution is either awaiting the Product Owner's decision.<br>Ideally, the Product Owner should declare why they're undecided somewhere in the Issue thread.                                                                                  |
| `Status: Rejected`        | `Type: Feature` and `Type: Defect`: The Product Owner has declined a change proposal.<br>__Note__ that the Product Owner should politely explain why they dismissed the change request.                                                                                                              |
| `Status: Review Needed`   | `Type: Feature` and `Type: Defect`: The person working on an Issue has requested help or discussion. When applied to a Pull Request, `Status: Review Needed` signifies that the PR is ready for evaluation (and potentially, approval).                                                              |
| `Status: Revision Needed` | `Type: Feature` and `Type: Defect`: The Issue is not ready for evaluation because of incomplete or insufficient information.                                                                                                                                                                         |
| `Type: Breaking Change`   | The change introduces backward incompatibility with previous product versions.<br><br>__`Type: Breaking Change` MUST be recorded with a__ <li>Git commit message,<li>An increment (+1) in the product's Semantic Version's MAJOR version,<li>`CHANGELOG` entry, and<li>Updated API documentation.    |
| `Type: Build`             | Changes to the process that convert source code into a stand-alone form that can be run on a computer or to the form itself.                                                                                                                                                                         |
| `Type: Chore`             | Miscellaneous non-functional changes such as typographical fixes or source code repository initialization, e.g., `chore(scm): scaffold product directory structure`                                                                                                                                  |
| `Type: CI`                | Continuous Integration (CI) changes, i.e., automated build, test, an quality assurance tasks.                                                                                                                                                                                                        |
| `Type: Docs`              | The introduction of or revisions to natural language documents or source code comments.                                                                                                                                                                                                              |
| `Type: Duplicate`         | An Issue that shares the same characteristics as a previously reported issue. __Note__ that  product maintainers should reference the original Issue and close the `Type: Duplicate` Issue.                                                                                                          |
| `Type: Feedback`          | A response to a `Type: Question` or voluntary information used as a basis for improvement.                                                                                                                                                                                                           |
| `Type: Fix`               | A change intended to repair a `Type: Defect` Issue.                                                                                                                                                                                                                                                  |
| `Type: Performance`       | A change intended to reduce product latency.                                                                                                                                                                                                                                                         |
| `Type: Question`          | A request for information.                                                                                                                                                                                                                                                                           |
| `Type: Refactor`          | Source code design improvements that do not affect product behavior.                                                                                                                                                                                                                                 |
| `Type: Revert`            | Changes that return the product's source code to previous Git commit hash.                                                                                                                                                                                                                           |
| `Type: Spike`             | A technical or design _experiment_ that investigates a possible solution. __Note__ that spike solutions are, by definition, _throwaway_ solutions that should __NEVER__ be added to a product release.                                                                                               |
| `Type: Style`             | Issues that address code standard _or_ brand compliance.                                                                                                                                                                                                                                             |
| `Type: Test`              | Issues that prove intended behavior or substantiate "definitions of done." `Type: Test` can also refer to changes that result in broader code coverage.                                                                                                                                              |

![Create issue][contribution-lifecycle-issues-image]

## Pull requests (PRs)
> Pull requests allow....

![Create issue][contribution-lifecycle-pr-image]




[all-contributors-cli-url]: https://github.com/kentcdodds/all-contributors
[changelog-url]: ./CHANGELOG.md
[cla-url]: https://www.clahub.com/agreements/commonality/archetypes
[code-of-conduct-url]: ./CODE_OF_CONDUCT.md
[contributing-url]: ./CONTRIBUTING.md
[contribution-lifecycle-issues-image]: /docs/img/icons8/contribution-lifecycle-create-issue.png
[contribution-lifecycle-pr-image]: /docs/img/icons8/contribution-lifecycle-pr.png
[coolors-palette-url]: https://coolors.co/cfdbd5-e8eddf-f5cb5c-242423-333533
[fossa-image-large]: https://app.fossa.io/api/projects/git%2Bhttps%3A%2F%2Fgithub.com%2Forganization%2Frepo-name.svg?type=large
[license-url]: ./LICENSE
[makeapullrequest-image]: https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square
[makeapullrequest-url]: http://makeapullrequest.com
[markdown-toc-url]: https://github.com/jonschlinkert/markdown-toc
[product-development-guidelines-url]: /docs/product-development-guidelines/js/PRODUCT_DEVELOPEMENT_GUIDELINES.md
[product-repo-logo-image]: ../docs/img/logo-commonalaxy.png
[product-repo-url]: .
[commonality-palette-image]: ./docs/img/palette.svg
