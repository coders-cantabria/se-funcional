## Recursión

```js
const fibo = (n) => n < 1 ? 0
                          : n < 3 ? 1
                                  : fibo(n-1) + fibo(n-2)
```
