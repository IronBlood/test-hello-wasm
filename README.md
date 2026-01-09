# test-hello-wasm

## Requirements

```bash
rustup target add wasm32-unknown-unknown
rustup target add wasm32-wasip1-threads
pnpm install
```

## Build

```bash
# for vanilla
cargo build -p test-hello-wasm-vanilla --target wasm32-unknown-unknown --release

# for napi-v3
DEBUG="napi:*" pnpm run --filter napi-v3 build --target wasm32-wasip1-threads
```

## Run

```bash
# run vanilla
node run.mjs

# run napi-v3
node run-napi-v3.mjs
```
