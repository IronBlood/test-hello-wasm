# test-hello-wasm

Minimal Rust `no_std` WebAssembly module that exports `hello()` and calls a host
`env.log` import to print "hello from rust". Includes `run.mjs` to load and run
the module in Node.

## Requirements

- Rust toolchain with the `wasm32-unknown-unknown` target
- Node.js with ESM support

## Build

```
rustup target add wasm32-unknown-unknown
cargo build --target wasm32-unknown-unknown --release
```

## Run

```
node run.mjs
```

## Exports and Imports

- Export: `hello()` writes a fixed greeting to the host logger.
- Import: `env.log(ptr, len)` reads bytes from the module memory.
