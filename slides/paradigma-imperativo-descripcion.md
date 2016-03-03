* Verbos (push, increment, …)
* Manipular datos compartidos
* Utiliza efectos secundarios

```js
var l = [1, 2, 3, 4, 5]
var gt2 = []
var el
while (el = l.shift()) {
    if (el > 2) {
        gt2.push(el)
    }
}
// gt2 == [3, 4, 5]
```
