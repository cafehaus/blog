import{g as n}from"./app.9ce014b4.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},e=n(`<h1 id="\u5728javascript\u4E2D\u5982\u4F55\u5C06\u5B57\u7B26\u4E32\u8F6C\u6210\u53D8\u91CF\u6216\u53EF\u6267\u884C\u7684\u4EE3\u7801" tabindex="-1"><a class="header-anchor" href="#\u5728javascript\u4E2D\u5982\u4F55\u5C06\u5B57\u7B26\u4E32\u8F6C\u6210\u53D8\u91CF\u6216\u53EF\u6267\u884C\u7684\u4EE3\u7801" aria-hidden="true">#</a> \u5728javascript\u4E2D\u5982\u4F55\u5C06\u5B57\u7B26\u4E32\u8F6C\u6210\u53D8\u91CF\u6216\u53EF\u6267\u884C\u7684\u4EE3\u7801\uFF1F</h1><p>\u6709\u8FD9\u6837\u4E00\u4E2A\u9700\u6C42\uFF1A\u5F53\u524D\u4F5C\u7528\u57DF\u5185\u6709\u672A\u77E5\u7684\u4E00\u4E9B\u53D8\u91CF\uFF0C\u5176\u4E2D\u4E00\u4E2A\u51FD\u6570\u4E2D\u53EF\u4EE5\u62FF\u5230\u67D0\u4E2A\u53D8\u91CF\u540D\u5B57\u7B26\u4E32\uFF0C\u600E\u4E48\u80FD\u5728\u51FD\u6570\u5185\u901A\u8FC7\u4F20\u8FDB\u6765\u7684\u5B57\u7B26\u4E32\u53D6\u5230\u4F5C\u7528\u57DF\u94FE\u4E2D\u7684\u53D8\u91CF\u503C\uFF0C\u793A\u4F8B\u5C0F demo \u5982\u4E0B\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> name <span class="token operator">=</span> <span class="token string">&#39;\u5468\u5C0F\u9ED1&#39;</span>
<span class="token keyword">const</span> age <span class="token operator">=</span> <span class="token number">18</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>String<span class="token punctuation">}</span></span> <span class="token parameter">e</span> \u53D8\u91CF\u540D\u5B57\u7B26\u4E32
 * <span class="token keyword">@returns</span> value \u901A\u8FC7\u53D8\u91CF\u540D\u5B57\u7B26\u4E32\u5728\u4F5C\u7528\u57DF\u94FE\u4E2D\u53D6\u5230\u7684\u53D8\u91CF\u503C
 */</span>
<span class="token keyword">function</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> value
  <span class="token comment">// ...</span>
  <span class="token keyword">return</span> value
<span class="token punctuation">}</span>

<span class="token keyword">const</span> str <span class="token operator">=</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token string">&#39;name&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><p>\u8981\u89E3\u51B3\u4E0A\u9762\u7684\u95EE\u9898\uFF0C\u4E3B\u8981\u5C31\u662F\u600E\u4E48\u5C06\u5B57\u7B26\u4E32\u8F6C\u53D8\u6210\u53EF\u6267\u884C\u7684\u4EE3\u7801\uFF1F\u4E3B\u8981\u6709\u4E09\u79CD\u65B9\u5F0F\uFF1A</p><h3 id="eval-\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#eval-\u51FD\u6570" aria-hidden="true">#</a> eval() \u51FD\u6570</h3><p>eval() \u51FD\u6570\u4F1A\u5C06\u4F20\u5165\u7684\u5B57\u7B26\u4E32\u5F53\u505A JavaScript \u4EE3\u7801\u8FDB\u884C\u6267\u884C\uFF0C\u6240\u4EE5\u4E0B\u9762\u7684\u5B57\u7B26\u4E32\u53EF\u4EE5\u6B63\u786E\u53D6\u5230\u53D8\u91CF\u5BF9\u5E94\u7684\u503C\uFF0Ceval \u5BF9\u6BD4 new Function \u548C setTimeout \u5B83\u662F\u53EF\u4EE5\u8BBF\u95EE\u5C40\u90E8\u4F5C\u7528\u57DF\u7684\uFF0C\u540E\u4E24\u8005\u90FD\u53EA\u80FD\u8BBF\u95EE\u5168\u5C40\u4F5C\u7528\u57DF\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> name <span class="token operator">=</span> <span class="token string">&#39;\u5468\u5C0F\u9ED1&#39;</span>
<span class="token keyword">const</span> age <span class="token operator">=</span> <span class="token number">18</span>

<span class="token keyword">function</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> value <span class="token operator">=</span> <span class="token function">eval</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span>
  <span class="token keyword">return</span> value
<span class="token punctuation">}</span>

<span class="token keyword">const</span> str <span class="token operator">=</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token string">&#39;name&#39;</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>\u5F88\u591A\u5730\u65B9\u90FD\u80FD\u770B\u5230\u8FD9\u53E5\u540D\u8A00\uFF1Aeval is evil\uFF0Ceval \u662F\u9B54\u9B3C\u3002\u6240\u4EE5\u4F7F\u7528 eval \u7684\u65F6\u5019\u8981\u6CE8\u610F\uFF0C\u6027\u80FD\u4F4E\u800C\u4E14\u6709\u5B89\u5168\u98CE\u9669\u3002</p><h3 id="new-function" tabindex="-1"><a class="header-anchor" href="#new-function" aria-hidden="true">#</a> new Function()</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> name <span class="token operator">=</span> <span class="token string">&#39;\u5468\u5C0F\u9ED1&#39;</span>
<span class="token keyword">const</span> age <span class="token operator">=</span> <span class="token number">18</span>

<span class="token keyword">function</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> value <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Function</span><span class="token punctuation">(</span><span class="token string">&#39;return &#39;</span> <span class="token operator">+</span> e<span class="token punctuation">)</span>
  <span class="token keyword">return</span> value
<span class="token punctuation">}</span>

<span class="token keyword">const</span> str <span class="token operator">=</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token string">&#39;name&#39;</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>\u5BF9\u4E8E\u51FD\u6570\u6211\u4EEC\u5E73\u65F6\u90FD\u662F\u76F4\u63A5\u7528 function \u6216\u8005\u7BAD\u5934\u51FD\u6570\u521B\u5EFA\uFF0C\u4E0D\u4F1A\u7528\u6784\u9020\u51FD\u6570\u6765\u521B\u5EFA\u51FD\u6570\uFF0C\u4E00\u822C\u4F7F\u7528\u4E5F\u662F\u4E3A\u4E86\u6765\u52A8\u6001\u521B\u5EFA\u51FD\u6570\uFF0C\u56E0\u4E3A new Function \u6700\u540E\u4E00\u4E2A\u53C2\u6570\u662F\u51FD\u6570\u4F53\u5B57\u7B26\u4E32\uFF0C\u8FD9\u6837\u6211\u4EEC\u5C31\u53EF\u4EE5\u7528\u6765\u52A8\u6001\u751F\u6210\u62FC\u63A5\uFF0C\u5177\u4F53\u8BED\u6CD5\u5982\u4E0B\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">let</span> func <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Function</span><span class="token punctuation">(</span><span class="token punctuation">[</span>arg1<span class="token punctuation">,</span> arg2<span class="token punctuation">,</span> <span class="token operator">...</span>argN<span class="token punctuation">]</span><span class="token punctuation">,</span> functionBody<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u6CE8\u610F\u51FD\u6570\u4F53\u4E2D\u53EA\u80FD\u8BBF\u95EE\u5168\u5C40\u4F5C\u7528\u57DF\uFF0C\u4E0D\u80FD\u8BBF\u95EE\u5C40\u90E8\u4F5C\u7528\u57DF\u3002</p><h3 id="settimeout" tabindex="-1"><a class="header-anchor" href="#settimeout" aria-hidden="true">#</a> setTimeout</h3><p>\u5B9A\u65F6\u5668 setTimeout \u7684\u7B2C\u4E00\u4E2A\u53C2\u6570\u6211\u4EEC\u5E73\u65F6\u90FD\u662F\u4F20\u4E00\u4E2A\u51FD\u6570\uFF0C\u5B83\u5176\u5B9E\u4E5F\u662F\u53EF\u4EE5\u4F20\u5B57\u7B26\u4E32\u8FDB\u53BB\u7684\uFF0C\u5728\u6D4F\u89C8\u5668\u4E2D\u662F\u53EF\u4EE5\u6B63\u5E38\u6267\u884C\u7684\uFF0C\u5728node\u73AF\u5883\u4E2D\u4F1A\u62A5\u9519\u3002</p><p>\u5B9E\u9645\u4E0A\u6D4F\u89C8\u5668\u4E2D\u4E5F\u662F\u4E0D\u63A8\u8350\u8FD9\u4E48\u7528\u7684\uFF0C\u53E6\u5916\u9700\u8981\u6CE8\u610F\u7684\u662F\u5B57\u7B26\u4E32\u4E2D\u7684\u53D8\u91CF\u53EA\u80FD\u8BBF\u95EE\u5168\u5C40\u4F5C\u7528\u57DF\uFF0C\u4E0D\u80FD\u8BBF\u95EE\u5C40\u90E8\u4F5C\u7528\u57DF\uFF0C\u5982\u679C\u5168\u5C40\u4F5C\u7528\u57DF\u4E2D\u6CA1\u6709\uFF0C\u5C31\u662F undefined\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> name <span class="token operator">=</span> <span class="token string">&#39;\u5468\u5C0F\u9ED1&#39;</span>
<span class="token keyword">const</span> age <span class="token operator">=</span> <span class="token number">18</span>

<span class="token keyword">let</span> value
<span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token string">&#39;value = name&#39;</span><span class="token punctuation">)</span>
<span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div>`,17);function p(t,o){return e}var r=s(a,[["render",p]]);export{r as default};
