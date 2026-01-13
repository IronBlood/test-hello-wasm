import { Environment, napi } from "./napi-wasm.mjs";
import { readFileSync } from "node:fs";

const wasmBytes = readFileSync(new URL("./target/wasm32-unknown-unknown/release/test_hello_wasm_napi_v3_unknown.wasm", import.meta.url));
const wasmModule = new WebAssembly.Module(wasmBytes);
const instance = new WebAssembly.Instance(wasmModule, {
  env: {
    ...napi
  },
});

console.log(typeof instance.exports.__indirect_function_table);

// NOTE from wasi template
for (const name of Object.keys(instance.exports)) {
  if (name.startsWith('__napi_register__')) {
    instance.exports[name]();
  }
}

const env = new Environment(instance);
const wasm = env.exports;

console.log(Object.keys(wasm));

console.log(wasm.hello());
console.log(wasm.bar());
console.log(wasm.baz());
