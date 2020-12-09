# NativeScript Community Plugin Seed

This is a repo for the NativeScript Community plugin seed. Its goal is to standardize and streamline the plugin development of community plugins. This is an alternative to NativeScript's monorepo plugin seed. 

This plugin seed contains demos (Angular, Vue, Svelte, and React), Detox E2E testing, documentation generation, release management w/ Lerna, and standardized formatting/linting.

## Table of Contents
1. [Development](#development)
2. [Demos](#demos)
3. [Detox E2E Testing](#detox-e2e-testing)
4. [Formatting / Linting](#formatting-/-linting)
5. [Docs](#docs)
6. [Community Website](#community-website)
7. [README Template](#readme-template)
7. [Contribution Guide](#contribution-guide)

## Development

To build the plugin's source code use the following steps:

Install Dependencies:
```bash
npm i # or your preferred package manager's install command
```

Run Setup:
```bash
npm run setup
```

Building:
```bash
npm run build

# or for Angular
npm run build.angular
```

You should now be able to run the demos using the compiled source code.

To clean the project, simply run:
```bash
npm run clean
```
   
## Demos

As stated aboved, there is a demo for each framework: Angular, Vue, Svelte, and React. 

<img src="https://i.imgur.com/anV3Pxq.png" height="500" />

The demo template has a menu system that allows for the ability to show off multiple examples of the plugin in an organized way. 

There is also a dedicated development demo which is a workspace for the development of the plugin. Sometimes in development there are special cases and obscure things you need to test, but don't need to be shown in the other demos. 

The non-development demos should be for new users testing out the plugin to see the capabilities and understand how it works. These should ideally be the same across all demos.

### Development Mode

The demos contain a "development mode" which will automatically navigate to the development page upon launch. This prevents repeated taps when actively developing the plugin.

To run in development mode, simply add the `--env.development` flag to your command to run the app.

## Detox E2E Testing

This seed also contains [Detox](https://github.com/wix/Detox) end-to-end testing built-in. This allows for advanced automated testing of your plugin.

If you haven't used Detox before, you will have to do a little global setup to get it running on your computer. The following instructions are taken from [NativeScript Detox](https://github.com/NativeScript/plugins/blob/master/packages/detox/README.md).

### Global Setup

#### Install `detox-cli`

```bash
npm install -g detox-cli
```

#### Install applesimutils (iOS)

```bash
brew tap wix/brew
brew install applesimutils
```

### Project Setup

All of the demos are ready for Detox out of the box. The same testing files are ran across different frameworks to confirm the same behavior.

The only thing that needs to be modified is `devices.js` in this project's root directory. This file tells Detox what simulator/device to use for testing.

Modify `devices.js` to look something like this:

```javascript
module.exports = {
    ios: 'iPhone 12 Pro Max',
    android: 'Pixel_3a_API_29'
};
```

### Writing Tests

The default test is located under `e2e/tests.e2e.js`. This simple test just navigates between the different demos. Take a look at the [Usage](https://github.com/NativeScript/plugins/blob/master/packages/detox/README.md#usage) section of the [NativeScript Detox](https://github.com/NativeScript/plugins/blob/master/packages/detox/README.md) plugin to learn more about writing tests for your plugin.

Even if e2e testing doesn't seem to fit the use-case of your plugin, it can still be helping just to confirm the plugin builds and runs on iOS and Android as well as all of the different frameworks.

### Running

There are some helper scripts available to make Detox testing easier. The following are a few examples:

Build apps and run tests (iOS, Android, and all frameworks):

```bash
npm run e2e
```

Build apps only (iOS, Android, and all frameworks):

```bash
npm run e2e:build
```

Run tests only (iOS, Android, and all frameworks):

```bash
npm run e2e:run
```

For more specific testing cases (iOS only, specific frameworks, etc) run the help command (`./e2e/run-tests.js --help`) on the testing helper script:

```
Usage: run-tests -p num -h num

Options:
      --help        Show help                                          [boolean]
      --version     Show version number                                [boolean]
  -p, --platforms   The platforms to test on.
                [array] [choices: "ios", "android"] [default: ["ios","android"]]
  -f, --frameworks  The frameworks to test on.
                     [array] [choices: "ng", "vue", "svelte", "react"] [default:
                                                  ["ng","vue","svelte","react"]]
  -b, --build       Flag to ONLY run building of the projects.
                                                      [boolean] [default: false]
  -r, --run         Flag to ONLY run testing (no building) of the projects.
                                                      [boolean] [default: false]

Examples:
  run-tests                       Builds and runs e2e testing on all supported
                                  platforms and frameworks.
  run-tests -b                    Build e2e testing for all supported platforms
                                  and frameworks.
  run-tests -r                    Run e2e testing for all supported platforms
                                  and frameworks.
  run-tests -p ios                Builds and runs e2e testing for all frameworks
                                  only on iOS.
  run-tests -f ng vue             Builds an d runs e2e testing on Angular and
                                  Vue.js.
  run-tests -p android -f svelte  Builds and runs e2e testing for Svelte on iOS.
```

## Formatting / Linting

This plugin seed also contains built-in formatting and linting with [Prettier](https://prettier.io/) and [ESList](https://eslint.org/). 

Each demo/framework has its own configuration as well as a configuration for the plugin source code.

Formatting/linting will try to automatically run every time a commit is made to the repo using [husky](https://github.com/typicode/husky) and [lint-staged](https://github.com/okonet/lint-staged). 

If for some reason the linting doesn't run automatically, you can run it manually with `npm run lint`. For for specific formatting/linting cases, look at the `scripts` section in the `package.json`.
## Docs

This plugin also contains the ability to generate documentation for your plugin using [TypeDoc](https://typedoc.org/).

You simply have to point it to the correct location of your plugin's typing files in `tsconfig.doc.json`. Then all you have to do it run `npm run doc` to generate the documentation website into the `docs/` directory.

## Community Website

Publishing your plugin on the [NativeScript Community Website](https://nativescript-community.github.io/) is as simple as publishing under the `@nativescript-community` scope and modifying your `plugin/package.json` file. 

See the following image to understand what fields in the `package.json` correspond to the parts of the website.

<img src="https://i.imgur.com/b2VhI3y.png" />

## README Template

A boilerplate README for youl plugin is located [here](README_TEMPLATE.md). Rename this file to just `README.md` to make it your actual readme and update it with your plugin's content.

## Contribution Guide

A basic contribution guide for your plugin is located [here](CONTRIBUTING.md).