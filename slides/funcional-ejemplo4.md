<h2>
¿Ves la similaridad?
</h2>

<div style="float:left;width:50%;">
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
<div style="float:left;width:50%;">
<svg xmlns="http://www.w3.org/2000/svg" width="321" height="345" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="a">
      <stop offset="0" stop-color="#ffc103"/>
      <stop offset=".5" stop-color="#ffc103"/>
      <stop offset="1" stop-color="#ffc103" stop-opacity="0"/>
    </linearGradient>
    <linearGradient id="b">
      <stop offset="0" stop-color="#c033d6"/>
      <stop offset=".5" stop-color="#c033d6"/>
      <stop offset="1" stop-color="#c033d6" stop-opacity="0"/>
    </linearGradient>
    <linearGradient id="e">
      <stop offset="0" stop-color="#05944c"/>
      <stop offset=".5" stop-color="#05944c"/>
      <stop offset="1" stop-color="#05944c" stop-opacity="0"/>
    </linearGradient>
    <linearGradient id="d">
      <stop offset="0" stop-color="#0983ff"/>
      <stop offset=".5" stop-color="#0783e6"/>
      <stop offset="1" stop-color="#0683cd" stop-opacity="0"/>
    </linearGradient>
    <linearGradient id="c">
      <stop offset="0" stop-color="#bd264f"/>
      <stop offset=".5" stop-color="#bd264f"/>
      <stop offset="1" stop-color="#bd264f" stop-opacity="0"/>
    </linearGradient>
    <radialGradient id="j" cx="263.65" cy="113.425" r="18.688" xlink:href="#a" fx="263.65" fy="113.425" gradientUnits="userSpaceOnUse"/>
    <radialGradient id="i" cx="263.65" cy="113.425" r="18.688" xlink:href="#b" fx="263.65" fy="113.425" gradientUnits="userSpaceOnUse"/>
    <radialGradient id="f" cx="263.65" cy="113.425" r="18.688" xlink:href="#c" fx="263.65" fy="113.425" gradientUnits="userSpaceOnUse"/>
    <radialGradient id="g" cx="263.65" cy="113.425" r="18.688" xlink:href="#d" fx="263.65" fy="113.425" gradientUnits="userSpaceOnUse"/>
    <radialGradient id="h" cx="263.65" cy="113.425" r="18.688" xlink:href="#e" fx="263.65" fy="113.425" gradientUnits="userSpaceOnUse"/>
  </defs>

  <g>
    <text fill="#fff" font-size="28" font-family="sans-serif"><tspan x="75" y="50" text-anchor="middle">Input</tspan></text>
    <path fill="#333" stroke="#969696" stroke-width="1" d="M130.088 185.937c0 67.784-24.987 122.734-55.81 122.734-30.824 0-55.81-54.95-55.81-122.73 0-67.784 24.986-122.733 55.81-122.733 30.823 0 55.81 54.95 55.81 122.733z"/>
    <path fill="#bd264f" stroke="#000" stroke-width="1" d="M91.198 111.69l-18.61.138-18.608.137 9.186-16.184L72.35 79.6l9.425 16.047z"/>
    <path fill="#ffc103" stroke="#000" stroke-width="1" d="M47.256 141.49h48.487v12.628H47.256z"/>
    <path fill="#05944c" stroke="#000" stroke-width="1" d="M89.177 195.028l-17.172-11.616-15.658 14.647 6.566 25.25 26.77-9.09-15.658-10.607z"/>
    <path fill="#bd264f" stroke="#000" stroke-width="1" d="M55.842 249.072h31.82v31.315h-31.82z"/>
  </g>
  <g>
    <text fill="#fff" font-size="28" font-family="sans-serif"><tspan x="240" y="35" text-anchor="middle">Output</tspan></text>
    <path fill="#333" stroke="#969696" stroke-width="1" d="M303 185.937c0 76.99-27.25 139.4-60.862 139.4-33.613 0-60.862-62.41-60.862-139.4 0-76.99 27.25-139.4 60.862-139.4 33.613 0 60.862 62.41 60.862 139.4z"/>
    <path fill="url(#f)" d="M282.338 113.425c0 10.32-8.367 18.688-18.688 18.688-10.32 0-18.688-8.367-18.688-18.688 0-10.32 8.367-18.687 18.688-18.687 10.32 0 18.688 8.366 18.688 18.687z" transform="translate(-21.96 -26.988)"/>
    <path fill="url(#g)" d="M282.338 113.425c0 10.32-8.367 18.688-18.688 18.688-10.32 0-18.688-8.367-18.688-18.688 0-10.32 8.367-18.687 18.688-18.687 10.32 0 18.688 8.366 18.688 18.687z" transform="translate(-21.96 22.004)"/>
    <path fill="url(#h)" d="M282.338 113.425c0 10.32-8.367 18.688-18.688 18.688-10.32 0-18.688-8.367-18.688-18.688 0-10.32 8.367-18.687 18.688-18.687 10.32 0 18.688 8.366 18.688 18.687z" transform="translate(-21.96 70.49)"/>
    <path fill="url(#i)" d="M282.338 113.425c0 10.32-8.367 18.688-18.688 18.688-10.32 0-18.688-8.367-18.688-18.688 0-10.32 8.367-18.687 18.688-18.687 10.32 0 18.688 8.366 18.688 18.687z" transform="translate(-21.96 117.97)"/>
    <path fill="url(#j)" d="M282.338 113.425c0 10.32-8.367 18.688-18.688 18.688-10.32 0-18.688-8.367-18.688-18.688 0-10.32 8.367-18.687 18.688-18.687 10.32 0 18.688 8.366 18.688 18.687z" transform="translate(-21.96 164.94)"/>
  </g>

  <g>
    <path d="M230.55 85.418L81.582 95.543l.062 1 149-10.125-.094-1z"/>
    <path stroke="#000" stroke-width="1" d="M235.204 85.62l-6.634 4.46-.54-7.983 7.174 3.523z"/>
    <path d="M233.238 94.7L87.268 265.417l.782.656 145.97-170.72-.782-.655z"/>
    <path stroke="#000" stroke-width="1" d="M236.63 91.515l-1.458 7.86-6.08-5.2 7.537-2.66z"/>
    <path d="M231.613 184.418l-152.563 3.03.03 1 152.533-3.03v-1z"/>
    <path stroke="#000" stroke-width="1" d="M236.224 184.835l-6.84 4.137-.158-8 6.998 3.863z"/>
    <path d="M95.582 147.168l-.688.75L232.8 274.698l.657-.75L95.582 147.17z"/>
    <path stroke="#000" stroke-width="1" d="M236.522 277.45l-7.8-1.74 5.413-5.89 2.387 7.63z"/>
  </g>

</svg>
</div>
