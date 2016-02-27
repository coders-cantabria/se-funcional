## Efectos secundarios

```js
function dangerousAdd(a, b) {
    launchMissles()  // !!!
    return a + b
}
```

```js
function checkPassword(inputPassword, realPassword) {
    if (inputPassword === realPassword) {
        logCurrentUserIn()  // !!!
        return true
    }
    return false
}
```
