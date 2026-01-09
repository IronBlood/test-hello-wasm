# test-hello-wasm-vanilla

Minimal Rust `no_std` WebAssembly module that exports `hello()` and calls a host
`env.log` import to print "hello from rust". Includes `run.mjs` to load and run
the module in Node.

## Requirements

- Rust toolchain with the `wasm32-unknown-unknown` target

## Exports and Imports

- Export: `hello()` writes a fixed greeting to the host logger.
- Import: `env.log(ptr, len)` reads bytes from the module memory.
