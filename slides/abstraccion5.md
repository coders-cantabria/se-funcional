```js
const balance = reduce((a, b) => a + b, 0, u.transactions)
```
<div class="fragment"><pre class="hljs javascript"><code>const reduce__ = (f, ini, arr) => '?'
</code></pre></div>

<div class="fragment"><pre class="hljs javascript"><code>const reduce = (f, acc, arr) =>
  0 === arr.length
    ? acc
    : reduce(f, f(acc, arr[0]), arr.slice(1))
</code></pre></div>
