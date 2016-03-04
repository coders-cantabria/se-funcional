## map

<div class="fragment">
<pre><code class="lang-js javascript hljs">const map = (f, xs) =&gt;
  0 === xs.length
    ? []
    : [f(xs[0])].concat(map(f, xs.slice(1)))
</code></pre>
</div>
