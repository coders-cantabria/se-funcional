<div>
<pre><code class="lang-js javascript hljs">const map = (f, xs) =&gt;
  0 === xs.length
    ? []
    : [f(xs[0])].concat(map(f, xs.slice(1)))
</code></pre>

<pre><code class="lang-js javascript hljs">const filter = (pred, xs) =&gt;
  0 === xs.length
    ? []
    : pred(xs[0]) ? [xs[0]].concat(filter(pred, xs.slice(1)))
                  : filter(pred, xs.slice(1))
</code></pre>
</div>


<div class="fragment">
<pre><code class="lang-js javascript hljs">const map\_ = (f, xs) =&gt;
  reduce((acc, x) => acc.concat(f(x)), [], xs)
</code></pre>

<pre><code class="lang-js javascript hljs">const filter\_ = (pred, xs) =&gt;
  reduce((acc, x) => pred(x) ? acc.concat(x) : acc, [], xs)
</code></pre>
</div>


