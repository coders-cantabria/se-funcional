```js
const users2html = () => {
  var rowHtml = '';
  for (let i=0; i<us.length; i++) { const u = us[i]
    let colHtml = '';
    colHtml += '<td>' + u.id + '</td>'
    colHtml += '<td>' + u.name + '</td>'
    colHtml += '<td>' + u.occupation + '</td>'

    let balance = 0
    for (let j=0; j<u.transactions.length; j++) { const t = u.transactions[j]
      balance += t
    }
    colHtml += '<td>' + balance + ' €</td>'

    let fs = []
    for (let j=0; j<us.length; j++) { const fuser = us[j]
      if (u.friends.indexOf(fuser.id) > -1) {
        fs.push(fuser)
      }
    }

    let friendHtml = ''
    for (let j=0; j<fs.length; j++) { const f = fs[j]
      friendHtml += '<li>' + f.name + '</li>'
    }
    colHtml += '<td><ul>' + friendHtml + '</ul></td>'

    rowHtml += '<tr>' + colHtml + '</tr>'
  }
  return '<tbody>' + rowHtml + '</tbody>'
}

document.querySelector('#app').innerHTML = users2html()
```
