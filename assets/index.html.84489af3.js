import{r as t,o,c as r,a as s,d as e,F as l,g as p,h as n}from"./app.9ce014b4.js";import{_ as c}from"./plugin-vue_export-helper.21dcd24c.js";const u={},i=p(`<h1 id="wordpress\u63D2\u4EF6\u5F00\u53D1" tabindex="-1"><a class="header-anchor" href="#wordpress\u63D2\u4EF6\u5F00\u53D1" aria-hidden="true">#</a> wordpress\u63D2\u4EF6\u5F00\u53D1</h1><p>\u60F3\u8981\u4F7F\u7528 REST API \u9700\u8981\u81EA\u5DF1\u989D\u5916\u5B89\u88C5\u63D2\u4EF6\uFF1AWordPress REST API\uFF0C\u73B0\u5728 WordPress 5.0\u4EE5\u4E0A\u7684\u7248\u672C\u5DF2\u7ECF\u9ED8\u8BA4\u652F\u6301 REST API\u4E86\uFF0C\u4E0D\u9700\u8981\u989D\u5916\u53BB\u5B89\u88C5\u63D2\u4EF6\u3002</p><p>\u65B0\u7AD9\u9996\u6B21\u7528 Postman \u53BB \u8BBF\u95EE REST API \u63A5\u53E3\uFF0C\u5982\uFF1Ahttp://www.cafe123.cn/wp-json/wp/v2/posts\uFF0C\u4F1A\u53D1\u73B0\u8FD4\u56DE\u7684\u662F 404\uFF0C\u9700\u8981\u81EA\u5DF1\u5728\u7BA1\u7406\u540E\u53F0\u5C06\uFF1A\u8BBE\u7F6E-\u56FA\u5B9A\u94FE\u63A5-\u5E38\u7528\u8BBE\u7F6E\uFF0C\u8BBE\u7F6E\u4E3A\u9664\u201C\u6734\u7D20\u201D\u5916\u7684\u5176\u4ED6\u9009\u9879(\u5EFA\u8BAE\u9009\u6570\u5B57\u578B)\uFF0C\u518D\u53BB\u8BF7\u6C42\u5C31\u53EF\u4EE5\u62FF\u5230\u6570\u636E\u4E86\u3002</p><h2 id="\u9047\u5230\u7684\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#\u9047\u5230\u7684\u95EE\u9898" aria-hidden="true">#</a> \u9047\u5230\u7684\u95EE\u9898</h2><p>\u65B0\u52A0\u4E86\u4E00\u4E9B api \u8DEF\u7531\u9047\u5230\u7684\u62A5\u9519\uFF1A</p><p><strong>1. \u672A\u627E\u5230\u5339\u914DURL\u548C\u8BF7\u6C42\u65B9\u5F0F\u7684\u8DEF\u7531</strong></p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;code&quot;</span><span class="token operator">:</span> <span class="token string">&quot;rest_no_route&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;message&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u672A\u627E\u5230\u5339\u914DURL\u548C\u8BF7\u6C42\u65B9\u5F0F\u7684\u8DEF\u7531\u3002&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;status&quot;</span><span class="token operator">:</span> <span class="token number">404</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>\u8FD9\u79CD\u60C5\u51B5\u5C31\u662F\u8DEF\u5F84\u6216\u8BF7\u6C42\u65B9\u5F0F\u6709\u95EE\u9898\uFF0C\u4ED4\u7EC6\u53BB\u6838\u5BF9\u4E0B</p><p><strong>2. \u6B64\u8DEF\u7531\u7684\u53E5\u67C4\u65E0\u6548</strong></p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;code&quot;</span><span class="token operator">:</span> <span class="token string">&quot;rest_invalid_handler&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;message&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u6B64\u8DEF\u7531\u7684\u53E5\u67C4\u65E0\u6548\u3002&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;status&quot;</span><span class="token operator">:</span> <span class="token number">500</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>\u8FD9\u79CD\u60C5\u51B5\u5C31\u662F\u6709\u8BF7\u6C42\u5230\u8DEF\u7531\uFF0C\u4F46\u662F\u8DEF\u7531\u7684\u56DE\u8C03\u51FD\u6570\u6709\u95EE\u9898\uFF0C\u6211\u8FD9\u91CC\u662F\u5728\u7C7B class \u91CC\u6CE8\u518C\u7684\u8DEF\u7531\uFF0C\u8DEF\u7531\u81EA\u8EAB\u7684\u65B9\u6CD5\u8981\u7528 $this-&gt;funcName \u8FD9\u6837\u53BB\u8C03\u7528</p><p><strong>3. WP_Error\u7C7B\u7684\u7B2C\u4E00\u4E2A\u53C2\u6570\u4E0D\u80FD\u8BBE\u4E3A0</strong></p><p>\u63A5\u53E3\u6821\u9A8C\u4E0D\u901A\u8FC7\u65F6\uFF0C\u6211\u4EEC\u4F1A\u9009\u62E9\u76F4\u63A5 return \u4E00\u4E2A WP_Error \u5BF9\u8C61\uFF0C\u4F46\u662F\u8981\u6CE8\u610F WP_Error \u7684\u7B2C\u4E00\u4E2A\u72B6\u6001\u7801\u5982\u679C\u662F\u5B57\u7B26\u4E32\u6570\u5B57\u4F1A\u88AB\u76F4\u63A5\u8F6C\u6210\u6570\u5B57\uFF0C\u5207\u8BB0\u4E0D\u80FD\u8BBE\u7F6E\u4E3A\u6570\u5B57\u6216\u5B57\u7B26\u4E32 0\uFF0C\u8FD9\u6837\u4F1A\u5BFC\u81F4\u524D\u7AEF\u4E0D\u80FD\u629B\u51FA\u9519\u8BEF\u63D0\u793A\uFF0C\u5565\u4E5F\u6536\u4E0D\u5230</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">empty</span><span class="token punctuation">(</span><span class="token variable">$username</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">WP_Error</span><span class="token punctuation">(</span><span class="token number">10001</span><span class="token punctuation">,</span> <span class="token string double-quoted-string">&quot;\u7528\u6237\u540D\u4E0D\u80FD\u4E3A\u7A7A&quot;</span><span class="token punctuation">,</span> <span class="token string double-quoted-string">&quot;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p><strong>4. get_post_format \u83B7\u53D6\u6587\u7AE0\u5F62\u5F0F\u4E00\u76F4\u8FD4\u56DEfalse</strong></p><p>WP_Query \u91CC\u67E5\u51FA\u6765\u65E0 format \u548C sticky \u8FD9\u4E24\u4E2A\u5B57\u6BB5\uFF0C\u6240\u4EE5\u53EA\u80FD\u81EA\u5DF1\u989D\u5916\u83B7\u53D6\uFF0C\u4F46\u662F\u8981\u6CE8\u610F\u9ED8\u8BA4\u7684 standard \u6807\u51C6\u5F62\u5F0Fget_post_format \u4E5F\u4F1A\u8FD4false\uFF0C\u6240\u4EE5\u8BB0\u5F97\u81EA\u5DF1\u8981\u8BBE\u7F6E\u4E00\u4E2A\u9ED8\u8BA4\u503C</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">$format</span> <span class="token operator">=</span> <span class="token function">get_post_format</span><span class="token punctuation">(</span><span class="token variable">$postId</span><span class="token punctuation">)</span> <span class="token operator">?</span><span class="token punctuation">:</span> <span class="token string single-quoted-string">&#39;standard&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><strong>5. \u51FD\u6570\u53C2\u6570\u6CA1\u8BBE\u7F6E\u9ED8\u8BA4\u503C\uFF0C\u63A5\u53E3\u8C03\u7528\u4F1A\u62A5\u9519</strong></p><p>\u83B7\u53D6\u7528\u6237\u4FE1\u606F\u65F6\u5B9A\u4E49\u4E86\u4E00\u4E2A\u683C\u5F0F\u5316\u7528\u6237\u4FE1\u606F\u7684\u65B9\u6CD5\uFF0C\u7B2C\u4E8C\u4E2A\u53C2\u6570 $t \u5F00\u59CB\u6CA1\u8BBE\u7F6E\u9ED8\u8BA4\u503C\uFF0C\u8C03\u7528\u65F6\u4E0D\u9700\u8981\u7684\u5C31\u4E0D\u4F1A\u4F20\uFF0C\u4F46\u662F\u5F53\u65B9\u6CD5\u91CC\u7528\u5230 $t \u53BB\u5224\u65AD\u4E3A\u5047\u65F6\u63A5\u53E3\u4F1A\u76F4\u63A5\u5D29\u4E86\uFF0C\u81EA\u5DF1\u8BBE\u7F6E\u4E00\u4E2A\u9ED8\u8BA4\u503C\u5C31\u597D\u4E86\u3002</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token keyword">private</span> <span class="token keyword">function</span> <span class="token function-definition function">fmt_user_info</span><span class="token punctuation">(</span><span class="token variable">$u</span><span class="token punctuation">,</span> <span class="token variable">$t</span> <span class="token operator">=</span> <span class="token string double-quoted-string">&quot;&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token variable">$role_info</span> <span class="token operator">=</span> <span class="token keyword">array</span><span class="token punctuation">(</span>
        administrator <span class="token operator">=&gt;</span>  <span class="token string single-quoted-string">&#39;\u7BA1\u7406\u5458&#39;</span><span class="token punctuation">,</span>
        editor        <span class="token operator">=&gt;</span>  <span class="token string single-quoted-string">&#39;\u7F16\u8F91&#39;</span><span class="token punctuation">,</span>
        author        <span class="token operator">=&gt;</span>  <span class="token string single-quoted-string">&#39;\u4F5C\u8005&#39;</span><span class="token punctuation">,</span>
        contributor   <span class="token operator">=&gt;</span>  <span class="token string single-quoted-string">&#39;\u8D21\u732E\u8005&#39;</span><span class="token punctuation">,</span>
        subscriber    <span class="token operator">=&gt;</span>  <span class="token string single-quoted-string">&#39;\u8BA2\u9605\u8005&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token variable">$roleId</span> <span class="token operator">=</span> <span class="token variable">$u</span><span class="token operator">-&gt;</span><span class="token property">roles</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

    <span class="token variable">$user</span> <span class="token operator">=</span> <span class="token keyword">array</span><span class="token punctuation">(</span>
        <span class="token string double-quoted-string">&quot;id&quot;</span> <span class="token operator">=&gt;</span> <span class="token variable">$u</span><span class="token operator">-&gt;</span><span class="token constant">ID</span><span class="token punctuation">,</span>
        <span class="token string double-quoted-string">&quot;userName&quot;</span> <span class="token operator">=&gt;</span> <span class="token variable">$u</span><span class="token operator">-&gt;</span><span class="token property">data</span><span class="token operator">-&gt;</span><span class="token property">user_login</span><span class="token punctuation">,</span>
        <span class="token string double-quoted-string">&quot;nickname&quot;</span> <span class="token operator">=&gt;</span> <span class="token variable">$u</span><span class="token operator">-&gt;</span><span class="token property">data</span><span class="token operator">-&gt;</span><span class="token property">display_name</span> <span class="token operator">?</span><span class="token punctuation">:</span> <span class="token variable">$u</span><span class="token operator">-&gt;</span><span class="token variable">$data</span><span class="token operator">-&gt;</span><span class="token property">user_nicename</span><span class="token punctuation">,</span>
        <span class="token string double-quoted-string">&quot;date&quot;</span> <span class="token operator">=&gt;</span> <span class="token variable">$u</span><span class="token operator">-&gt;</span><span class="token property">data</span><span class="token operator">-&gt;</span><span class="token property">user_registered</span><span class="token punctuation">,</span>
        <span class="token string double-quoted-string">&quot;roleId&quot;</span> <span class="token operator">=&gt;</span> <span class="token variable">$roleId</span><span class="token punctuation">,</span>
        <span class="token string double-quoted-string">&quot;roleName&quot;</span> <span class="token operator">=&gt;</span> <span class="token variable">$role_info</span><span class="token punctuation">[</span><span class="token variable">$roleId</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// \u5217\u8868\u9875\u4E0D\u8FD4\u56DE\u7528\u6237\u90AE\u7BB1</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token variable">$t</span> <span class="token operator">===</span> <span class="token string single-quoted-string">&#39;login&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token variable">$user</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;email&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token variable">$u</span><span class="token operator">-&gt;</span><span class="token property">data</span><span class="token operator">-&gt;</span><span class="token property">user_email</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token variable">$user</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div><h2 id="\u77E5\u8BC6\u70B9" tabindex="-1"><a class="header-anchor" href="#\u77E5\u8BC6\u70B9" aria-hidden="true">#</a> \u77E5\u8BC6\u70B9</h2><p><strong>1. \u53D8\u91CF\u8BBE\u7F6E\u9ED8\u8BA4\u503C</strong></p><p>javascript \u4E2D\u7ED9\u53D8\u91CF\u8BBE\u7F6E\u9ED8\u8BA4\u503C\u53EF\u4EE5\u76F4\u63A5\u7528\u6216\u8FD0\u7B97\u7B26 ||\uFF0C\u4F46\u662F\u5728 php \u4E2D\u6216\u8FD0\u7B97\u7B26 || \u53EA\u80FD\u7528\u6765\u5224\u65AD\uFF0C\u4F1A\u8FD4\u56DE\u5E03\u5C14\u503C\uFF0C\u8981\u50CFjs\u4E2D\u8BBE\u7F6E\u9ED8\u8BA4\u503C\u53EA\u80FD\u7528if\u5224\u65AD\u6216\u8005\u4E09\u5143\u8FD0\u7B97\u7B26</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">$a</span> <span class="token operator">=</span> <span class="token string double-quoted-string">&quot;&quot;</span><span class="token punctuation">;</span>
<span class="token variable">$b</span> <span class="token operator">=</span> <span class="token variable">$a</span> <span class="token operator">?</span> <span class="token variable">$a</span> <span class="token punctuation">:</span> <span class="token string double-quoted-string">&quot;Hello&quot;</span>

<span class="token comment">// \u53EF\u7B80\u5199\u6210\u4E0B\u9762\u7684\u8FD9\u79CD\u5F62\u5F0F\uFF1A</span>
<span class="token comment">// $b = $a ?: &quot;Hello&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p><strong>2. Object \u5BF9\u8C61</strong></p><p>\u5728PHP \u4E2D\uFF0C\u6709\u4E09\u79CD\u7C7B\u578B\u7684\u6570\u7EC4\uFF1A</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token comment">// \u6570\u503C\u6570\u7EC4\uFF1A\u4EE5\u6570\u5B57\u4E3A\u952E\u7684\u6570\u7EC4\uFF0C\u952E\u4ECE0\u5F00\u59CB\u81EA\u589E</span>
<span class="token variable">$arr</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;zhou&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;xiao&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;hei&#39;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token comment">// \u5173\u8054\u6570\u7EC4\uFF1A\u5E26\u6709\u6307\u5B9A\u7684\u952E\u7684\u6570\u7EC4\uFF0C\u6BCF\u4E2A\u952E\u5173\u8054\u4E00\u4E2A\u503C</span>
<span class="token variable">$list</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;id&#39;</span><span class="token operator">=&gt;</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;name&#39;</span><span class="token operator">=&gt;</span><span class="token string single-quoted-string">&#39;\u5468\u5C0F\u9ED1&#39;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token comment">// \u591A\u7EF4\u6570\u7EC4\uFF1A\u5305\u542B\u4E00\u4E2A\u6216\u591A\u4E2A\u6570\u7EC4\u7684\u6570\u7EC4</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>\u5176\u5B9E\u5173\u8054\u6570\u7EC4\u5C31\u662F javascript \u4E2D\u7684\u5BF9\u8C61 Object</p><p><strong>3. \u6570\u7EC4\u53D6\u503C</strong></p><p>php \u4E2D\u8981\u83B7\u53D6\u6570\u7EC4\uFF08\u6216&quot;\u5BF9\u8C61&quot;\uFF0C\u5373\u4E0A\u9762\u8BF4\u5230\u7684\u5173\u8054\u6570\u7EC4\uFF0C\u4E5F\u5C31\u662F\u524D\u7AEFjs\u4E2D\u7684object\uFF09\u7684\u5C5E\u6027\u503C\uFF0C\u8981\u7528 [&quot;xx&quot;]\uFF0C\u4E0D\u80FD\u7528 -&gt; \uFF0C\u6A2A\u7EBF\u7BAD\u5934\u8FD9\u4E2A\u662F class \u7C7B\u5BF9\u8C61\u624D\u80FD\u8FD9\u6837\u83B7\u53D6</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">$arr</span> <span class="token operator">=</span> <span class="token keyword">array</span><span class="token punctuation">(</span>
    <span class="token string double-quoted-string">&quot;name&quot;</span><span class="token punctuation">:</span> <span class="token string double-quoted-string">&quot;zhou&quot;</span><span class="token punctuation">,</span>
    <span class="token string double-quoted-string">&quot;age&quot;</span><span class="token punctuation">:</span> <span class="token number">18</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// \u83B7\u53D6\u5C5E\u6027\u6B63\u786E\u65B9\u5F0F</span>
<span class="token variable">$name</span> <span class="token operator">=</span> <span class="token variable">$arr</span><span class="token punctuation">[</span><span class="token string double-quoted-string">&quot;name&quot;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token comment">// \u9519\u8BEF\u65B9\u5F0F</span>
<span class="token variable">$name</span> <span class="token operator">=</span> <span class="token variable">$arr</span><span class="token operator">-&gt;</span><span class="token property">name</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p><strong>4. WP_Query \u548C WP_Comment_Query \u4E2D\u7684 no_found_rows \u53C2\u6570</strong></p><p>WP_Query \u548C WP_Comment_Query \u8FD9\u4E24\u4E2A\u67E5\u8BE2\u7C7B\u91CC\uFF0C\u5176\u5B9E\u90FD\u6709\u8FD9\u4E2A\u53C2\u6570no_found_rows\uFF0C\u662F\u7528\u6765\u7981\u6B62 SQL_CALC_FOUND_ROWS \u67E5\u8BE2\uFF08\u8FD9\u4E2A\u73A9\u610F\u5C31\u662F\u7528\u6765\u8BA1\u7B97\u54B1\u5206\u9875\u67E5\u8BE2\u7684\u603B\u6761\u6570\u7684\uFF0C\u636E\u8BF4\u6027\u80FD\u4E0D\u9AD8\uFF09\u3002</p><p>\u5982\u679C no_found_rows \u4E3A false\uFF0C \u6700\u5927\u9875 max_num_pages\u3001\u603B\u6761\u6570found_posts/found_comments \u5C31\u4E0D\u4F1A\u53BB\u88AB\u8BA1\u7B97\uFF0C\u6211\u4EEC\u76F4\u63A5\u83B7\u53D6\u5C31\u90FD\u662F0\u3002</p><p>\u4F46\u662F\u8981\u6CE8\u610F WP_Query \u6587\u6863\u4E0A\u5E76\u6CA1\u6709\u5199 no_found_rows \u8FD9\u4E2A\u53C2\u6570\uFF0C\u7FFB\u6E90\u7801\u53EF\u4EE5\u53D1\u73B0\u662F\u6709\u7684\uFF0CWP_Comment_Query \u6587\u6863\u4E0A\u6709\u5199 no_found_rows \u53C2\u6570\uFF0C\u4F46\u662F\u8981\u6CE8\u610F\u5B83\u7684\u9ED8\u8BA4\u503C\u662F true\u3002</p><p>WP_User_Query \u91CC\u4E5F\u6709\u4E2A\u540C\u6837\u7684\u53C2\u6570\uFF0C\u4E0D\u8FC7\u540D\u5B57\u53EB count_total\uFF0C\u9ED8\u8BA4\u4E3A true\u3002</p>`,36),k={href:"https://developer.wordpress.org/reference/classes/wp_query/__construct/",target:"_blank",rel:"noopener noreferrer"},b=n("WP_Query \u6587\u6863"),d={href:"https://developer.wordpress.org/reference/classes/WP_Comment_Query/__construct/",target:"_blank",rel:"noopener noreferrer"},m=n("WP_Comment_Query \u6587\u6863"),g={href:"https://developer.wordpress.org/reference/classes/wp_user_query/",target:"_blank",rel:"noopener noreferrer"},_=n("WP_User_Query \u6587\u6863"),h=s("p",null,[s("strong",null,"5. \u83B7\u53D6\u603B\u6570")],-1),v=s("ul",null,[s("li",null,"\u83B7\u53D6\u9875\u9762\u603B\u6570\uFF1Awp_count_posts('page');"),s("li",null,"\u83B7\u53D6\u5206\u7C7B\u603B\u6570\uFF1Awp_count_terms('category');"),s("li",null,"\u83B7\u53D6\u6807\u7B7E\u603B\u6570\uFF1Awp_count_terms('post_tag');"),s("li",null,'\u83B7\u53D6\u7528\u6237\u603B\u6570\uFF1A$wpdb->get_var("SELECT COUNT(ID) FROM $wpdb->users");')],-1),q={href:"https://developer.wordpress.org/reference/functions/wp_count_terms/",target:"_blank",rel:"noopener noreferrer"},f=n("wp_count_terms"),$=n(" \u65B9\u6CD5\u4E5F\u53EF\u4EE5\u4F20\u9012\u53C2\u6570\u8FDB\u884C\u7EDF\u8BA1\uFF0C\u6BD4\u5982\u7EDF\u8BA1\u6807\u7B7E\uFF0C\u83B7\u53D6\u6807\u7B7E\u5217\u8868\u91CC\u7684\u8BBE\u7F6E\u4E86\u662F\u5426\u9690\u85CF\u7A7A\u6587\u7AE0\u6807\u7B7E hide_empty \u4E3A true\uFF0Cwp_count_terms \u65B9\u6CD5\u91CC\u4E5F\u8981\u4F20\u8FDB\u53BB hide_empty \u4E3A true\uFF0C\u5426\u5219\u7EDF\u8BA1\u51FA\u6765\u7684\u603B\u6570\u4E0D\u5BF9\u3002"),y=p(`<p><strong>6. \u83B7\u53D6\u8BF7\u6C42\u53C2\u6570</strong></p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>
<span class="token keyword">function</span> <span class="token function-definition function">my_awesome_func</span><span class="token punctuation">(</span> <span class="token class-name type-declaration">WP_REST_Request</span> <span class="token variable">$request</span> <span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// You can access parameters via direct array access on the object:</span>
  <span class="token variable">$param</span> <span class="token operator">=</span> <span class="token variable">$request</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;some_param&#39;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

  <span class="token comment">// Or via the helper method:</span>
  <span class="token variable">$param</span> <span class="token operator">=</span> <span class="token variable">$request</span><span class="token operator">-&gt;</span><span class="token function">get_param</span><span class="token punctuation">(</span> <span class="token string single-quoted-string">&#39;some_param&#39;</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// You can get the combined, merged set of parameters:</span>
  <span class="token variable">$parameters</span> <span class="token operator">=</span> <span class="token variable">$request</span><span class="token operator">-&gt;</span><span class="token function">get_params</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// The individual sets of parameters are also available, if needed:</span>
  <span class="token variable">$parameters</span> <span class="token operator">=</span> <span class="token variable">$request</span><span class="token operator">-&gt;</span><span class="token function">get_url_params</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token variable">$parameters</span> <span class="token operator">=</span> <span class="token variable">$request</span><span class="token operator">-&gt;</span><span class="token function">get_query_params</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token variable">$parameters</span> <span class="token operator">=</span> <span class="token variable">$request</span><span class="token operator">-&gt;</span><span class="token function">get_body_params</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token variable">$parameters</span> <span class="token operator">=</span> <span class="token variable">$request</span><span class="token operator">-&gt;</span><span class="token function">get_json_params</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token variable">$parameters</span> <span class="token operator">=</span> <span class="token variable">$request</span><span class="token operator">-&gt;</span><span class="token function">get_default_params</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// Uploads aren&#39;t merged in, but can be accessed separately:</span>
  <span class="token variable">$parameters</span> <span class="token operator">=</span> <span class="token variable">$request</span><span class="token operator">-&gt;</span><span class="token function">get_file_params</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</span></code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div>`,2),w={href:"https://developer.wordpress.org/rest-api/extending-the-rest-api/adding-custom-endpoints",target:"_blank",rel:"noopener noreferrer"},P=n("Adding Custom Endpoints"),x=s("p",null,[s("strong",null,"7. self \u548C $this")],-1),W=s("p",null,"self\u8C03\u7528\u7684\u662F\u7C7B\uFF0C\u800C$this\u8C03\u7528\u7684\u5219\u662F\u5B9E\u4F8B\u5316\u7684\u5BF9\u8C61\u3002",-1),j=s("p",null,"\u80FD\u7528$this\u7684\u5730\u65B9\u4E00\u5B9A\u4F7F\u7528self\uFF0C\u80FD\u7528self\u7684\u5730\u65B9\u4E0D\u4E00\u5B9A\u80FD\u7528$this\uFF0C\u9759\u6001\u7684\u65B9\u6CD5\u4E2D\u4E0D\u80FD\u4F7F\u7528$this\uFF0C\u9759\u6001\u65B9\u6CD5\u7ED9\u7C7B\u8BBF\u95EE\u7684\u3002",-1),E=s("p",null,"\u6CE8\u610F\u8BBF\u95EE\u4E0D\u4E00\u6837\uFF0C\u6CE8\u610F $ \u7684\u6709\u65E0\uFF0Cself::$\u53D8\u91CF\u540D\uFF0C$this->\u53D8\u91CF\u540D\u3002",-1),I=s("h2",{id:"\u53C2\u8003\u8D44\u6599",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#\u53C2\u8003\u8D44\u6599","aria-hidden":"true"},"#"),n(" \u53C2\u8003\u8D44\u6599")],-1),Q={href:"https://developer.wordpress.org",target:"_blank",rel:"noopener noreferrer"},R=n("WordPress Developers"),C={href:"https://developer.wordpress.org/rest-api",target:"_blank",rel:"noopener noreferrer"},S=n("REST API Handbook"),T={href:"https://ninghao.net/blog/5492",target:"_blank",rel:"noopener noreferrer"},N=n("WordPress\uFF1A\u6CE8\u518C\u65B0\u7684 REST \u63A5\u53E3"),A={href:"https://www.kancloud.cn/jabber/wordpress/296846",target:"_blank",rel:"noopener noreferrer"},L=n("WordPress\u5F00\u53D1\u624B\u518C");function O(U,D){const a=t("ExternalLinkIcon");return o(),r(l,null,[i,s("p",null,[s("a",k,[b,e(a)])]),s("p",null,[s("a",d,[m,e(a)])]),s("p",null,[s("a",g,[_,e(a)])]),h,v,s("p",null,[s("a",q,[f,e(a)]),$]),y,s("p",null,[s("a",w,[P,e(a)])]),x,W,j,E,I,s("ul",null,[s("li",null,[s("a",Q,[R,e(a)])]),s("li",null,[s("a",C,[S,e(a)])]),s("li",null,[s("a",T,[N,e(a)])]),s("li",null,[s("a",A,[L,e(a)])])])],64)}var V=c(u,[["render",O]]);export{V as default};
