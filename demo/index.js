const add = (a, b) => a + b
const prod = (a, b) => a * b
const gt = (a, b) => a > b
const gte = (a, b) => a >= b
const lt = (a, b) => a < b
const lte = (a, b) => a <= b
const eq = (a, b) => a === b


const compose = (f, g) => (...args) => f(g(...args))

const apply = (f, x) => (y) => f(x, y)

const repeat = (f, x, times) =>
  times === 0
    ? x
    : repeat(f, f(x), times - 1)

const curry = (f) => repeat(x => apply(apply, x), f, f.length - 1)

const map = (f, xs) =>
  0 === xs.length
    ? []
    : [f(xs[0])].concat(map(f, xs.slice(1)))

const filter = (pred, xs) =>
  0 === xs.length
    ? []
    : pred(xs[0]) ? [xs[0]].concat(filter(pred, xs.slice(1)))
                  : filter(pred, xs.slice(1))

const reduce = (f, acc, xs) =>
  0 === xs.length
    ? acc
    : reduce(f, f(acc, xs[0]), xs.slice(1))

const map_ = (f, xs) =>
  reduce((acc, x) => acc.concat(f(x)), [], xs)

const filter_ = (pred, xs) =>
  reduce((acc, x) => pred(x) ? acc.concat(x) : acc, [], xs)

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

const logInOut = (f) =>
    (...args) => {
        const result = f(...args)
        console.log('%s(%s) = %O', f.name, args.join(', '), result)
        return result
    }

const fibo = (n) => n < 1 ? 0
                          : n < 3 ? 1
                                  : fibo(n-1) + fibo(n-2)

const initCounter = (init) => () => init++

const memo = (f) => {
    _memo = {}
    return (...args) => {
        const input = JSON.stringify(args)
        return _memo[input] ? _memo[input]
                            : _memo[input] = f(...args)
    }
}

const fibo_ = memo(
    (n) => n < 1 ? 0 : n < 3 ? 1 : fibo_(n-1) + fibo_(n-2)
)

const fiboL = logInOut(
    (n) => n < 1 ? 0 : n < 3 ? 1 : fiboL(n-1) + fiboL(n-2)
)

const fiboL_ = memo(logInOut(
    (n) => n < 1 ? 0 : n < 3 ? 1 : fiboL_(n-1) + fiboL_(n-2)
))

/* eslint no-console:0 */
