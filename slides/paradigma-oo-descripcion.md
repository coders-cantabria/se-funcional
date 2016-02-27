Utiliza objetos para favorecer:

* Encapsulamiento / abstraer
* Reutilizar de código

```js
function GtArray(arr, limit) {
    this.value = []
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > 2) {
            this.value.push(arr[i])
        }
    }

    this.getValue = function() { return this.value }
}

var gtArray = new GtArray([1, 2, 3, 4, 5])
// gtArray.getValue() == [3, 4, 5]
```

