import{r as p,o,c as e,a as n,d as a,F as c,g as u,h as t}from"./app.b281c902.js";import{_ as l}from"./plugin-vue_export-helper.21dcd24c.js";const i={},r=u(`<h1 id="tofixed\u548Cmath-round\u65E2\u4E0D\u662F\u56DB\u820D\u4E94\u5165\u4E5F\u4E0D\u662F\u94F6\u884C\u5BB6\u820D\u5165\u6CD5" tabindex="-1"><a class="header-anchor" href="#tofixed\u548Cmath-round\u65E2\u4E0D\u662F\u56DB\u820D\u4E94\u5165\u4E5F\u4E0D\u662F\u94F6\u884C\u5BB6\u820D\u5165\u6CD5" aria-hidden="true">#</a> toFixed\u548CMath.round\u65E2\u4E0D\u662F\u56DB\u820D\u4E94\u5165\u4E5F\u4E0D\u662F\u94F6\u884C\u5BB6\u820D\u5165\u6CD5</h1><h3 id="tofixed-\u4ECB\u7ECD" tabindex="-1"><a class="header-anchor" href="#tofixed-\u4ECB\u7ECD" aria-hidden="true">#</a> toFixed \u4ECB\u7ECD</h3><p>JavaScript \u7684 toFixed \u65B9\u6CD5\u4F7F\u7528\u5B9A\u70B9\u8868\u793A\u6CD5\u6765\u683C\u5F0F\u5316\u4E00\u4E2A\u6570\u503C\uFF0C\u6570\u5B57.toFixed(\u8981\u4FDD\u7559\u51E0\u4F4D\u5C0F\u6570)\uFF0C\u53C2\u6570\u4E3A\u5C0F\u6570\u70B9\u540E\u6570\u5B57\u7684\u4E2A\u6570\uFF0C\u4ECB\u4E8E 0 \u5230 20\uFF08\u5305\u62EC\uFF09\u4E4B\u95F4\uFF0C\u9ED8\u8BA4 0\uFF0C\u8FD4\u56DE\u503C\u4E3A\u4F7F\u7528\u5B9A\u70B9\u8868\u793A\u6CD5\u8868\u793A\u7ED9\u5B9A\u6570\u5B57\u7684\u5B57\u7B26\u4E32\uFF0C\u8BE5\u6570\u503C\u5728\u5FC5\u8981\u65F6\u8FDB\u884C\u56DB\u820D\u4E94\u5165\uFF0C\u4E0D\u8DB3\u4F4D\u6570\u65F6\u4F1A\u76F4\u63A5\u7528 0 \u6765\u586B\u5145\u5C0F\u6570\u90E8\u5206\u3002</p><h3 id="\u9700\u8981\u6CE8\u610F" tabindex="-1"><a class="header-anchor" href="#\u9700\u8981\u6CE8\u610F" aria-hidden="true">#</a> \u9700\u8981\u6CE8\u610F</h3><ul><li>\u53EA\u80FD\u7528\u4E8E Number \u6570\u503C\u7C7B\u578B\u6570\u636E\u4E0A</li><li>\u8FD4\u56DE\u503C\u662F String \u5B57\u7B26\u4E32\uFF0C\u4F46\u662F\u8D1F\u6570\u5982\u679C\u4E0D\u52A0\u62EC\u53F7\u56E0\u4E3A\u64CD\u4F5C\u7B26\u4F18\u5148\u7EA7\u4F1A\u8FD4\u56DE Number \u6570\u503C</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">2.34</span><span class="token punctuation">.</span><span class="token function">toFixed</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// -2.3</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">2.34</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toFixed</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// &quot;-2.3&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><ul><li>\u56DB\u820D\u4E94\u5165\u89C4\u5219\u5E76\u4E0D\u662F\u6211\u4EEC\u5E38\u89C1\u7684\u6570\u5B66\u4E0A\u7684\u56DB\u820D\u4E94\u5165\u6CD5\uFF0C\u800C\u662F\u4F7F\u7528\u7684\u7C7B\u4F3C\u94F6\u884C\u5BB6\u820D\u5165\u6CD5\uFF0C\u5176\u5B9E\u4E5F\u548C\u94F6\u884C\u5BB6\u820D\u5165\u6CD5\u4E0D\u592A\u4E00\u6837</li></ul><h3 id="math-round" tabindex="-1"><a class="header-anchor" href="#math-round" aria-hidden="true">#</a> Math.round</h3><p>Math.round() \u51FD\u6570\u8FD4\u56DE\u4E00\u4E2A\u6570\u5B57\u56DB\u820D\u4E94\u5165\u540E\u6700\u63A5\u8FD1\u7684\u6574\u6570\uFF0C\u6CE8\u610F\u8FD9\u4E2A\u540C\u6837\u4E0D\u662F\u771F\u6B63\u610F\u4E49\u4E0A\u7684\u56DB\u820D\u4E94\u5165\uFF0C\u4E5F\u548C\u94F6\u884C\u5BB6\u820D\u5165\u6CD5\u4E0D\u592A\u4E00\u6837\uFF1A</p><ul><li>\u5982\u679C\u53C2\u6570\u7684\u5C0F\u6570\u90E8\u5206\u5927\u4E8E 0.5\uFF0C\u5219\u820D\u5165\u5230\u76F8\u90BB\u7684\u7EDD\u5BF9\u503C\u66F4\u5927\u7684\u6574\u6570</li><li>\u5982\u679C\u53C2\u6570\u7684\u5C0F\u6570\u90E8\u5206\u5C0F\u4E8E 0.5\uFF0C\u5219\u820D\u5165\u5230\u76F8\u90BB\u7684\u7EDD\u5BF9\u503C\u66F4\u5C0F\u7684\u6574\u6570</li><li>\u5982\u679C\u53C2\u6570\u7684\u5C0F\u6570\u90E8\u5206\u6070\u597D\u7B49\u4E8E 0.5\uFF0C\u5219\u820D\u5165\u5230\u76F8\u90BB\u7684\u5728\u6B63\u65E0\u7A77\uFF08+\u221E\uFF09\u65B9\u5411\u4E0A\u7684\u6574\u6570</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">round</span><span class="token punctuation">(</span><span class="token number">20.49</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// 20</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">round</span><span class="token punctuation">(</span><span class="token number">20.69</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// 21</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">round</span><span class="token punctuation">(</span><span class="token number">20.5</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// 21 \u8FD9\u4E2A\u8981\u6CE8\u610F</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">round</span><span class="token punctuation">(</span><span class="token number">20.51</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// 21</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">round</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">20.5</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// -20 \u8FD9\u4E2A\u8981\u6CE8\u610F</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">round</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">20.51</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// -21</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h3 id="\u94F6\u884C\u5BB6\u820D\u5165\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u94F6\u884C\u5BB6\u820D\u5165\u6CD5" aria-hidden="true">#</a> \u94F6\u884C\u5BB6\u820D\u5165\u6CD5</h3><p>\u6309\u6982\u7387\u8BBA 0\u30011\u30012\u30013\u30014\u30015\u30016\u30017\u30018\u30019 \u968F\u673A\u5206\u5E03\u51FA\u73B0\uFF0C\u4F20\u7EDF\u7684\u56DB\u820D\u4E94\u5165\u8BA9\u94F6\u884C\u4E8F\u94B1\uFF0C\u56E0\u4E3A\u628A5\u90FD\u5F80\u5927\u4E86\u7B97\u3002\u4E8E\u662F\u5C31\u6709\u4E86\u94F6\u884C\u5BB6\u820D\u5165\uFF08banker&#39;s rounding\uFF09\u7684\u7B97\u6CD5\uFF0C\u89C4\u5219\u56DB\u820D\u516D\u5165\u4E94\u53D6\u5076\uFF1A</p><ul><li>4\u53CA\u4EE5\u4E0B\u76F4\u63A5\u820D\u53BB\uFF08\u548C\u56DB\u820D\u4E94\u5165\u4E00\u6837\uFF09</li><li>\u5927\u4E8E\u7B49\u4E8E6\u65F6\uFF0C\u8FDB\u4F4D\u540E\u820D\u53BB\uFF08\u548C\u56DB\u820D\u4E94\u5165\u4E00\u6837\uFF09</li><li>5\u7684\u60C5\u51B5\u6BD4\u8F83\u590D\u6742\uFF1A\u2460 5\u540E\u9762\u8FD8\u6709\u6570\u5B57\uFF0C\u5219\u8FDB\u4F4D\u540E\u820D\u53BB\uFF1B\u2461 5\u540E\u9762\u6CA1\u6709\u6570\u5B57\u4E86\uFF0C\u90A3\u4E48\u5982\u679C5\u524D\u9762\u7684\u4E00\u4E2A\u6570\u5B57\u662F\u5947\u6570\uFF0C\u5219\u8FDB1\uFF0C\u82E55\u524D\u9762\u7684\u6570\u5B57\u662F\u5076\u6570\u5219\u76F4\u63A5\u820D\u53BB 5</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">2.344</span><span class="token punctuation">.</span><span class="token function">toFixed</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// &#39;2.34&#39;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">2.346</span><span class="token punctuation">.</span><span class="token function">toFixed</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// &#39;2.35&#39;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">2.3451</span><span class="token punctuation">.</span><span class="token function">toFixed</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// &#39;2.35&#39;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">2.345</span><span class="token punctuation">.</span><span class="token function">toFixed</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// &#39;2.34&#39;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token number">2.315</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toFixed</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// &#39;2.32&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><table><thead><tr><th>\u5C3E\u6570</th><th>\u5904\u7406\u65B9\u5F0F</th><th>\u4F8B\u5B50(\u4FDD\u75592\u4F4D\u5C0F\u6570)</th></tr></thead><tbody><tr><td>0-4</td><td>\u820D\u53BB</td><td>1.953 =&gt; 1.95</td></tr><tr><td>5\u540E\u975E0</td><td>\u8FDB\u4F4D</td><td>1.9552 =&gt; 1.96</td></tr><tr><td>5\u540E\u65E0\uFF0C5\u524D\u4E00\u4F4D\u4E3A\u5076\u6570</td><td>\u820D\u53BB</td><td>1.945 =&gt; 1.94</td></tr><tr><td>5\u540E\u65E0\uFF0C5\u524D\u4E00\u4F4D\u4E3A\u5947\u6570</td><td>\u8FDB\u4F4D</td><td>1.975 =&gt; 1.98</td></tr><tr><td>6-9</td><td>\u8FDB\u4F4D</td><td>1.957 =&gt; 1.96</td></tr></tbody></table><p>\u867D\u7136\u8FD9\u79CD\u820D\u5165\u6CD5\u53EB\u201C\u94F6\u884C\u5BB6\u820D\u5165\u201D\uFF0C\u4F46\u5B9E\u9645\u4E0A\u548C\u94F6\u884C\u5173\u7CFB\u4E0D\u5927\u3002\u6211\u56FD\u91D1\u878D\u7CFB\u7EDF\u7684\u5927\u90E8\u5206\u7B97\u6CD5\u5C31\u662F\u7528\u56DB\u820D\u4E94\u5165\uFF0C\u56FD\u9645\u4E0A\u6B27\u76DF\u59D4\u5458\u4F1A\u5BF9\u6362\u6C47\u65F6\u7684\u820D\u5165\u89C4\u5B9A\u4E5F\u662F\u6211\u4EEC\u5E38\u89C1\u7684\u56DB\u820D\u4E94\u5165\u3002</p><p>\u771F\u6B63\u5E7F\u6CDB\u91C7\u7528\u94F6\u884C\u5BB6\u820D\u5165\u6CD5\u7684\uFF0C\u662F\u9700\u8981\u66F4\u5C0F\u8BEF\u5DEE\u7684\u79D1\u5B66\u548C\u8BA1\u7B97\u673A\u7CFB\u7EDF\uFF0C\u56E0\u6B64\u94F6\u884C\u5BB6\u820D\u5165\u6CD5\u4E5F\u53EB\u7EDF\u8BA1\u5B66\u5BB6\u820D\u5165\uFF08statistician&#39;s rounding\uFF09\u3001\u65E0\u504F\u820D\u5165\uFF08unbiased rounding\uFF09\u3002\u73B0\u5728\u5927\u90E8\u5206\u7F16\u7A0B\u8F6F\u4EF6\u7684\u9ED8\u8BA4\u820D\u5165\u90FD\u662F\u94F6\u884C\u5BB6\u820D\u5165\u6CD5\uFF0C\u6BD4\u5982 c/c++\u3001javascript\u3001php\u3001go\uFF0C\u82F1\u7279\u5C14\u5904\u7406\u5668\u7528\u7684\u4E5F\u662F\u94F6\u884C\u5BB6\u820D\u5165\u3002</p><p>\u5728\u6D4F\u89C8\u5668\u6216\u8005node\u73AF\u5883\u4E2D\u6309\u7167\u94F6\u884C\u5BB6\u7684\u820D\u5165\u89C4\u5219\u53BB\u6D4B\u8BD5 toFixed \u548C Math.round\uFF0C\u53D1\u73B0\u5F535\u540E\u9762\u6CA1\u6709\u6570\u5B57\u65F6\uFF0C\u5E76\u4E0D\u662F\u6309\u7167\u94F6\u884C\u5BB6\u820D\u5165\u6CD5\u7684\u5947\u8FD1\u5076\u820D\uFF0C\u4F46\u7F51\u4E0A\u6709\u5F88\u591A\u8BF4\u8FD9\u4E24\u8D27\u662F\u7528\u7684\u94F6\u884C\u5BB6\u820D\u5165\u6CD5\uFF0C\u6CE8\u610F\u8E29\u5751\uFF0C\u9879\u76EE\u4E2D\u5B9E\u9645\u8FD0\u7B97\u8FD8\u662F\u7528\u7B2C\u4E09\u65B9\u8BA1\u7B97\u5E93\u6216\u8005\u8BA9\u540E\u7AEF\u8BA1\u7B97\u6BD4\u8F83\u597D\u3002</p><p>\u53C2\u8003\uFF1A</p>`,20),k={href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed",target:"_blank",rel:"noopener noreferrer"},d=t("Number.prototype.toFixed"),m={href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math/round",target:"_blank",rel:"noopener noreferrer"},b=t("Math.round");function h(f,g){const s=p("ExternalLinkIcon");return o(),e(c,null,[r,n("ul",null,[n("li",null,[n("a",k,[d,a(s)])]),n("li",null,[n("a",m,[b,a(s)])])])],64)}var _=l(i,[["render",h]]);export{_ as default};