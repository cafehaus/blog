import{h as n}from"./app.c91e4ae6.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},e=n(`<h1 id="t-design\u7EC4\u4EF6\u8E29\u5751\u8BB0" tabindex="-1"><a class="header-anchor" href="#t-design\u7EC4\u4EF6\u8E29\u5751\u8BB0" aria-hidden="true">#</a> t-design\u7EC4\u4EF6\u8E29\u5751\u8BB0</h1><p>t-design\u7684t-form\u7528\u7684\u6821\u9A8C\u5E93validator.js\u4E0D\u80FD\u50CFiview\u548Celement-ui\u7528\u7684\u6821\u9A8C\u5E93 async-validator \u4E00\u6837\uFF0C\u76F4\u63A5\u628A\u81EA\u5B9A\u4E49\u6821\u9A8C\u5199\u5728\u4E00\u4E2A\u89C4\u5219\u91CC\u9762\uFF0C\u8981\u5355\u72EC\u5199\u4E00\u4E2A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>  <span class="token keyword">const</span> rules <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">phone</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token comment">// {</span>
      <span class="token comment">//   required: true,</span>
      <span class="token comment">//   message: &#39;\u8BF7\u8F93\u5165\u624B\u673A\u53F7&#39;,</span>
     <span class="token comment">//    validator: validateText</span>
      <span class="token comment">//   type: &#39;error&#39;,</span>
      <span class="token comment">//   trigger: &#39;change&#39;,</span>
      <span class="token comment">// },</span>
      <span class="token punctuation">{</span> <span class="token literal-property property">validator</span><span class="token operator">:</span> validateText <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div>`,3);function p(t,r){return e}var l=s(a,[["render",p]]);export{l as default};
