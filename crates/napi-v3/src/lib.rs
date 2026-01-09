use napi_derive::napi;

#[napi]
pub fn hello() -> String {
    "hello from napi v3 wasm".to_string()
}

#[napi]
pub async fn hello_async() -> String {
    "hello from napi v3 wasm (async)".to_string()
}
