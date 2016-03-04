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

