## Recursión

```js
function fibonacci(n) {
    if (n < 1) {
        return 0
    }
    if (n === 1 || n === 2) {
        return 1
    }
    return fibonacci(n - 1) + fibonacci(n - 2)
}
```
<div class="fragment">
Como expresión:
<pre><code class="lang-js hljs javascript">const fibo = (n) => n < 1 ? 0
    : n < 3 ? 1
        : fibo(n-1) + fibo(n-2)
</code></pre>
</div>
