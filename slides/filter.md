## filter

<div class="fragment">
<pre><code class="lang-js javascript hljs">const filter = (pred, xs) =&gt;
  0 === xs.length
    ? []
    : pred(xs[0]) ? [xs[0]].concat(filter(pred, xs.slice(1)))
                  : filter(pred, xs.slice(1))
</code></pre>
</div>
