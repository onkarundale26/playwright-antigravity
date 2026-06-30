# Playwright TypeScript Automation Framework Handbook
### *A Living Architectural Guide, Learning Repository & Team Onboarding Manual*

---

## 📖 About This Handbook

This handbook serves as the definitive architecture guide and learning repository for the **OpenCart E-Commerce Web Automation Framework**. Developed using **Playwright**, **TypeScript**, and the **Page Object Model (POM)** pattern, this document tracks the step-by-step evolution of the framework.

Every session is chronologically analyzed, breaking down code implementations, design justifications, configuration choices, best practices, and interview-critical concepts. It is designed to allow new team members to fully understand the architectural layout and begin contributing immediately.

---

## 🗺️ Table of Contents

| Date           | Topic                                                                                                                                       | Key Files Covered                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | Core Playwright & Architectural Concepts                                                                                                                                                                                                                          |
| :------------- | :------------------------------------------------------------------------------------------------------------------------------------------ | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **2026-05-27** | [Session 1: Framework Initialization & Core POM Architecture](#session-2026-05-27-framework-initialization--core-pom-architecture)          | [package.json](file:///C:/Users/shree/Box/2026_Playwright_Batch_Notes_Codes_G1/Playwright_Framework_Sessions_Code/package.json)<br>[tsconfig.json](file:///C:/Users/shree/Box/2026_Playwright_Batch_Notes_Codes_G1/Playwright_Framework_Sessions_Code/tsconfig.json)<br>[playwright.config.ts](file:///C:/Users/shree/Box/2026_Playwright_Batch_Notes_Codes_G1/Playwright_Framework_Sessions_Code/playwright.config.ts)<br>[BasePage.ts](file:///C:/Users/shree/Box/2026_Playwright_Batch_Notes_Codes_G1/Playwright_Framework_Sessions_Code/src/pages/BasePage.ts)<br>[LoginPage.ts](file:///C:/Users/shree/Box/2026_Playwright_Batch_Notes_Codes_G1/Playwright_Framework_Sessions_Code/src/pages/LoginPage.ts)<br>[loginpage.spec.ts](file:///C:/Users/shree/Box/2026_Playwright_Batch_Notes_Codes_G1/Playwright_Framework_Sessions_Code/tests/loginpage.spec.ts)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | • Page Object Model (POM)<br>• OOP Encapsulation & Inheritance<br>• Playwright Locators & ARIA Roles<br>• ES Modules (`type: module`) in Node<br>• TS Compiler Configuration (`tsconfig`)<br>• Execution Engine Settings (Parallelization, viewports, lifecycles) |
| **2026-06-01** | [Session 2: Custom Page Fixtures & Allure Report Integration](#session-2026-06-01-custom-page-fixtures--allure-report-integration)          | [package.json](file:///C:/Users/shree/Box/2026_Playwright_Batch_Notes_Codes_G1/Playwright_Framework_Sessions_Code/package.json)<br>[playwright.config.ts](file:///C:/Users/shree/Box/2026_Playwright_Batch_Notes_Codes_G1/Playwright_Framework_Sessions_Code/playwright.config.ts)<br>[pagefixtures.ts](file:///C:/Users/shree/Box/2026_Playwright_Batch_Notes_Codes_G1/Playwright_Framework_Sessions_Code/src/fixtures/pagefixtures.ts)<br>[HomePage.ts](file:///C:/Users/shree/Box/2026_Playwright_Batch_Notes_Codes_G1/Playwright_Framework_Sessions_Code/src/pages/HomePage.ts)<br>[homepage.spec.ts](file:///C:/Users/shree/Box/2026_Playwright_Batch_Notes_Codes_G1/Playwright_Framework_Sessions_Code/tests/homepage.spec.ts)<br>[homepagefix.spec.ts](file:///C:/Users/shree/Box/2026_Playwright_Batch_Notes_Codes_G1/Playwright_Framework_Sessions_Code/tests/homepagefix.spec.ts)<br>[loginpage.spec.ts](file:///C:/Users/shree/Box/2026_Playwright_Batch_Notes_Codes_G1/Playwright_Framework_Sessions_Code/tests/loginpage.spec.ts)<br>[loginpagefix.spec.ts](file:///C:/Users/shree/Box/2026_Playwright_Batch_Notes_Codes_G1/Playwright_Framework_Sessions_Code/tests/loginpagefix.spec.ts)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | • Playwright Custom Fixtures (`baseTest.extend`) <br>• Dependency Injection <br>• Allure & HTML Multi-Reporter <br>• Soft Assertions (`expect.soft`) <br>• Visual & Command scripts                                                                               |
| **2026-06-03** | [Session 3: Multi-Environment Config & CSV Data-Driven Testing](#session-2026-06-04-multi-environment-config--csv-data-driven-testing)      | [package.json](file:///C:/Users/shree/Box/2026_Playwright_Batch_Notes_Codes_G1/Playwright_Framework_Sessions_Code/package.json)<br>[playwright.config.ts](file:///C:/Users/shree/Box/2026_Playwright_Batch_Notes_Codes_G1/Playwright_Framework_Sessions_Code/playwright.config.ts)<br>[CsvHelper.ts](file:///C:/Users/shree/Box/2026_Playwright_Batch_Notes_Codes_G1/Playwright_Framework_Sessions_Code/src/utils/CsvHelper.ts)<br>[pagefixtures.ts](file:///C:/Users/shree/Box/2026_Playwright_Batch_Notes_Codes_G1/Playwright_Framework_Sessions_Code/src/fixtures/pagefixtures.ts)<br>[LoginPage.ts](file:///C:/Users/shree/Box/2026_Playwright_Batch_Notes_Codes_G1/Playwright_Framework_Sessions_Code/src/pages/LoginPage.ts)<br>[loginData.csv](file:///C:/Users/shree/Box/2026_Playwright_Batch_Notes_Codes_G1/Playwright_Framework_Sessions_Code/src/data/loginData.csv)<br>[loginpage.spec.ts](file:///C:/Users/shree/Box/2026_Playwright_Batch_Notes_Codes_G1/Playwright_Framework_Sessions_Code/tests/loginpage.spec.ts)<br>[loginpagefix.spec.ts](file:///C:/Users/shree/Box/2026_Playwright_Batch_Notes_Codes_G1/Playwright_Framework_Sessions_Code/tests/loginpagefix.spec.ts)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | • Dotenv Environment Loading (`dotenv`) <br>• Dynamic BaseURL Mapping <br>• CSV Test Data Parsing (`csv-parse`) <br>• Serial and Parallel Data-Driven Testing <br>• Playwright Dynamic Compile-Time Test Loops                                                    |
| **2026-06-04** | [Session 4: Excel & JSON Data-Driven Testing & Product Search POM](#session-2026-06-04-excel--json-data-driven-testing--product-search-pom) | [package.json](file:///C:/Users/shree/Box/2026_Playwright_Batch_Notes_Codes_G1/Playwright_Framework_Sessions_Code/package.json)<br>[playwright.config.ts](file:///C:/Users/shree/Box/2026_Playwright_Batch_Notes_Codes_G1/Playwright_Framework_Sessions_Code/playwright.config.ts)<br>[pagefixtures.ts](file:///C:/Users/shree/Box/2026_Playwright_Batch_Notes_Codes_G1/Playwright_Framework_Sessions_Code/src/fixtures/pagefixtures.ts)<br>[HomePage.ts](file:///C:/Users/shree/Box/2026_Playwright_Batch_Notes_Codes_G1/Playwright_Framework_Sessions_Code/src/pages/HomePage.ts)<br>[SearchResultsPage.ts](file:///C:/Users/shree/Box/2026_Playwright_Batch_Notes_Codes_G1/Playwright_Framework_Sessions_Code/src/pages/SearchResultsPage.ts)<br>[ExcelHelper.ts](file:///C:/Users/shree/Box/2026_Playwright_Batch_Notes_Codes_G1/Playwright_Framework_Sessions_Code/src/utils/ExcelHelper.ts)<br>[JsonHelper.ts](file:///C:/Users/shree/Box/2026_Playwright_Batch_Notes_Codes_G1/Playwright_Framework_Sessions_Code/src/utils/JsonHelper.ts)<br>[OpenCartTestData.xlsx](file:///C:/Users/shree/Box/2026_Playwright_Batch_Notes_Codes_G1/Playwright_Framework_Sessions_Code/src/data/OpenCartTestData.xlsx)<br>[logindata.json](file:///C:/Users/shree/Box/2026_Playwright_Batch_Notes_Codes_G1/Playwright_Framework_Sessions_Code/src/data/logindata.json)<br>[product.csv](file:///C:/Users/shree/Box/2026_Playwright_Batch_Notes_Codes_G1/Playwright_Framework_Sessions_Code/src/data/product.csv)<br>[loginpagefix.spec.ts](file:///C:/Users/shree/Box/2026_Playwright_Batch_Notes_Codes_G1/Playwright_Framework_Sessions_Code/tests/loginpagefix.spec.ts)<br>[search.spec.ts](file:///C:/Users/shree/Box/2026_Playwright_Batch_Notes_Codes_G1/Playwright_Framework_Sessions_Code/tests/search.spec.ts) | • Excel Data Parsing (`xlsx`) <br>• JSON Data Loading (`fs.readFileSync`) <br>• Parallel Data-Driven Testing (Excel & JSON) <br>• Search Page POM Implementation <br>• Custom Fixture Extension for Search Page                                                   |
| **2026-06-08** | [Session 5: BasePage Common Locators & Product Info Page POM](#session-2026-06-08-basepage-common-locators--product-info-page-pom)          | [BasePage.ts](file:///C:/Users/shree/Box/2026_Playwright_Batch_Notes_Codes_G1/Playwright_Framework_Sessions_Code/src/pages/BasePage.ts)<br>[HomePage.ts](file:///C:/Users/shree/Box/2026_Playwright_Batch_Notes_Codes_G1/Playwright_Framework_Sessions_Code/src/pages/HomePage.ts)<br>[pagefixtures.ts](file:///C:/Users/shree/Box/2026_Playwright_Batch_Notes_Codes_G1/Playwright_Framework_Sessions_Code/src/fixtures/pagefixtures.ts)<br>[ProductInfoPage.ts](file:///C:/Users/shree/Box/2026_Playwright_Batch_Notes_Codes_G1/Playwright_Framework_Sessions_Code/src/pages/ProductInfoPage.ts)<br>[productpage.spec.ts](file:///C:/Users/shree/Box/2026_Playwright_Batch_Notes_Codes_G1/Playwright_Framework_Sessions_Code/tests/productpage.spec.ts)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | • Base Page locators refactoring<br>• Custom Page Fixture updates (`basePage`, `productInfoPage`) <br>• TypeScript `Map` for product metadata and pricing data parsing<br>• Asynchronous element wait state synchronization (`waitFor`)                           |
| **2026-06-10** | [Session 6: Playwright API Testing & GoRest REST API Integration](#session-2026-06-10-playwright-api-testing--gorest-rest-api-integration)  | [users.api.spec.ts](file:///C:/Users/shree/Box/2026_Playwright_Batch_Notes_Codes_G1/Playwright_Framework_Sessions_Code/tests/api/users.api.spec.ts)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | • Playwright built-in `request` context usage <br>• Dynamic request authorization via headers <br>• Serialization & deserialization validation <br>• HTTP response telemetry assertions (status, statusText)                                                      |
| **2026-06-15** | [Session 7: Reusable ApiHelper Utility & E2E API CRUD Test Workflows](#session-2026-06-15-reusable-apihelper-utility--e2e-api-crud-test-workflows) | [ApiHelper.ts](file:///C:/Users/shree/Box/2026_Playwright_Batch_Notes_Codes_G1/Playwright_Framework_Sessions_Code/src/api/ApiHelper.ts)<br>[apifixtures.ts](file:///C:/Users/shree/Box/2026_Playwright_Batch_Notes_Codes_G1/Playwright_Framework_Sessions_Code/src/fixtures/apifixtures.ts)<br>[users.api.indi.spec.ts](file:///C:/Users/shree/Box/2026_Playwright_Batch_Notes_Codes_G1/Playwright_Framework_Sessions_Code/tests/api/users.api.indi.spec.ts)<br>[users.api.sep.spec.ts](file:///C:/Users/shree/Box/2026_Playwright_Batch_Notes_Codes_G1/Playwright_Framework_Sessions_Code/tests/api/users.api.sep.spec.ts) | • Reusable Wrapper classes (ApiHelper) <br>• Custom API fixtures extensions <br>• AAA Pattern in API testing <br>• Sequential execution via `describe.serial` <br>• Sharing state variables across tests |
| **2026-06-17** | [Session 8: OAuth2 Token Generation, API Schema Validation, & Network Mocking/Interception](#session-2026-06-17-oauth2-token-generation-api-schema-validation--network-mockinginterception) | [amadeus.oauth2.spec.ts](file:///C:/Users/shree/Box/2026_Playwright_Batch_Notes_Codes_G1/Playwright_Framework_Sessions_Code/tests/api/amadeus.oauth2.spec.ts)<br>[intercept.spec.ts](file:///C:/Users/shree/Box/2026_Playwright_Batch_Notes_Codes_G1/Playwright_Framework_Sessions_Code/tests/api/intercept.spec.ts)<br>[users.api.schema.spec.ts](file:///C:/Users/shree/Box/2026_Playwright_Batch_Notes_Codes_G1/Playwright_Framework_Sessions_Code/tests/api/users.api.schema.spec.ts)<br>[package.json](file:///C:/Users/shree/Box/2026_Playwright_Batch_Notes_Codes_G1/Playwright_Framework_Sessions_Code/package.json) | • OAuth2 Client Credentials form authentication <br>• JSON Schema validation using `ajv` <br>• Wildcard request logging (`page.route`) <br>• JSON payload stubbing & evaluation <br>• HTML page interception & element assertions |

---

## Session: 2026-05-27: Framework Initialization & Core POM Architecture

### 🎯 Topic
The objective of this initial session was to lay the bedrock for a scalable, maintainable, and highly parallelized web automation framework. This involved establishing the project structure, compiling configurations for TypeScript and Playwright, creating the core Page Object Model (POM) hierarchy (`BasePage` and `LoginPage`), and writing initial sanity tests.

---

### 📂 Files Added

During this inaugural session, the following file structure was created:

1. **Project Tooling & Compilation Configuration:**
   * `package.json` — System dependencies, environment properties, dev-tooling configurations.
   * `tsconfig.json` — Static compilation, type resolutions, strict-mode configurations.
   * `playwright.config.ts` — Playwright execution configuration (Parallelism, retry policies, viewports, reporters, base URL).
2. **Page Object Models (src/pages/):**
   * `BasePage.ts` — Injects the Playwright `Page` context and acts as the parent object.
   * `LoginPage.ts` — Implements locators and behaviors specific to the OpenCart Account Login Page.
   * `HomePage.ts` *(Empty Placeholder)* — Created to anchor the future Home Page implementation.
3. **Data & Utilities (src/utils/):**
   * `csvutil.ts` *(Empty Placeholder)* — Created to anchor future CSV test-data reader utilities.
4. **Test Suites (tests/):**
   * `loginpage.spec.ts` — Contains initial automated tests validating login page properties.
   * `homepage.spec.ts` *(Empty Placeholder)* — Structural shell for future home page tests.
   * `searchpage.spec.ts` *(Empty Placeholder)* — Structural shell for future search/product page tests.

> [!NOTE]
> Files marked as *Empty Placeholders* represent structural scaffolding created to layout the folder architecture. They will be fully implemented in subsequent sessions.

---

### 💻 Code Snippets

#### 1. System Configuration & Tooling Files

##### **[package.json](file:///C:/Users/shree/Box/2026_Playwright_Batch_Notes_Codes_G1/Playwright_Framework_Sessions_Code/package.json)**
```json
// Command to initialize the Node.js project automatically:
// npm init -y
{
  "name": "opencart_webframework_pw", // Name of the application/package
  "version": "1.0.0",                 // Version of the package
  "description": "This is the open cart web app framework using POM", // Short description
  "main": "index.js",                 // Entry point of the package
  "scripts": {},                      // Project script commands (none configured yet)
  "keywords": [],                     // Metadata keywords
  "author": "Naveen Automation Labs", // Framework developer name
  "license": "ISC",                   // Licensing type
  "type": "module",                   // Designates file compiler to modern ES Modules (import/export)
  "devDependencies": {                // Packages required for development and automation runtime
    "@playwright/test": "^1.60.0",    // Core Playwright framework runner
    "@types/node": "^25.9.1"          // TypeScript type declarations for Node.js APIs
  }
}
```

##### **[tsconfig.json](file:///C:/Users/shree/Box/2026_Playwright_Batch_Notes_Codes_G1/Playwright_Framework_Sessions_Code/tsconfig.json)**
```json
{
    "compilerOptions": {
        "target": "ES2020",
        "module": "es2020",
        "lib": [
            "ES2020",
            "DOM"
        ],
        "types": [
            "node"
        ],
        "strict": true,
        "esModuleInterop": true,
        "resolveJsonModule": true,
        "outDir": "./dist"
    },
    "include": [
        "**/*.ts"
    ],
    "exclude": [
        "node_modules"
    ]
}
```

##### **[playwright.config.ts](file:///C:/Users/shree/Box/2026_Playwright_Batch_Notes_Codes_G1/Playwright_Framework_Sessions_Code/playwright.config.ts)**
```typescript
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: 'html',

  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    baseURL: 'https://naveenautomationlabs.com/',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'on-first-retry',
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },

    // {
    //   name: 'firefox',
    //   use: { ...devices['Desktop Firefox'] },
    // },

    // {
    //   name: 'webkit',
    //   use: { ...devices['Desktop Safari'] },
    // },

    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],

});
```

---

#### 2. Page Object Model Classes

##### **[BasePage.ts](file:///C:/Users/shree/Box/2026_Playwright_Batch_Notes_Codes_G1/Playwright_Framework_Sessions_Code/src/pages/BasePage.ts)**
```typescript
import { Page } from "@playwright/test";

export class BasePage {

    protected readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }


    //helper/generic
    //page.lo.fill
    //page.lo.text


}
```

##### **[LoginPage.ts](file:///C:/Users/shree/Box/2026_Playwright_Batch_Notes_Codes_G1/Playwright_Framework_Sessions_Code/src/pages/LoginPage.ts)**
```typescript
import { Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage";


export class LoginPage extends BasePage {

    //private Locators: 
    private readonly emailId: Locator;
    private readonly password: Locator;
    private readonly loginBtn: Locator;
    private readonly forgottenPasswordLink: Locator;
    private readonly logo: Locator;

    //const... of the class: init the locators
    constructor(page: Page) {
        super(page);
        this.emailId = page.getByRole('textbox', { name: 'E-Mail Address' });
        this.password = page.getByRole('textbox', { name: 'Password' });
        this.loginBtn = page.getByRole('button', { name: 'Login' });
        this.forgottenPasswordLink = page.getByRole('link', { name: 'Forgotten Password' }).first();
        this.logo = page.getByAltText('naveenopencart');
    };

    //public page actions(methods)/behaviour
    async goToLoginPage(): Promise<void> {
        await this.page.goto('opencart/index.php?route=account/login');
    }

    async getLoginPageTitle(): Promise<string> {
        return await this.page.title();
    }

    async isForgotPwdLinkExist(): Promise<boolean> {
        return await this.forgottenPasswordLink.isVisible();
    }

    async doLogin(username: string, password: string): Promise<void> {
        console.log(`user creds: ${username} : ${password}`);
        await this.emailId.fill(username);
        await this.password.fill(password);
        await this.loginBtn.click();
    }

}
```

---

#### 3. Test Suites

##### **[loginpage.spec.ts](file:///C:/Users/shree/Box/2026_Playwright_Batch_Notes_Codes_G1/Playwright_Framework_Sessions_Code/tests/loginpage.spec.ts)**
```typescript
import { test, expect } from '@playwright/test';
import { LoginPage } from '../src/pages/LoginPage';



test('login page title test', async ({ page }) => {
    let loginPage = new LoginPage(page);
    await loginPage.goToLoginPage();
    const pageTitle = await loginPage.getLoginPageTitle();
    console.log('login page title', pageTitle);
    expect(pageTitle).toBe('Account Login');
});


test('forgot pwd link exist test', async ({ page }) => {
    let loginPage = new LoginPage(page);
    await loginPage.goToLoginPage();
    expect(await loginPage.isForgotPwdLinkExist()).toBeTruthy();
});
```

---

### 🔍 Detailed Explanation

#### 🛠️ Config & Tooling Analysis

##### **1. package.json**
* **`"type": "module"`**: Informs NodeJS that JavaScript files are written using ES Modules (ESM) style (`import`/`export`) instead of CommonJS (`require`/`module.exports`). Playwright fully supports and encourages ESM since it enables modern, asynchronous JS execution.
* **`@playwright/test` (`^1.60.0`)**: The core engine containing the Playwright runner, assertion libraries, and browser binaries. It isolates browser environments, handles test workers, and facilitates cross-browser parallel testing.
* **`@types/node` (`^25.9.1`)**: Provides Type definitions for NodeJS environment APIs. Crucial for TypeScript compilation, enabling auto-completion and static verification for Node commands (like `process.env.CI`).

##### **2. tsconfig.json**
* **`"target": "ES2020"` & `"module": "es2020"`**: Instructs the TypeScript Compiler (`tsc`) to emit standard ECMA 2020 JavaScript. It guarantees compatibility with modern asynchronous keywords, promises, and dynamic imports.
* **`"lib": ["ES2020", "DOM"]`**: Adds DOM and ES2020 type libraries to global scope, which is essential because Playwright tests inspect web browser consoles and evaluate client-side scripts that depend on DOM types.
* **`"strict": true`**: Enables all strict type checking parameters (e.g., `noImplicitAny`, `strictNullChecks`). Ensures high-quality code structures and prevents typical JavaScript runtime errors before execution.
* **`"esModuleInterop": true`**: Solves module compilation friction. Allows importing CommonJS-built npm modules seamlessly as standard ES6 default imports.
* **`"resolveJsonModule": true`**: Allows direct static imports of JSON files (e.g., test data config profiles) into TypeScript files.
* **`"outDir": "./dist"`**: Directs target transpiled JS files to a clean `/dist` distribution folder.

##### **3. playwright.config.ts**
* **`fullyParallel: true`**: Maximizes execution performance. Under normal operations, Playwright runs test *files* in parallel but serializes tests inside a file. With `fullyParallel: true`, Playwright executes individual tests inside files across different worker processes simultaneously.
* **`forbidOnly: !!process.env.CI`**: CI/CD Safeguard. If a developer accidentally pushes a test marked with `test.only(...)` to Git, the build will fail immediately in CI. This prevents developers from deploying codebases that skip 99% of the validation suite.
* **`retries: process.env.CI ? 2 : 0`**: Prevents build failures due to minor network hiccups or transient errors in cloud runners by auto-retrying failed tests twice on CI, while maintaining zero-retries locally for faster debugging.
* **`workers: process.env.CI ? 1 : undefined`**: Limits resource consumption on virtual pipelines. Cloud containers are frequently CPU-restricted (e.g., 2 cores). Running 4 parallel workers on a 2-core container causes massive resource starvation and flakiness. The config forces a single thread (1 worker) on CI while allowing normal parallel threads (50% of CPU cores) on local machines (`undefined`).
* **`use` Options**:
  * **`baseURL: 'https://naveenautomationlabs.com/'`**: Standardizes absolute paths. Instead of hardcoding URLs in POM files (`https://naveenautomationlabs.com/opencart/index.php...`), actions reference relative targets (`opencart/index.php...`). This makes switching environment hosts (e.g., QA, UAT, Staging) a simple one-line config change.
  * **`screenshot: 'only-on-failure'`** and **`video: 'retain-on-failure'`**: Resource optimization. Generates images and video recordings only for failed cases, saving storage space and local disk writes for passing tests.
  * **`trace: 'on-first-retry'`**: Captures standard zip-format Playwright Trace logs (action logs, console logs, network profiles, and DOM snapshots before/after each action) only when a test fails and is retried.
* **`projects` browser list**: Currently has a single `chromium` project enabled, reflecting that the project is in its early staging. Other browser configurations (`firefox`, `webkit`, `Mobile Chrome`, etc.) are commented out and prepared for future enablement.

---

#### 🏗️ Page Object Classes Analysis

##### **1. BasePage.ts**
```typescript
export class BasePage {
    protected readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }
}
```
* **Line-by-Line**:
  * The class declares a `protected` class property `page` of type `Page`.
    * `protected`: Permits derived subclasses (e.g., `LoginPage`) to access the `page` property directly, while blocking external classes (like tests) from accessing it.
    * `readonly`: Ensures that the `page` instance cannot be overwritten or reassigned after initialization.
  * The constructor receives an active Playwright browser tab wrapper (`Page`) and initializes `this.page`.
* **Framework Benefit**: Standardizes constructor signatures across the codebase. Every single page object in the project will extend `BasePage` and pass the shared browser execution page down the inheritance pipeline.

##### **2. LoginPage.ts**
* **Encapsulation**: Declarations of elements like `emailId`, `password`, and `loginBtn` are restricted to `private readonly Locator` types. Test suites cannot reference or interact directly with locators (`loginPage.emailId.fill(...)` is a compilation error). Tests must interact through public action methods (e.g., `loginPage.doLogin(...)`). This decouples test assertions from locator structures.
* **Constructor & Locators**:
  ```typescript
  constructor(page: Page) {
      super(page);
      this.emailId = page.getByRole('textbox', { name: 'E-Mail Address' });
      ...
  ```
  * `super(page)`: Invokes parent constructor of `BasePage` to instantiate the underlying page wrapper.
  * `page.getByRole(...)` and `page.getByAltText(...)`: Playwright’s recommended user-centric Locators.
    * W3C ARIA accessibility guidelines are leveraged directly. For example, `getByRole('textbox', { name: 'E-Mail Address' })` locates elements by their semantic ARIA visual roles rather than fragile XPath/CSS selectors.
    * The `.first()` call on `forgottenPasswordLink` selects the first matching element, preventing errors when multiple links with identical text are rendered on a page.
* **Action Methods**:
  * **`goToLoginPage()`**: Navigates using a relative path: `this.page.goto('opencart/index.php?route=account/login')`. The browser appends this suffix to the configured `baseURL`.
  * **`doLogin(username, password)`**: An atomic flow method. It performs three steps (entering email, entering password, clicking login button) sequentially. This simplifies test steps and encapsulates the login transaction.

---

#### 🧪 Test Suite Analysis

##### **loginpage.spec.ts**
* **`async ({ page }) => { ... }`**: Injecting the default `{ page }` browser context fixture. Playwright automatically manages browser instantiation, contexts, and cleanup behind the scenes.
* **Instantiating POM**: `let loginPage = new LoginPage(page);` binds the active browser context to the page object representation.
* **Assertion Execution**:
  * `expect(pageTitle).toBe('Account Login')` matches exact string structures.
  * `expect(await loginPage.isForgotPwdLinkExist()).toBeTruthy()` checks boolean visibility values. Both assertions are highly readable and execute with automatic wait policies.

---

### 🧠 Framework Concepts Learned

1. **Page Object Model (POM)**:
   A clean design pattern that segregates the *Web UI Pages (Elements & Actions)* from the *Test Specifications (Assertions & Flow)*.
   * **Separation of Concerns**: If the UI team alters an element locator (e.g., changes `"E-Mail Address"` label to `"User Email"`), the change is made in a single location (`LoginPage.ts`). The test files (`loginpage.spec.ts`) remain unchanged.

2. **W3C Semantic Locators**:
   Historically, QA engineers relied on IDs, CSS classes, or XPaths. These are highly prone to breakage. Playwright's `getByRole`, `getByAltText`, and `getByPlaceholder` select elements based on their visual presence and accessibility rules. This matches how users interact with the browser and results in robust selectors that do not break during minor UI refactorings.

3. **Relative Pathing via baseURL**:
   Defining a `baseURL` in the central config allows developers to change target endpoints globally. Navigating via relative URLs makes migrating the test suite from a dev environment (`localhost:8080`) to a staging environment (`staging.app.com`) as simple as changing the `baseURL` in `playwright.config.ts`.

4. **OOP Inheritance & Encapsulation**:
   * **Inheritance**: `LoginPage` inherits `page` context from `BasePage`, eliminating code repetition.
   * **Encapsulation**: Keeping page selectors `private` ensures tests cannot alter or manipulate locators directly, protecting the integrity of the page object.

---

### 🔑 Key Learnings

* **Encapsulated Locators prevent Test Bloat**: Declaring locators private restricts them to page objects, preventing cluttered tests.
* **Auto-Waiting reduces Flakiness**: Playwright implicitly waits for elements to be actionable (visible, attached, enabled, stable) before executing clicks or text entries, eliminating the need for hardcoded sleeps.
* **Standardized ESM Compilation**: Setting up ESM via `"type": "module"` in `package.json` ensures modular structures and clean import/export syntax.

---

## Session: 2026-06-01: Custom Page Fixtures & Allure Report Integration

### 🎯 Topic
The objectives of today's session were to introduce structured test reporting via Allure, enable headed browser testing configurations for debugging, and refactor the framework's test setup using custom Playwright Fixtures (`src/fixtures/pagefixtures.ts`). Refactoring to fixtures removes repetitive Page Object Model (POM) instantiation boilerplates from individual spec files, enabling clean, declaration-based dependency injection.

---

### 📂 Files Added

During this session, the following new files were added to the framework:

1. **Page Fixture Configurator:**
   * `src/fixtures/pagefixtures.ts` — Houses extended test and expect objects containing custom browser tab page fixtures.
2. **Fixture-driven Test Suites (tests/):**
   * `tests/loginpagefix.spec.ts` — Decoupled login page verification using the custom `loginPage` fixture.
   * `tests/homepagefix.spec.ts` — Decoupled home page verification using the custom `homePage` fixture.

---

### 📂 Files Modified

The following files were updated to incorporate the new capabilities:

1. **Project Tooling & Compilation Configuration:**
   * `package.json` — Added Allure command line and playwright plugin dependencies, and integrated shell execution test and reporting scripts.
   * `playwright.config.ts` — Enabled multi-reporter integrations (List, HTML, Allure) and set local executions to headed (`headless: false`).
2. **Page Object Models (src/pages/):**
   * `src/pages/HomePage.ts` — Fully implemented logout locators, headings elements, and verification actions.
3. **Standard Test Suites (tests/):**
   * `tests/homepage.spec.ts` — Implemented standard lifecycle-hook tests for home page behaviors using standard instantiations.
   * `tests/loginpage.spec.ts` — Augmented login verification tests, incorporating soft assertions for UI states.

---

### 💻 Code Snippets

#### 1. System Configuration & Tooling Files

##### **[package.json](file:///C:/Users/shree/Box/2026_Playwright_Batch_Notes_Codes_G1/Playwright_Framework_Sessions_Code/package.json)**
```json
// Command to install Allure reporting dependencies:
// npm install --save-dev allure-playwright allure-commandline
{
  "name": "opencart_webframework_pw", // Name of the application/package
  "version": "1.0.0",                 // Version of the package
  "description": "This is the open cart web app framework using POM", // Short description
  "main": "index.js",                 // Entry point of the package
  "scripts": {                        // Custom project commands executed via npm run <name>
    "test": "npx playwright test",                                       // Runs Playwright tests in headless mode
    "test:headed": "npx playwright test --headed",                       // Runs Playwright tests in headed mode
    "test:chrome": "npx playwright test --project=chromium",              // Restricts run execution to Chrome browser
    "allure:generate": "npx allure generate allure-results --clean -o allure-report", // Compiles raw results to HTML report
    "allure:open": "npx allure open allure-report",                       // Opens web server viewing the compiled report
    "allure:report": "npm run allure:generate && npm run allure:open",   // Generates and hosts the Allure report in one step
    "allure:clean": "rm -rf allure-results allure-report"                // Clears previous Allure reports and raw execution logs
  },
  "keywords": [],                     // Metadata keywords
  "author": "Naveen Automation Labs", // Framework developer name
  "license": "ISC",                   // Licensing type
  "type": "module",                   // Designates file compiler to modern ES Modules (import/export)
  "devDependencies": {                // Packages required for development and automation runtime
    "@playwright/test": "^1.60.0",    // Core Playwright framework runner
    "@types/node": "^25.9.1",          // TypeScript type declarations for Node.js APIs
    "allure-commandline": "^2.42.0",  // Command line tool to compile and open Allure HTML reports
    "allure-playwright": "^3.9.0"     // Playwright test adapter to export execution telemetry to Allure format
  }
}
```

##### **[playwright.config.ts](file:///C:/Users/shree/Box/2026_Playwright_Batch_Notes_Codes_G1/Playwright_Framework_Sessions_Code/playwright.config.ts)**
```typescript
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,

  reporter: [
    ["list"],
    ["html", { outputFolder: "reports/html-report", open: "never" }],
    ["allure-playwright", {
      outputFolder: "allure-results",
      suiteTitle: true,
    }],
  ],

  use: {
    baseURL: 'https://naveenautomationlabs.com/',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'on-first-retry',
    headless: false,
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],

});
```

#### 2. Custom Fixtures Layer

##### **[pagefixtures.ts](file:///C:/Users/shree/Box/2026_Playwright_Batch_Notes_Codes_G1/Playwright_Framework_Sessions_Code/src/fixtures/pagefixtures.ts)**
```typescript
import { test as baseTest } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { LoginPage } from '../pages/LoginPage';


//define types for page fixtures:
type pageFixtures = {
    loginPage: LoginPage,
    homePage: HomePage
};

//extend playwright base test:
export let test = baseTest.extend<pageFixtures>({

    loginPage: async ({ page }, use) => {
        let loginPage = new LoginPage(page);
        await use(loginPage);
    },

    homePage: async ({ page }, use) => {
        let homePage = new HomePage(page);
        await use(homePage);
    },

});

export { expect } from '@playwright/test';

//page objects
//test data
//states .json
```

#### 3. Page Object Model Classes

##### **[HomePage.ts](file:///C:/Users/shree/Box/2026_Playwright_Batch_Notes_Codes_G1/Playwright_Framework_Sessions_Code/src/pages/HomePage.ts)**
```typescript
import { Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage";


export class HomePage extends BasePage {

    //private Locators: 
    private readonly logoutLink: Locator;
    private readonly headers: Locator;

    //const... of the class: init the locators
    constructor(page: Page) {
        super(page);
        this.logoutLink = page.getByRole('link', { name: 'Logout' });
        this.headers = page.getByRole('heading', { level: 2 });
    };

    //public page actions(methods)/behaviour
    async getHomePageTitle(): Promise<string> {
        return await this.page.title();
    }

    async isLogoutLinkExist(): Promise<boolean> {
        return await this.logoutLink.isVisible();
    }

    async getHomePageHeaders(): Promise<string[]> {
        return await this.headers.allInnerTexts();
    }

}
```

#### 4. Test Suites

##### **[homepage.spec.ts](file:///C:/Users/shree/Box/2026_Playwright_Batch_Notes_Codes_G1/Playwright_Framework_Sessions_Code/tests/homepage.spec.ts)**
```typescript
import { test, expect } from '@playwright/test';
import { LoginPage } from '../src/pages/LoginPage';
import { HomePage } from '../src/pages/HomePage';



let loginPage: LoginPage;
let homePage: HomePage;

test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.goToLoginPage();
    await loginPage.doLogin('pwtestbatch@open.com', 'pw123');
    homePage = new HomePage(page);
});

test('home page title test', async () => {
    const pageTitle = await homePage.getHomePageTitle();
    console.log('home page title', pageTitle);
    expect(pageTitle).toBe('My Account');
});


test('logout link exist test', async () => {
    expect(await homePage.isLogoutLinkExist()).toBeTruthy();
});


test('home page headers exist test @junesprint', async () => {
    let allHeaders = await homePage.getHomePageHeaders();
    console.log('home page headers: ', allHeaders);
    expect.soft(allHeaders).toHaveLength(4);
    expect.soft(allHeaders).toEqual([
        'My Account',
        'My Orders',
        'My Affiliate Account',
        'Newsletter'
    ]);
});
```

##### **[homepagefix.spec.ts](file:///C:/Users/shree/Box/2026_Playwright_Batch_Notes_Codes_G1/Playwright_Framework_Sessions_Code/tests/homepagefix.spec.ts)**
```typescript
import { test, expect } from '../src/fixtures/pagefixtures';


test.beforeEach(async ({ loginPage }) => {
    await loginPage.goToLoginPage();
    await loginPage.doLogin('pwtestbatch@open.com', 'pw123');
});

test('home page title test', async ({ homePage }) => {
    const pageTitle = await homePage.getHomePageTitle();
    console.log('home page title', pageTitle);
    expect(pageTitle).toBe('My Account');
});


test('logout link exist test', async ({ homePage }) => {
    expect(await homePage.isLogoutLinkExist()).toBeTruthy();
});


test('home page headers exist test', async ({ homePage }) => {
    let allHeaders = await homePage.getHomePageHeaders();
    console.log('home page headers: ', allHeaders);
    expect.soft(allHeaders).toHaveLength(4);
    expect.soft(allHeaders).toEqual([
        'My Account',
        'My Orders',
        'My Affiliate Account',
        'Newsletter'
    ]);
});
```

##### **[loginpage.spec.ts](file:///C:/Users/shree/Box/2026_Playwright_Batch_Notes_Codes_G1/Playwright_Framework_Sessions_Code/tests/loginpage.spec.ts)**
```typescript
import { test, expect } from '@playwright/test';
import { LoginPage } from '../src/pages/LoginPage';
import { HomePage } from '../src/pages/HomePage';



test('login page title test', async ({ page }) => {
    let loginPage = new LoginPage(page);
    await loginPage.goToLoginPage();
    const pageTitle = await loginPage.getLoginPageTitle();
    console.log('login page title', pageTitle);
    expect(pageTitle).toBe('Account Login');
});


test('forgot pwd link exist test', async ({ page }) => {
    let loginPage = new LoginPage(page);
    await loginPage.goToLoginPage();
    expect(await loginPage.isForgotPwdLinkExist()).toBeTruthy();
});

test('user is able to login to app test', async ({ page }) => {
    let loginPage = new LoginPage(page);
    await loginPage.goToLoginPage();
    await loginPage.doLogin('pwtestbatch@open.com', 'pw123');
    let homePage = new HomePage(page);
    expect.soft(await homePage.isLogoutLinkExist()).toBeTruthy();
    expect.soft(await homePage.getHomePageTitle()).toBe('My Account');
});
```

##### **[loginpagefix.spec.ts](file:///C:/Users/shree/Box/2026_Playwright_Batch_Notes_Codes_G1/Playwright_Framework_Sessions_Code/tests/loginpagefix.spec.ts)**
```typescript
import { test, expect } from '../src/fixtures/pagefixtures';

test.beforeEach(async ({ loginPage }) => {
    await loginPage.goToLoginPage();
});

test('login page title test', async ({ loginPage }) => {
    const pageTitle = await loginPage.getLoginPageTitle();
    console.log('login page title', pageTitle);
    expect(pageTitle).toBe('Account Login');
});

test('forgot pwd link exist test', async ({ loginPage }) => {
    expect(await loginPage.isForgotPwdLinkExist()).toBeTruthy();
});

test('user is able to login to app test', async ({ loginPage, homePage }) => {
    await loginPage.doLogin('pwtestbatch@open.com', 'pw1234');
    expect.soft(await homePage.isLogoutLinkExist()).toBeTruthy();
    expect.soft(await homePage.getHomePageTitle()).toBe('My Account');
});
```

---

### 🔍 Detailed Explanation

#### 🛠️ Config & Tooling Analysis

##### **1. package.json**
* **scripts**:
  * `"test": "npx playwright test"`: Standard trigger to run all tests in headless mode.
  * `"test:headed"`: Executes the tests in headed mode, opening browser interfaces for debugging.
  * `"test:chrome"`: Filters browser contexts to execute solely in the Chromium project pipeline.
  * `"allure:generate"`, `"allure:open"`, `"allure:report"`, `"allure:clean"`: Facilitate running Allure command line, compiling raw output into HTML visual dashboards, launching report preview servers, and purging old run history.
* **devDependencies**:
  * `allure-playwright` (`^3.9.0`): Integrates with Playwright's reporter engine, outputting structured run metadata (JSON/XML logs) into target directories.
  * `allure-commandline` (`^2.42.0`): Executable binary that reads Allure run results and builds them into a rich offline web dashboard.

##### **2. playwright.config.ts**
* **`reporter`**: Refactored from a simple `'html'` reporter string into an array of multi-reporters:
  * `list`: Outputs real-time progress markers and logs directly in the terminal console.
  * `html`: Generates standard static local reports saved in `reports/html-report`.
  * `allure-playwright`: Captures framework-wide lifecycle events for Allure dashboard processing.
* **`use.headless: false`**: Directs Playwright to launch visual browser wrappers during local execution, facilitating live verification.

#### 🧳 Custom Fixtures Injection (`pagefixtures.ts`)
* **`baseTest.extend<pageFixtures>`**: Subscribes custom parameters to Playwright's test lifecycle. Under normal executions, Playwright injects standard fixtures like `{ page }`. Extending the test creates new parameters `{ loginPage }` and `{ homePage }` that can be requested in spec arguments.
* **Fixture Setup (`await use(loginPage)`)**:
  * When a spec calls `test('my test', async ({ loginPage }) => { ... })`, Playwright automatically runs the async generator:
    1. Instantiates a clean sandbox tab page.
    2. Instantiates `loginPage = new LoginPage(page)`.
    3. Executes the test block by calling `use(loginPage)`.
    4. Tears down page allocations after the test block finishes, cleaning up scopes automatically.
* **Benefits**: Decouples instantiation logic completely from spec sheets. If a constructor signature changes, adjustments are restricted to `pagefixtures.ts`, shielding all specs.

---

### 🏗️ Page Object Classes Analysis

##### **HomePage.ts**
* **Encapsulation**: Extends `BasePage` and inherits the page context. Private properties `logoutLink` and `headers` encapsulation ensures tests cannot bypass POM bounds.
* **Locators**: 
  * `page.getByRole('link', { name: 'Logout' })`: Semantic W3C ARIA accessibility target matching how users find actions.
  * `page.getByRole('heading', { level: 2 })`: Targets structural sections matching header hierarchies.
* **Methods**:
  * `getHomePageHeaders()`: Uses `allInnerTexts()` to pull arrays of matching element texts. Playwright auto-waits for child elements to stabilize before evaluating.

---

### 🧪 Test Suite Analysis

##### **1. Comparative Setup: Standard POM vs. Custom Fixtures**
* **Standard (`homepage.spec.ts`)**:
  Requires explicit local declarations, instantiating `new LoginPage(page)`, navigating, executing transaction, and instantiating `new HomePage(page)` in `beforeEach` block.
* **Fixture-Driven (`homepagefix.spec.ts`)**:
  Accepts `{ loginPage }` and `{ homePage }` directly. Playwright resolves dependencies on-demand. `beforeEach` runs actions using the pre-initialized `loginPage` fixture. Individual test blocks consume the pre-initialized `homePage` fixture.

##### **2. Soft Assertions (`expect.soft`)**
* Traditional assertions block execution immediately on failure.
* `expect.soft(allHeaders).toHaveLength(4)` and `expect.soft(allHeaders).toEqual(...)` verify multiple items sequentially. If length check fails, Playwright logs the failure but continues to run the value equality check, compiling all errors at the end of the run. This reduces redundant debug runs.

##### **3. Wait Policies**
* No thread sleeps (`page.waitForTimeout`) are used. Visibility checks and page title fetches leverage Playwright's auto-wait mechanisms.

---

### 🧠 Framework Concepts Learned

1. **Dependency Injection via Fixtures**:
   Replaces manual constructor wiring with structured runtime parameter injection, standardizing sandbox lifetimes.
2. **Multi-Reporter Piping**:
   Pipes test execution logs simultaneously to standard terminal printouts, lightweight local HTML files, and comprehensive Allure visual packages.
3. **Soft Assertions for UI Layout**:
   Allows verification of complete landing states (titles, menus, user badges) in one test without premature exit on minor visual glitches.

---

### 🔑 Key Learnings

* **Custom Fixtures decrease POM Boilerplate**: Fixtures wrap object instantiations, reducing test setups to 1-line parameter listings.
* **Clean up Reports via Cleanup Scripts**: Always run allure cleans to avoid mixing old execution artifacts.
* **Use Soft Assertions for layout states**: Standardize layout validations with `expect.soft` to capture comprehensive errors in one run.

---

## Session: 2026-06-03: Multi-Environment Config & CSV Data-Driven Testing

### 🎯 Topic
The objectives of this session were to integrate environment configuration capabilities utilizing `dotenv` for multi-environment execution targets, build a CSV data parsing utility (`CsvHelper.ts`) to feed automated validation pipelines, and construct both serial fixture-based and parallel looped data-driven test suites inside Playwright.

---

### 📂 Files Added

During this session, the following files were introduced:
1. **Config & Environment Containers:**
   * `config/` — Folder to contain environment configurations (e.g., `.env.qa`, `.env.dev`).
2. **Data & Helper Utilities:**
   * `src/data/loginData.csv` — CSV structured repository for invalid login test datasets.
   * `src/data/registerData.csv` — Placeholder container for registration credentials test data.
   * `src/utils/CsvHelper.ts` — Synchronous file parsing utility wrapping the `csv-parse` engine.

---

### 📂 Files Modified

The following files were updated to implement multi-environment and CSV parsing capability:
1. **Project Execution Tooling:**
   * `package.json` — Added dependencies for `dotenv` and `csv-parse` to the dependencies block.
   * `playwright.config.ts` — Implemented dotenv parsing based on dynamic environment environment variables (`ENV`) and mapped global `baseURL` property.
2. **Page Object Models & Custom Fixtures:**
   * `src/pages/LoginPage.ts` — Implemented locator for `.alert.alert-danger` error badge and visibility helper methods.
   * `src/fixtures/pagefixtures.ts` — Integrated `testData` fixture resolving dynamically loaded CSV records.
3. **Spec Verification Suites:**
   * `tests/loginpage.spec.ts` — Re-architected standard sanity validations by moving page instantiation and navigation into a clean `beforeEach` fixture hook.
   * `tests/loginpagefix.spec.ts` — Added environment variable credential verification tests, serial data-driven validation tests, and dynamic parallel iteration tests.

---

### 💻 Code Snippets

#### 1. System Configuration & Tooling Files

##### **[package.json](file:///C:/Users/shree/Box/2026_Playwright_Batch_Notes_Codes_G1/Playwright_Framework_Sessions_Code/package.json)**
```json
// Command to install dotenv:
// npm install dotenv
// Command to install csv-parser:
// npm install csv-parse
{
  "name": "opencart_webframework_pw",
  "version": "1.0.0",
  "description": "This is the open cart web app framework using POM",
  "main": "index.js",
  "scripts": {
    "test": "npx playwright test",
    "test:headed": "npx playwright test --headed",
    "test:chrome": "npx playwright test --project=chromium",
    "allure:generate": "npx allure generate allure-results --clean -o allure-report",
    "allure:open": "npx allure open allure-report",
    "allure:report": "npm run allure:generate && npm run allure:open",
    "allure:clean": "rm -rf allure-results allure-report"
  },
  "keywords": [],
  "author": "Naveen Automation Labs",
  "license": "ISC",
  "type": "module",
  "devDependencies": {
    "@playwright/test": "^1.60.0",
    "@types/node": "^25.9.1",
    "allure-commandline": "^2.42.0",
    "allure-playwright": "^3.9.0"
  },
  "dependencies": {
    "csv-parse": "^6.2.1",
    "dotenv": "^17.4.2"
  }
}
```

.env.qa
```bash
BASE_URL=https://naveenautomationlabs.com
USERNAME=pwbatchtest@open.com
PASSWORD=pw123
```

> [!NOTE]
> you can provide runtime password instead hardcoded in .env.qa make sure that it should Password is empty.
> instead USERNAME use APPUSERNAME and APPPASSWORD  because windows alos using USERNAME in env.

##### **[playwright.config.ts](file:///C:/Users/shree/Box/2026_Playwright_Batch_Notes_Codes_G1/Playwright_Framework_Sessions_Code/playwright.config.ts)**
```typescript
import { defineConfig, devices } from '@playwright/test';
import dotenv from 'dotenv';

//ENV=qa npx playwright test
const ENV = process.env.ENV || "qa";
console.log('Running tests on Environment: ', ENV);
dotenv.config({ path: `config/.env.${ENV}` });

export default defineConfig({
  testDir: './tests',
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,

  reporter: [
    ["list"],
    ["html", { outputFolder: "reports/html-report", open: "never" }],
    ["allure-playwright", {
      outputFolder: "allure-results",
      suiteTitle: true,
    }],
  ],

  use: {
    baseURL: process.env.BASE_URL,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'on-first-retry',
    headless: false,
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],

});
```

#### 2. Data & Helper Utilities

##### **[CsvHelper.ts](file:///C:/Users/shree/Box/2026_Playwright_Batch_Notes_Codes_G1/Playwright_Framework_Sessions_Code/src/utils/CsvHelper.ts)**
```typescript
import fs from "fs";
import { parse } from 'csv-parse/sync';

export class CsvHelper {

    static readCsv(filePath: string): Record<string, string>[] {
        return parse(fs.readFileSync(filePath, "utf-8"), {
            columns: true, //first row as headers
            skip_empty_lines: true,
            trim: true, //trim spaces
        }) as Record<string, string>[];
    }
}
```

##### **[loginData.csv](file:///C:/Users/shree/Box/2026_Playwright_Batch_Notes_Codes_G1/Playwright_Framework_Sessions_Code/src/data/loginData.csv)**
```csv
username,password
invalid@open.com,wrong123
,pw1234
pwtestbatch@open.com,
```

#### 3. Custom Fixtures Layer

##### **[pagefixtures.ts](file:///C:/Users/shree/Box/2026_Playwright_Batch_Notes_Codes_G1/Playwright_Framework_Sessions_Code/src/fixtures/pagefixtures.ts)**
```typescript
import { test as baseTest } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { LoginPage } from '../pages/LoginPage';
import { CsvHelper } from '../utils/CsvHelper';


//define types for page fixtures:
type pageFixtures = {
    loginPage: LoginPage,
    homePage: HomePage,
    testData: Record<string, string>[]
};

//extend playwright base test:
export let test = baseTest.extend<pageFixtures>({

    loginPage: async ({ page }, use) => {
        let loginPage = new LoginPage(page);
        await use(loginPage);
    },

    homePage: async ({ page }, use) => {
        let homePage = new HomePage(page);
        await use(homePage);
    },

    testData: async ({ }, use) => {
        let testData = CsvHelper.readCsv('src/data/loginData.csv');
        await use(testData);
    }

});

export { expect } from '@playwright/test';
```

#### 4. Page Object Model Classes

##### **[LoginPage.ts](file:///C:/Users/shree/Box/2026_Playwright_Batch_Notes_Codes_G1/Playwright_Framework_Sessions_Code/src/pages/LoginPage.ts)**
```typescript
import { Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage";


export class LoginPage extends BasePage {

    //private Locators: 
    private readonly emailId: Locator;
    private readonly password: Locator;
    private readonly loginBtn: Locator;
    private readonly forgottenPasswordLink: Locator;
    private readonly logo: Locator;
    private readonly loginErrorMessage: Locator;

    //const... of the class: init the locators
    constructor(page: Page) {
        super(page);
        this.emailId = page.getByRole('textbox', { name: 'E-Mail Address' });
        this.password = page.getByRole('textbox', { name: 'Password' });
        this.loginBtn = page.getByRole('button', { name: 'Login' });
        this.forgottenPasswordLink = page.getByRole('link', { name: 'Forgotten Password' }).first();
        this.logo = page.getByAltText('naveenopencart');
        this.loginErrorMessage = page.locator('.alert.alert-danger.alert-dismissible');
    };

    //public page actions(methods)/behaviour
    async goToLoginPage(): Promise<void> {
        await this.page.goto('opencart/index.php?route=account/login');
    }

    async getLoginPageTitle(): Promise<string> {
        return await this.page.title();
    }

    async isForgotPwdLinkExist(): Promise<boolean> {
        return await this.forgottenPasswordLink.isVisible();
    }

    async doLogin(username: string, password: string): Promise<void> {
        console.log(`user creds: ${username}`);
        await this.emailId.fill(username);
        await this.password.fill(password);
        await this.loginBtn.click();
    }

    async isInvalidLoginErrorDisplayed(): Promise<boolean> {
        return await this.loginErrorMessage.isVisible();
    }


}
```

#### 5. Spec Suites

##### **[loginpage.spec.ts](file:///C:/Users/shree/Box/2026_Playwright_Batch_Notes_Codes_G1/Playwright_Framework_Sessions_Code/tests/loginpage.spec.ts)**
```typescript
import { test, expect } from '@playwright/test';
import { LoginPage } from '../src/pages/LoginPage';
import { HomePage } from '../src/pages/HomePage';

let loginPage: LoginPage;
let homePage: HomePage;

test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.goToLoginPage();
    homePage = new HomePage(page);
});

test('login page title test', async () => {
    const pageTitle = await loginPage.getLoginPageTitle();
    console.log('login page title', pageTitle);
    expect(pageTitle).toBe('Account Login');
});

test('forgot pwd link exist test', async () => {
    expect(await loginPage.isForgotPwdLinkExist()).toBeTruthy();
});

test('user is able to login to app test', async () => {
    await loginPage.doLogin('pwtestbatch@open.com', 'pw123');
    expect.soft(await homePage.isLogoutLinkExist()).toBeTruthy();
    expect.soft(await homePage.getHomePageTitle()).toBe('My Account');
});
```

##### **[loginpagefix.spec.ts](file:///C:/Users/shree/Box/2026_Playwright_Batch_Notes_Codes_G1/Playwright_Framework_Sessions_Code/tests/loginpagefix.spec.ts)**
```typescript
import { test, expect } from '../src/fixtures/pagefixtures';
import { CsvHelper } from '../src/utils/CsvHelper';

test.beforeEach(async ({ loginPage }) => {
    await loginPage.goToLoginPage();
});

test('login page title test', async ({ loginPage }) => {
    const pageTitle = await loginPage.getLoginPageTitle();
    console.log('login page title', pageTitle);
    expect(pageTitle).toBe('Account Login');
});

test('forgot pwd link exist test', async ({ loginPage }) => {
    expect(await loginPage.isForgotPwdLinkExist()).toBeTruthy();
});

test('user is able to login to app test', async ({ loginPage, homePage }) => {
    await loginPage.doLogin(process.env.USERNAME!, process.env.PASSWORD!);
    expect.soft(await homePage.isLogoutLinkExist()).toBeTruthy();
    expect.soft(await homePage.getHomePageTitle()).toBe('My Account');
});


//DD_1. sequence mode -- only 1 test is running with test data one by one using testData from fixture
test('login to app using wrong credentials with Data driven test', async ({ loginPage, testData }) => {
    for (let row of testData) {
        await loginPage.doLogin(row.username, row.password);
        expect(await loginPage.isInvalidLoginErrorDisplayed()).toBeTruthy();
    }
});


//DD_2: without fixtures, parallel mode. read csv data directly and loop the test method row wise...
let testData = CsvHelper.readCsv('src/data/loginData.csv');
for (let row of testData) {
    test(`invalid login test with - ${row.username} - ${row.password}`, async ({ loginPage }) => {
        await loginPage.doLogin(row.username, row.password);
        expect(await loginPage.isInvalidLoginErrorDisplayed()).toBeTruthy();
    });
};
```

---

### 🔍 Detailed Explanation

#### 🛠️ Config & Environment Parsing
* **Dotenv Configuration Loading (`dotenv.config(...)`)**: The framework delegates environment-specific key-value pairing extraction to the standard `dotenv` library.
  ```typescript
  const ENV = process.env.ENV || "qa";
  dotenv.config({ path: `config/.env.${ENV}` });
  ```
  This resolves variables dynamically at runtime based on the `ENV` prefix command line argument (e.g., `ENV=qa npx playwright test` will map configuration paths to resolve variables located in `config/.env.qa`).
* **BaseURL Mapping (`process.env.BASE_URL`)**: Instead of hardcoding domain endpoints in `playwright.config.ts`, the `baseURL` property is bound to the resolved environment variable `process.env.BASE_URL`. This allows executing identical test runs against different environment profiles (e.g., QA, Staging, Production) without changing source configuration parameters.

#### 🧳 CSV Data Reading & Sync Processing
* **CSV Parsing Utility (`CsvHelper.ts`)**: Leverages Node's standard File System (`fs`) library to load local CSV datasets synchronously into memory. It invokes the synchronous compiler `parse` from `csv-parse/sync`.
  * `columns: true`: Interprets the first record row as visual headers, outputting arrays of key-value maps matching column indexes (e.g., `row.username`, `row.password`).
  * `skip_empty_lines: true` & `trim: true`: Discards trailing blank space parameters and removes leading/trailing spaces from extracted string values.
* **Test Data Fixture Integration (`pagefixtures.ts`)**: Custom parameter `{ testData }` extended from `baseTest` intercepts test instantiation, executing the parser utility to read records from `src/data/loginData.csv` before calling `use(testData)` to feed the data directly to the executing block.

#### 🔄 Data-Driven Testing Patterns
1. **Serial Execution Loop (via custom Fixtures)**:
   * **Mechanism**: Runs inside a single test wrapper (`test('...', async ({ loginPage, testData }) => { ... })`). A JavaScript `for...of` loop executes inside the single browser tab instance.
   * **Execution**: Single browser context; iterates through every row sequentially. If any assertion fails in the middle of the iteration loop, the entire test immediately exits, and subsequent rows are skipped.
   * **Use Case**: Best suited for rapid sanity checks and linear testing pathways.
2. **Parallel Dynamic Test Generation (via Compile-Time CSV Loop)**:
   * **Mechanism**: Loops outside the `test` declaration block:
     ```typescript
     let testData = CsvHelper.readCsv('src/data/loginData.csv');
     for (let row of testData) {
         test(`invalid login test with - ${row.username}`, async ({ loginPage }) => { ... });
     }
     ```
   * **Execution**: Playwright parses this file during the initial compile-time execution scan, dynamically instantiating separate tests for each record in the CSV. Each test has a unique, descriptive title mapping column values.
   * **Parallel Allocation**: Since these are distinct, separate test declarations, Playwright runs them concurrently across multiple workers (subject to CPU cores and config restrictions), maximizing test throughput. A single row failure does not affect the execution of other records.

---

### 🏗️ Page Object Classes Analysis

##### **LoginPage.ts**
* **Locator Expansion (`loginErrorMessage`)**: Added private property locator wrapping standard query selector targeting alert banners: `.alert.alert-danger.alert-dismissible`.
* **Behavior Encapsulation (`isInvalidLoginErrorDisplayed`)**: Exposes a public action returning a Promise resolving visibility boolean of the error selector. Prevents spec sheets from asserting locators directly, maintaining POM separation rules.

---

### 🧪 Test Suite Analysis

##### **1. loginpage.spec.ts (Refactoring)**
* Moving object instantiations and initial login screen loading (`loginPage.goToLoginPage()`) inside a shared `beforeEach` hook decouples setup flows, eliminating duplicate declarations inside individual sanity tests.

##### **2. loginpagefix.spec.ts (Environment & Data-Driven verification)**
* **Secure Environment Variables**:
  `loginPage.doLogin(process.env.USERNAME!, process.env.PASSWORD!)` uses environment configurations rather than hardcoded credentials. The post-fix exclamation mark `!` informs the TypeScript compiler that the environment variables are guaranteed to be defined at execution runtime.
* **Fixture Serial DD vs Parallel compiler loops**:
  The spec provides direct examples of fixture-based loops (executing sequentially in one tab) versus static file parsing loops (allocating unique threads to run in parallel).

---

### 🧠 Framework Concepts Learned

1. **Environment Separation Principles**:
   Isolates target settings (URLs, API keys, credentials) into discrete environmental config files, enabling execution portability across staging zones.
2. **Dynamic Spec Construction (Dynamic Parameterization)**:
   Using compile-time loop generation in Playwright dynamically creates distinct test instances from external data sources, bypassing traditional loop-based execution blocks.
3. **W3C accessibility role exceptions**:
   Alert error cards do not typically follow standard accessible role patterns. Mapped them using target CSS selectors (`.alert-danger`) wrapped safely inside the Page Object model.

---

### 🔑 Key Learnings

* **Isolate Environment Data**: Never commit passwords or endpoints to source spec files. Standardize dotenv structures and read keys from `process.env`.
* **Choose Serial vs Parallel Data-Driven Testing wisely**: Use compile-time loops for isolated, parallel test runs; use fixture loop runs when tests share state or when context creation overhead is high.
* **Keep selectors encapsulated**: Error messages and validation states must remain private inside Page Objects, exposing only semantic visibility checks to spec layers.

---


## Session: 2026-06-04: Excel & JSON Data-Driven Testing & Product Search POM

### 🎯 Topic
The objectives of today's session were to extend the data-driven testing capabilities of the framework to support Microsoft Excel (`.xlsx`) spreadsheets using the `xlsx` library and JSON files using standard synchronous file reads. Additionally, the framework's Page Object Model was extended to support Product Search capabilities by updating the `HomePage` with search fields/actions, creating a dedicated `SearchResultsPage` page class, mapping it to custom fixtures, and implementing dynamic data-driven spec validations using CSV product datasets.

---

### 📂 Files Added

During this session, the following files were added to the framework:
1. **Data & Helper Utilities:**
   * `src/utils/ExcelHelper.ts` — Utility class wrapping the `xlsx` library to read `.xlsx` workbooks and parse sheets to JSON objects.
   * `src/utils/JsonHelper.ts` — Synchronous file reading utility parsing local `.json` datasets.
   * `src/data/OpenCartTestData.xlsx` — Excel-based test data containing datasets for invalid login test scenarios.
   * `src/data/logindata.json` — JSON-based test data containing username and password objects for invalid logins.
   * `src/data/product.csv` — CSV data file listing search keys, product names, and expected search results counts.
2. **Page Object Models:**
   * `src/pages/SearchResultsPage.ts` — Page Object class modeling OpenCart search result layouts, counting matches, and selecting product items.
3. **Spec Verification Suites:**
   * `tests/search.spec.ts` — Parameterized test suite validating product search visibility, results count, and product landing page assertions using CSV data.

---

### 📂 Files Modified

The following files were updated to implement the new data-driven and search features:
1. **Project Dependencies:**
   * `package.json` — Added dependency for `"xlsx": "^0.18.5"` to read Excel files.
2. **Page Object Models & Custom Fixtures:**
   * `src/pages/HomePage.ts` — Added locators and helper method (`doSearch`) for the search search-box input and search search-button.
   * `src/fixtures/pagefixtures.ts` — Integrated `searchResultsPage` fixture to automatically inject `SearchResultsPage` instances into test blocks.
3. **Spec Verification Suites:**
   * `tests/loginpagefix.spec.ts` — Integrated Excel and JSON-driven verification tests via compile-time loops.

---

### 💻 Code Snippets

#### 1. System Configuration & Tooling Files

##### **[package.json](file:///C:/Users/shree/Box/2026_Playwright_Batch_Notes_Codes_G1/Playwright_Framework_Sessions_Code/package.json)**
```json
{
// Command to install xlsx:
// npm install xlsx
  "name": "opencart_webframework_pw",
  "version": "1.0.0",
  "description": "This is the open cart web app framework using POM",
  "main": "index.js",
  "scripts": {
    "test": "npx playwright test",
    "test:headed": "npx playwright test --headed",
    "test:chrome": "npx playwright test --project=chromium",
    "allure:generate": "npx allure generate allure-results --clean -o allure-report",
    "allure:open": "npx allure open allure-report",
    "allure:report": "npm run allure:generate && npm run allure:open",
    "allure:clean": "rm -rf allure-results allure-report"
  },
  "keywords": [],
  "author": "Naveen Automation Labs",
  "license": "ISC",
  "type": "module",
  "devDependencies": {
    "@playwright/test": "^1.60.0",
    "@types/node": "^25.9.1",
    "allure-commandline": "^2.42.0",
    "allure-playwright": "^3.9.0"
  },
  "dependencies": {
    "csv-parse": "^6.2.1",
    "dotenv": "^17.4.2",
    "xlsx": "^0.18.5"
  }
}
```

---

#### 2. Data & Helper Utilities

##### **[ExcelHelper.ts](file:///C:/Users/shree/Box/2026_Playwright_Batch_Notes_Codes_G1/Playwright_Framework_Sessions_Code/src/utils/ExcelHelper.ts)**
```typescript
import XLSX from 'xlsx';

export class ExcelHelper {
    static readExcel(filePath: string, sheetName?: string): Record<string, string>[] {
        const workbook = XLSX.readFile(filePath);
        const sheet = workbook.Sheets[sheetName || workbook.SheetNames[0]];
        return XLSX.utils.sheet_to_json<Record<string, string>>(sheet, { defval: "" });
        //use defval to ignore the blank values in excel file. 
        // This will consider empty cell as blank string instead of undefined.
    }
}
```

##### **[JsonHelper.ts](file:///C:/Users/shree/Box/2026_Playwright_Batch_Notes_Codes_G1/Playwright_Framework_Sessions_Code/src/utils/JsonHelper.ts)**
```typescript
import fs from 'fs';

export class JsonHelper {
    static readJson(filePath: string): Record<string, string>[] {
        return JSON.parse(fs.readFileSync(filePath, "utf-8"));
    }
}
```

##### **[product.csv](file:///C:/Users/shree/Box/2026_Playwright_Batch_Notes_Codes_G1/Playwright_Framework_Sessions_Code/src/data/product.csv)**
```csv
searchkey,productname,resultcount
macbook,MacBook Pro, 3
macbook, MacBook Air, 3
imac, iMac, 1
airtel, null, 0
```

##### **[logindata.json](file:///C:/Users/shree/Box/2026_Playwright_Batch_Notes_Codes_G1/Playwright_Framework_Sessions_Code/src/data/logindata.json)**
```json
[
    {
        "username": "wrong@open.com",
        "password": "wrong@123"
    },
    {
        "username": "invalid@open.com",
        "password": " "
    },
    {
        "username": "pwbatchtest@open.com",
        "password": "wrong@123"
    }
]
```

---

#### 3. Custom Fixtures Layer

##### **[pagefixtures.ts](file:///C:/Users/shree/Box/2026_Playwright_Batch_Notes_Codes_G1/Playwright_Framework_Sessions_Code/src/fixtures/pagefixtures.ts)**
```typescript
import { test as baseTest } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { LoginPage } from '../pages/LoginPage';
import { CsvHelper } from '../utils/CsvHelper';
import { SearchResultsPage } from '../pages/SearchResultsPage';


//define types for page fixtures:
type pageFixtures = {
    loginPage: LoginPage,
    homePage: HomePage,
    searchResultsPage: SearchResultsPage,
    testData: Record<string, string>[]
};

//extend playwright base test:
export let test = baseTest.extend<pageFixtures>({

    loginPage: async ({ page }, use) => {
        let loginPage = new LoginPage(page);
        await use(loginPage);
    },

    homePage: async ({ page }, use) => {
        let homePage = new HomePage(page);
        await use(homePage);
    },

    searchResultsPage: async ({ page }, use) => {
        let searchResultsPage = new SearchResultsPage(page);
        await use(searchResultsPage);
    },

    testData: async ({ }, use) => {
        let testData = CsvHelper.readCsv('src/data/loginData.csv');
        await use(testData);
    }

});

export { expect } from '@playwright/test';
```

---

#### 4. Page Object Model Classes

##### **[HomePage.ts](file:///C:/Users/shree/Box/2026_Playwright_Batch_Notes_Codes_G1/Playwright_Framework_Sessions_Code/src/pages/HomePage.ts)**
```typescript
import { Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage";

export class HomePage extends BasePage {

    //private Locators: 
    private readonly logoutLink: Locator;
    private readonly headers: Locator;
    private readonly search: Locator;
    private readonly searchIcon: Locator;


    //const... of the class: init the locators
    constructor(page: Page) {
        super(page);
        this.logoutLink = page.getByRole('link', { name: 'Logout' });
        this.headers = page.getByRole('heading', { level: 2 });
        this.search = page.getByRole('textbox', { name: 'Search' });
        this.searchIcon = page.locator('div#search button');
    };

    //public page actions(methods)/behaviour
    async getHomePageTitle(): Promise<string> {
        return await this.page.title();
    }

    async isLogoutLinkExist(): Promise<boolean> {
        return await this.logoutLink.isVisible();
    }

    async getHomePageHeaders(): Promise<string[]> {
        return await this.headers.allInnerTexts();
    }

    async doSearch(searchkey: string): Promise<void> {
        console.log(`search key: ${searchkey}`);
        await this.search.fill(searchkey);
        await this.searchIcon.click();
    }

}
```

##### **[SearchResultsPage.ts](file:///C:/Users/shree/Box/2026_Playwright_Batch_Notes_Codes_G1/Playwright_Framework_Sessions_Code/src/pages/SearchResultsPage.ts)**
```typescript
import { Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage";


export class SearchResultsPage extends BasePage {

    //private Locators: 
    private readonly searchResults: Locator;


    //const... of the class: init the locators
    constructor(page: Page) {
        super(page);
        this.searchResults = page.locator('div.product-layout');
    };

    //actions:
    async getProductSearchResultsCount(): Promise<number> {
        return await this.searchResults.count();
    }

    async selectProduct(productName: string): Promise<void> {
        await this.page.getByRole('link', { name: productName, exact: true }).first().click();
    }

}
```

---

#### 5. Spec Suites

##### **[loginpagefix.spec.ts](file:///C:/Users/shree/Box/2026_Playwright_Batch_Notes_Codes_G1/Playwright_Framework_Sessions_Code/tests/loginpagefix.spec.ts)**
```typescript
import { test, expect } from '../src/fixtures/pagefixtures';
import { CsvHelper } from '../src/utils/CsvHelper';
import { ExcelHelper } from '../src/utils/ExcelHelper';
import { JsonHelper } from '../src/utils/JsonHelper';

test.beforeEach(async ({ loginPage }) => {
    await loginPage.goToLoginPage();
});

test('login page title test', async ({ loginPage }) => {
    const pageTitle = await loginPage.getLoginPageTitle();
    console.log('login page title', pageTitle);
    expect(pageTitle).toBe('Account Login');
});

test('forgot pwd link exist test', async ({ loginPage }) => {
    expect(await loginPage.isForgotPwdLinkExist()).toBeTruthy();
});

test('user is able to login to app test', async ({ loginPage, homePage }) => {
    await loginPage.doLogin(process.env.USERNAME!, process.env.PASSWORD!);
    expect.soft(await homePage.isLogoutLinkExist()).toBeTruthy();
    expect.soft(await homePage.getHomePageTitle()).toBe('My Account');
});


//DD_1. sequence mode -- only 1 test is running with test data one by one using testData from fixture
test('login to app using wrong credentials with Data driven test', async ({ loginPage, testData }) => {
    for (let row of testData) {
        await loginPage.doLogin(row.username, row.password);
        expect(await loginPage.isInvalidLoginErrorDisplayed()).toBeTruthy();
    }
});


//DD_2: without fixtures, parallel mode. read csv data directly and loop the test method row wise...
let testData = CsvHelper.readCsv('src/data/loginData.csv');
for (let row of testData) {
    test(`invalid login test with - ${row.username} - ${row.password}`, async ({ loginPage }) => {
        await loginPage.doLogin(row.username, row.password);
        expect(await loginPage.isInvalidLoginErrorDisplayed()).toBeTruthy();
    });
};


//MS excel - office latest
//xlsx format
//maintenance
let loginTestData = ExcelHelper.readExcel('src/data/OpenCartTestData.xlsx', 'login');
for (let row of loginTestData) {
    test(`invalid login test with excel data - ${row.username}`, async ({ loginPage }) => {
        await loginPage.doLogin(row.username, row.password);
        expect(await loginPage.isInvalidLoginErrorDisplayed()).toBeTruthy();
    });
};



let loginJSONData = JsonHelper.readJson("src/data/logindata.json");
for (let row of loginJSONData) {
    test(`invalid login test with JSON data - ${row.username}`, async ({ loginPage }) => {
        await loginPage.doLogin(row.username, row.password);
        expect(await loginPage.isInvalidLoginErrorDisplayed()).toBeTruthy();
    });
};

//csv vs excel vs json
```

##### **[search.spec.ts](file:///C:/Users/shree/Box/2026_Playwright_Batch_Notes_Codes_G1/Playwright_Framework_Sessions_Code/tests/search.spec.ts)**
```typescript
import { test, expect } from '../src/fixtures/pagefixtures';
import { CsvHelper } from '../src/utils/CsvHelper';


test.beforeEach(async ({ loginPage }) => {
    await loginPage.goToLoginPage();
    await loginPage.doLogin(process.env.USERNAME!, process.env.PASSWORD!);
});


//Data Provider
const productData = CsvHelper.readCsv('src/data/product.csv');
for (const row of productData) {
    test(`verify search results count - ${row.searchkey} - ${row.productname}`, async ({ homePage, searchResultsPage }) => {
        await homePage.doSearch(row.searchkey);
        expect(await searchResultsPage.getProductSearchResultsCount()).toBe(Number(row.resultcount));
    });

};

for (const row of productData) {
    test(`verify user is able to land on the product page - ${row.searchkey} - ${row.productname}`, async ({ homePage, searchResultsPage, page }) => {
        await homePage.doSearch(row.searchkey);
        await searchResultsPage.selectProduct(row.productname);
        expect(await page.title()).toBe(row.productname);
    });
};
```

---

### 🔍 Detailed Explanation

#### 🛠️ Excel Reading & Parsing (`ExcelHelper.ts`)
* **XLSX Workbook Processing**: Leverages the `xlsx` library to read target files.
  ```typescript
  const workbook = XLSX.readFile(filePath);
  ```
  `readFile` parses the Excel zip binary stream synchronously into an in-memory Workbook Object containing sheet data and structural metadata.
* **Sheet Mapping & Extraction**:
  ```typescript
  const sheet = workbook.Sheets[sheetName || workbook.SheetNames[0]];
  ```
  Retrieves the worksheet using the specified name. If none is passed, it defaults to the first sheet in the workbook (`workbook.SheetNames[0]`).
* **JSON Conversion Configuration**:
  ```typescript
  XLSX.utils.sheet_to_json<Record<string, string>>(sheet, { defval: "" })
  ```
  Converts the worksheet matrix to an array of objects where columns map to key-value pairs.
  * **`defval: ""`**: By default, `sheet_to_json` completely skips empty cells, which returns `undefined` values in the output array. Passing `{ defval: "" }` maps empty cells to blank strings `""`, preventing runtime errors when accessing properties during test assertions.

#### 📄 JSON Parsing (`JsonHelper.ts`)
* Uses standard NodeJS File System module (`fs`) to read files synchronously in UTF-8 format:
  ```typescript
  JSON.parse(fs.readFileSync(filePath, "utf-8"))
  ```
  This parses the plain JSON array string directly into a usable array of objects. It offers a lightweight alternative to external libraries like `csv-parse` or `xlsx` when test datasets are natively formatted as JSON.

#### 🧩 Sub-POM Page Extension (`SearchResultsPage.ts`)
* Encapsulates the UI behaviors of search landing pages:
  * `searchResults = page.locator('div.product-layout')` targets the grids representing products.
  * `getProductSearchResultsCount()` evaluates the size of matching card items (`locator.count()`).
  * `selectProduct(productName)` locates a link by its exact name within the search grid:
    ```typescript
    this.page.getByRole('link', { name: productName, exact: true }).first().click();
    ```
    * `exact: true`: Restricts matches to the exact string (e.g., matching "MacBook Air" but not "MacBook Air Stand"), ensuring robust navigation checks.
    * `.first()`: Selects the first visual match, preventing multiple locator resolution errors.

#### 🔄 Dynamic Spec Loops (Excel, JSON & CSV Data Providers)
* Declaring external helper reads outside the test blocks (at compile time) allows Playwright to dynamically compile distinct tests for each dataset row.
  ```typescript
  let loginTestData = ExcelHelper.readExcel('src/data/OpenCartTestData.xlsx', 'login');
  for (let row of loginTestData) {
      test(`invalid login test - ${row.username}`, async ({ loginPage }) => { ... });
  }
  ```
  * Playwright registers distinct tests with customized names.
  * These tests are fully independent, run concurrently on different worker threads, and do not fail the remaining dataset iterations if a single record fails.

---

### 🏗️ Page Object Classes Analysis

##### **HomePage.ts**
* **Encapsulation**: Added private locator properties:
  * `this.search = page.getByRole('textbox', { name: 'Search' });` (targets the top navbar search box).
  * `this.searchIcon = page.locator('div#search button');` (targets the lookup glass button).
* **Methods**:
  * `doSearch(searchkey)`: Fills the text box and triggers the click. This returns a promise, executing actions sequentially.

##### **SearchResultsPage.ts**
* Extends `BasePage` and inherits the standard browser tab context via `super(page)`.
* Elements are kept private to force validation behaviors to run through public action methods like `getProductSearchResultsCount()`.

---

### 🧪 Test Suite Analysis

##### **1. search.spec.ts (Search Validation)**
* **Hooks Setup**:
  The `beforeEach` hook runs standard setup scripts—navigating to the login page and performing login using environment variables (`process.env.USERNAME`, `process.env.PASSWORD`).
* **Test Parameterization Loops**:
  * The first loop reads `product.csv` and tests `doSearch(row.searchkey)` to verify that the product count in `SearchResultsPage` matches the expected CSV count.
  * The second loop drills down by clicking the item link and asserting that `page.title()` matches the product name, confirming successful page transitions.
  * Since these run outside the test blocks, they generate separate, parallelizable execution units.

##### **2. loginpagefix.spec.ts (Excel & JSON Multi-Format Testing)**
* Showcases how a single spec file can consume multiple data helper engines (`CsvHelper`, `ExcelHelper`, `JsonHelper`) to evaluate login credentials without changing the underlying page action wrapper (`loginPage.doLogin`).

---

### 🧠 Framework Concepts Learned

1. **Defval Mapping in Excel Utility**:
   Using `{ defval: "" }` handles empty cells in `.xlsx` files gracefully by substituting empty strings, eliminating `NaN`/`undefined` errors during test data execution.
2. **Exact Selector Resolution**:
   Passing `{ exact: true }` inside `getByRole` helps avoid locator ambiguity, especially on e-commerce sites where search lists share names with product features.
3. **Multi-Source Data Driving**:
   Standardizing Excel, CSV, and JSON parsing helpers into a unified `src/utils` library makes the framework highly adaptable to various project data-storage policies.

---

### 🔑 Key Learnings

* **Empty Cell Safeguards**: Always configure XLSX utility mapping with empty string defaults (`defval: ""`) to ensure clean typescript compilation.
* **Exact String Matching**: Use `exact: true` options when targeting specific product links to prevent locator conflicts when multiple sub-elements share partial text.
* **Compile-Time Iterations**: Loop test blocks externally to leverage parallel execution channels; run loops inside a single test block only when validating linear, state-dependent sequences.

---

## Session: 2026-06-08: BasePage Common Locators & Product Info Page POM

### 🎯 Topic
The main objectives of today's session were to refactor the base Page Object Model (`BasePage`) to manage shared, global web elements (e.g., logo, search bar, header/footer components) and core helper actions, introduce a dedicated page object model (`ProductInfoPage`) for verifying product detailed parameters using a dynamic key-value `Map`, integrate these new classes into the Playwright custom page fixtures layer, and write specs validating product details.

---

### 📂 Files Added

During this session, the following new files were added to the framework:

1. **Page Object Models (src/pages/):**
   * `ProductInfoPage.ts` — Implements element selectors and actions for product details pages.
2. **Fixture-driven Test Suites (tests/):**
   * `tests/productpage.spec.ts` — Contains automated specifications validating logo presence, footer link counts, product image counts, and metadata key-value properties.

---

### 📂 Files Modified

The following files were updated to incorporate the new capabilities:

1. **Page Object Models (src/pages/):**
   * `src/pages/BasePage.ts` — Expanded to encapsulate global locators (logo, search box, search icon, currency selector, cart button, footer links) and generic utility methods.
   * `src/pages/HomePage.ts` — Refactored to inherit and reuse the parent `BasePage` search locators instead of defining its own search parameters.
2. **Page Fixtures Layer:**
   * `src/fixtures/pagefixtures.ts` — Updated to register both the `basePage` and `productInfoPage` instances into the custom Playwright test extension.

---

### 💻 Code Snippets

#### 1. Page Object Model Classes

##### **[BasePage.ts](file:///C:/Users/shree/Box/2026_Playwright_Batch_Notes_Codes_G1/Playwright_Framework_Sessions_Code/src/pages/BasePage.ts)**
```typescript
import { Locator, Page } from "@playwright/test";

export class BasePage {

    protected readonly page: Page;

    //common locators across all pages:
    protected readonly logo: Locator;
    protected readonly searchBox: Locator;
    protected readonly searchIcon: Locator;
    protected readonly footerLinks: Locator;
    protected readonly currency: Locator;
    protected readonly cartButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.logo = page.getByAltText('naveenopencart');
        this.searchBox = page.getByPlaceholder('Search');
        this.searchIcon = page.locator('div#search button');
        this.currency = page.locator('#form-currency');
        this.footerLinks = page.locator('footer a');
        this.cartButton = page.locator('div#cart button');
    }

    //common locators/functionalities/actions
    async isLogoVisible(): Promise<boolean> {
        return this.logo.isVisible();
    }

    async isSearchBoxVisible(): Promise<boolean> {
        return await this.searchBox.isVisible();
    }

    async isCurrencyBoxVisible(): Promise<boolean> {
        return await this.currency.isVisible();
    }

    async isCartButtonVisible(): Promise<boolean> {
        return await this.cartButton.isVisible();
    }

    async getPageFootersCount(): Promise<number> {
        return await this.footerLinks.count();
    }

    async getPageFooters(): Promise<string[]> {
        return await this.footerLinks.allInnerTexts();
    }

    //page level generic methods:
    async getPageTitle(): Promise<string> {
        return await this.page.title();
    }

    getCurrentTitle(): string {
        return this.page.url();
    }

    async waitForPageLoad() {
        await this.page.waitForLoadState('load');
    }

    async takeScreenshot(name: string) {
        return await this.page.screenshot({
            fullPage: true,
            path: `reports/screenshot/${name}.png`
        });
    }


}
```

##### **[HomePage.ts](file:///C:/Users/shree/Box/2026_Playwright_Batch_Notes_Codes_G1/Playwright_Framework_Sessions_Code/src/pages/HomePage.ts)**
```typescript
import { Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage";

export class HomePage extends BasePage {

    //private Locators: 
    private readonly logoutLink: Locator;
    private readonly headers: Locator;

    //const... of the class: init the locators
    constructor(page: Page) {
        super(page);
        this.logoutLink = page.getByRole('link', { name: 'Logout' });
        this.headers = page.getByRole('heading', { level: 2 });
    };

    //public page actions(methods)/behaviour

    async isLogoutLinkExist(): Promise<boolean> {
        return await this.logoutLink.isVisible();
    }

    async getHomePageHeaders(): Promise<string[]> {
        return await this.headers.allInnerTexts();
    }

    async doSearch(searchkey: string): Promise<void> {
        console.log(`search key: ${searchkey}`);
        await this.searchBox.fill(searchkey);
        await this.searchIcon.click();
    }

}
```

##### **[ProductInfoPage.ts](file:///C:/Users/shree/Box/2026_Playwright_Batch_Notes_Codes_G1/Playwright_Framework_Sessions_Code/src/pages/ProductInfoPage.ts)**
```typescript
import { Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage";


export class ProductInfoPage extends BasePage {

    //private Locators: 
    private readonly header: Locator;
    private readonly productImages: Locator;
    private readonly productMetaData: Locator;
    private readonly productPricing: Locator;
    private map: Map<string, string | number>;

    //const... of the class: init the locators
    constructor(page: Page) {
        super(page);
        this.header = page.getByRole('heading', { level: 1 });
        this.productImages = page.locator('div#content li img');
        this.productMetaData = page.locator('div#content ul.list-unstyled:nth-of-type(1) li');
        this.productPricing = page.locator('div#content ul.list-unstyled:nth-of-type(2) li');
        this.map = new Map<string, string | number>();
    };

    //actions:
    async getProductHeader(): Promise<string> {
        return await this.header.innerText();
    }

    async getProductImagesCount(): Promise<number> {
        await this.productImages.first().waitFor({ state: 'visible' });
        return await this.productImages.count();
    }

    /**
     * 
     * @returns this method is returning the actual product data: header, images, metadata, pricing data
     */
    async getProductInfo(): Promise<Map<string, string | number>> {
        this.map.set('ProductHeader', await this.getProductHeader());
        this.map.set('ProductImages', await this.getProductImagesCount());
        await this.getProductMetaData();
        await this.getProductPricingData();
        return this.map;
    }

    // Brand: Apple
    // Product Code: Product 18
    // Reward Points: 800
    // Availability: Out Of Stock
    private async getProductMetaData(): Promise<void> {
        let metData = await this.productMetaData.allInnerTexts();
        for (let data of metData) {
            let meta = data.split(':');
            let metaKey = meta[0].trim();
            let metaVal = meta[1].trim();
            this.map.set(metaKey, metaVal);
        }
    }

    // $2,000.00
    // Ex Tax: $2,000.00
    private async getProductPricingData(): Promise<void> {
        let priceData = await this.productPricing.allInnerTexts();
        let productPrice = priceData[0].trim();
        let exTaxPrice = priceData[1].split(':')[1].trim();
        this.map.set('ProductPrice', productPrice);
        this.map.set('ExTaxPrice', exTaxPrice);
    }



}
```

#### 2. Custom Fixtures Layer

##### **[pagefixtures.ts](file:///C:/Users/shree/Box/2026_Playwright_Batch_Notes_Codes_G1/Playwright_Framework_Sessions_Code/src/fixtures/pagefixtures.ts)**
```typescript
import { test as baseTest } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { LoginPage } from '../pages/LoginPage';
import { CsvHelper } from '../utils/CsvHelper';
import { SearchResultsPage } from '../pages/SearchResultsPage';
import { ProductInfoPage } from '../pages/ProductInfoPage';
import { BasePage } from '../pages/BasePage';


//define types for page fixtures:
type pageFixtures = {
    basePage: BasePage,
    loginPage: LoginPage,
    homePage: HomePage,
    searchResultsPage: SearchResultsPage,
    productInfoPage: ProductInfoPage,
    testData: Record<string, string>[]
};

//extend playwright base test:
export let test = baseTest.extend<pageFixtures>({
    basePage: async ({ page }, use) => {
        let basePage = new BasePage(page);
        await use(basePage);
    },

    loginPage: async ({ page }, use) => {
        let loginPage = new LoginPage(page);
        await use(loginPage);
    },

    homePage: async ({ page }, use) => {
        let homePage = new HomePage(page);
        await use(homePage);
    },

    searchResultsPage: async ({ page }, use) => {
        let searchResultsPage = new SearchResultsPage(page);
        await use(searchResultsPage);
    },

    productInfoPage: async ({ page }, use) => {
        let productInfoPage = new ProductInfoPage(page);
        await use(productInfoPage);
    },

    testData: async ({ }, use) => {
        let testData = CsvHelper.readCsv('src/data/loginData.csv');
        await use(testData);
    }

});

export { expect } from '@playwright/test';
```

#### 3. Test Suites

##### **[productpage.spec.ts](file:///C:/Users/shree/Box/2026_Playwright_Batch_Notes_Codes_G1/Playwright_Framework_Sessions_Code/tests/productpage.spec.ts)**
```typescript
import { test, expect } from '../src/fixtures/pagefixtures';


test.beforeEach(async ({ loginPage }) => {
    await loginPage.goToLoginPage();
    await loginPage.doLogin(process.env.USERNAME!, process.env.PASSWORD!);
});


test('comp logo exists on product page', async ({ basePage }) => {
    expect(await basePage.isLogoVisible()).toBeTruthy();
});

test('footers exist on product page', async ({ basePage }) => {
    expect(await basePage.getPageFootersCount()).toBe(16);
});

test('verify product images count', async ({ homePage, searchResultsPage, productInfoPage }) => {
    await homePage.doSearch('macbook');
    await searchResultsPage.selectProduct('MacBook Pro');
    let imgCount = await productInfoPage.getProductImagesCount();
    console.log('total images: ', imgCount);
    expect(imgCount).toBe(4);
    //act vs exp
});


test('verify product Information/Data', async ({ homePage, searchResultsPage, productInfoPage }) => {
    await homePage.doSearch('macbook');
    await searchResultsPage.selectProduct('MacBook Pro');
    let actualProductInfoMap = await productInfoPage.getProductInfo();
    console.log('Actual Product Details: ', actualProductInfoMap);
    expect.soft(actualProductInfoMap.get('ProductHeader')).toBe('MacBook Pro');
    expect.soft(actualProductInfoMap.get('Brand')).toBe('Apple');
    expect.soft(actualProductInfoMap.get('Product Code')).toBe('Product 18');
    expect.soft(actualProductInfoMap.get('Reward Points')).toBe('800');
    expect.soft(actualProductInfoMap.get('ProductPrice')).toBe('$2,000.00');
    expect.soft(actualProductInfoMap.get('ExTaxPrice')).toBe('$2,000.00');
});
```

---

### 🔍 Detailed Explanation

#### 🛠️ Config & Core Pages Refactoring

##### **1. BasePage.ts**
* **Shared Element Selectors**: Global, page-spanning elements are consolidated in the parent class to avoid repeating code across child pages:
  * `logo`: Located using W3C accessible alt text `page.getByAltText('naveenopencart')`.
  * `searchBox`: Located using placeholder text `page.getByPlaceholder('Search')`.
  * `searchIcon`: Located using a CSS selector `page.locator('div#search button')`.
  * `currency`: Located using ID selector `page.locator('#form-currency')`.
  * `footerLinks`: Located using footer tag nested anchor CSS `page.locator('footer a')`.
  * `cartButton`: Located using CSS selector `page.locator('div#cart button')`.
* **Shared Action Wrappers**: Exposes public boolean assertions (e.g. `isLogoVisible()`, `isSearchBoxVisible()`) and list size counts (`getPageFootersCount()`).
* **Utility Lifecycles**:
  * `waitForPageLoad()`: Uses `page.waitForLoadState('load')` to force the runner thread to wait for all resources (images, style sheets) to load completely.
  * `takeScreenshot(name)`: Takes a full-page capture and stores it dynamically inside `reports/screenshot/${name}.png` during debugs or runs.

##### **2. HomePage.ts**
* **Inheritance Clean-Up**: Removed local declarations of `search` text boxes and search glass icons. It directly references parent properties `this.searchBox` and `this.searchIcon`, adhering to OOP DRY (Don't Repeat Yourself) design concepts.

#### 🏗️ Dynamic Product Data Collection (`ProductInfoPage.ts`)
* **Scraping Product Information**: Captures elements from a product detail page:
  * `productMetaData`: Targets list-unstyled blocks using CSS nth-of-type selectors `div#content ul.list-unstyled:nth-of-type(1) li`.
  * `productPricing`: Targets list-unstyled blocks using `div#content ul.list-unstyled:nth-of-type(2) li`.
* **TypeScript Maps**:
  Exposes `getProductInfo()` returning `Promise<Map<string, string | number>>`. It collects the product header and image count, and dynamically processes other properties into the map:
  * **Metadata Parser (`getProductMetaData()`)**:
    * Iterates through all metadata lines (e.g., `Brand: Apple`), splits them by colon (`:`), trims whitespace on keys and values, and registers them in the `Map`.
  * **Pricing Parser (`getProductPricingData()`)**:
    * Parses pricing arrays: index `0` represents the primary price (e.g. `$2,000.00`), and index `1` represents tax value (extracted by splitting the string `Ex Tax: $2,000.00` by colon).

#### 🧳 Page Fixtures Integration (`pagefixtures.ts`)
* Implemented `basePage` and `productInfoPage` fixture initializers.
* Playwright handles the dependency lifecycle automatically. If a test requests `{ productInfoPage }`, Playwright instantiates a tab page context, compiles `ProductInfoPage`, executes tests, and closes browser scopes.

---

### 🏗️ Page Object Classes Analysis

##### **ProductInfoPage.ts & BasePage.ts**
* **Access Modifiers**: Locators are marked as `private` inside `ProductInfoPage` and `protected` inside `BasePage`. This prevents tests from bypassing POM layers to query the DOM directly.
* **Semantic Accessibility Selectors**: Utilizes `getByRole` for headings (`getByRole('heading', { level: 1 })`) to ensure stable locators.
* **State Synchronization**: Uses `.first().waitFor({ state: 'visible' })` inside `getProductImagesCount()` to block execution until the first image element appears on screen, preventing race conditions or timing failures.

---

### 🧪 Test Suite Analysis

##### **productpage.spec.ts**
* **Encapsulated Setup Hook (`beforeEach`)**:
  Performs login using standard page objects (`loginPage.goToLoginPage()` and `loginPage.doLogin()`), reading secure credentials directly from environment configs (`process.env.USERNAME`, `process.env.PASSWORD`).
* **Fixture Dependency Injection**:
  Individual test cases request specific POM targets (e.g. `async ({ basePage }) => { ... }` or `async ({ homePage, searchResultsPage, productInfoPage }) => { ... }`).
* **Soft Assertions**:
  Uses `expect.soft(...)` inside product info verification tests. If a metadata field like `Reward Points` fails, Playwright logs the mismatch but proceeds to verify `ProductPrice` and `ExTaxPrice`, reporting all details upon completion.

---

### 🧠 Framework Concepts Learned

1. **Object-Oriented Inheritance & Polymorphism**:
   Extending `BasePage` propagates common selectors (headers, footers) to subclasses like `LoginPage`, `HomePage`, and `ProductInfoPage`. This reduces code duplication.
2. **TypeScript Map Collection**:
   Using `Map<string, string | number>` allows storing dynamic, non-standardized properties without creating rigid, hardcoded class fields.
3. **Implicit Asynchronous Wait Synchronization**:
   Combining `waitFor({ state: 'visible' })` with standard click/fill triggers ensures tests execute only when elements are interactive, eliminating manual sleep delays.

* **Consolidate Common Elements**: Move header, footer, search, and navigation components to `BasePage` to avoid duplicate code.
* **Use Soft Assertions for Data Sets**: Always leverage `expect.soft` when verifying multiple data fields on a page so that one small mismatch does not block the verification of other fields.
* **Leverage Maps for Unstructured Data**: Scraped lists or variable key-value layouts are best handled using TypeScript `Map` objects rather than predefined class fields, keeping the classes clean.

---

## Session: 2026-06-11: Playwright API Testing & GoRest REST API Integration

### 🎯 Topic
The objective of today's session was to introduce backend API testing capabilities directly within the Playwright framework. This involved leveraging Playwright's built-in `APIRequestContext` via the `{ request }` fixture to execute RESTful operations (GET, POST, PUT, DELETE) against the public GoRest database service, implementing bearer token header authentication, validating response telemetry (JSON schema data structures, status codes), and handling payload serialization/deserialization.

---

### 📂 Files Added

During this session, the following new directory and test suite were added:

1. **API Test Suites (tests/api/):**
   * `tests/api/users.api.spec.ts` — Houses spec definitions executing GET, POST, PUT, and DELETE HTTP validations on GoRest users endpoint.

---

### 📂 Files Modified

No page objects or framework core modules were modified during this session.

---

### 💻 Code Snippets

#### 1. API Test Suites

##### **[users.api.spec.ts](file:///C:/Users/shree/Box/2026_Playwright_Batch_Notes_Codes_G1/Playwright_Framework_Sessions_Code/tests/api/users.api.spec.ts)**
```typescript
import { test, expect } from '@playwright/test';

let AUTH_TOKEN = { Authorization: 'Bearer d0bf1714ac04c10dd2982e009d2dffe694a8e0b53af518cb7370e41e046a72f6' };


test('get user test', async ({ request }) => {

    let response = await request.get('https://gorest.co.in/public/v2/users', {
        headers: AUTH_TOKEN
    });

    //console.log(response);
    let jsonBody = await response.json();
    console.log(jsonBody);

    console.log(response.status());
    console.log(response.statusText());

    expect(response.status()).toBe(200);

});


test('create a user test', async ({ request }) => {

    //JS Object
    let userData = {
        name: 'uday',
        email: `automation_${Date.now()}@open.com`,
        gender: 'male',
        status: 'active'
    };

    //JS Object to JSON: Serialization
    let response = await request.post('https://gorest.co.in/public/v2/users', {
        headers: AUTH_TOKEN,
        data: userData
    });

    //console.log(response);
    let jsonBody = await response.json();
    console.log(jsonBody);

    console.log(response.status());//201
    console.log(response.statusText()); //Created
});


test('Update a user test', async ({ request }) => {

    //JS Object
    let userData = {
        name: 'uday101',
        email: `automation_${Date.now()}@open.com`,
        gender: 'male',
        status: 'inactive'
    };

    //JS Object to JSON: Serialization
    let response = await request.put('https://gorest.co.in/public/v2/users/8501947', {
        headers: AUTH_TOKEN,
        data: userData
    });

    //console.log(response);
    let jsonBody = await response.json();
    console.log(jsonBody);

    console.log(response.status());//200
    console.log(response.statusText()); //OK
});


test('Delete a user test', async ({ request }) => {


    //JS Object to JSON: Serialization
    let response = await request.delete('https://gorest.co.in/public/v2/users/8501947', {
        headers: AUTH_TOKEN,
    });

    console.log(response.status());//204
    console.log(response.statusText()); //No Content
});
```

---

### 🔍 Detailed Explanation

#### 🛠️ Playwright API Client Engine

##### **1. APIRequestContext & Request Fixture**
* Playwright tests can request the built-in `{ request }` fixture. This fixture initializes a pre-configured `APIRequestContext` that is separate from a browser context.
* It communicates directly with endpoints using Node's native HTTP/HTTPS networking, making executions extremely fast (requiring no browser launch, HTML parsing, or rendering).

##### **2. Authentication Configuration**
* Declares a bearer token header `AUTH_TOKEN = { Authorization: 'Bearer ...' }` representing the GoRest API developer key. This token is passed in the options of each HTTP request block to authorize state-changing transactions.

##### **3. HTTP GET: Fetching Users**
* Executes `request.get('https://gorest.co.in/public/v2/users', { headers: AUTH_TOKEN })` to fetch a list of users.
* Deserializes response body using `await response.json()`, printing the list array to stdout.
* Asserts response status using `expect(response.status()).toBe(200)` to verify request success.

##### **4. HTTP POST: User Creation & Serialization**
* **Payload Preparation**: Defines a standard JavaScript Object `userData` representing the model of the new user.
* **Payload Serialization**:
  * Playwright automatically serializes JS objects passed under the `data:` parameter into standard JSON strings and updates the request `Content-Type` header to `application/json`.
* **Dynamic Emails**:
  * Formats the email address dynamically using ``automation_${Date.now()}@open.com``. Since the email field in GoRest must be unique, this prevents duplicate key errors when re-running test suites.
* Asserts `response.status()` matches the standard REST creation status `201`.

##### **5. HTTP PUT: User Updates**
* Targets a specific record ID via URL parameter path: `https://gorest.co.in/public/v2/users/8501947`.
* Updates fields (e.g. name to `uday101` and status to `inactive`).
* Asserts `response.status()` matches success code `200`.

##### **6. HTTP DELETE: User Deletion**
* Issues a DELETE request targeting `https://gorest.co.in/public/v2/users/8501947` using header authorization credentials.
* Asserts `response.status()` matches standard `204` (No Content), representing a successful deletion transaction with an empty response body.

---

### 🏗️ Page Object Classes Analysis

##### **Direct REST API Execution**
* Unlike web-based user interface tests, these API tests interact directly with backend services. They bypass the Page Object Model (POM) layer completely, calling the HTTP request engine directly. There are no locators or constructor bindings.

---

### 🧪 Test Suite Analysis

##### **users.api.spec.ts**
* **Request Lifecycle**:
  API requests run sequentially in isolated, stateless network sessions.
* **Status Telemetry Verification**:
  * Verifies both `.status()` (returns integer status code like `200`) and `.statusText()` (returns status text string like `OK` or `Created` or `No Content`).
* **Debugging Options**:
  * Outputs logs (e.g. `console.log(jsonBody)`) to display formatted JSON structures in the terminal or report dashboard.

---

### 🧠 Framework Concepts Learned

1. **BrowserContext vs APIRequestContext**:
   * `BrowserContext`: Manages browser tabs, cookies, DOM rendering, scripts, and user interface actions.
   * `APIRequestContext`: A lightweight HTTP client that executes direct web calls. Ideal for setting up state before UI tests, checking database changes, or testing APIs directly.
2. **REST API Method Semantics**:
   * `GET`: Retrieve representations of resources (expects `200`).
   * `POST`: Create new resources (expects `201`).
   * `PUT`: Replace or update existing resources (expects `200`).
   * `DELETE`: Remove target resources (expects `204`).
3. **Automated JSON Serialization**:
   Passing JS objects under the `data` option handles Content-Type configuration and string compilation automatically.

* **Avoid Duplicate Field Violations**: Always suffix unique database constraints (like user emails or nicknames) with dynamic stamps (`Date.now()`) to ensure tests remain repeatable.
* **Inspect Status Text**: Log response parameters like status text (`response.statusText()`) to simplify debugging when server errors (e.g., `422 Unprocessable Entity`) occur.
* **Perform Lightweight API Sanity Checks**: Running API verification alongside UI scripts provides comprehensive, full-stack test coverage.

---

## Session: 2026-06-15: Reusable ApiHelper Utility & E2E API CRUD Test Workflows

### 🎯 Topic
The main objectives of today's session were to refactor raw API request calls by designing and implementing a reusable HTTP client utility class (`ApiHelper`), establish extended API fixtures (`src/fixtures/apifixtures.ts`) to manage helper lifecycles using environment configurations, build independent API CRUD test cases using the AAA pattern (Assemble-Act-Assert) to prevent dependency bottlenecks, and implement sequential, state-dependent CRUD test scenarios inside serial test structures (`test.describe.serial`).

---

### 📂 Files Added

During this session, the following new files were added:

1. **REST API Helpers (src/api/):**
   * `src/api/ApiHelper.ts` — A reusable wrapper encapsulating GET, POST, PUT, and DELETE client methods over the Playwright `APIRequestContext`.
2. **API Fixtures Configurator (src/fixtures/):**
   * `src/fixtures/apifixtures.ts` — Registers the `apiHelper` fixture configured with process environments into the custom test runner.
3. **API Test Suites (tests/api/):**
   * `tests/api/users.api.indi.spec.ts` — Validates user endpoints using self-contained, independent workflows.
   * `tests/api/users.api.sep.spec.ts` — Validates user endpoints sequentially using serial dependency blocks.

---

### 📂 Files Modified

No UI page objects or configurations were modified during this session.

---

### 💻 Code Snippets

#### 1. REST API Utility Wrapper & Fixture

##### **[ApiHelper.ts](file:///C:/Users/shree/Box/2026_Playwright_Batch_Notes_Codes_G1/Playwright_Framework_Sessions_Code/src/api/ApiHelper.ts)**
```typescript
import { APIRequestContext } from "@playwright/test";

export class ApiHelper {

    private readonly request: APIRequestContext;
    private readonly baseURL: string;

    constructor(request: APIRequestContext, baseURL: string) {
        this.request = request;
        this.baseURL = baseURL;
    }


    //GET
    async get(endPoint: string, headers?: Record<string, string>) {
        let response = await this.request.get(`${this.baseURL}${endPoint}`, {
            headers: headers
        });
        //console.log('API GET response: ', response);
        return {
            status: response.status(),
            body: await response.json()
        }
    }

    //POST
    async post(endPoint: string, data: object, headers?: Record<string, string>) {
        let response = await this.request.post(`${this.baseURL}${endPoint}`, {
            data: data,
            headers: headers
        });
        return {
            status: response.status(),
            body: await response.json()
        }
    }


    //PUT
    async put(endPoint: string, data: object, headers?: Record<string, string>) {
        let response = await this.request.put(`${this.baseURL}${endPoint}`, {
            data: data,
            headers: headers
        });
        return {
            status: response.status(),
            body: await response.json()
        }
    }

    //DELETE
    async delete(endPoint: string, headers?: Record<string, string>) {
        let response = await this.request.delete(`${this.baseURL}${endPoint}`, {
            headers: headers
        });
        return {
            status: response.status()
        }
    }

}
```

##### **[apifixtures.ts](file:///C:/Users/shree/Box/2026_Playwright_Batch_Notes_Codes_G1/Playwright_Framework_Sessions_Code/src/fixtures/apifixtures.ts)**
```typescript
import { test as baseTest } from '@playwright/test';
import { ApiHelper } from '../api/ApiHelper';


//define types for API fixtures:
type ApiFixtures = {
    apiHelper: ApiHelper;
}


export let test = baseTest.extend<ApiFixtures>({

    apiHelper: async ({ request }, use) => {
        let apiHelper = new ApiHelper(
            request,
            process.env.API_BASE_URL!
        );
        await use(apiHelper);
    },
});

export { expect } from '@playwright/test';
```

#### 2. API Test Suites

##### **[users.api.indi.spec.ts](file:///C:/Users/shree/Box/2026_Playwright_Batch_Notes_Codes_G1/Playwright_Framework_Sessions_Code/tests/api/users.api.indi.spec.ts)**
```typescript
import { ApiHelper } from '../../src/api/ApiHelper';
import { test, expect } from '../../src/fixtures/apifixtures';

const TOKEN = process.env.API_Token!;
let AUTH_HEADER = {
    Authorization: `Bearer ${TOKEN}`,
};

//helper - generic function - create a fresh user
async function createUser(apiHelper: any) {
    let userData = {
        name: 'Naveen API',
        email: `automation_${Date.now()}@open.com`,
        gender: 'male',
        status: 'active'
    };

    let response = await apiHelper.post('/public/v2/users', userData, AUTH_HEADER);
    expect(response.status).toBe(201);
    return response.body;
}


//Test 1: Create a user test + verify: AAA
//POST ---> userId --> GET /userId -- verify
test('POST - create a user', async ({ apiHelper }) => {

    //create a user:
    let userResponse = await createUser(apiHelper);

    //get the user:
    let response = await apiHelper.get(`/public/v2/users/${userResponse.id}`, AUTH_HEADER);
    expect(response.status).toBe(200);
    expect(response.body.name).toBe("Naveen API");

});


//Test 2: Update a user test + verify: AAA
//POST ---> userId --> PUT --> GET /userId -- verify
test('PUT - update a user', async ({ apiHelper }) => {
    //create a user: POST
    let userResponse = await createUser(apiHelper);
    let userUpdatedData = {
        name: 'Naveen API Updated',
        status: 'inactive'
    };

    //update the user:
    let response = await apiHelper.put(`/public/v2/users/${userResponse.id}`, userUpdatedData, AUTH_HEADER);
    expect(response.status).toBe(200);
    expect(response.body.name).toBe(userUpdatedData.name);
    expect(response.body.status).toBe(userUpdatedData.status);

    //get the user:
    let getResponse = await apiHelper.get(`/public/v2/users/${userResponse.id}`, AUTH_HEADER);
    expect(getResponse.status).toBe(200);
    expect(getResponse.body.name).toBe(userUpdatedData.name);
    expect(getResponse.body.status).toBe(userUpdatedData.status);

});



//Test 3: Delete a user test + verify: AAA
//POST ---> userId --> DELETE(204) --> GET /userId -- verify(404)
test('DELETE - delete a user', async ({ apiHelper }) => {
    //create a user: POST
    let userResponse = await createUser(apiHelper);

    //update the user:
    let response = await apiHelper.delete(`/public/v2/users/${userResponse.id}`, AUTH_HEADER);
    expect(response.status).toBe(204);

    //get the user:
    let getResponse = await apiHelper.get(`/public/v2/users/${userResponse.id}`, AUTH_HEADER);
    expect(getResponse.status).toBe(404);
    expect(getResponse.body.message).toBe('Resource not found');
});

//cart/checkout
```

##### **[users.api.sep.spec.ts](file:///C:/Users/shree/Box/2026_Playwright_Batch_Notes_Codes_G1/Playwright_Framework_Sessions_Code/tests/api/users.api.sep.spec.ts)**
```typescript
import { test, expect } from '../../src/fixtures/apifixtures';

const TOKEN = process.env.API_Token!;
let AUTH_HEADER = { Authorization: `Bearer ${TOKEN}` };

let userId: number;

test.describe.serial('running e2e go rest crud api tests', () => {

    //GET test:
    test('GET API -- get all users', async ({ apiHelper }) => {
        let response = await apiHelper.get('/public/v2/users', AUTH_HEADER);
        expect(response.status).toBe(200);
        expect(response.body.length).toBeGreaterThan(0);
    });


    test('POST API -- create a user', async ({ apiHelper }) => {
        let userData = {
            name: 'Naveen API',
            email: `automation_${Date.now()}@open.com`,
            gender: 'male',
            status: 'active'
        };

        let response = await apiHelper.post('/public/v2/users', userData, AUTH_HEADER);
        expect(response.status).toBe(201);
        expect(response.body.name).toBe(userData.name);
        userId = response.body.id;
        console.log('Created User Id: ', userId);
    });


    test('PUT API -- Update a user', async ({ apiHelper }) => {
        let userUpdatedData = {
            name: 'Naveen API Updated',
            status: 'inactive'
        };

        let response = await apiHelper.put(`/public/v2/users/${userId}`, userUpdatedData, AUTH_HEADER);
        expect(response.status).toBe(200);
        expect(response.body.name).toBe(userUpdatedData.name);
        expect(response.body.status).toBe(userUpdatedData.status);
    });

    test('DELETE API -- Delete a user', async ({ apiHelper }) => {
        let response = await apiHelper.delete(`/public/v2/users/${userId}`, AUTH_HEADER);
        expect(response.status).toBe(204);
    });

});
```

---

### 🔍 Detailed Explanation

#### 🛠️ Reusable API Client Utility (`ApiHelper.ts`)
* Encapsulates raw Playwright request invocations by wrapping the `APIRequestContext` inside standard helper routines: `get()`, `post()`, `put()`, and `delete()`.
* **Standardizing Returned Objects**:
  Instead of forcing spec files to repeatedly write `await response.json()` or `response.status()`, the class methods resolve the telemetry parsing internally, returning a consolidated structure `{ status: number, body: parsedJson }`. Note that the `delete()` wrapper returns only `{ status }` since DELETE operations return empty response bodies (`204 No Content`).
* Standardizes endpoint routing by concatenating `this.baseURL` (pulled from system configurations) with request endpoint suffixes.

#### 🧳 Custom API Fixture Extension (`apifixtures.ts`)
* Uses `baseTest.extend` to extend standard test lifecycles, injecting the new custom fixture `{ apiHelper }`.
* Automatically handles class instantiations: it initializes `ApiHelper` by injecting the built-in `{ request }` fixture alongside the base URL loaded from environment configs (`process.env.API_BASE_URL`).

#### 🧪 API Testing Strategies

##### **1. Independent Workflows (AAA Pattern - users.api.indi.spec.ts)**
* **Self-Contained Execution**:
  Every test is fully isolated. For tests validating updates (PUT) or deletions (DELETE), the spec calls a localized helper routine `createUser(apiHelper)` beforehand. This sets up the resource, performs the action, and asserts the output.
* **Benefits**:
  Allows tests to run concurrently across different worker processes without race conditions. If one test fails (e.g. DELETE fails), it does not halt or fail the execution of other tests.

##### **2. Sequential E2E Workflows (users.api.sep.spec.ts)**
* **Serial State Management**:
  Groups dependent steps within a `test.describe.serial` block.
* **Shared State Variable**:
  Declares a module-scoped variable `userId`. The POST test executes, captures the ID, and assigns it to `userId`. Subsequent tests (PUT, DELETE) execute in sequence, consuming the captured `userId` value.
* **Benefits**:
  Reflects realistic user E2E transaction lifecycles and reduces server load by avoiding duplicate setups.

---

### 🏗️ Page Object Classes (Helper) Analysis

##### **ApiHelper Utility Structure**
* Exposes clean, public method signatures. By passing header parameters as options (`headers?: Record<string, string>`), the class remains highly modular and adaptable to various target auth methods (e.g. Bearer, Basic, OAuth).
* Separates network logic and response mapping from test assertions. Tests focus exclusively on validating data outcomes rather than configuring protocol configurations.

---

### 🧪 Test Suite Analysis

##### **AAA Pattern vs Serial Described Suites**
* **AAA (users.api.indi.spec.ts)**:
  * **Assemble**: Invokes `createUser` helper to insert records.
  * **Act**: Performs updates (`put`) or deletes (`delete`).
  * **Assert**: Fetches the user data and validates status codes (`200` for update, `404 Resource not found` for delete verification).
* **Serial (users.api.sep.spec.ts)**:
  Runs linearly. If the POST test fails, Playwright skips all subsequent dependent tests (PUT, DELETE) inside the serial block to prevent redundant execution and save cloud runner execution times.

---

### 🧠 Framework Concepts Learned

1. **API Client Wrappers**:
   Abstracting client requests into a utility class (`ApiHelper`) standardizes response mappings and reduces code duplication in specs.
2. **Playwright Fixtures Extension**:
   Registering custom client wrappers in `apifixtures.ts` simplifies spec arguments and automates context teardown lifecycle events.
3. **Independent vs Dependent API Test Cases**:
   * *Independent AAA*: Higher reliability, parallelizable, but duplicates creation operations.
   * *Sequential Serial*: Mirrors business workflows, saves setup operations, but fails the pipeline if the first step (creation) fails.
4. **Playwright Serial Execution Control**:
   `test.describe.serial` forces execution order and automatically aborts remaining steps if a preceding step fails.

---

### 🔑 Key Learnings

* **Isolate Base URLs**: Pass `process.env.API_BASE_URL` inside helper instantiations to allow switching endpoints globally without editing code.
* **Clean Up After Deletions**: Always verify deletions by making a GET request for the deleted ID and asserting a `404 Resource not found` status.
* **Choose API Strategies Wisely**: Use independent AAA tests for unit/component-level validation, and `describe.serial` workflows for simulating multi-step transactions.

---

## Session: 2026-06-17: OAuth2 Token Generation, API Schema Validation, & Network Mocking/Interception

### 🎯 Topic
The objectives of today's session were to implement form-encoded OAuth2 client credentials authentication against a live API (Amadeus API) to generate and consume access tokens dynamically, integrate contract-based testing by validating API response structures against a JSON schema using the AJV library (`ajv`), and leverage Playwright's network interception (`page.route`) capabilities to log outgoing requests, mock JSON response payloads, and intercept HTML pages to simulate backend states for UI layout validation.

---

### 📂 Files Added

During this session, the following files were added to the codebase:

1. **OAuth2 API Test Suites (tests/api/):**
   * `tests/api/amadeus.oauth2.spec.ts` — Tests the OAuth2 token generation flow and retrieves locations using Bearer auth.
2. **API Contract Verification Suites (tests/api/):**
   * `tests/api/users.api.schema.spec.ts` — Performs JSON schema type validations against individual user objects and user lists.
3. **Network Interception & UI Mocking Suites (tests/api/):**
   * `tests/api/intercept.spec.ts` — Implements request route logging and JSON/HTML response stubs.

---

### 📂 Files Modified

The following configuration files were modified:

1. **Project Tooling & Dependencies:**
   * `package.json` — Modified to add `"ajv": "^8.20.0"` in the dependency tree to enable validation compilations.

---

### 💻 Code Snippets

#### 1. OAuth2 Authentication Flow Spec

##### **[amadeus.oauth2.spec.ts](file:///C:/Users/shree/Box/2026_Playwright_Batch_Notes_Codes_G1/Playwright_Framework_Sessions_Code/tests/api/amadeus.oauth2.spec.ts)**
```typescript
import { test, expect } from '@playwright/test';


let OAUTH_CONFIG = {
    tokenURL: 'https://test.api.amadeus.com/v1/security/oauth2/token',
    clientId: process.env.OAUTH_CLIENT_ID!,
    clientSecret: process.env.OAUTH_CLIENT_SECRET!,
    grantType: process.env.GRANT_TYPE!
}

let accessToken: string;

test.beforeEach('POST -- generate the access token', async ({ request }) => {

    let response = await request.post(OAUTH_CONFIG.tokenURL, {
        form: {
            grant_type: OAUTH_CONFIG.grantType,
            client_id: OAUTH_CONFIG.clientId,
            client_secret: OAUTH_CONFIG.clientSecret
        }
    });

    expect(response.status()).toBe(200);
    let jsonResponse = await response.json();
    console.log(jsonResponse);
    accessToken = jsonResponse.access_token;
});


test('GET -- get location data', async ({ request }) => {

    //https://test.api.amadeus.com/v1/reference-data/locations?subType=CITY,AIRPORT&keyword=MUC&countryCode=DE
    let baseURL = 'https://test.api.amadeus.com';
    let endPointURL = '/v1/reference-data/locations';

    let queryParam = {
        subType: 'CITY,AIRPORT',
        keyword: 'MUC',
        countryCode: 'DE'
    };

    let locationResponse = await request.get(`${baseURL}${endPointURL}`, {
        headers: {
            Authorization: `Bearer ${accessToken}`
        },
        params: queryParam

    });

    expect(locationResponse.status()).toBe(200);
    console.log(await locationResponse.json());

    let locationJson = await locationResponse.json();
    console.log(locationJson.meta.count);

    let location1 = locationJson.data[0];
    console.log(location1);
});
```

#### 2. JSON Schema Validation Spec

##### **[users.api.schema.spec.ts](file:///C:/Users/shree/Box/2026_Playwright_Batch_Notes_Codes_G1/Playwright_Framework_Sessions_Code/tests/api/users.api.schema.spec.ts)**
```typescript
//schema : type of response data
//P ---> C
//ajv --> node lib for the schema validation
//npm install ajv


import { test, expect } from '../../src/fixtures/apifixtures';
import Ajv from 'ajv';

let TOKEN = process.env.API_Token;
let AUTH_HEADER = { Authorization: `Bearer ${TOKEN}` };

//setup the AJV:
let ajv = new Ajv();

//define JSON schema:
let userSchema = {
    "type": "object",
    "properties": {
        "id": {
            "type": "number"
        },
        "name": {
            "type": "string"
        },
        "email": {
            "type": "string"
        },
        "gender": {
            "type": "string"
        },
        "status": {
            "type": "string"
        }
    },
    "required": [
        "id",
        "name",
        "email",
        "gender",
        "status"
    ]
};


let userArraysSchema = {
    "type": "array",
    "items": userSchema
};



test('GET -- get a user', async ({ apiHelper }) => {

    let userData = {
        name: 'schema test',
        email: `automation_${Date.now()}@open.com`,
        gender: 'male',
        status: 'active'
    };


    //post -- create a user
    let createResponse = await apiHelper.post("/public/v2/users", userData, AUTH_HEADER);
    let userId = createResponse.body.id;

    //get - get a user
    let getUserResponse = await apiHelper.get(`/public/v2/users/${userId}`, AUTH_HEADER);
    expect(getUserResponse.status).toBe(200);

    //schema validation code:
    let validate = ajv.compile(userSchema);
    let isSchemaValid = validate(getUserResponse.body)

    if (!isSchemaValid) {
        console.log("Schema Errors: ", validate.errors);
    }

    expect(isSchemaValid).toBeTruthy();

});


test('GET -- get all users', async ({ apiHelper }) => {

    //get - get a user
    let getUsersResponse = await apiHelper.get(`/public/v2/users`, AUTH_HEADER);
    expect(getUsersResponse.status).toBe(200);

    //schema validation code:
    let validate = ajv.compile(userArraysSchema);
    let isSchemaValid = validate(getUsersResponse.body)

    if (!isSchemaValid) {
        console.log("Schema Errors: ", validate.errors);
    }

    expect(isSchemaValid).toBeTruthy();

});
```

#### 3. Request Interception & Mocking Spec

##### **[intercept.spec.ts](file:///C:/Users/shree/Box/2026_Playwright_Batch_Notes_Codes_G1/Playwright_Framework_Sessions_Code/tests/api/intercept.spec.ts)**
```typescript
import { test, expect } from '@playwright/test';


//web app --> intercept the network calls and log them...
//** = wildcard -- matched all the URLs...


//intercept the network calls...
test('intercept and log requests', async ({ page }) => {

    await page.route('**/*', async (route) => {
        console.log(route.request().method(), route.request().url());
        await route.continue(); //url1 -- capture and continue./..url2 -- capture -- contiue
    });

    //login steps web
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=common/home');
});


//intercept with mocking:
//mocking: fake data/response

test('mock search data api', async ({ page }) => {
    let fakeProducts = [
        { name: 'Fake MacBook Pro', price: "$599" },
        { name: 'Fake iphone 20', price: "$999" }
    ];

    await page.route('**/index.php?route=product/search&search=macbook', (route) => {
        route.fulfill({
            status: 200,
            contentType: 'application/json',
            body: JSON.stringify(fakeProducts),
        });
    });

    await page.goto('https://abc.com/index.php?route=product/search&search=macbook');
    await page.pause();

    let fakeJson = await page.evaluate(async () => {
        let fakeRes = await fetch('https://abc.com/index.php?route=product/search&search=macbook')
        return await fakeRes.json();
    });

    console.log('fake json response:', fakeJson);
});





test('mock search page with fake HTML', async ({ page }) => {

    await page.route('**/index.php?route=product/search&search=macbook', (route) => {
        route.fulfill({
            status: 200,
            contentType: 'text/html',
            body: `
                <html>
                <body>
                    <h1>Search Results</h1>
                    <div class="product-layout">
                        <h4><a href="#">Fake MacBook Pro</a></h4>
                        <p class="price">$599</p>
                    </div>
                    <div class="product-layout">
                        <h4><a href="#">Fake iPhone 20</a></h4>
                        <p class="price">$999</p>
                    </div>
                </body>
                </html>
            `,
        });
    });

    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=product/search&search=macbook');

    // now assert on the fake HTML
    const heading = await page.textContent('h1');
    expect(heading).toBe('Search Results');

    const products = await page.locator('.product-layout h4').allTextContents();
    expect(products).toEqual(["Fake MacBook Pro", "Fake iPhone 20"]);

    const prices = await page.locator('.price').allTextContents();
    expect(prices).toEqual(["$599", "$999"]);


    await page.pause();

});
```

#### 4. Modified Project Dependencies

##### **[package.json (Dependencies Chunk)](file:///C:/Users/shree/Box/2026_Playwright_Batch_Notes_Codes_G1/Playwright_Framework_Sessions_Code/package.json)**
```json
  "dependencies": {
    "ajv": "^8.20.0",
    "csv-parse": "^6.2.1",
    "dotenv": "^17.4.2",
    "xlsx": "^0.18.5"
  }
```

---

### 🔍 Detailed Explanation

#### 🔑 Form-Encoded OAuth2 Client Credentials Flow (`amadeus.oauth2.spec.ts`)
* **Dynamic Access Token Generation**:
  Utilizes the `test.beforeEach` hook to request a fresh token before each test. It calls the token endpoint (`/v1/security/oauth2/token`) using `request.post` with the `form` option.
* **Form URL-Encoding**:
  Playwright automatically compiles form properties (such as `grant_type`, `client_id`, and `client_secret`) into standard URL-encoded content (`application/x-www-form-urlencoded`).
* **Session Authorization Injection**:
  Extracts `access_token` from the parsed JSON response body and binds it to a module-scoped variable `accessToken`. The location GET test uses this token under headers: `{ Authorization: `Bearer ${accessToken}` }`.

#### 📋 Contract JSON Schema Verification (`users.api.schema.spec.ts`)
* **AJV Integration**:
  Imports and instantiates `Ajv` to compile and execute schema contract tests.
* **Schema Contract Definition**:
  Builds a strict JSON schema structure (`userSchema` and `userArraysSchema`) specifying key names (`id`, `name`, `email`, etc.), expected data types (e.g. `number`, `string`), and sets a `required` array list containing mandatory attributes.
* **Contract Verification Assertion**:
  Compiles the schema with `ajv.compile(schema)`. The validation function compiles and evaluates the object under test, returning a boolean value (`isSchemaValid`). Detailed errors are logged using `validate.errors` if the schema is breached, protecting the consumer-provider contract.

#### 🕸️ Network Interception & Routing (`intercept.spec.ts`)
* **Request Logging Interceptor**:
  Registers a wildcard matcher `**/*` with `page.route` to intercept all network traffic. Logs the request method and URL to stdout, resuming network transit via `route.continue()`.
* **Dynamic REST API Mocking**:
  Intercepts search endpoints and fulfills the route locally with fake JSON arrays (`route.fulfill({ status, contentType, body })`), enabling UI evaluation tests to bypass real server connections.
* **Virtual Page Stubbing (HTML Interception)**:
  Mocks a complete product search web page by delivering stubbed HTML code as the response body. This enables locating elements (`.product-layout`) and validating layout responses independently of backend database stability.

---

### 🏗️ Client & Schema Helper Analysis

##### **OAuth2 Flow Orchestration**
* Exposing endpoints via a config object `OAUTH_CONFIG` isolates the authentication parameters from spec workflows. Form serialization hides query formatting, allowing developers to configure standard credentials tables safely.

##### **AJV Schema Structure**
* Defining a schema forces data contract verification. It ensures that the types and structure of the payload returned by GoRest do not drift, acting as a crucial gatekeeper for database contract updates.

##### **Mock Server Isolation**
* UI layouts are validated against local stubbed responses. Intercepting search routes isolates browser operations from flaky networks, allowing frontend scripts to verify locator lookups under constant, controlled layouts.

---

### 🧪 Test Suite Analysis

##### **Real API Integration vs Intercepted Mocking**
* **Integration Tests (`amadeus.oauth2.spec.ts`, `users.api.schema.spec.ts`)**:
  Execute live network operations against actual server endpoints. Ideal for checking end-to-end integration, verifying bearer token scopes, and compiling schema drifts.
* **Mock Tests (`intercept.spec.ts`)**:
  Execute completely locally within the browser. Network requests are stubbed, bypassing real database lookups. This enables simulating server responses (like pricing arrays) and testing edge-case layouts (e.g. showing custom prices) in isolation.

---

### 🧠 Framework Concepts Learned

1. **OAuth2 Client Credentials Flow**:
   Generates short-lived session access tokens via a client secret and ID, passing it in the `Authorization: Bearer <token>` header to retrieve authorized data.
2. **JSON Schema Verification**:
   Validating structure contract specifications via AJV protects frontend services from API model revisions and data regressions.
3. **Route Interception & Wildcards**:
   `page.route` routes all matching patterns. It can log, block, or modify requests before they leave the browser context.
4. **Mocking with route.fulfill**:
   Simulates custom server states (HTML code structures or JSON objects) to decouple visual tests from backend database availability.

---

### 🔑 Key Learnings

* **Secure OAuth2 Credentials**: Avoid committing client IDs or secrets. Always read credentials dynamically via `process.env`.
* **Enforce API Contracts**: Add contract schema tests for key integration points to intercept model drifts before they reach UI regression tests.
* **Mock for UI Resilience**: Use HTML/JSON interceptors to test edge cases (like server failures, empty states, or massive lists) without manually configuring database tables.

---

## 📈 Framework Evolution Summary


### 🕰️ Framework Timeline

> [!NOTE]
> The framework development sessions and milestones are structured exclusively on **Mondays, Wednesdays, and Thursdays**. The timeline below will be updated incrementally as new sessions are conducted.

```mermaid
gantt
    title "Playwright Automation Framework Roadmap (Mon, Wed, Thu Schedule)"
    dateFormat  YYYY-MM-DD
    axisFormat  %a %b %d
    section Stage 1
    Initial Project & POM Setup    :done, st1, 2026-05-27, 1d
    section Stage 2
    Fixtures & Allure Reporting    :done, st2, 2026-06-01, 1d
    section Stage 3
    Environment & CSV Data Setup   :done, st3, 2026-06-03, 1d
    section Stage 4
    Excel, JSON & Product Search   :done, st4, 2026-06-04, 1d
    section Stage 5
    BasePage & Product Info POM    :done, st5, 2026-06-08, 1d
    section Stage 6
    API Testing Integration        :done, st6, 2026-06-10, 1d
    section Stage 7
    Reusable ApiHelper & E2E CRUD  :done, st7, 2026-06-15, 1d
    section Stage 8
    OAuth2, Schema & Interception  :active, st8, 2026-06-17, 1d
```

1. **Initial Setup (Stage 1 - Wednesday 2026-05-27)**:
   * Established core folder architecture (`src/pages`, `src/utils`, `tests`).
   * Configured package dependencies, TypeScript compiler settings (`tsconfig.json`), and Playwright running rules (`playwright.config.ts`).
   * Created Base Page structure and instantiated the login page object with basic specification validations.
2. **Fixtures & Allure Reporting Setup (Stage 2 - Monday 2026-06-01)**:
   * Configured Allure and HTML multi-reporters and set headed execution controls.
   * Created custom page fixtures (`pagefixtures.ts`) to inject dependencies dynamically.
   * Implemented Home Page POM and validated elements via soft assertions.
3. **Environment Integration & CSV Data Setup (Stage 3 - Wednesday 2026-06-03)**:
   * Integrated `dotenv` for dynamic environment variable injection to target profiles (e.g. QA, Dev).
   * Built a reusable `CsvHelper` using `csv-parse/sync` to read external datasets.
   * Created serial and parallel data-driven test cases validating error alerts dynamically.
4. **Excel, JSON & Product Search POM Setup (Stage 4 - Thursday 2026-06-04)**:
   * Integrated `xlsx` to parse Excel-based test data via `ExcelHelper`.
   * Implemented `JsonHelper` to synchronously parse JSON-based test datasets.
   * Developed the Product Search flow, adding search locators and action methods in `HomePage` POM and implementing a dedicated `SearchResultsPage` POM class.
   * Added the `searchResultsPage` fixture to the custom fixtures layer.
   * Built dynamic test cases mapping Excel and JSON datasets in `loginpagefix.spec.ts` and parameterized search validation using CSV data in `search.spec.ts`.
5. **BasePage & Product Info POM Setup (Stage 5 - Monday 2026-06-08)**:
   * Refactored `BasePage.ts` to include common elements (logo, search box, search icon, currency dropdown, cart button, and footer links) and operations.
   * Built `ProductInfoPage.ts` POM to capture specific product details such as header title, image count, metadata values (Brand, Code, Points), and pricing structures.
   * Added the `basePage` and `productInfoPage` fixtures to the dynamic fixture injection layer (`pagefixtures.ts`).
   * Implemented test cases in `productpage.spec.ts` validating logo presence, footer link counts, product image counts, and multi-value product data validation using TypeScript `Map` matching.
6. **API Testing Integration Setup (Stage 6 - Wednesday 2026-06-10)**:
   * Integrated backend API testing utilizing Playwright's built-in `APIRequestContext` engine.
   * Created a dedicated test suite `users.api.spec.ts` executing GET, POST, PUT, and DELETE REST operations against the GoRest database endpoint.
   * Configured Bearer Token authentication headers and dynamic payload attributes (such as timestamps for email parameters) to avoid duplicate data errors.
   * Implemented validations checking JSON body objects and standard HTTP response codes.
7. **Reusable ApiHelper Utility & E2E API CRUD Workflows (Stage 7 - Monday 2026-06-15)**:
   * Designed and implemented a reusable HTTP client wrapper class `ApiHelper` to encapsulate raw Playwright `APIRequestContext` invocations, returning unified `{ status, body }` response structures.
   * Configured custom API fixtures inside `apifixtures.ts` to automate the instantiation of `ApiHelper` using environment-defined base URLs.
   * Authored independent, concurrent API test cases validating GET, POST, PUT, and DELETE operations using the AAA pattern and localized setup helpers.
   * Developed serial E2E tests within `test.describe.serial` blocks to validate sequential user CRUD transactions by sharing state variables across test hooks.
8. **OAuth2, Schema & Interception Setup (Stage 8 - Wednesday 2026-06-17)**:
   * Configured dynamic OAuth2 Client Credentials form authentication flow in `amadeus.oauth2.spec.ts` using client secret and ID parameters to handle token refresh processes.
   * Built contract-based tests utilizing AJV (`ajv` package added to `package.json`) to validate user payload shapes against strict JSON schema parameters in `users.api.schema.spec.ts`.
   * Developed network interception configurations in `intercept.spec.ts` using `page.route` to log routing paths, stub search outputs via JSON payloads, and mock custom HTML pages for UI layout testing.

---

### 🗺️ Architecture Overview

#### 📂 Folder Structure Layout
```text
C:\Users\shree\Box\2026_Playwright_Batch_Notes_Codes_G1\Playwright_Framework_Sessions_Code\
├── config/                        # Environment configurations
│   └── .env.qa                    # QA environment variables (URL/credentials) (Added in Session 3)
├── node_modules/                  # Restored external npm dependencies (Ignored in documentation)
├── src/                           # Source directory containing framework core components
│   ├── api/                       # REST API helper modules (Added in Session 7)
│   │   └── ApiHelper.ts           # Reusable REST API utility wrapping Playwright request contexts (Added in Session 7)
│   ├── data/                      # External test data files
│   │   ├── OpenCartTestData.xlsx  # Excel-based credentials test dataset (Added in Session 4)
│   │   ├── loginData.csv          # Login credentials CSV dataset (Added in Session 3)
│   │   ├── logindata.json         # Login credentials JSON dataset (Added in Session 4)
│   │   ├── product.csv            # Product search query and expected match count dataset (Added in Session 4)
│   │   └── registerData.csv       # Registration placeholder data set [EMPTY]
│   ├── fixtures/                  # Playwright custom fixtures for POM dependency injection
│   │   ├── apifixtures.ts         # Custom fixtures initializing ApiHelper instances (Added in Session 7)
│   │   └── pagefixtures.ts        # Custom fixtures mapping BasePage, LoginPage, HomePage, SearchResultsPage, ProductInfoPage & testData (Updated in Session 5)
│   ├── pages/                     # Page Object Model layer containing UI element mappings & actions
│   │   ├── BasePage.ts            # Core parent class providing Page context to all page objects (Updated in Session 5)
│   │   ├── HomePage.ts            # Home Page element mapping, headers retrieval, and search action methods (Updated in Session 5)
│   │   ├── LoginPage.ts           # Element definitions, error alert mappings, and login actions
│   │   ├── ProductInfoPage.ts     # Element mappings, image scraping, and product info collection (Added in Session 5)
│   │   └── SearchResultsPage.ts   # Product search result listings, count verification, and item selection (Added in Session 4)
│   └── utils/                     # Framework helpers and standard utility libraries
│       ├── CsvHelper.ts           # Synchronous CSV file reader utility (Added in Session 3)
│       ├── ExcelHelper.ts         # Synchronous Excel workbook reader utility using xlsx library (Added in Session 4)
│       ├── JsonHelper.ts          # Synchronous JSON file parser utility using fs (Added in Session 4)
│       └── csvutil.ts             # Placeholder for CSV helper operations [EMPTY]
├── tests/                         # Test execution layer housing test files
│   ├── api/                       # API testing suites (Added in Session 6)
│   │   ├── amadeus.oauth2.spec.ts # OAuth2 token generation & Bearer token locations retrieval (Added in Session 8)
│   │   ├── intercept.spec.ts      # Wildcard request logging & JSON/HTML response mocking (Added in Session 8)
│   │   ├── users.api.indi.spec.ts # Independent CRUD API tests validating users endpoint using local creation helpers (Added in Session 7)
│   │   ├── users.api.schema.spec.ts # API response contract validation using AJV (Added in Session 8)
│   │   ├── users.api.sep.spec.ts  # Sequential CRUD API tests sharing state across describe.serial blocks (Added in Session 7)
│   │   └── users.api.spec.ts      # REST API client operations validating GET/POST/PUT/DELETE endpoints (Added in Session 6)
│   ├── homepage.spec.ts           # Home Page automated validations using standard hooks setup
│   ├── homepagefix.spec.ts        # Home Page validations powered by custom page fixtures
│   ├── loginpage.spec.ts          # Core validation tests verifying Login Page flows using standard hooks
│   ├── loginpagefix.spec.ts       # Login Page validations powered by fixtures, CSV, Excel, and JSON data loops
│   ├── productpage.spec.ts        # Product Page validations using custom page fixtures (Added in Session 5)
│   ├── search.spec.ts             # Product search counts and item click landing validations (Added in Session 4)
│   └── searchpage.spec.ts         # Placeholder for search page automated validations [EMPTY]
├── package-lock.json              # Specific dependency locks (Ignored in documentation)
├── package.json                   # Project details, dependencies (dotenv, csv-parse, xlsx, ajv), and type modes
├── playwright.config.ts           # Central Playwright runner settings and environment configurations
└── tsconfig.json                  # TypeScript compiler settings
```

---

#### 🏗️ Architecture Impact

The component architecture defines how the various configurations, test specifications, and page objects interact within the framework:

```mermaid
graph TD
    classDef main fill:#d8b4fe,stroke:#a855f7,stroke-width:2px,color:#581c87;
    classDef page fill:#93c5fd,stroke:#3b82f6,stroke-width:2px,color:#1e3a8a;
    classDef config fill:#fde047,stroke:#eab308,stroke-width:2px,color:#713f12;
    classDef runner fill:#86efac,stroke:#22c55e,stroke-width:2px,color:#14532d;
    classDef fixture fill:#fed7aa,stroke:#f97316,stroke-width:2px,color:#7c2d12;
    classDef utility fill:#fca5a5,stroke:#ef4444,stroke-width:2px,color:#7f1d1d;
    classDef data fill:#cbd5e1,stroke:#64748b,stroke-width:2px,color:#0f172a;

    playwrightConfig[playwright.config.ts]:::config
    envFile[config/.env.qa]:::config
    specFile[tests/loginpagefix.spec.ts]:::main
    searchSpec[tests/search.spec.ts]:::main
    productSpec[tests/productpage.spec.ts]:::main
    apiSpec[tests/api/users.api.spec.ts]:::main
    apiIndiSpec[tests/api/users.api.indi.spec.ts]:::main
    apiSepSpec[tests/api/users.api.sep.spec.ts]:::main
    oauthSpec[tests/api/amadeus.oauth2.spec.ts]:::main
    interceptSpec[tests/api/intercept.spec.ts]:::main
    schemaSpec[tests/api/users.api.schema.spec.ts]:::main
    pageFixtures[src/fixtures/pagefixtures.ts]:::fixture
    apiFixtures[src/fixtures/apifixtures.ts]:::fixture
    loginPage[src/pages/LoginPage.ts]:::page
    homePage[src/pages/HomePage.ts]:::page
    searchResultsPage[src/pages/SearchResultsPage.ts]:::page
    productInfoPage[src/pages/ProductInfoPage.ts]:::page
    basePage[src/pages/BasePage.ts]:::page
    apiHelper[src/api/ApiHelper.ts]:::utility
    csvHelper[src/utils/CsvHelper.ts]:::utility
    excelHelper[src/utils/ExcelHelper.ts]:::utility
    jsonHelper[src/utils/JsonHelper.ts]:::utility
    ajv[ajv package]:::utility
    csvData[src/data/loginData.csv]:::data
    excelData[src/data/OpenCartTestData.xlsx]:::data
    jsonData[src/data/logindata.json]:::data
    productData[src/data/product.csv]:::data
    playwrightRunner[Playwright Test Runner]:::runner

    playwrightConfig --> |Loads ENV via dotenv| envFile
    playwrightConfig --> |Configures multi-reporters & base URL| playwrightRunner
    playwrightRunner --> |Injects page & custom fixtures| specFile
    playwrightRunner --> |Injects page & custom fixtures| searchSpec
    playwrightRunner --> |Injects page & custom fixtures| productSpec
    playwrightRunner --> |Injects request fixture| apiSpec
    playwrightRunner --> |Injects apiHelper fixture| apiIndiSpec
    playwrightRunner --> |Injects apiHelper fixture| apiSepSpec
    playwrightRunner --> |Injects request fixture| oauthSpec
    playwrightRunner --> |Injects page fixture| interceptSpec
    playwrightRunner --> |Injects apiHelper fixture| schemaSpec
    specFile --> |Requests loginPage, homePage & testData| pageFixtures
    searchSpec --> |Requests homePage & searchResultsPage| pageFixtures
    productSpec --> |Requests loginPage, basePage, homePage, searchResultsPage & productInfoPage| pageFixtures
    apiIndiSpec --> |Requests apiHelper| apiFixtures
    apiSepSpec --> |Requests apiHelper| apiFixtures
    schemaSpec --> |Requests apiHelper| apiFixtures
    schemaSpec --> |Compiles schemas & validates| ajv
    apiFixtures --> |Instantiates automatically| apiHelper
    pageFixtures --> |Instantiates automatically| basePage
    pageFixtures --> |Instantiates automatically| loginPage
    pageFixtures --> |Instantiates automatically| homePage
    pageFixtures --> |Instantiates automatically| searchResultsPage
    pageFixtures --> |Instantiates automatically| productInfoPage
    pageFixtures --> |Calls CsvHelper.readCsv| csvHelper
    specFile --> |Loops direct parallel runs via CsvHelper| csvHelper
    specFile --> |Loops direct parallel runs via ExcelHelper| excelHelper
    specFile --> |Loops direct parallel runs via JsonHelper| jsonHelper
    searchSpec --> |Loops direct parallel runs via CsvHelper| csvHelper
    csvHelper --> |Synchronously parses records| csvData
    csvHelper --> |Synchronously parses records| productData
    excelHelper --> |Synchronously parses records| excelData
    jsonHelper --> |Synchronously parses records| jsonData
    loginPage --> |Inherits page context| basePage
    homePage --> |Inherits page context| basePage
    searchResultsPage --> |Inherits page context| basePage
    productInfoPage --> |Inherits page context| basePage
    specFile --> |Invokes POM actions, environment keys & asserts| playwrightRunner
    searchSpec --> |Invokes search POM actions & asserts| playwrightRunner
    productSpec --> |Invokes POM actions & asserts| playwrightRunner
    apiSpec --> |Invokes HTTP requests & asserts| playwrightRunner
    apiIndiSpec --> |Invokes wrapped HTTP requests & asserts| playwrightRunner
    apiSepSpec --> |Invokes wrapped HTTP requests & asserts| playwrightRunner
    oauthSpec --> |Invokes token generation & GET locations| playwrightRunner
    interceptSpec --> |Intercepts routes & mocks responses| playwrightRunner
    schemaSpec --> |Invokes wrapped requests & validates| playwrightRunner
```
```

This establishes a structured dependency flow where tests act as clean orchestrators, Page Objects act as action wrappers, helpers process files, and configurations define the environment.

---

#### 🔄 Execution Lifecycle

The lifecycle of an individual test case in the framework flows as follows:

```mermaid
sequenceDiagram
    autonumber
    participant Engine as Playwright Runner
    participant Spec as loginpagefix.spec.ts
    participant Fix as pagefixtures.ts (Fixture)
    participant Login as LoginPage (POM)
    participant Page as Browser Tab (Page)

    Engine->>Engine: Parse playwright.config.ts (multi-reporters, headless: false)
    Engine->>Page: Instantiate sandboxed browser context & tab
    Engine->>Spec: Execute test with arguments ({ loginPage })
    Spec->>Fix: Request loginPage parameter
    Fix->>Login: Instantiates LoginPage (passes page context)
    Login->>Page: Lazy-bind page.getByRole(...) locators
    Fix-->>Spec: Resolve loginPage instance
    Spec->>Login: await loginPage.goToLoginPage()
    Login->>Page: page.goto("opencart/index.php...")
    Spec->>Login: await loginPage.getLoginPageTitle()
    Login->>Page: page.title()
    Page-->>Spec: returns Title String
    Spec->>Engine: expect(title).toBe("Account Login")
    Engine->>Page: Tear down context & compile Allure results
```

This lifecycle highlights how page locators remain **lazily loaded**. Declaring elements via `page.getByRole(...)` does not query the browser immediately; it simply creates an element definition. The element is queried only when an action is performed (`click()`, `fill()`, `isVisible()`), guaranteeing that Playwright’s auto-wait mechanisms are properly utilized.

For data-driven tests:
* In **Serial Fixture Mode** (DD_1), the single browser context executes sequential steps 7-10 for every item inside a single `testData` array loop.
* In **Parallel Loop Mode** (DD_2), Playwright parses the spec file at compile time, resolving CSV contents via `CsvHelper` and dynamically instantiating separate test runners, sandboxed contexts, and lifecycles (steps 2-11) concurrently across all available test workers.

