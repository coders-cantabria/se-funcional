## Higher order functions

```js
function logInOut(f) {
    return (...args) => {
        const result = f(...args)
        console.log("%s(%s) = %O", f.name, args.join(', '), result)
        return result
    }
}

function add(x, y) { return x + y }

const logAdd = logInOut(add)

var x = logAdd(5, 10)
// logs "add(5, 10) = 15"
// x === 15
```


<div class="fragment">
<pre><code class="lang-js hljs javascript">logInOut(add)(5, 10)
// logs "add(5, 10) = 15"
// returns 15
</code></pre>
</div>
