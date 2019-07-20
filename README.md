# React app

## Technology stack

- Babel 7
- React
- TypeScript
- ESLint
- Stylelint
- Prettier
- Jest

## Stack description

### Babel 7

Babel is a toolchain that is mainly used to convert ECMAScript 2015+ code into a backwards compatible version of JavaScript in current and older browsers or environments. Babel can transform syntax, polyfill features that are missing in your target environment, do source code transformations and more. It can convert JSX syntax, strip out type annotations. Babel is built out of plugins. Compose your own transformation pipeline using existing plugins or write your own. Babel tries to stay true to the ECMAScript standard, as much as reasonably possible.

### ESLint

It checks source code for stylistic as well as programmatic errors. ESLint helps to identify some mistakes that are made during coding. It is also used for adhering best practices and improving code quality and readability.

### Airbnb style guide

It is a set of standards that outline how code should be written and organized and it covers nearly every aspect of JavaScript. It used as a preset for ESLint.

### Stylelint

Stylelint is a linter that helps to avoid errors and enforce conventions in styles. It understands the latest CSS syntax, parses SCSS, extracts embedded styles from HTML, markdown and CSS-in-JS template literals.

### stylelint-config-standard

It extends recommended Stylelint config and turns on additional rules to enforce the common stylistic conventions found within CSS styleguides of big companies like and Airbnb. It favours flexibility over strictness for things like multi-line lists and single-line rulesets, and tries to avoid potentially divisive rules.

### Prettier

Prettier is an opinionated code formatter with support for many filetypes. Prettier enforces a consistent code style (i.e. code formatting) across your entire codebase by parsing code and re-printing it with its own rules taking the maximum line length into account.

### Jest

Jest is a JavaScript testing framework designed to ensure correctness of any JavaScript codebase. It allows you to write tests with an approachable, familiar and feature-rich API that gives you results quickly. Jest is well-documented, requires little configuration and can be extended to match your requirements.

### react-testing-library

The react-testing-library is a very light-weight solution for testing React components. It helps to avoid including implementation details of your components and rather focus on making your tests give you the confidence for which they are intended. As part of this, your testbase becomes maintainable in the long run so refactors of your components (changes to implementation but not functionality) don't break your tests and slow you and your team down.

### styled-components

styled-components allows you to write traditional CSS to style your components in JavaScript by utilising tagged template literals. It keeps track of which components are rendered on a page and injects their styles fully automatically. It generates unique class names for your styles, so you never have to worry about duplication, overlap or misspellings. Styling is tied to a specific component. You can style components based on their props or a global theme. It handles vendor prefixing automatically.

### React

A JavaScript library for building user interfaces. It's simple and declarative, it uses just plain JavaScript to build reusable components.

## Extra features

- hot reload
- jest coverage
- bundle visualizer
- make recipes
- pre-commit formatting
- babel resolver
- WebStorm aliases support
- filenames linting
- react-hooks linting
- styled-components setup
- react-testing-library setup

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode

### `yarn test`

Launches the test runner

### `yarn build`

Builds the app for production to the `build` folder

### `yarn lint`

Run linters

### `make serve`

Serve files in folder and open browser

### `make build-open`

Build src and open your build in browser

### `make build-info`

Build src and open bundle analyzer in browser

### `make jest-coverage`

Get jest coverage and show report in browser

### `yarn add-locale`
Add locale 'yarn add-locale er ru...'

### `yarn extract`
Extract locale

### `yarn compile`
Compile translations
