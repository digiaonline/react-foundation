# React + Foundation

[![Build Status](https://travis-ci.org/nordsoftware/react-foundation.svg?branch=develop)](https://travis-ci.org/nordsoftware/react-foundation)
[![Test Coverage](https://codeclimate.com/github/nordsoftware/react-foundation/badges/coverage.svg)](https://codeclimate.com/github/nordsoftware/react-foundation/coverage)
[![Code Climate](https://codeclimate.com/github/nordsoftware/react-foundation/badges/gpa.svg)](https://codeclimate.com/github/nordsoftware/react-foundation)
[![Scrutinizer Code Quality](https://scrutinizer-ci.com/g/nordsoftware/react-foundation/badges/quality-score.png?b=master)](https://scrutinizer-ci.com/g/nordsoftware/react-foundation/?branch=master)
[![StyleCI](https://styleci.io/repos/53612920/shield?style=flat)](https://styleci.io/repos/53612920)
[![npm version](https://img.shields.io/npm/v/react-foundation.svg)](https://www.npmjs.com/package/react-foundation)
[![npm downloads](https://img.shields.io/npm/dt/react-foundation.svg)](https://www.npmjs.com/package/react-foundation)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/nordsoftware/react-foundation/master/LICENSE)
[![Gitter](https://img.shields.io/gitter/room/norsoftware/open-source.svg?maxAge=2592000)](https://gitter.im/nordsoftware/open-source)

[Foundation](http://foundation.zurb.com/sites/docs/) as [React](https://facebook.github.io/react/) components.

## Demo

[https://react.foundation](https://react.foundation)

## Motivation

[Foundation](http://foundation.zurb.com) is both feature-rich and easy to customize.
[React](https://facebook.github.io/react/) on the other hand is awesome because of its simplicity.
It's even more awesome when combined with
[Redux](http://redux.js.org/) and [Immutable](https://facebook.github.io/immutable-js/).

After building quite a few applications with React and Foundation we noticed that we were writing the
same components over and over again. First we tried to find a library that would do the job,
but there was none that met our needs. So we collected our notes, started coding and here's the result.

We hope you enjoy it as much as we do!

## What's in the box?

The goal is to wrap every part of Foundation into re-usable React components following the framework's
best practices. The primary focus is ease-of-use and extensibility. We use pure render components,
also known as stateless components, whenever possible to keep the memory usage to a minimum. Stateful
components are only used for larger components, such as `ResponsiveNavigation`, where state is actually necessary.
All components are unit-tested to ensure their quality.

Here is a list of the available components:

- [Accordion](src/components/accordion.js)
- [Badge](src/components/badge.js)
- [Breadcrumbs](src/components/breadcrumbs.js)
- [Button](src/components/button.js)
- [ButtonGroup](src/components/button-group.js)
- [Callout](src/components/callout.js)
- [CloseButton](src/components/close-button.js)
- [FlexVideo](src/components/flex-video.js)
- [Grid](src/components/grid.js)
- [Icon](src/components/icon.js)
- [Label](src/components/label.js)
- [MediaObject](src/components/media-object.js)
- [Menu](src/components/menu.js)
- [Pagination](src/components/pagination.js)
- [Progress](src/components/progress-bar.js)
- [ResponsiveNavigation](src/components/responsive.js)
- [Switch](src/components/switch.js)
- [Tabs](src/components/tabs.js)
- [Thumbnail](src/components/thumbnail.js)
- [TopBar](src/components/top-bar.js)

More components coming soon!

## Install

Install library:

```bash
npm install react-foundation --save
```

## Usage

```js
import Foundation from 'react-foundation';

// Use components ...
```

Documentation is at [https://react.foundation](https://react.foundation) and
you can use our [React starter](https://github.com/nordsoftware/react-starter) template
as a reference.

## Test

Run test suite:

```bash
npm test
```

## Credits

- Thanks to [@jmreidy](https://github.com/jmreidy) for releasing the `react-foundation` package name to us on [NPM](https://www.npmjs.com/).

## License

See [LICENSE](LICENSE).
