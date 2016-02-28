## Higher order functions

```js
const compose = (f, g) => (...args) => f(g(...args))

const increment = (x) => x + 1
const double = (x) => x * 2
const incThenDouble = compose(double, increment)
const doubleThenInc = compose(increment, double)

incThenDouble(1) // 4
doubleThenInc(1) // 3
```
