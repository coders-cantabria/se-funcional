# Mutaciones

```js
var x = 0
var l= [1, 2, 3, 4, 5]
for (let i=0; i<l.length; i++) {
    if (l[i]++ % 2 === 0) {   // <- Mutación
        x++                   // <- Mutación
    }
}
// x == ??
// l == ??
```

<div class="fragment">

<pre><code class="lang-js hljs javascript">x == 2
y == [2, 3, 4, 5, 6]
</code></pre>
</div>
