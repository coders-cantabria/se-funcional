```js
const users2html = (us) => {
  let rowHtml = '';
  for (let i=0; i<us.length; i++) { const u = us[i]

    // make HTML...

    rowHtml += '<tr>' + colHtml + '</tr>'
  }

  return '<tbody>' + rowHtml + '</tbody>'
}

document.querySelector('#app').innerHTML = users2html(users)
```

### !! `reduce` !!

```js
// userToHtml :: String -> [users] -> String
// const userToHtml = (html, u) => undefined
const users2html = (us) =>
  '<tbody>' + reduce(userToHtml, '', us) + '</tbody>'

document.querySelector('#app').innerHTML = users2html(users)
```

---

```js
let balance = 0
for (let j=0; j<u.transactions.length; j++) {
  const t = u.transactions[j]
  balance += t
}
colHtml += '<td>' + balance + ' €</td>'
```

### !! `reduce` !!

```js
const balance = reduce((a, b) => a + b, 0, u.transactions)
```
