import {
	hello,
	helloAsync,
} from "napi-v3/hello.wasi-browser.js";

window.api = {
	hello,
	helloAsync,
};
