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

# for napi-v3 wasm32-unknown-unknown
cargo build -p test-hello-wasm-napi-v3-unknown --target wasm32-unknown-unknown --release
```

## Run

```bash
# run vanilla
node run.mjs

# run napi-v3
node run-napi-v3.mjs

# run napi-v3-unknown
node run-napi-v3-unknown.mjs
```

## Test in Browsers

Playwright is used in this part, so follow the [installation](https://playwright.dev/docs/intro) first.

Pay attention to the section `System requirements`, for Linux distros,
only Debian 12 / 13 and Ubuntu 22.04 / 24.04 are support. The `install`
command will show dependencies that are missing, it's better to use `ldd`
to check which browsers are runnable. I'm using Arch Linux, in my case,
`webkit` relies on some old libraries, so I have to skip them.

Make sure the `PORT` defined in [playwright.config.js](./playwright.config.js) is not used by any other program.

```
# Run the following command after installing or upgrading playwright
pnpm exec playwright install

# Bundle assets first
pnpm bundle

# Run the test
PLAYWRIGHT_SKIP_WEBKIT=1 pnpm exec playwright test test/wasm.spec.js
```
