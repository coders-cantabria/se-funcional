A partir de una lista de usuarios, crear una tabla html.

<div style="float:left;width:50%">
<pre><code class="lang-js hljs xml">const users = [
  {
    id: '87e2fbc2',
    name: 'Frank Underwood',
    ocupation: 'Whip',
    friends: [
      'bc15b67f',
      '6ba21fbd',
      '9aa690e0'
    ],
    transactions: [
      100, -10, 20, -99
    ]
  },
  // ...
]
</code></pre>
</div>

<div style="float:left;width:50%">
<pre><code class="lang-html hljs xml">&lt;!-- ... --&gt;
&lt;tr&gt;
  &lt;td&gt;87e2fbc25&lt;/td&gt;
  &lt;td&gt;Frank Underwood&lt;/td&gt;
  &lt;td&gt;Whip&lt;/td&gt;
  &lt;td&gt;&lt;ul&gt;
    &lt;li&gt;Zoe Barnes&lt;/li&gt;
    &lt;li&gt;Claire Underwood&lt;/li&gt;
    &lt;li&gt;Doug Stamper&lt;/li&gt;
  &lt;/ul&gt;&lt;/td&gt;
&lt;/tr&gt;
&lt;!-- ... --&gt;
</code></pre>
</div>
