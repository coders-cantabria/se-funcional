## Higher-order + closure

```js
const memo = (f) => {
    _memo = {}
    return (...args) => {
        const input = JSON.stringify(args)
        return _memo[input] ? _memo[input]
                            : _memo[input] = f(...args)
    }
}

const fibo_ = memo(
    (n) => n < 1 ? 0 : n < 3 ? 1 : fibo_(n-1) + fibo_(n-2)
)
```
