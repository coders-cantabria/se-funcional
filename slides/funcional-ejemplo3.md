## F :: Input -> Output

```js
function increment(x) {
    return x + 1
}
```

<div class="fragment">
<pre><code class="lang-js hljs javascript">function increment(x) {
    switch (x) {
        // ...
        case -1: return 0
        case  0: return 1
        case  1: return 2
        case  2: return 3
        // ...
    }
}</code></pre>
</div>

<div class="fragment">
Esto es un ejemplo de una optimización *real*.
</div>

