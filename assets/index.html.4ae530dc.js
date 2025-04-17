import{g as n}from"./app.9ce014b4.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},p=n(`<h1 id="vue\u4E2D\u6587\u672C\u5B57\u7B26\u4E32\u5B9E\u73B0\u6362\u884C" tabindex="-1"><a class="header-anchor" href="#vue\u4E2D\u6587\u672C\u5B57\u7B26\u4E32\u5B9E\u73B0\u6362\u884C" aria-hidden="true">#</a> vue\u4E2D\u6587\u672C\u5B57\u7B26\u4E32\u5B9E\u73B0\u6362\u884C</h1><p>vue \u4E2D\u6587\u672C\u6362\u884C\uFF0Cbr \u6807\u7B7E\u8981\u7528 v-html \u53BB\u6E32\u67D3\u624D\u4F1A\u751F\u6548\u3002\u666E\u901A\u5B57\u7B26\u4E32\u60F3\u76F4\u63A5\u6362\u884C\uFF0C\u53EF\u4EE5\u901A\u8FC7 \\n \u548C css \u91CC\u7684 white-space: pre-line/pre-wrap/pre \u5B9E\u73B0\u6587\u672C\u5B57\u7B26\u4E32\u6362\u884C</p><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">v-html</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>htmlTxt<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>p<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>{{ txt }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">htmlTxt</span><span class="token operator">:</span> <span class="token string">&#39;\u6211\u662F&lt;br /&gt;\u5468\u5C0F\u9ED1&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">txt</span><span class="token operator">:</span> <span class="token string">&#39;\u6211\u662F\\n\u5468\u5C0F\u9ED1&#39;</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
<span class="token selector">.p</span> <span class="token punctuation">{</span>
  <span class="token property">white-space</span><span class="token punctuation">:</span> pre-line<span class="token punctuation">;</span> <span class="token comment">/* pre-line/pre-wrap/pre */</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><p>\u5982\u679C\u8FD8\u6709\u4E00\u4E9B\u903B\u8F91\u5224\u65AD\u6216\u8005\u8981\u7ED1\u5B9A\u4E8B\u4EF6\uFF0C\u5C31\u53EA\u80FD\u81EA\u5DF1\u901A\u8FC7\u4E00\u5B9A\u7684\u89C4\u5219\u53BB\u5148\u89E3\u6790\u6210\u6570\u7EC4\uFF0C\u518D\u7528 v-for \u53BB\u5FAA\u73AF\u6E32\u67D3\uFF0C\u8FD9\u6837\u5C31\u53EF\u4EE5\u5B9E\u73B0\u4EFB\u4F55\u81EA\u5DF1\u60F3\u8981\u7684\u81EA\u5B9A\u4E49\u6548\u679C\uFF0Cv-html \u53BB\u76F4\u63A5\u6E32\u67D3\u6807\u7B7E\u4E0D\u592A\u63A8\u8350\uFF0C\u5373\u4F7F\u8981\u7528\u4E5F\u8981\u81EA\u5DF1\u5148\u8FC7\u6EE4\u6389\u91CC\u9762\u7684 style \u548C script \u6807\u7B7E\u5185\u5BB9\uFF0C\u5426\u5219\u6709\u53EF\u80FD\u5F71\u54CD\u5230\u4F60\u7684\u9875\u9762</p>`,4);function t(e,c){return p}var u=s(a,[["render",t]]);export{u as default};
