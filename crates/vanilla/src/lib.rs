#![no_std]

#[link(wasm_import_module = "env")]
unsafe extern "C" {
    fn log(ptr: *const u8, len: usize);
}

#[unsafe(no_mangle)]
pub extern "C" fn hello() {
    let msg = b"hello from rust";
    unsafe { log(msg.as_ptr(), msg.len()) }
}

#[cfg(target_arch = "wasm32")]
use core::panic::PanicInfo;

#[cfg(target_arch = "wasm32")]
#[panic_handler]
fn panic(_info: &PanicInfo) -> ! {
    loop {}
}
