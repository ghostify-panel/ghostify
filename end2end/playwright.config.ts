import { devices, defineConfig } from "@playwright/test";

export default defineConfig({
	testDir: "./tests",
	timeout: 30 * 1000,
	expect: {
		timeout: 5000,
	},
	/* Run tests in files in parallel */
	fullyParallel: true,
	forbidOnly: !!process.env.CI,
	retries: process.env.CI ? 2 : 0,
	workers: process.env.CI ? 1 : undefined,
	reporter: "html",
	use: {
		actionTimeout: 0,
		baseURL: 'http://localhost:3000',
		trace: "on-first-retry",
	},

	projects: [
		{
			name: "chromium",
			use: {
				...devices["Desktop Chrome"],
			},
		},

		{
			name: "firefox",
			use: {
				...devices["Desktop Firefox"],
			},
		},

		{
			name: "webkit",
			use: {
				...devices["Desktop Safari"],
			},
		},

		{
			name: 'Mobile Chrome',
			use: {
				...devices['Pixel 5'],
			},
		},
		{
			name: 'Mobile Safari',
			use: {
				...devices['iPhone 12'],
			},
		},

		{
			name: 'Microsoft Edge',
			use: {
				channel: 'msedge',
			},
		},
		{
			name: 'Google Chrome',
			use: {
				channel: 'chrome',
			},
		},
	],

	/* Folder for test artifacts such as screenshots, videos, traces, etc. */
	// outputDir: 'test-results/',

	/* Run your local dev server before starting the tests */
	// webServer: {
	//   command: 'npm run start',
	//   port: 3000,
	// },
});
