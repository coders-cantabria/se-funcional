## Composición

Funciones pueden ser combinados para crear otras funciones.

```js
const compose = (f, g) => (...args) => f(g(...args))

const product = (a, b) => a * b
const square = (x) => product(x, x)
const double = (x) => product(2, x)

const area = compose((x) => product(Math.PI, x), square)
```
