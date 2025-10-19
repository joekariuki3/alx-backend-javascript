## TypeScript Tasks

Progressive TypeScript exercises organized per task folder (`task_0` … `task_5`). Each task is a small Webpack-based project with TypeScript tooling; some include Jest for testing.

### Prerequisites

- Node.js 14+
- npm

### Usage

Change into a specific task folder and install dependencies:

```
cd task_0 # or task_1 .. task_5
npm install
```

Then use the available scripts:

```
npm run build      # build with webpack
npm run start-dev  # dev server if defined (tasks 0,1,2,3,5)
npm test           # when Jest is configured (tasks 0,1,2,3,5)
```

[!NOTE]
Task 4 exposes `build` only and does not define tests or a dev server.
