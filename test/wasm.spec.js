import { test, expect } from "@playwright/test";

const url = "/test.html";

test("hello", async ({ page }) => {
	await page.goto(url);
	const msg = await page.evaluate(() => window.api.hello());
	expect(msg).toBe("hello from napi v3 wasm");
});

test("helloAsync", async ({ page }) => {
	await page.goto(url);
	const msg = await page.evaluate(() => window.api.helloAsync());
	expect(msg).toBe("hello from napi v3 wasm (async)");
});
