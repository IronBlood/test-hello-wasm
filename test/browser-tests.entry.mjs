import { test } from "uvu";
import * as assert from "uvu/assert";
import {
	hello,
	helloAsync,
} from "napi-v3/hello.wasi-browser.js";

test("hello", () => {
	assert.is(hello(), "hello from napi v3 wasm");
});

test("helloAsync", async () => {
	const msg = await helloAsync();
	assert.is(msg, "hello from napi v3 wasm (async)");
});

test.run();
