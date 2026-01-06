(module $test_hello_wasm.wasm
  (type $t0 (func (param i32 i32)))
  (type $t1 (func))
  (import "env" "log" (func $_ZN15test_hello_wasm3log17h9fb961acfd61981cE (type $t0)))
  (func $hello (type $t1)
    (local $l0 i32)
    global.get $__stack_pointer
    i32.const 16
    i32.sub
    local.set $l0
    local.get $l0
    global.set $__stack_pointer
    local.get $l0
    i32.const 1048576
    i32.store offset=4
    local.get $l0
    i32.const 1048576
    i32.store offset=8
    local.get $l0
    i32.const 15
    i32.store offset=12
    i32.const 1048576
    i32.const 15
    call $_ZN15test_hello_wasm3log17h9fb961acfd61981cE
    local.get $l0
    i32.const 16
    i32.add
    global.set $__stack_pointer
    return)
  (memory $memory 17)
  (global $__stack_pointer (mut i32) (i32.const 1048576))
  (global $__data_end i32 (i32.const 1048591))
  (global $__heap_base i32 (i32.const 1048592))
  (export "memory" (memory $memory))
  (export "hello" (func $hello))
  (export "__data_end" (global $__data_end))
  (export "__heap_base" (global $__heap_base))
  (data $.rodata (i32.const 1048576) "hello from rust"))
