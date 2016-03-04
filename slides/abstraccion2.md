```js
const users2html = (us) => {
  let rowHtml = '';
  for (let i=0; i<us.length; i++) { const u = us[i]
    let colHtml = '<td>'+u.id+'</td>'
                + '<td>'+u.name+'</td>' + '<td>'+u.occupation+'</td>'

    let balance = 0
    for (let j=0; j<u.transactions.length; j++) {
      balance += u.transactions[j]
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
