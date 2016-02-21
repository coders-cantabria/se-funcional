* Verbos (push, increment, …)
* Manipular datos compartidos
* Utiliza efectos secundarios

```js
var l = [1, 2, 3, 4, 5]
var gt2 = []
for (var i = 0; i < l.length; i++) {
    if (l[i] > 2) {
        gt2.push(l[i])
    }
}
// [3, 4, 5]
```
