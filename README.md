# NativeScript Community Plugin Seed

This is a repo for the NativeScript Community plugin seed. Its goal is to standardize and streamline the plugin development of community plugins. This is an alternative to NativeScript's monorepo plugin seed. 

This plugin seed contains demos (Angular, Vue, Svelte, and React), documentation generation, and release management w/ Lerna.

| <img src="images/plugin-seed-diagram.png" /> |
| --- |
| Plugin Seed Project Structure |
## Table of Contents
1. [Development](#development)
2. [Demos](#demos)
3. [Docs](#docs)
4. [Community Website](#community-website)
5. [README Template](#readme-template)
6. [Contribution Guide](#contribution-guide)

## Development

To build the plugin's source code and run demos use the following steps:

Install Dependencies:
```bash
npm i # or your preferred package manager's install command
```

Run Setup:
```bash
npm run setup
```

Building Plugin:
```bash
npm run build

# or for Angular
npm run build.angular
```

Setup Demos:
```
npm run demo.setup
```

Running Demos:
```bash
npm run demo.[ng|react|svelte|vue].[ios|android]

# Example:
npm run demo.svelte.ios
```
## Demos

### Structure


As stated aboved, there is a demo for each framework: Angular, Vue, Svelte, and React. Each demo flavor is a Git submodule and the actual demo code is not meant to edited directly, but rather there are demo snippets for each flavor that will be symbolically linked to the demos. This allows for significantly simplier maintenance for developers.

<img src="https://i.imgur.com/anV3Pxq.png" height="500" />

The demo template has a menu system that allows for the ability to show off multiple examples of the plugin in an organized way. 

There is also a dedicated development demo which is a workspace for the development of the plugin. Sometimes in development there are special cases and obscure things you need to test, but don't need to be shown in the "show-off" demos. 

The non-development demos should be for new users testing out the plugin to see the capabilities and understand how it works. These should *ideally* be the same across all demos.

### Snippets

<img src="images/demo-snippets-structure.png" />

The `demo-snippets` directory contains the specific demo code for the plugin. Each component is essentially another demo page. Each framework directory has a `install.ts` file which will allow you at add any specific code that needs to be ran in the top-level of the demo. This is also where you register what components you want to be added to the demo.

There is also a `package.json` inside the `demo-snippets` directory. This allows you to add (or modify) any dependencies you need to be added to the demos.

### Development Mode

The demos contain a "development mode" which will automatically navigate to the development page upon launch. This prevents repeated taps when actively developing the plugin.

To run in development mode, simply add the `.dev`  flag to your command (`npm run demo.svelte.ios.dev`) to run the app. Or if you're running using `ns run` just add the flag `--env.development`.

## Tools

There is a linked submodule called `tools`. This contains utility scripts that can be ran on the plugin. Currently, it only contains one script called `setup-demos.js` and this is used to link the plugin's demo snippets to the actual demo code. This is what is ran with `npm run demo.setup`. In the future, there may also be scripts to update dependencies, manage e2e testing, etc.
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