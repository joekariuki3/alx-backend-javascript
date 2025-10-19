# ALX Backend JavaScript

A curated collection of backend-oriented JavaScript exercises and mini-projects covering ES6 fundamentals, Promises, Classes, Data Manipulation, TypeScript, Node.js basics, and Unit Testing.

> This repo is structured as a multi-project workspace. Each folder is an independent project with its own dependencies and scripts.

## Contents

- `0x00-ES6_basic` — ES6 language basics (constants, scoping, arrow functions, rest/spread, string interpolation, default params)
- `0x01-ES6_promise` — Promises, async control flow, error handling
- `0x02-ES6_classes` — Classes, inheritance, getters/setters, interfaces by convention
- `0x03-ES6_data_manipulation` — Arrays, Sets, Maps, typed arrays, reducers, IDs aggregation
- `0x04-TypeScript` — Progressive TypeScript tasks with Webpack/Jest integration
- `0x05-Node_JS_basic` — CLI I/O, filesystem, simple HTTP/Express server, dev workflow
- `0x06-unittests_in_js` — Unit testing with Mocha/Chai/Sinon plus API testing exercises

[!NOTE]
Each subproject has its own `package.json`. Install and run commands from within that subproject directory.

## Prerequisites

- Node.js 14+ and npm
- Git

[!TIP]
If you use nvm, you can quickly switch Node versions per project.

## Quickstart

Clone and jump into any module to install and run its scripts.

### ES6 Basics

```
cd 0x00-ES6_basic
npm install
npm test           # run Jest tests
npm run full-test  # lint + tests
```

### ES6 Promises / Classes / Data Manipulation

```
cd 0x01-ES6_promise  # or 0x02-ES6_classes, 0x03-ES6_data_manipulation
npm install
npm test
npm run full-test
```

### TypeScript Tasks

```
cd 0x04-TypeScript/task_0  # or task_1 .. task_5
npm install
npm run build
# Optional dev server when available
npm run start-dev
```

### Node.js Basics (server and CLI)

```
cd 0x05-Node_JS_basic
npm install
npm test
# Development server (nodemon + babel-node)
npm run dev
```

### Unit Tests in JS

```
cd 0x06-unittests_in_js
npm install
npm test  # runs mocha
```

[!IMPORTANT]
Some subfolders (e.g., `0x06-unittests_in_js/8-api`, `9-api`, `10-api`) have their own `package.json`. Run `npm install && npm test` inside them when working on those APIs.

## Project Conventions

- Linting: Most ES6 modules use ESLint (Airbnb Base). Prefer `npm run full-test` where provided.
- Transpilation: Babel `@babel/preset-env` is configured to target the current Node version for ES6 projects.
- Testing: Jest is used in ES6 modules, Mocha/Chai/Sinon in unit test and Node basics modules.

## Folder READMEs

Each subproject includes its own README with module-specific instructions:

- `0x00-ES6_basic/README.md`
- `0x01-ES6_promise/README.md`
- `0x02-ES6_classes/README.md`
- `0x03-ES6_data_manipulation/README.md`
- `0x04-TypeScript/README.md`
- `0x05-Node_JS_basic/README.md`
- `0x06-unittests_in_js/README.md`

[!TIP]
If a script seems missing or failing, you can always run tools directly via npx, for example: `npx eslint .` or `npx jest`.
