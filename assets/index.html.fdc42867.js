import{g as n}from"./app.9ce014b4.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},p=n(`<h1 id="node-\u533F\u540D\u51FD\u6570\u81EA\u8C03\u7528\u7ACB\u5373\u6267\u884C\u7684\u5751" tabindex="-1"><a class="header-anchor" href="#node-\u533F\u540D\u51FD\u6570\u81EA\u8C03\u7528\u7ACB\u5373\u6267\u884C\u7684\u5751" aria-hidden="true">#</a> node \u533F\u540D\u51FD\u6570\u81EA\u8C03\u7528\u7ACB\u5373\u6267\u884C\u7684\u5751</h1><p>js \u4E60\u60EF\u4E0D\u5199\u5206\u53F7\uFF0C\u5728 node \u91CC\u5199\u4E86\u4E2A\u533F\u540D\u7ACB\u5373\u6267\u884C\u51FD\u6570\uFF0C\u7136\u540E\u4E00\u76F4\u62A5\u9519\uFF1ATypeError: require(...) is not a function\uFF0C\u5F00\u59CB\u4EE5\u4E3A\u662F\u662F\u4E0D\u662F\u4E0D\u652F\u6301\u533F\u540D\u51FD\u6570\u81EA\u8C03\u7528\uFF0C\u6216\u8005\u662F\u548C node \u91CC\u7684 commonjs \u6A21\u5757 require \u4E0D\u517C\u5BB9\uFF1F</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// Error \u7248\u672C</span>
<span class="token comment">// TypeError: require(...) is not a function</span>
<span class="token keyword">const</span> fs <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;fs&#39;</span><span class="token punctuation">)</span>

<span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">123</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">// Nice \u7248\u672C\u4E00</span>
<span class="token keyword">const</span> fs <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;fs&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">123</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">// Nice \u7248\u672C\u4E8C</span>
<span class="token keyword">const</span> fs <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;fs&#39;</span><span class="token punctuation">)</span>

<span class="token punctuation">;</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">123</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">// \u4E0A\u9762\u7684 const fs = require(&#39;fs&#39;) \u4E5F\u53EF\u4EE5\u6362\u6210\u5176\u4ED6js\u4EE3\u7801</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><p>\u6392\u67E5\u4E86\u597D\u4E45\u624D\u53D1\u73B0\u539F\u6765\u662F\u4E0D\u52A0\u5206\u53F7\u57CB\u4E0B\u7684\u5751\uFF0C\u533F\u540D\u7ACB\u5373\u6267\u884C\u51FD\u6570\u524D\u9762\u7684\u4EE3\u7801\u4E0D\u7BA1\u662F\u5565\u4E00\u5B9A\u8981\u52A0\u4E0A\u5206\u53F7 ;\uFF0C\u8FD9\u6837\u5C31\u80FD\u6B63\u786E\u544A\u8BC9\u4EE3\u7801\u6267\u884C\u5668\u8FD9\u662F\u4E2A\u51FD\u6570\uFF0C\u4E0D\u8981\u548C\u524D\u9762\u7684\u4E71\u641E\u5728\u4E00\u8D77\uFF0C\u4E0D\u52A0\u5206\u53F7\u4F1A\u628A\u524D\u9762\u4E00\u53E5\u548C\u533F\u540D\u51FD\u6570\u5408\u5728\u4E00\u8D77\u6267\u884C\uFF0C\u7136\u540E\u5C31\u53EF\u80FD\u4F1A\u62A5\u9519\u4E86\u3002</p>`,4);function t(e,o){return p}var l=s(a,[["render",t]]);export{l as default};
