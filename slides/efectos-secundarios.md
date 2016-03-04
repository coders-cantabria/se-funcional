## Efectos secundarios

```js
const dangerousAdd = (a, b) => {
    launchMissles()  // !!!
    return a + b
}
```

```js
const checkPassword = (inputPassword, realPassword) => {
    if (inputPassword === realPassword) {
        logCurrentUserIn()  // !!!
        return true
    }
    return false
}
```
