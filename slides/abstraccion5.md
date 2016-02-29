5
```js
let rows = []
for (let i=0; i<us.length; i++) { const u = us[i]
  // ...
  rows.push('<tr>' + colHtml + '</tr>')
}
```
```js
let balance = 0
for (let j=0; j<u.transactions.length; j++) {
  balance += u.transactions[j]
}
```
```js
let fusers = []
for (let j=0; j<us.length; j++) { const fuser = us[j]
  if (u.friends.indexOf(fuser.id) > -1) {
    fusers.push(fuser)
  }
}
```
```js
let friendsHtml = ''
for (let j=0; j<fusers.length; j++) { const f = fusers[j]
  const fname = f.name
  friendsHtml += '<li>' + fname + '</li>'
}
```
