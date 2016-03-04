## `f :: i -> o`

```js
const add1 = (x) => x + 1
```

<div class="fragment">
Igual que (teóricamente):
<pre><code class="lang-js hljs javascript">const add1_ = (x) => {
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
