## Higher order functions

```js
const logInOut = (f) =>
    (...args) => {
        const result = f(...args)
        console.log("%s(%s) = %O", f.name, args.join(', '), result)
        return result
    }

const add = (x, y) => x + y

const logAdd = logInOut(add)

var x = logAdd(5, 10)
// loguea "add(5, 10) = 15"
// x === 15
```


<div class="fragment">
<pre><code class="lang-js hljs javascript">logInOut(add)(5, 10)
// loguea "add(5, 10) = 15"
// returns 15
</code></pre>
</div>
