import{g as s}from"./app.9ce014b4.js";import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";const a={},e=s(`<h1 id="\u65E5\u671F\u5B57\u7B26\u4E32\u76F4\u63A5\u6BD4\u8F83\u7684\u5751" tabindex="-1"><a class="header-anchor" href="#\u65E5\u671F\u5B57\u7B26\u4E32\u76F4\u63A5\u6BD4\u8F83\u7684\u5751" aria-hidden="true">#</a> \u65E5\u671F\u5B57\u7B26\u4E32\u76F4\u63A5\u6BD4\u8F83\u7684\u5751</h1><p>\u524D\u540E\u7AEF\u4F20\u53C2\u6216\u8005\u63A5\u53D7\u65E5\u671F\u65F6\u95F4\u4E00\u822C\u90FD\u4F1A\u683C\u5F0F\u5316\u6210\u56FA\u5B9A\u683C\u5F0F\u7684\u5B57\u7B26\u4E32\uFF0C\u5982\u679C\u683C\u5F0F\u662F\u89C4\u8303\u7684 YYYY-MM-DD HH:mm:ss\uFF0C\u5176\u5B9E\u662F\u53EF\u4EE5\u76F4\u63A5\u6BD4\u8F83\u7684\uFF0C\u4F46\u662F\u5982\u679C\u4E0D\u89C4\u8303\u76F4\u63A5\u5B57\u7B26\u4E32\u76F8\u6BD4\u8F83\u5C31\u5F88\u5BB9\u6613\u51FA\u95EE\u9898\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token string">&#39;2022-02-28 10:00:00&#39;</span>
<span class="token keyword">let</span> b <span class="token operator">=</span> <span class="token string">&#39;2022-2-28 10:00:00&#39;</span>
<span class="token keyword">let</span> c <span class="token operator">=</span> <span class="token string">&#39;2022-03-01 10:00:00&#39;</span>

c <span class="token operator">&gt;</span> a <span class="token comment">// true</span>
c <span class="token operator">&gt;</span> b <span class="token comment">// false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>\u521A\u5F00\u59CB\u6211\u7B2C\u4E00\u53CD\u5E94\u60F3\u5230\u7684\u662F\u9690\u5F0F\u8F6C\u6362\u57CB\u4E0B\u7684\u5751\uFF0C\u5176\u5B9E\u5E76\u4E0D\u662F\uFF0C\u76F4\u63A5\u5C06\u4E0A\u9762\u7684\u65E5\u671F\u5B57\u7B26\u4E32 Number \u7684\u7ED3\u679C\u53D1\u73B0\u90FD\u662F null\uFF0C\u5B57\u7B26\u4E32\u548C\u5B57\u7B26\u4E32\u76F8\u6BD4\u8F83\u5E76\u4E0D\u4F1A\u5148\u8F6C\u6210\u6570\u503C\u3002</p><p><strong>\u5B57\u7B26\u4E32\u76F8\u6BD4\u8F83\uFF1A</strong></p><ul><li>\u5982\u679C\u5B57\u7B26\u4E32\u957F\u5EA6\u662F0\u7684\u60C5\u51B5\uFF0C\u5C31\u53EF\u4EE5\u76F4\u63A5\u6BD4\u8F83\u51FA\u5927\u5C0F\u3002</li><li>\u5982\u679C\u957F\u5EA6\u4E0D\u4E3A0\uFF0C\u662F\u6309\u6BCF\u4E2A\u5B57\u7B26\u7684\u201CUnicode \u7F16\u7801\u201D\u5927\u5C0F\u8FDB\u884C\u6BD4\u8F83\uFF0C\u76F4\u5230\u5206\u51FA\u5927\u5C0F\u4E3A\u6B62\uFF0C\u4E00\u53E5\u8BDD\u6982\u62EC\u5C31\u662F\u6309\u7167\u5B57\u5178\u5E8F\u8FDB\u884C\u5BF9\u6BD4</li></ul><p>\u4E0A\u9762\u7684 c &gt; b \u4E4B\u6240\u4EE5\u8DDF\u54B1\u7684\u76F4\u89C9\u76F8\u6096\uFF0C\u56E0\u4E3A\u9010\u4E00\u6BD4\u5230\u6708\u4EFD\u65F6\uFF0C2\u548C3\u6708\u524D\u9762\u76840\u6BD4\u8F83\uFF0C\u5BF9\u5E94\u7684Unicode\u7801\uFF08charCodeAt() \u65B9\u6CD5\u53EF\u8FD4\u56DE\u6307\u5B9A\u4F4D\u7F6E\u7684\u5B57\u7B26\u7684 Unicode \u7F16\u7801\uFF0C\u8FD9\u4E2A\u8FD4\u56DE\u503C\u662F 0 - 65535 \u4E4B\u95F4\u7684\u6574\u6570\uFF09\uFF1A</p><ul><li>2\uFF1A50</li><li>0\uFF1A48</li></ul><p>\u5373\u4F7F\u4E0D\u770BUnicode\u7801\uFF0C\u76F4\u63A5\u770B\u6570\u503C\u6211\u4EEC\u4E5F\u80FD\u770B\u51FA\u67652\u548C0\u8C01\u5927\u4E86\uFF0C\u6700\u540E\u5EFA\u8BAE\u65E5\u671F\u6BD4\u8F83\u8FD8\u662F\u4E0D\u8981\u8FD9\u6837\u76F4\u63A5\u6BD4\u8F83\uFF0C\u501F\u52A9\u7B2C\u4E09\u65B9\u5E93\u50CFdayjs\u63D0\u4F9B\u7684\u65B9\u6CD5\u53BB\u6BD4\u8F83\u6BD4\u8F83\u9760\u8C31\u3002</p><div class="custom-container tip"><p class="custom-container-title">\u63D0\u793A</p><p>unicode\uFF1A\u7EDF\u4E00\u7801\uFF08\u4E07\u56FD\u7801\u3001\u5355\u4E00\u7801\uFF09\uFF0C\u662F\u56FD\u9645\u7EC4\u7EC7\u5236\u5B9A\u7684\u53EF\u4EE5\u5BB9\u7EB3\u4E16\u754C\u4E0A\u6240\u6709\u6587\u5B57\u548C\u7B26\u53F7\u7684\u5B57\u7B26\u7F16\u7801\u65B9\u6848 ASCII\u7801\uFF1A\u5927\u591A\u6570\u8BA1\u7B97\u673A\u91C7\u7528ASCII\u7801\uFF08\u7F8E\u56FD\u6807\u51C6\u4FE1\u606F\u4EA4\u6362\u7801\uFF09\uFF0C\u5B83\u662F\u8868\u793A\u6240\u6709\u5927\u5C0F\u5199\u5B57\u6BCD\u3001\u6570\u5B57\u3001\u6807\u70B9\u7B26\u53F7\u548C\u63A7\u5236\u5B57\u7B26\u76847\u4F4D\u7F16\u7801\u65B9\u6848\u3002\u7EDF\u4E00\u7801\uFF08Unicode\uFF09\u5305\u542BASCII\u7801\uFF0C&#39;\\u0000&#39;\u5230&#39;\\u007F&#39;\u5BF9\u5E94\u5168\u90E8128\u4E2AACSII\u5B57\u7B26</p><p>\u6240\u4EE5\u5728js\u91CC\u5176\u5B9E\u662F\u53EF\u4EE5\u7528\u4E2D\u6587\u505A\u53D8\u91CF\u540D\uFF0C\u4F46\u662F\u4E00\u822C\u4E0D\u5EFA\u8BAE\u4F7F\u7528\u8D85\u51FAASCII\u7801\u7684\u5B57\u7B26\uFF0Cunicode\u6C34\u5F88\u6DF1</p></div><p><strong>\u5B57\u7B26\u4E32\u76F8\u6BD4\u8F83\u5E76\u4E0D\u4F1A\u9690\u5F0F\u8F6C\u6362</strong></p><p>\u5B57\u7B26\u4E32\u548C\u5B57\u7B26\u4E32\u76F8\u6BD4\u8F83\u5E76\u4E0D\u4F1A\u51FA\u73B0\u9690\u5F0F\u8F6C\u6362\uFF0C\u8FD9\u4E00\u70B9\u5C24\u5176\u5728\u6570\u503C\u578B\u5B57\u7B26\u4E32\u76F8\u6BD4\u8F83\u65F6\u8981\u6CE8\u610F</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token string">&#39;0109&#39;</span>
<span class="token keyword">let</span> b <span class="token operator">=</span> <span class="token string">&#39;109&#39;</span>
<span class="token keyword">let</span> c <span class="token operator">=</span> <span class="token string">&#39;11&#39;</span>

c <span class="token operator">&lt;</span> a <span class="token comment">// false</span>
c <span class="token operator">&lt;</span> b <span class="token comment">// false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>\u50CF\u4E0A\u9762\u7684\u6570\u503C\u578B\u5B57\u7B26\u4E32\u6BD4\u8F83\u65F6\uFF0C\u5207\u8BB0\u8981\u5148\u8F6C\u6362\u6210\u6570\u503C\uFF0C\u7136\u540E\u518D\u6765\u6BD4\u8F83\u3002</p><p><strong>\u603B\u7ED3</strong> 1\u3001\u6570\u503C\u548C\u6570\u503C\u53EF\u4EE5\u76F4\u63A5\u6BD4\u8F83\uFF0C\u4E0D\u4F1A\u51FA\u95EE\u9898 2\u3001\u6570\u503C\u5B57\u7B26\u4E32\u548C\u6570\u503C\u76F8\u6BD4\u8F83\uFF0C\u6570\u503C\u5B57\u7B26\u4E32\u4F1A\u81EA\u52A8\u5148\u8F6C\u6210\u6570\u503C\u518D\u6BD4\u8F83\uFF0C\u6240\u4EE5\u4E5F\u4E0D\u4F1A\u6709\u95EE\u9898 3\u3001\u5B57\u7B26\u4E32\u548C\u5B57\u7B26\u4E32\u76F8\u6BD4\u8F83\uFF0C\u8FD9\u91CC\u5C31\u5BB9\u6613\u51FA\u95EE\u9898\uFF0C\u4E00\u5B9A\u5207\u8BB0\u8981\u5148\u8F6C\u6210\u6570\u503C\u518D\u6BD4\u8F83\uFF08\u53EF\u4EE5\u76F4\u63A5\u7528 + \u8F6C\u6210\u6570\u503C\uFF09</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// 2022\u5E746\u670821\u65E5\u53C8\u5728\u9879\u76EE\u4E2D\u8E29\u5230\u8FD9\u4E2A\u5751</span>
<span class="token comment">// \u4E00\u4E2A\u65E5\u671F\u5929\u6570\u7684\u6821\u9A8C\u6BD4\u8F83\uFF0C\u8981\u6C42\u524D\u4E00\u4E2A\u8981\u5C0F\u4E8E\u6216\u7B49\u4E8E\u540E\u4E00\u4E2A</span>
<span class="token comment">// \u56E0\u4E3A\u9875\u9762\u4E0A\u7684\u521D\u59CB\u6570\u636E\u662F\u5176\u4ED6\u5730\u65B9\u540C\u6B65\u8FC7\u6765\u7684\uFF0C\u5982\u4E0B\u76F4\u63A5\u6BD4\u8F83\uFF0C\u6821\u9A8C\u4E00\u76F4\u4E0D\u8FC7</span>
<span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token string">&#39;4&#39;</span>
<span class="token keyword">let</span> b <span class="token operator">=</span> <span class="token string">&#39;10&#39;</span>

a <span class="token operator">&gt;</span> b <span class="token comment">// true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div>`,16);function p(r,l){return e}var o=n(a,[["render",p]]);export{o as default};
