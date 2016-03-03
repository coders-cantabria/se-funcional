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
