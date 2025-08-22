# API Automation Project

This project provides automated API tests using [Playwright](https://playwright.dev/) and [json-server](https://github.com/typicode/json-server) for a mock REST API.

## Project Structure

- `db.json` - Mock database for json-server.
- `tastData/data.json` - Test data and configuration (e.g., base URLs).
- `tests/` - Playwright test suites for different API resources.
- `playwright.config.ts` - Playwright configuration.
- `playwright-report/` - HTML reports generated after test runs.
- `test-results/` - Raw test result files.
- `.github/workflows/playwright.yml` - GitHub Actions workflow for CI.

## Prerequisites

- [Node.js](https://nodejs.org/) (v16+ recommended)
- [npm](https://www.npmjs.com/)

## Setup

1. Install dependencies:
   ```sh
   npm install
   ```

2. (Optional) Edit `db.json` and `tastData/data.json` to customize your API and test data.

## Running the Mock API

Start the mock API server on port 3000:
```sh
npm run start:api
```

## Running Tests

Run all Playwright API tests:
```sh
npm test
```

Or, to start the API and run tests in sequence:
```sh
npm run test:api
```

To run a specific test (e.g., `sites-api.spec.ts`):
```bash
npx playwright test tests/sites-api.spec.ts
```

## Viewing Reports

After running tests, open the HTML report:
```sh
npx playwright show-report
```
Or open `playwright-report/index.html` in your browser.

## Continuous Integration

Tests are automatically run via GitHub Actions using the workflow in `.github/workflows/playwright.yml`.
