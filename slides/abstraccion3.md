```js
let fusers = []
for (let j=0; j<us.length; j++) { const fuser = us[j]
  if (u.friends.indexOf(fuser.id) > -1)
    fusers.push(fuser)
}
```

### !! `filter` !!

```js
const fusers = filter(fuser => u.friends.indexOf(fuser.id) > -1, us)
```

```js
const filter_ = (pred, arr) =>
  0 === arr.length
    ? []
    : pred(arr[0]) ? filter(pred, arr.slice(1)).concat([arr[0]])
                   : filter(pred, arr.slice(1))
```
