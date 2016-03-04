## reduce

<div class="fragment">
<pre><code class="lang-js javascript hljs">const reduce = (f, acc, xs) =&gt;
  0 === xs.length
    ? acc
    : reduce(f, f(acc, xs[0]), xs.slice(1))
</code></pre>
</div>
