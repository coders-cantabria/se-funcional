```js
const add = (a, b) => a + b
const elem = (x, xs) => -1 < xs.indexOf(x)
const wrap = (el) => (t) => `<${el}>${t}</${el}>`
const td = wrap('td')

const u2html = (us) => (u) => {
  const balance = reduce(add, 0, u.transactions) + ' €'
  const friendsHtml = wrap('ul')(
    reduce((html,f) =>
        elem(f.id, u.friends) 
          ? html + wrap('li')(f.name)
          : html
    , '', us)
  )

  const colHtml = map(td, [u.id, u.name, u.occupation, balance, friendsHtml]).join('')
  return wrap('tr')(colHtml)
}

const users3html = (us) => wrap('tbody')(map(u2html(us), us).join(''))
```

---

```js
const users2html = (us) => {
  let rowHtml = '';
  for (let i=0; i<us.length; i++) { const u = us[i]

    let colHtml = '<td>'+u.id+'</td>'
                + '<td>'+u.name+'</td>'
                + '<td>'+u.occupation+'</td>'

    let balance = 0
    for (let j=0; j<u.transactions.length; j++) {
      const t = u.transactions[j]
      balance += t
    }
    colHtml += '<td>' + balance + ' €</td>'

    let friendsHtml = ''
    for (let j=0; j<us.length; j++) { const f = us[j]
        if (u.friends.indexOf(f.id) > -1) {
          friendsHtml += '<li>' + f.name + '</li>'
        }
    }
    colHtml += '<td><ul>' + friendsHtml + '</ul></td>'
    rowHtml += '<tr>' + colHtml + '</tr>'
  }

  return '<tbody>' + rowHtml + '</tbody>'
}
```
