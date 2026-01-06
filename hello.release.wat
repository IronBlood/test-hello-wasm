(module $test_hello_wasm.wasm
  (type $t0 (func (param i32 i32)))
  (type $t1 (func))
  (import "env" "log" (func $_ZN15test_hello_wasm3log17h6b7b26f4bb2f873bE (type $t0)))
  (func $hello (type $t1)
    i32.const 1048576
    i32.const 15
    call $_ZN15test_hello_wasm3log17h6b7b26f4bb2f873bE)
  (memory $memory 17)
  (global $__stack_pointer (mut i32) (i32.const 1048576))
  (global $__data_end i32 (i32.const 1048591))
  (global $__heap_base i32 (i32.const 1048592))
  (export "memory" (memory $memory))
  (export "hello" (func $hello))
  (export "__data_end" (global $__data_end))
  (export "__heap_base" (global $__heap_base))
  (data $.rodata (i32.const 1048576) "hello from rust"))
