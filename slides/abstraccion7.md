```js
const users2html = (us) => '<tbody>' + reduce((acc, u) => {
    const balance = reduce((a, b) => a + b, 0, u.transactions) + ' €'

    const fusers = filter(fuser => u.friends.indexOf(fuser.id) > -1, us)
    const friendsHtml = '<ul>' + reduce(
      (acc, u) => acc + '<li>' + u.name + '</li>'
      , '', fusers) + '</ul>'

    const colHtml =
      '<td>' + u.id         + '</td>' +
      '<td>' + u.name       + '</td>' +
      '<td>' + u.occupation + '</td>' +
      '<td>' + balance      + '</td>' +
      '<td>' + friendsHtml  + '</td>'

    return acc + '<tr>' + colHtml + '</tr>'

} ,'',us) + '</tbody>'
```
