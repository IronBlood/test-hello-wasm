import {
	hello,
	helloAsync,
} from "./crates/napi-v3/hello.wasi.cjs";

helloAsync().then(x => console.log(x));
console.log(hello());
