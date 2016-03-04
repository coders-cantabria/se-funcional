```js
let rowHtml = ''
for (let i=0; i<us.length; i++) { const u = us[i]
  // ...
  rowHtml = rowHtml + '<tr>' + colHtml + '</tr>'
}
```
```js
let balance = 0
for (let j=0; j<u.transactions.length; j++) {
  balance = balance + u.transactions[j]
}
```
```js
let friendsHtml = ''
for (let j=0; j<fusers.length; j++) { const f = fusers[j]
  friendsHtml = friendsHtml + '<li>' + f.name + '</li>'
}
```
