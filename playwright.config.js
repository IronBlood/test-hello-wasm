// @ts-check
import { defineConfig, devices } from '@playwright/test';

// Webkit relies on old libraries on Arch Linux, this flag
// can run the tests without webkit on some dev environments.
const skipWebkit = process.env.PLAYWRIGHT_SKIP_WEBKIT === "1";

/** @type {import("@playwright/test").PlaywrightTestConfig} */
const config = {
  testDir: './test',
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
    /* Base URL to use in actions like `await page.goto('')`. */
    baseURL: 'http://localhost:4173',

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on-first-retry',
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },

    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
  ],

  /* Run your local dev server before starting the tests */
  webServer: {
    command: 'PORT=4173 npm run serve',
    url: 'http://localhost:4173/test.html',
    reuseExistingServer: !process.env.CI,
  },
};

if (!skipWebkit) {
  config.projects?.push({
    name: 'webkit',
    use: { ...devices['Desktop Safari'] },
  });
}

export default defineConfig(config);
