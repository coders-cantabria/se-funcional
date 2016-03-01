```js
// import R from 'ramda'
const htmlEl = (tagName) =>
  (body) => `<${tagName}>${body}</${tagName}>`
const tbody = htmlEl('tbody')
const tr = htmlEl('tr')
const td = htmlEl('td')
const ul = htmlEl('ul')
const li = htmlEl('li')

const users2html = (us) => R.compose(tbody, R.reduce((acc, u) => {
    // const balance = reduce((a, b) => a + b, 0, u.transactions) + ' €'
    // const balance = reduce(R.add, 0, u.transactions) + ' €'
    const balance = R.sum(u.transactions) + ' €'

    // const fusers = R.filter(fuser => u.friends.indexOf(fuser.id) > -1, us)
    const fusers = R.filter(R.compose(R.contains(R.__, u.friends), R.pluck('id')), us)

    // const friendsHtml = '<ul>' + R.reduce(
    //   (acc, u) => acc + '<li>' + u.name + '</li>'
    //   , '', fusers) + '</ul>'
    const friendsHtml = ul(R.reduce(R.compose(li, R.pluck('id')), '', fusers))

    const colHtml = R.map(td, [
      u.id,
      u.name,
      u.occupation,
      balance,
      friendsHtml,
    ])

    return acc + tr(R.reduce(R.concat,'',colHtml))

} ,''))(us)
```
