# test-hello-wasm-napi-v3

Minimal `napi-rs` v3 + CLI example that builds a WASI-compatible N-API module.
Rust exports `hello`/`hello_async`, the CLI generates the JS/WASI bindings, and
`napi build` (via [`build.rs`](./build.rs)) injects the runtime glue.

## Requirements

- Rust toolchain with the `wasm32-wasip1-threads` target
