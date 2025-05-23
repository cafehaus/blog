import{h as n}from"./app.c91e4ae6.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},p=n(`<h1 id="webpack\u672C\u5730axios\u63A5\u53E3\u4EE3\u7406\u4E00\u76F4\u4E0D\u751F\u6548" tabindex="-1"><a class="header-anchor" href="#webpack\u672C\u5730axios\u63A5\u53E3\u4EE3\u7406\u4E00\u76F4\u4E0D\u751F\u6548" aria-hidden="true">#</a> webpack\u672C\u5730axios\u63A5\u53E3\u4EE3\u7406\u4E00\u76F4\u4E0D\u751F\u6548</h1><p>\u4E00\u4E2A\u6BD4\u8F83\u8001\u7684\u9879\u76EE\uFF0C\u5404\u79CD\u914D\u7F6E\u4E5F\u6BD4\u8F83\u5751\uFF0C\u4E4B\u524D\u6CA1\u6709\u914D proxy \u63A5\u53E3\u4EE3\u7406\uFF0Cwebpack \u8FD8\u662F\u7528\u7684 v3 \u7248\u672C\uFF0C\u9879\u76EE\u4E2D\u56E0\u4E3A\u8981\u8BBF\u95EE\u53E6\u4E00\u4E2A\u57DF\u540D\u4E0B\u7684\u63A5\u53E3\uFF0C\u6240\u4EE5\u5C31\u6765\u6298\u817E\u4E86\u4E0B\u4EE3\u7406\uFF0C\u4F46\u662F\u63A5\u53E3\u4EE3\u7406\u4E00\u76F4\u4E0D\u751F\u6548\uFF0C\u62A5\u9519\uFF1AFailed to load resource: the server responded with a status of 404 (Not Found)\u3002</p><p>vue \u9879\u76EE\u7684 main \u914D\u7F6E\u5165\u53E3\u6587\u4EF6</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// main.js</span>
<span class="token keyword">import</span> Vue <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">import</span> App <span class="token keyword">from</span> <span class="token string">&#39;./App&#39;</span>
<span class="token keyword">import</span> router <span class="token keyword">from</span> <span class="token string">&#39;./router&#39;</span>
<span class="token keyword">import</span> axios <span class="token keyword">from</span> <span class="token string">&#39;axios&#39;</span>
<span class="token comment">// import myAjax from &#39;@/util/my-axios&#39;</span>

<span class="token class-name">Vue</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>$axios <span class="token operator">=</span> axios
<span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">el</span><span class="token operator">:</span> <span class="token string">&#39;#app&#39;</span><span class="token punctuation">,</span>
  router<span class="token punctuation">,</span>
  <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token string">&#39;&lt;App/&gt;&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    App
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><p>\u81EA\u5B9A\u4E49 axios \u914D\u7F6E\u7684 my-axios \u6587\u4EF6</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// util/my-axios.js</span>
<span class="token keyword">import</span> axios <span class="token keyword">from</span> <span class="token string">&#39;axios&#39;</span>
<span class="token keyword">import</span> config <span class="token keyword">from</span> <span class="token string">&#39;@/config&#39;</span>
<span class="token keyword">import</span> cookies <span class="token keyword">from</span> <span class="token string">&#39;vue-cookies&#39;</span>

axios<span class="token punctuation">.</span>defaults<span class="token punctuation">.</span>baseURL <span class="token operator">=</span> config<span class="token punctuation">.</span>apiBaseURL

<span class="token comment">// \u8BF7\u6C42\u62E6\u622A</span>
axios<span class="token punctuation">.</span>interceptors<span class="token punctuation">.</span>request<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>
  <span class="token parameter">config</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    config<span class="token punctuation">.</span>withCredentials <span class="token operator">=</span> <span class="token boolean">true</span>
    config<span class="token punctuation">.</span>timeout <span class="token operator">=</span> <span class="token number">600000</span>
    <span class="token keyword">const</span> token <span class="token operator">=</span> cookies<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;token&#39;</span><span class="token punctuation">)</span>
    config<span class="token punctuation">.</span>headers<span class="token punctuation">.</span>token <span class="token operator">=</span> token
    <span class="token keyword">return</span> config
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token parameter">error</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> Promise<span class="token punctuation">.</span><span class="token function">reject</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">)</span>

<span class="token comment">// \u54CD\u5E94\u62E6\u622A</span>
axios<span class="token punctuation">.</span>interceptors<span class="token punctuation">.</span>response<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>
  <span class="token parameter">response</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> response<span class="token punctuation">.</span>data <span class="token operator">||</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token parameter">error</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> Promise<span class="token punctuation">.</span><span class="token function">reject</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br></div></div><p>\u6700\u540E\u67E5\u770B\u63A5\u53E3\u53D1\u73B0\uFF0C\u8BF7\u6C42\u5730\u5740\u4E5F\u5E76\u4E0D\u662F\u914D\u7F6E\u7684\u4EE3\u7406\u524D\u7F00\uFF0C\u540E\u9762\u624D\u53D1\u73B0\u662F\u56E0\u4E3A main.js \u91CC\u539F\u672C\u5BFC\u5165\u4E86 my-axios \u6587\u4EF6\uFF0Ceslint \u4F1A\u63D0\u793A\u53D8\u91CF\u672A\u4F7F\u7528\uFF0C\u6211\u624B\u4E00\u6296\u5C31\u7ED9\u5220\u6389\u4E86\uFF0C\u7136\u540E\u5C31\u4F1A\u53D1\u73B0\u62A5\u9519\uFF0C\u4EE3\u7406\u4E5F\u4E0D\u751F\u6548\u3002</p><p>\u8FD9\u4E2A\u95EE\u9898\u8FD8\u6709\u5C31\u662F main.js \u91CC\u5BFC\u5165 axios \u7684\u65B9\u5F0F\u4E5F\u6709\u95EE\u9898\uFF0C\u8FD9\u91CC\u5148\u5BFC\u5165\u4E86\u5B98\u65B9\u7684 axios \u5E93\uFF0C\u7136\u540E\u53C8\u5BFC\u5165\u4E86\u81EA\u5B9A\u4E49\u7684 my-axios \u6587\u4EF6\uFF0C\u5B9E\u9645\u8FD0\u884C\u662F\u6CA1\u95EE\u9898\u7684\uFF0C\u4F46\u662F\u6BD4\u8F83\u597D\u7684\u65B9\u5F0F\u5E94\u8BE5\u662F\u53EA\u5BFC\u5165\u54B1\u81EA\u5DF1\u5C01\u88C5\u8FC7\u540E\u7684 my-axios \u8FD9\u4E00\u4E2A\u6587\u4EF6\uFF0C\u4F18\u5316\u540E\u7684\u7248\u672C\uFF1A</p><p>vue \u9879\u76EE\u7684 main \u914D\u7F6E\u5165\u53E3\u6587\u4EF6\uFF0C\u53EA\u7528\u5BFC\u5165 my-axios \u8FD9\u4E00\u4E2A\u6587\u4EF6\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// main.js</span>
<span class="token keyword">import</span> Vue <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">import</span> App <span class="token keyword">from</span> <span class="token string">&#39;./App&#39;</span>
<span class="token keyword">import</span> router <span class="token keyword">from</span> <span class="token string">&#39;./router&#39;</span>
<span class="token keyword">import</span> axios <span class="token keyword">from</span> <span class="token string">&#39;@/util/my-axios&#39;</span>

<span class="token class-name">Vue</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>$axios <span class="token operator">=</span> axios
<span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">el</span><span class="token operator">:</span> <span class="token string">&#39;#app&#39;</span><span class="token punctuation">,</span>
  router<span class="token punctuation">,</span>
  <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token string">&#39;&lt;App/&gt;&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    App
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><p>\u81EA\u5B9A\u4E49 axios \u914D\u7F6E\u7684 my-axios \u6587\u4EF6\uFF0C\u6BD4\u4E0A\u9762\u539F\u672C\u7684\u6700\u540E\u4E00\u884C\u591A\u4E00\u4E2A\u9ED8\u8BA4\u5BFC\u51FA export default axios\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// util/my-axios.js</span>
<span class="token keyword">import</span> axios <span class="token keyword">from</span> <span class="token string">&#39;axios&#39;</span>
<span class="token keyword">import</span> config <span class="token keyword">from</span> <span class="token string">&#39;@/config&#39;</span>
<span class="token keyword">import</span> cookies <span class="token keyword">from</span> <span class="token string">&#39;vue-cookies&#39;</span>

axios<span class="token punctuation">.</span>defaults<span class="token punctuation">.</span>baseURL <span class="token operator">=</span> config<span class="token punctuation">.</span>apiBaseURL

<span class="token comment">// \u8BF7\u6C42\u62E6\u622A</span>
axios<span class="token punctuation">.</span>interceptors<span class="token punctuation">.</span>request<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>
  <span class="token parameter">config</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    config<span class="token punctuation">.</span>withCredentials <span class="token operator">=</span> <span class="token boolean">true</span>
    config<span class="token punctuation">.</span>timeout <span class="token operator">=</span> <span class="token number">600000</span>
    <span class="token keyword">const</span> token <span class="token operator">=</span> cookies<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;token&#39;</span><span class="token punctuation">)</span>
    config<span class="token punctuation">.</span>headers<span class="token punctuation">.</span>token <span class="token operator">=</span> token
    <span class="token keyword">return</span> config
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token parameter">error</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> Promise<span class="token punctuation">.</span><span class="token function">reject</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">)</span>

<span class="token comment">// \u54CD\u5E94\u62E6\u622A</span>
axios<span class="token punctuation">.</span>interceptors<span class="token punctuation">.</span>response<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>
  <span class="token parameter">response</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> response<span class="token punctuation">.</span>data <span class="token operator">||</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token parameter">error</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> Promise<span class="token punctuation">.</span><span class="token function">reject</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">)</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> axios
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br></div></div><p>\u6240\u4EE5\u8981\u6CE8\u610F\u524D\u7AEF\u9879\u76EE index.html \u91CC\u7684 script \u6807\u7B7E\u76F4\u63A5\u5B9A\u4E49\u7684\u53D8\u91CF\u548C main.js \u91CC\u5B9A\u4E49\u6216 import \u5BFC\u5165\u7684\u4E00\u4E9B\u4E1C\u897F\u5373\u4F7F\u63D0\u793A\u672A\u4F7F\u7528\u4E5F\u4E0D\u80FD\u5220\u9664\uFF0C\u56E0\u4E3A\u8FD9\u91CC\u7684\u662F\u5168\u5C40\u53D8\u91CF\uFF0C\u8BF4\u4E0D\u5B9A\u90A3\u4E2A\u9875\u9762\u6216\u7CFB\u7EDF\u91CC\u76F4\u63A5\u5728\u7528\u3002</p>`,13);function e(t,o){return p}var l=s(a,[["render",e]]);export{l as default};
