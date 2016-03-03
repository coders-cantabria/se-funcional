## Curry

Se dice que una función es "curried" cuando puede
recibir sus argumentos de uno en uno.

Piensa en aplicación parcial automática.

```js
// compara
const product = (a, b) => a * b
const productC = (a) => (b) => a * b
const double = (x) = product(2, x)
const double_ = productC(2)
```
