# React + Foundation

[![Build Status](https://travis-ci.org/digiaonline/react-foundation.svg?branch=master)](https://travis-ci.org/digiaonline/react-foundation)
[![Test Coverage](https://api.codeclimate.com/v1/badges/ea90da79f63c9d5dab1a/test_coverage)](https://codeclimate.com/github/digiaonline/react-foundation/test_coverage)
[![Maintainability](https://api.codeclimate.com/v1/badges/ea90da79f63c9d5dab1a/maintainability)](https://codeclimate.com/github/digiaonline/react-foundation/maintainability)
[![StyleCI](https://styleci.io/repos/53612920/shield?style=flat)](https://styleci.io/repos/53612920)
[![npm version](https://img.shields.io/npm/v/react-foundation.svg)](https://www.npmjs.com/package/react-foundation)
[![npm downloads](https://img.shields.io/npm/dt/react-foundation.svg)](https://www.npmjs.com/package/react-foundation)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/digiaonline/react-foundation/master/LICENSE)

[Foundation](http://foundation.zurb.com/sites/docs/) as [React](https://facebook.github.io/react/) components.

## Demo

https://digia.online/react-foundation-docs/

[Components with Bit](https://bitsrc.io/digiaonline/react-foundation)

<p align="center">
  <a href="https://bitsrc.io/digiaonline/react-foundation"><img src="https://i.imagesup.co/images2/0__05c740dc39b7e2.jpg"></a>
</p>


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

* [Accordion](src/components/accordion.js)
* [Badge](src/components/badge.js)
* [Breadcrumbs](src/components/breadcrumbs.js)
* [Button](src/components/button.js)
* [ButtonGroup](src/components/button-group.js)
* [Callout](src/components/callout.js)
* [CloseButton](src/components/close-button.js)
* [FlexVideo](src/components/flex-video.js)
* [Grid](src/components/grid.js)
* [Icon](src/components/icon.js)
* [Label](src/components/label.js)
* [MediaObject](src/components/media-object.js)
* [Menu](src/components/menu.js)
* [Pagination](src/components/pagination.js)
* [Progress](src/components/progress-bar.js)
* [ResponsiveNavigation](src/components/responsive.js)
* [Switch](src/components/switch.js)
* [Tabs](src/components/tabs.js)
* [Thumbnail](src/components/thumbnail.js)
* [TopBar](src/components/top-bar.js)

More components coming soon!

## Install

Install library:

```bash
npm install react-foundation --save
```

Install [foundation-sites](https://www.npmjs.com/package/foundation-sites):

```bash
npm install foundation-sites --save
```

## Usage

```js
// Add Foundation to index.js
import 'foundation-sites/dist/css/foundation.min.css';

// import components
import { Button, Colors } from 'react-foundation';

// Use components ...
function SubmitButton() {
  return <Button color={Colors.SUCCESS}>Submit</Button>;
}
```

Documentation is at https://digia.online/react-foundation-docs/.

*Note:* Newer versions of `foundation-sites` do not offer out of the box support for `<Row/>` and `<Column/>` components. If working with a newer version, `<Grid/>` and `<Cell/>` components should be used instead.

```js
// Previous versions
<Row className="display">
  <Column small={2} large={4}>4 columns</Column>
  <Column small={4} large={4}>4 columns</Column>
  <Column small={6} large={4}>4 columns</Column>
</Row>

// Newer versions
<Grid className="display">
  <Cell small={2} large={4}>4 columns</Cell>
  <Cell small={4} large={4}>4 columns</Cell>
  <Cell small={6} large={4}>4 columns</Cell>
</Grid>
```

## Contributing

Please read our [guidelines](.github/CONTRIBUTING.md).

## Credits

* Thanks to [@jmreidy](https://github.com/jmreidy) for releasing the `react-foundation` package name to us on [NPM](https://www.npmjs.com/).

## License

See [LICENSE](LICENSE).
