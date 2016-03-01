## Closure (clausura)

La "captura" de variables de un *scope* superior.

```js
const initCounter = (init) => {
    // ^^^ scope de init vvv
    return () => init++
    // ^^^ scope de init vvv
}

x = initCounter(-10)
y = initCounter(5)

x() // -10
x() // -9

y() // 5
y() // 6
```
