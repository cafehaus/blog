import{g as n}from"./app.9ce014b4.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},p=n(`<h1 id="es\u6A21\u5757\u5BFC\u5165\u5F15\u53D1\u7684vue\u672A\u5B9A\u4E49\u53D8\u91CF\u62A5\u9519" tabindex="-1"><a class="header-anchor" href="#es\u6A21\u5757\u5BFC\u5165\u5F15\u53D1\u7684vue\u672A\u5B9A\u4E49\u53D8\u91CF\u62A5\u9519" aria-hidden="true">#</a> ES\u6A21\u5757\u5BFC\u5165\u5F15\u53D1\u7684vue\u672A\u5B9A\u4E49\u53D8\u91CF\u62A5\u9519</h1><p>vue\u7EC4\u4EF6\u91CC\uFF0C\u660E\u660E\u53D8\u91CF\u5DF2\u7ECF\u5728 data \u4E2D\u5B9A\u4E49\u597D\u4E86\uFF0C\u4F46\u63A7\u5236\u53F0\u8FD8\u662F\u4E00\u76F4\u62A5\u9519\uFF1A</p><div class="custom-container danger"><p class="custom-container-title">DANGER</p><p>[Vue warn]: Property or method &quot;xxx&quot; is not defined on the instance but referenced during render. Make sure that this property is reactive, either in the data option, or for class-based components, by initializing the property. See: https://vuejs.org/v2/guide/reactivity.html#Declaring-Reactive-Properties.</p></div><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// config.js</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> version <span class="token operator">=</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">VUE_APP_VERSION</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> source <span class="token operator">=</span> <span class="token number">3</span> <span class="token comment">// \u8BF7\u6C42\u6765\u6E90\uFF1A1-\u5B89\u5353  2-IOS  3-web</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> isProd <span class="token operator">=</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NODE_ENV</span> <span class="token operator">===</span> <span class="token string">&#39;production&#39;</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> isOnline <span class="token operator">=</span> location<span class="token punctuation">.</span>hostname <span class="token operator">===</span> <span class="token string">&#39;www.cafe123.cn&#39;</span> <span class="token comment">// \u7EBF\u4E0A\u73AF\u5883</span>

<span class="token keyword">export</span> <span class="token keyword">let</span> apiUrl <span class="token operator">=</span> <span class="token string">&#39;https://www.cafe123.cn/api/&#39;</span> <span class="token comment">// \u63A5\u53E3\u5730\u5740</span>
<span class="token keyword">switch</span> <span class="token punctuation">(</span>location<span class="token punctuation">.</span>hostname<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&#39;.&#39;</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">case</span> <span class="token string">&#39;192&#39;</span><span class="token operator">:</span> <span class="token comment">// \u5C40\u57DF\u7F51</span>
  <span class="token keyword">case</span> <span class="token string">&#39;localhost&#39;</span><span class="token operator">:</span> <span class="token comment">// \u672C\u5730\u73AF\u5883</span>
    apiUrl <span class="token operator">=</span> <span class="token string">&#39;api-dev&#39;</span>
    <span class="token keyword">break</span>
  <span class="token keyword">case</span> <span class="token string">&#39;dev-www&#39;</span><span class="token operator">:</span> <span class="token comment">// \u5F00\u53D1\u73AF\u5883</span>
    apiUrl <span class="token operator">=</span> <span class="token string">&#39;http://dev-www.cafe123.cn/api/&#39;</span>
    <span class="token keyword">break</span>
  <span class="token keyword">case</span> <span class="token string">&#39;test-www&#39;</span><span class="token operator">:</span> <span class="token comment">// \u6D4B\u8BD5\u73AF\u5883</span>
    apiUrl <span class="token operator">=</span> <span class="token string">&#39;https://test-www.cafe123.cn/api/&#39;</span>
    <span class="token keyword">break</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>Hello, {{ userName }}!<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  <span class="token comment">// \u5BFC\u5165 config \u914D\u7F6E\u6587\u4EF6</span>
  <span class="token keyword">import</span> config <span class="token keyword">from</span> <span class="token string">&#39;@/config&#39;</span>
  <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;ZHOU&#39;</span><span class="token punctuation">,</span>
    <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> baseUrl <span class="token operator">=</span> config<span class="token punctuation">.</span>api
      <span class="token keyword">return</span> <span class="token punctuation">{</span>
        baseUrl<span class="token punctuation">,</span>
        <span class="token literal-property property">userName</span><span class="token operator">:</span> <span class="token string">&#39;\u5468\u5C0F\u9ED1&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">18</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><p>\u9996\u5148\u5B9A\u4E49\u4E86\u4E00\u4E2A\u5E38\u89C1\u7684 vue \u9879\u76EE\u914D\u7F6E\u6587\u4EF6 config.js\uFF0C\u7136\u540E\u5728\u7EC4\u4EF6\u4E2D\u5BFC\u5165 config\uFF0C\u6309\u7406\u8BF4\u4EE3\u7801\u6CA1\u95EE\u9898\uFF0C\u4F46\u662F\u8FD0\u884C\u4F1A\u4E00\u76F4\u62A5\u9519 userName\u3001age...\u672A\u5B9A\u4E49\uFF0Cdata \u91CC\u660E\u660E\u5DF2\u7ECF\u5B9A\u4E49\u597D\u4E86\uFF01</p><p>\u901A\u8FC7\u4E00\u884C\u4E00\u884C\u5220\u4EE3\u7801\u6700\u540E\u624D\u6392\u67E5\u51FA\u662F import \u5BFC\u81F4\u7684\u95EE\u9898\uFF0Cvue \u7684\u62A5\u9519\u63D0\u793A\u4E5F\u662F\u778E\u63D0\u793A\uFF0C\u4E0D\u8FC7\u4E5F\u602A\u81EA\u5DF1\u5BF9 ES\u6A21\u5757 \u638C\u63E1\u4E0D\u7262\u56FA\u3002</p><h2 id="\u5BFC\u81F4\u62A5\u9519\u7684\u539F\u56E0" tabindex="-1"><a class="header-anchor" href="#\u5BFC\u81F4\u62A5\u9519\u7684\u539F\u56E0" aria-hidden="true">#</a> \u5BFC\u81F4\u62A5\u9519\u7684\u539F\u56E0</h2><p>\u672A\u5206\u6E05 export default \u548C export \u4E24\u79CD\u5BFC\u51FA\u65B9\u5F0F\u5BFC\u5165\u65F6\u7684\u4E0D\u540C\uFF0C\u4E0A\u9762\u4EE3\u7801\u91CC import \u8FDB\u6765\u7684 config \u5176\u5B9E\u662F undefined\uFF0Cconfig.api \u6309\u7406\u5E94\u8BE5\u62A5\u9519 Uncaught TypeError: Cannot read properties of undefined\uFF0C\u7ED3\u679C vue \u8FD9\u91CC\u4E00\u76F4\u63D0\u793A\u540E\u9762\u7684\u53D8\u91CF\u672A\u5B9A\u4E49\uFF0C\u4E00\u5F00\u59CB\u5C31\u88AB\u8BEF\u5BFC\u4E86\u3002</p><h2 id="es\u6A21\u5757\u6CE8\u610F\u4E8B\u9879" tabindex="-1"><a class="header-anchor" href="#es\u6A21\u5757\u6CE8\u610F\u4E8B\u9879" aria-hidden="true">#</a> ES\u6A21\u5757\u6CE8\u610F\u4E8B\u9879</h2><ol><li>ES\u6A21\u5757\u5BFC\u51FA\u6709\u4E24\u79CD\u65B9\u5F0F\uFF1Aexport \u548C export default\uFF0C\u4E00\u4E2A\u6587\u4EF6\u53EF\u4EE5\u6709\u591A\u4E2A export\uFF0C\u4F46\u662F\u53EA\u80FD\u6709\u4E00\u4E2A export default</li><li>export default \u540E\u9762\u4E0D\u80FD\u7528 const/let/var\uFF08*\u672C\u8D28\u4E0A\uFF0Cexport default\u5C31\u662F\u8F93\u51FA\u4E00\u4E2A\u53EB\u505Adefault\u7684\u53D8\u91CF\u6216\u65B9\u6CD5\uFF0C\u7136\u540E\u7CFB\u7EDF\u5141\u8BB8\u4F60\u4E3A\u5B83\u53D6\u4EFB\u610F\u540D\u5B57\uFF09</li><li>export \u5BFC\u5165\u65F6\u67093\u79CD\u65B9\u5F0F\uFF1A <ul><li>\u5355\u4E2A\u5BFC\u5165\uFF1Aimport { apiUrl } form &#39;@/config.js&#39;</li><li>\u591A\u4E2A\u5BFC\u5165\uFF0C\u53EF\u7528 as \u5173\u952E\u5B57\u6539\u540D\uFF1Aimport { apiUrl, source as mySource } form &#39;@/config.js&#39;</li><li>\u6574\u4F53\u5BFC\u5165\uFF1Aimport * as config form &#39;@/config.js&#39;</li></ul></li><li>export default \u5BFC\u5165\u65B9\u5F0F\uFF1Aimport config from &#39;@/config&#39;</li></ol><h2 id="\u89E3\u51B3\u62A5\u9519\u6B63\u786E\u7684\u5BFC\u5165\u65B9\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u89E3\u51B3\u62A5\u9519\u6B63\u786E\u7684\u5BFC\u5165\u65B9\u5F0F" aria-hidden="true">#</a> \u89E3\u51B3\u62A5\u9519\u6B63\u786E\u7684\u5BFC\u5165\u65B9\u5F0F</h2><ol><li>\u7528 export \u7684\u5355\u4E2A\u5BFC\u5165\u65B9\u5F0F\uFF1Aimport { apiUrl } from &#39;@/config&#39;</li><li>\u7528 export \u7684\u6574\u4F53\u5BFC\u5165\u5E76\u547D\u540D\uFF1Aimport * as config from &#39;@/config&#39;</li><li>\u517C\u5BB9 export default \u7684\u5BFC\u5165\u65B9\u5F0F\uFF1A\u5728 config.js \u91CC\u5411\u4E0B\u9762\u90A3\u6837\u518D\u52A0\u4E00\u4E2A export default\uFF0C\u8FD9\u6837\u5C31\u53EF\u4EE5\u4F7F\u7528\uFF1Aimport config from &#39;@/config&#39;</li></ol><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// config.js</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> version <span class="token operator">=</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">VUE_APP_VERSION</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> source <span class="token operator">=</span> <span class="token number">3</span> <span class="token comment">// \u8BF7\u6C42\u6765\u6E90\uFF1A1-\u5B89\u5353  2-IOS  3-web</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> isProd <span class="token operator">=</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NODE_ENV</span> <span class="token operator">===</span> <span class="token string">&#39;production&#39;</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> isOnline <span class="token operator">=</span> location<span class="token punctuation">.</span>hostname <span class="token operator">===</span> <span class="token string">&#39;www.cafe123.cn&#39;</span> <span class="token comment">// \u7EBF\u4E0A\u73AF\u5883</span>

<span class="token keyword">export</span> <span class="token keyword">let</span> apiUrl <span class="token operator">=</span> <span class="token string">&#39;https://www.cafe123.cn/api/&#39;</span> <span class="token comment">// \u63A5\u53E3\u5730\u5740</span>
<span class="token keyword">switch</span> <span class="token punctuation">(</span>location<span class="token punctuation">.</span>hostname<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&#39;.&#39;</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">case</span> <span class="token string">&#39;192&#39;</span><span class="token operator">:</span> <span class="token comment">// \u5C40\u57DF\u7F51</span>
  <span class="token keyword">case</span> <span class="token string">&#39;localhost&#39;</span><span class="token operator">:</span> <span class="token comment">// \u672C\u5730\u73AF\u5883</span>
    apiUrl <span class="token operator">=</span> <span class="token string">&#39;api-dev&#39;</span>
    <span class="token keyword">break</span>
  <span class="token keyword">case</span> <span class="token string">&#39;dev-www&#39;</span><span class="token operator">:</span> <span class="token comment">// \u5F00\u53D1\u73AF\u5883</span>
    apiUrl <span class="token operator">=</span> <span class="token string">&#39;http://dev-www.cafe123.cn/api/&#39;</span>
    <span class="token keyword">break</span>
  <span class="token keyword">case</span> <span class="token string">&#39;test-www&#39;</span><span class="token operator">:</span> <span class="token comment">// \u6D4B\u8BD5\u73AF\u5883</span>
    apiUrl <span class="token operator">=</span> <span class="token string">&#39;https://test-www.cafe123.cn/api/&#39;</span>
    <span class="token keyword">break</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u517C\u5BB9\u8FD9\u79CD\u5BFC\u5165\u65B9\u5F0F\uFF1Aimport config from &#39;@/config&#39;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  version<span class="token punctuation">,</span>
  source<span class="token punctuation">,</span>
  isProd<span class="token punctuation">,</span>
  isOnline<span class="token punctuation">,</span>
  apiUrl
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br></div></div>`,14);function e(t,o){return p}var l=s(a,[["render",e]]);export{l as default};
