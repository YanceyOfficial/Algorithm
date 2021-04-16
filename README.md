# LeetCode Trip

![Build Status](https://github.com/YanceyOfficial/leetcode-trip/actions/workflows/github-actions.yml/badge.svg)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-green.svg)](https://github.com/YanceyOfficial/leetcode-trip/pulls)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
![Code Style](https://camo.githubusercontent.com/c83b8df34339bd302b7fd3fbb631f99ba25f87f8/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f636f64655f7374796c652d70726574746965722d6666363962342e737667)
[![Node](https://img.shields.io/badge/node-%3E%3D12.20.2-orange.svg)](https://nodejs.org/en/)
[![DependaBot](https://camo.githubusercontent.com/1fe7004c016a5ab641008b9579409c784eaa1725/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f446570656e6461626f742d656e61626c65642d626c75652e737667)](https://dependabot.com/)

⭐️ _Found it cool? Want more updates?_ [**Show your support by giving a ⭐️**](https://github.com/YanceyOfficial/leetcode-trip/stargazers)

## Introduction

Data structures and algorithms implemented in JavaScript with explanations. The algorithm questions include, but are not limited to LeetCode, _Coding Interviews: Questions, Analysis and Solutions_ and _Algorithms, 4th Edition_. Visit [LeetCode Trip](https://algorithm.yanceyleo.com/) for more information. The website is powered by [docusaurus](https://docusaurus.io/).

## lt-cli

[![NPM](https://nodeico.herokuapp.com/@yancey-inc/lt-cli.svg)](https://npmjs.com/package/@yancey-inc/lt-cli)

LeetCode Trip comes with a built-in CLI which can be used to generate template markdown files and do statistical analysis from the command line. While you can install lt-cli globally on your machine, it's much better to install it locally project by project. If you would like not to install it globally, use `yarn generator` and `yarn statistics` instead.

### Install

Using npm:

`npm i @yancey-inc/lt-cli -g`

or using yarn:

`yarn global add @yancey-inc/lt-cli`

![lt-cli](https://static.yancey.app/lt-cli.gif)

## Contributing

The main purpose of this repository is to continue to evolve LeetCode Trip, making it faster and easier to use. Development of LeetCode Trip happens in the open on GitHub, and we are grateful to the community for contributing bugfixes and improvements. Read below to learn how you can take part in improving LeetCode Trip.

### [Code of Conduct](./CODE_OF_CONDUCT.md)

LeetCode Trip has adopted a Code of Conduct that we expect project participants to adhere to. Please read [the full text](./CODE_OF_CONDUCT.md) so that you can understand what actions will and will not be tolerated.

### [Contributing Guide](./CONTRIBUTING.md)

Read our [contributing guide](./CONTRIBUTING.md) to learn about our development process, how to propose bugfixes and improvements, and how to build and test your changes to LeetCode Trip.

### Good Issues

Please make sure to read the [Issue Reporting Checklist](./.github/ISSUE_TEMPLATE/bug_report.md) before opening an issue. Issues not conforming to the guidelines may be closed immediately.

### Using Commitizen

This project follows the [Angular Team's Commit Message Guidelines](https://github.com/angular/angular/blob/master/CONTRIBUTING.md#commit), your commit will be checked by commitlint, please use `git cz` instead of `git commit`. For this reason, you might install `commitizen` globally.

### Algolia

Unfortunately, LeetCode Trip is [not compliant with algolia's checklist](https://docsearch.algolia.com/docs/who-can-apply), we must run the crawler by ourselves. Please create `.env` in root path and read the [document](https://docsearch.algolia.com/docs/run-your-own) to build your own docker crawler system.

```bash
# DO NOT UPLOAD THIS FILE TO PUBLIC!!!
# .env
APPLICATION_ID=YOUR_ALGOLIA_APP_ID
API_KEY=YOUR_ALGOLIA_API_KEY
```

## License

LeetCode Trip is licensed under the terms of the [MIT licensed](https://opensource.org/licenses/MIT).
