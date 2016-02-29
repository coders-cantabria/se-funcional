```js
const users2html = (us) => {
  let rowHtml = '';
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
      friendsHtml += '<li>' + f.name + '</li>'
    }
    colHtml += '<td><ul>' + friendsHtml + '</ul></td>'

    rowHtml += '<tr>' + colHtml + '</tr>'
  }

  return '<tbody>' + rowHtml + '</tbody>'
}

document.querySelector('#app').innerHTML = users2html(users)
```
