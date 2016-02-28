## Closure (clausura)

La "captura" de variables de un *scope* superior.

```js
function initCounter(init) {
    // ^^^ scope de init vvv
    return function() { return init++ }
    // ^^^ scope de init vvv
}

x = initCounter(-10)
y = initCounter(5)

x() // -10
x() // -9

y() // 5
y() // 6
```
