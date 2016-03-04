# Mutaciones

Imaginamos una petición AJAX.

¿Qué valor tienen `x`?

```js
var x = "waiting..."

const f1 = () => new Promise((resolve) => setTimeout(
    () => {
        x = "f1 returned"  // <-- MUTACIÓN !!!
        resolve()
    }, Math.floor(Math.random() * 1000)))

const f2 = () => new Promise((resolve) => setTimeout(
    () => {
        x = "f2 returned"  // <-- MUTACIÓN !!!
        resolve()
    }, Math.floor(Math.random() * 1000)))

Promise.all([f1(), f2()]).then(() => console.log(x))
```
