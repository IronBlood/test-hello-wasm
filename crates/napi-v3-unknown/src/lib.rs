use napi_derive::napi;

fn foo() -> u32 {
    42
}

#[napi]
pub fn hello() -> String {
    "hello from napi v3 wasm".to_string()
}

#[napi]
pub fn bar() -> u32 {
    foo()
}

#[napi]
pub fn baz() -> u32 {
    foo()
}
