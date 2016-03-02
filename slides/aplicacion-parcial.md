## Aplicación parcial

Podemos pasar argumentos a una función poco a poco.

```js
const apply = (f, x) => (y) => f(x, y)
// ver Function.prototype.bind

const double_ = (x) => product(2, x)
// se convierte en
const double = apply(product, 2)

const area_ = compose((x) => product(Math.PI, x), square)
// se convierte en
const area = compose(apply(product, Math.PI), square)
```
