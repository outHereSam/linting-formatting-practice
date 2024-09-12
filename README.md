# LintingFormattingPractice

This project demonstrates the integration and using of linting tools in an Angular environment

## Setup Instructions

Clone this project and navigate to the project directory and run `npm install` to install all the dependencies.

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## ESLint and Prettier Configuration

#### ESLint

For the ESLint configuration, I added a languageOptions configuration that adds Node.js global variables and Node.js scoping to fix the issue where the process variable couldn't be identified in the server.ts file.
I added a rules property that throws errors when it encounters unused variables and undefined.

#### Prettier

After installing prettier with the command `npm install --save-dev --save-exact prettier`, I added the eslint-config-prettier and added an extends property in my eslint config file to allow easy integration with ESLint

## NPM Scripts

- `"lint": "ng lint"` runs ESLint on the project
- `"prettify": "npx prettier . --write"` runs prettier
- `"lint-and-prettify": "npm run lint && npm run prettify"` combines ESLint and prettify
