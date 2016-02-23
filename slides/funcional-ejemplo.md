## Ejemplo

```js
var l = [1, 2, 3, 4, 5]
var gt2 = l.filter(function(el) { return el > 2; })
// [3, 4, 5]
```

<div class="fragment" data-markdown>


<h3 id="es6-es2015-">ES6 <em>(ES2015)</em></h3>
<pre><code class="lang-js hljs javascript">const l = [1, 2, 3, 4, 5]
const gt2 = l.filter(el => el > 2)
const gt2x = l.filter((el) => { return el > 2 })
// [3, 4, 5]
</code></pre>

</div>
