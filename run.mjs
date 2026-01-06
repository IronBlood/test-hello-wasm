import fs from "node:fs/promises";

const wasmPath = new URL("./target/wasm32-unknown-unknown/release/test_hello_wasm_vanilla.wasm", import.meta.url);

const wasmBytes = await fs.readFile(wasmPath);

let instance;

const imports = {
	env: {
		log(ptr, len) {
			const mem = new Uint8Array(instance.exports.memory.buffer, ptr, len);
			console.log(new TextDecoder("utf-8").decode(mem));
		}
	}
};

({ instance } = await WebAssembly.instantiate(wasmBytes, imports));

instance.exports.hello();
