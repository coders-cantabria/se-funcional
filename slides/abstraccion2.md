```js
const users2html = () => {
  let rows = [];
  for (let i=0; i<us.length; i++) { const u = us[i]
    let colHtml = ''
    colHtml += '<td>'+u.id+'</td><td>'+u.name+'</td><td>'+u.occupation+'</td>'

    let balance = 0
    for (let j=0; j<u.transactions.length; j++) { const t = u.transactions[j]
      balance += t
    }
    colHtml += '<td>' + balance + ' €</td>'

    let fusers = []
    for (let j=0; j<us.length; j++) { const fuser = us[j]
      if (u.friends.indexOf(fuser.id) > -1) {
        fusers.push(fuser)
      }
    }

    let friendsHtml = ''
    for (let j=0; j<fusers.length; j++) { const f = fusers[j]
      const fname = f.name
      friendsHtml += '<li>' + fname + '</li>'
    }
    colHtml += '<td><ul>' + friendsHtml + '</ul></td>'

    rows.push('<tr>' + colHtml + '</tr>')
  }

  return '<tbody>' + rows.join('') + '</tbody>'
}

document.querySelector('#app').innerHTML = users2html()
```
