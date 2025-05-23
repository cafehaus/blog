import{h as n}from"./app.c91e4ae6.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},p=n(`<h1 id="java\u4EE3\u7801\u4F18\u5316-\u5224\u65AD\u5185\u805A\u5230\u5B9E\u4F53\u5BF9\u8C61\u4E2D\u548C\u6784\u9020\u4E0A\u4E0B\u6587\u5BF9\u8C61\u4F20\u9012\u53C2\u6570" tabindex="-1"><a class="header-anchor" href="#java\u4EE3\u7801\u4F18\u5316-\u5224\u65AD\u5185\u805A\u5230\u5B9E\u4F53\u5BF9\u8C61\u4E2D\u548C\u6784\u9020\u4E0A\u4E0B\u6587\u5BF9\u8C61\u4F20\u9012\u53C2\u6570" aria-hidden="true">#</a> java\u4EE3\u7801\u4F18\u5316\uFF1A\u5224\u65AD\u5185\u805A\u5230\u5B9E\u4F53\u5BF9\u8C61\u4E2D\u548C\u6784\u9020\u4E0A\u4E0B\u6587\u5BF9\u8C61\u4F20\u9012\u53C2\u6570</h1><p>\u901A\u8FC7\u4E24\u4E2A\u5E38\u89C1\u7684java\u540E\u7AEF\u5B9E\u4F8B\u573A\u666F\u63A2\u8BA8\u4EE3\u7801\u4F18\u5316\uFF0C\u4EE3\u7801\u4E0D\u662F\u4F18\u5316\u51FA\u6765\u7684\uFF0C\u800C\u662F\u8BBE\u8BA1\u51FA\u6765\u7684\uFF0C\u6211\u4EEC\u6C38\u8FDC\u4E0D\u53EF\u80FD\u6709\u4E13\u95E8\u7684\u65F6\u95F4\u53BB\u505A\u4EE3\u7801\u4F18\u5316\uFF0C\u4F18\u5316\u548C\u8BBE\u8BA1\u5728\u5E73\u65F6\u3002</p><h3 id="\u6848\u4F8B\u4E00-\u5224\u65AD\u5185\u805A\u5230\u5B9E\u4F53\u5BF9\u8C61\u4E2D" tabindex="-1"><a class="header-anchor" href="#\u6848\u4F8B\u4E00-\u5224\u65AD\u5185\u805A\u5230\u5B9E\u4F53\u5BF9\u8C61\u4E2D" aria-hidden="true">#</a> \u6848\u4F8B\u4E00\uFF1A\u5224\u65AD\u5185\u805A\u5230\u5B9E\u4F53\u5BF9\u8C61\u4E2D</h3><p>\u9700\u6C42\u662F\u6570\u636E\u5E93\u91CC\u4F1A\u5B9A\u671F\u63D2\u5165\u4E00\u4E9B\u8BA2\u5355\uFF0C\u9700\u8981\u5728\u6279\u5904\u7406\u670D\u52A1\u4E2D\u5B9A\u65F6\u53BB\u626B\u63CF\u4E00\u4E0B\u5E93\u91CC\u7684\u6570\u636E\uFF0C\u5982\u679C\u72B6\u6001\u662F\u672A\u5173\u95ED\u4E14\u521B\u5EFA\u7684\u65F6\u95F4\u8D85\u8FC71\u5929\uFF0C\u5C31\u628A\u72B6\u6001\u81EA\u52A8\u6539\u6210\u5DF2\u5173\u95ED\uFF0C\u6838\u5FC3\u4EE3\u7801\u5982\u4E0B\uFF1A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">closeOrder</span><span class="token punctuation">(</span><span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">OrderDO</span><span class="token punctuation">&gt;</span></span> orderList<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">OrderDO</span> orderDO <span class="token operator">:</span> orderList<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token class-name">DateTimeUtils</span><span class="token punctuation">.</span><span class="token function">isBeforeNowByDay</span><span class="token punctuation">(</span>orderDO<span class="token punctuation">.</span><span class="token function">getCreateTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">continue</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token comment">// \u72B6\u6001\u6539\u6210\u5DF2\u5173\u95ED(\u8FD9\u91CC\u76F4\u63A5\u4FEE\u6539\u72B6\u6001\u7B80\u5355\u6A21\u62DF\u4E0B)</span>
        orderDO<span class="token punctuation">.</span><span class="token function">setStatus</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>OrderDO.java</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * \u8BA2\u5355DO\u5BF9\u8C61
 *
 * <span class="token keyword">@author</span> cafehaus
 * <span class="token keyword">@date</span> 2025/01/03
 */</span>
<span class="token annotation punctuation">@Data</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">OrderDO</span> <span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * \u8BA2\u5355id
     */</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> orderId<span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * \u72B6\u6001\uFF1A1-\u672A\u5173\u95ED 2-\u5DF2\u5173\u95ED
     */</span>
    <span class="token keyword">private</span> <span class="token class-name">Integer</span> status<span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * \u521B\u5EFA\u65F6\u95F4
     */</span>
    <span class="token keyword">private</span> <span class="token class-name">LocalDateTime</span> createTime<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><p>DateTimeUtils.java</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * \u65E5\u671F\u65F6\u95F4\u5DE5\u5177\u7C7B
 *
 * <span class="token keyword">@author</span> cafehaus
 * <span class="token keyword">@date</span> 2025/01/03
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">DateTimeUtils</span> <span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * \u5224\u65AD\u7ED9\u5B9A\u65E5\u671F\u65F6\u95F4\u662F\u5426\u6BD4\u5F53\u524D\u65E9\u6307\u5B9A\u7684\u5929\u6570
     *
     * <span class="token keyword">@param</span> <span class="token parameter">date</span>
     * <span class="token keyword">@param</span> <span class="token parameter">gapDay</span>
     * <span class="token keyword">@return</span>
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">boolean</span> <span class="token function">isBeforeNowByDay</span><span class="token punctuation">(</span><span class="token class-name">LocalDateTime</span> date<span class="token punctuation">,</span> <span class="token keyword">int</span> gapDay<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>date <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">IllegalArgumentException</span><span class="token punctuation">(</span><span class="token string">&quot;LocalDateTime cannot be null&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token comment">// \u8981\u5BF9\u6BD4\u7684\u53C2\u8003\u65F6\u95F4\uFF1A\u5F53\u524D\u65F6\u95F4\u51CF\u53BB\u95F4\u9694\u7684\u5929\u6570</span>
        <span class="token class-name">LocalDateTime</span> referenceDate <span class="token operator">=</span> <span class="token class-name">LocalDateTime</span><span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">minusDays</span><span class="token punctuation">(</span>gapDay<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// \u8FD4\u56DE\u6BD4\u8F83\u7ED3\u679C</span>
        <span class="token keyword">return</span> date<span class="token punctuation">.</span><span class="token function">isBefore</span><span class="token punctuation">(</span>referenceDate<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br></div></div><p>\u4E0A\u9762\u7684\u4EE3\u7801\u770B\u7740\u597D\u50CF\u6CA1\u5565\u95EE\u9898\uFF0C\u903B\u8F91\u4E5F\u5F88\u6E05\u6670\u3002\u5B9E\u9645 for \u5FAA\u73AF\u91CC\u7684\u90A3\u4E2A if \u5224\u65AD\u662F\u53EF\u4EE5\u7EE7\u7EED\u4F18\u5316\u7684\uFF0C\u6309\u7167\u4E0A\u9762\u7684\u5199\u6CD5\u6709\u4E24\u4E2A\u4E0D\u597D\u7684\u5730\u65B9\uFF1A</p><ul><li>\u5355\u6D4B\u4E0D\u597D\u6D4B\u8BD5</li><li>\u5224\u65AD\u4E0D\u591F\u7B80\u6D01</li></ul><p>\u4E0B\u9762\u662F\u4F18\u5316\u8FC7\u540E\u7684\u4EE3\u7801\uFF1A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">closeOrder</span><span class="token punctuation">(</span><span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">OrderDO</span><span class="token punctuation">&gt;</span></span> orderList<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">OrderDO</span> orderDO <span class="token operator">:</span> orderList<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>orderDO<span class="token punctuation">.</span><span class="token function">notNeedClose</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">continue</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token comment">// \u72B6\u6001\u6539\u6210\u5DF2\u5173\u95ED(\u8FD9\u91CC\u76F4\u63A5\u4FEE\u6539\u72B6\u6001\u7B80\u5355\u6A21\u62DF\u4E0B)</span>
        orderDO<span class="token punctuation">.</span><span class="token function">setStatus</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>OrderDO.java</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * \u8BA2\u5355DO\u5BF9\u8C61
 *
 * <span class="token keyword">@author</span> cafehaus
 * <span class="token keyword">@date</span> 2025/01/03
 */</span>
<span class="token annotation punctuation">@Data</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">OrderDO</span> <span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * \u8BA2\u5355id
     */</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> orderId<span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * \u72B6\u6001\uFF1A1-\u672A\u5173\u95ED 2-\u5DF2\u5173\u95ED
     */</span>
    <span class="token keyword">private</span> <span class="token class-name">Integer</span> status<span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * \u521B\u5EFA\u65F6\u95F4
     */</span>
    <span class="token keyword">private</span> <span class="token class-name">LocalDateTime</span> createTime<span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * \u5224\u65AD\u662F\u5426\u4E0D\u9700\u8981\u5173\u95ED\u5F53\u524D\u8BA2\u5355
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">notNeedClose</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token operator">!</span><span class="token class-name">DateTimeUtils</span><span class="token punctuation">.</span><span class="token function">isBeforeNowByDay</span><span class="token punctuation">(</span>createTime<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br></div></div><p>\u6539\u52A8\u7684\u5730\u65B9\u53EA\u662F\u76F4\u63A5\u5C06 if \u5224\u65AD\u5185\u805A\u5230\u4E86 DO \u5BF9\u8C61\u4E2D\u4F5C\u4E3A\u4E00\u4E2A\u65B9\u6CD5\uFF0C\u5916\u90E8\u4F7F\u7528\u7684\u65F6\u5019\u76F4\u63A5\u8C03\u7528\u4E00\u4E0B\u5F53\u524D\u5BF9\u8C61\u7684\u8FD9\u4E2A\u65B9\u6CD5\u5C31\u53EF\u4EE5\u4E86\uFF0C\u4E5F\u4E0D\u9700\u8981\u518D\u989D\u5916\u53D6\u53CD\u3002\u9664\u6B64\u4E4B\u5916\uFF0C\u5355\u6D4B\u6216\u8005\u53D8\u5F02\u6D4B\u8BD5\u4E5F\u5F88\u597D\u6D4B\u8BD5\uFF0C\u4E0D\u9700\u8981\u518D\u4F9D\u8D56\u6574\u4E2A\u6D41\u7A0B\u6216\u8005\u5176\u4ED6\u6570\u636E\uFF0C\u6211\u4EEC\u53EF\u4EE5\u5728\u4EFB\u4F55\u5730\u65B9\u76F4\u63A5 new \u51FA\u6765 OrderDO \u5BF9\u8C61\uFF0C\u7136\u540E\u968F\u4FBF\u6D4B\u8BD5\uFF0C\u5916\u9762\u7684\u4E1A\u52A1\u4EE3\u7801\u903B\u8F91\u4E5F\u53D8\u5F97\u66F4\u7B80\u5355\u3002</p><p>\u6240\u4EE5\u5E73\u65F6\u6211\u4EEC\u5B9A\u4E49\u5B9E\u4F53\u5BF9\u8C61\u3001\u679A\u4E3E\u8FD9\u4E9B\u5E76\u4E0D\u662F\u53EA\u7528 get\u3001set \u5C31\u884C\u4E86\uFF0C\u4E00\u4E9B if \u5224\u65AD\u5B9E\u9645\u5185\u805A\u5230\u5B9E\u4F53\u5BF9\u8C61\u5185\u90E8\u66F4\u52A0\u5408\u7406\uFF0C\u6574\u4F53\u4EE3\u7801\u53EF\u8BFB\u6027\u4E5F\u4F1A\u63D0\u9AD8\u4E0D\u5C11\u3002</p><h3 id="\u6848\u4F8B\u4E8C-\u6784\u9020\u4E0A\u4E0B\u6587\u5BF9\u8C61\u4F20\u9012\u53C2\u6570" tabindex="-1"><a class="header-anchor" href="#\u6848\u4F8B\u4E8C-\u6784\u9020\u4E0A\u4E0B\u6587\u5BF9\u8C61\u4F20\u9012\u53C2\u6570" aria-hidden="true">#</a> \u6848\u4F8B\u4E8C\uFF1A\u6784\u9020\u4E0A\u4E0B\u6587\u5BF9\u8C61\u4F20\u9012\u53C2\u6570</h3><p>\u5728\u4E00\u4E2A\u4EFB\u52A1\u64CD\u4F5C\u4E2D\uFF0C\u6211\u4EEC\u53EF\u80FD\u4F1A\u5148\u67E5\u8BE2\u4EFB\u52A1\u4FE1\u606F\uFF0C\u7136\u540E\u53C2\u6570\u3001\u903B\u8F91\u6821\u9A8C\u8FD9\u4E9B\uFF0C\u63A5\u7740\u8FDB\u884C\u5177\u4F53\u7684\u6838\u5FC3\u53D1\u5E03\u903B\u8F91\u64CD\u4F5C\uFF0C\u6700\u540E\u53EF\u80FD\u8FD8\u9700\u8981\u8BB0\u5F55\u64CD\u4F5C\u65E5\u5FD7...\u5176\u5B9E\u548C\u6211\u4EEC\u5927\u90E8\u5206\u7684\u4E1A\u52A1\u573A\u666F\u5F88\u76F8\u4F3C\uFF0C\u4E00\u4E2A\u63A5\u53E3\u4E2D\u6211\u4EEC\u9700\u8981\u62C6\u89E3\u6210\u5F88\u591A\u6B65\u9AA4\uFF0C\u4E3A\u4E86\u4EE3\u7801\u7684\u53EF\u8BFB\u6027\uFF0C\u6BCF\u4E2A\u6B65\u9AA4\u6211\u4EEC\u53EF\u80FD\u53C8\u4F1A\u63D0\u53D6\u6210\u4E00\u4E2A\u5355\u72EC\u7684\u65B9\u6CD5\uFF0C\u90A3\u5176\u4E2D\u5C31\u4F1A\u6D89\u53CA\u5230\u5404\u79CD\u53C2\u6570\u3001\u6570\u636E\u7684\u4F20\u9012\uFF0C\u8FD9\u4E2A\u65F6\u5019\u53EF\u80FD\u6709\u5982\u4E0B\u51E0\u79CD\u89E3\u51B3\u529E\u6CD5\uFF1A</p><ul><li>\u76F4\u63A5\u5F80\u65B9\u6CD5\u4E2D\u52A0\u53C2\u6570\uFF0C\u4F46\u662F\u53C2\u6570\u4E00\u591A\u5C31\u4F1A\u51FA\u95EE\u9898\u4E86\uFF0C\u4E00\u822C\u8D85\u8FC73\u4E2A\u53C2\u6570\u5C31\u4E0D\u5EFA\u8BAE\u76F4\u63A5\u4F20\u9012\u4E86</li><li>\u7528 Map \u6765\u4F20\u9012\u53C2\u6570\uFF0C\u4F46\u8FD9\u6837\u5176\u5B9E\u5C31\u8FDD\u80CC\u4E86\u9762\u5411\u5BF9\u8C61\u7684\u521D\u8877</li><li>\u5B9A\u4E49\u5404\u79CD DTO \u4E4B\u7C7B\u7684\u5B9E\u4F53\u5BF9\u8C61\u6765\u4F20\u9012\u548C\u63A5\u6536\u53C2\u6570\uFF0C\u5982\u6B64\u5C31\u4F1A\u5199\u51FA\u4E0B\u9762\u7684\u4EE3\u7801\uFF1A</li></ul><p>TaskService.java</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TaskService</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Autowired</span>
    <span class="token keyword">private</span> <span class="token class-name">TaskRepositoryService</span> taskRepositoryService<span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * \u63D0\u4EA4\u53D1\u5E03\u4FE1\u606F
     *
     * <span class="token keyword">@param</span> <span class="token parameter">taskId</span>
     * <span class="token keyword">@param</span> <span class="token parameter">operateUser</span>
     * <span class="token keyword">@return</span>
     */</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">submitPublish</span><span class="token punctuation">(</span><span class="token class-name">String</span> taskId<span class="token punctuation">,</span> <span class="token class-name">String</span> operateUser<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 1. \u67E5\u8BE2\u4EFB\u52A1\u4FE1\u606F</span>
        <span class="token class-name">TaskDTO</span> taskDTO <span class="token operator">=</span> taskRepositoryService<span class="token punctuation">.</span><span class="token function">queryTaskById</span><span class="token punctuation">(</span>taskId<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 2. \u53D1\u5E03\u4EFB\u52A1</span>
        <span class="token class-name">PublishResultDTO</span> publishResultDTO <span class="token operator">=</span> <span class="token function">publishTask</span><span class="token punctuation">(</span>taskDTO<span class="token punctuation">,</span> operateUser<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 3. \u8BB0\u5F55\u65E5\u5FD7</span>
        <span class="token function">insertPublishLog</span><span class="token punctuation">(</span>taskDTO<span class="token punctuation">,</span> operateUser<span class="token punctuation">,</span> publishResultDTO<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">return</span> taskDTO<span class="token punctuation">.</span><span class="token function">getTaskId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * \u53D1\u5E03\u4EFB\u52A1
     *
     * <span class="token keyword">@param</span> <span class="token parameter">taskDTO</span>
     * <span class="token keyword">@param</span> <span class="token parameter">operateUser</span>
     * <span class="token keyword">@return</span>
     */</span>
    <span class="token keyword">private</span> <span class="token class-name">PublishResultDTO</span> <span class="token function">publishTask</span><span class="token punctuation">(</span><span class="token class-name">TaskDTO</span> taskDTO<span class="token punctuation">,</span> <span class="token class-name">String</span> operateUser<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">PublishResultDTO</span> result <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">PublishResultDTO</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            <span class="token comment">// ... \u7701\u7565\u6389\u4E86\u5404\u79CD\u4E1A\u52A1\u903B\u8F91\u64CD\u4F5C</span>
            result<span class="token punctuation">.</span><span class="token function">setResultCode</span><span class="token punctuation">(</span><span class="token string">&quot;1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            result<span class="token punctuation">.</span><span class="token function">setResultMsg</span><span class="token punctuation">(</span><span class="token string">&quot;success&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span><span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            result<span class="token punctuation">.</span><span class="token function">setResultCode</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span><span class="token function">getCode</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            result<span class="token punctuation">.</span><span class="token function">setResultMsg</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span><span class="token function">getMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">return</span> result<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * \u63D2\u5165\u53D1\u5E03\u65E5\u5FD7
     *
     * <span class="token keyword">@param</span> <span class="token parameter">taskDTO</span>
     * <span class="token keyword">@param</span> <span class="token parameter">operateUser</span>
     * <span class="token keyword">@param</span> <span class="token parameter">publishResultDTO</span>
     */</span>
    <span class="token keyword">private</span> <span class="token keyword">void</span> <span class="token function">insertPublishLog</span><span class="token punctuation">(</span><span class="token class-name">TaskDTO</span> taskDTO<span class="token punctuation">,</span> <span class="token class-name">String</span> operateUser<span class="token punctuation">,</span> <span class="token class-name">PublishResultDTO</span> publishResultDTO<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u901A\u8FC7\u4EFB\u52A1\u4FE1\u606F\u548C\u53D1\u5E03\u7ED3\u679C\u6784\u9020\u65E5\u5FD7\u6570\u636E\u63D2\u5165\u6570\u636E\u5E93\u4E2D\uFF0C\u5177\u4F53\u903B\u8F91\u7701\u7565...</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br></div></div><p>TaskDTO.java</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * \u4EFB\u52A1DTO\u5BF9\u8C61
 *
 * <span class="token keyword">@author</span> cafehaus
 * <span class="token keyword">@date</span> 2025/01/04
 */</span>
<span class="token annotation punctuation">@Data</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TaskDTO</span> <span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * \u4EFB\u52A1id
     */</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> taskId<span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * \u4EFB\u52A1\u6B65\u9AA4
     */</span>
    <span class="token keyword">private</span> <span class="token class-name">Integer</span> publishStep<span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * \u53D1\u5E03code
     */</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> resultCode<span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * \u53D1\u5E03\u7ED3\u679C\u4FE1\u606F
     */</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> resultMsg<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br></div></div><p>PublishResultDTO.java</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * \u4EFB\u52A1\u53D1\u5E03\u7ED3\u679CDTO\u5BF9\u8C61
 *
 * <span class="token keyword">@author</span> cafehaus
 * <span class="token keyword">@date</span> 2025/01/04
 */</span>
<span class="token annotation punctuation">@Data</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">PublishResultDTO</span> <span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * \u53D1\u5E03code
     */</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> resultCode<span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * \u53D1\u5E03\u7ED3\u679C\u4FE1\u606F
     */</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> resultMsg<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><p>\u5982\u679C\u6309\u7167\u4E0A\u9762\u7684\u5199\u6CD5\uFF0C\u4E00\u4E2A\u63A5\u53E3\u6211\u4EEC\u53EF\u80FD\u9700\u8981\u5B9A\u4E49\u5F88\u591A\u4E2A DTO \u4E4B\u7C7B\u7684\u63A5\u53E3\u6765\u4F20\u9012\u53C2\u6570\uFF0C\u5982\u679C\u4E00\u76F4\u6309\u7167\u8FD9\u6837\u53BB\u5F00\u53D1\u9700\u6C42\uFF0C\u7ECF\u8FC7\u4E00\u6BB5\u65F6\u95F4\u4E4B\u540E\u5C31\u4F1A\u53D1\u73B0\u9879\u76EE\u4E2D\u5B9A\u4E49\u4E86\u4E00\u5927\u5806\u5404\u79CD\u5404\u6837\u7684 DTO\uFF0C\u90A3\u6709\u6CA1\u6709\u5176\u4ED6\u53EF\u4EE5\u4F18\u5316\u7684\u65B9\u5F0F\u5462\uFF1F</p><p>\u5176\u5B9E\u50CF\u8FD9\u79CD\u4E00\u4E2A\u63A5\u53E3\u4E2D\u6211\u4EEC\u9700\u8981\u5404\u79CD\u4F20\u9012\u53C2\u6570\u7684\u573A\u666F\uFF0C\u672C\u8EAB\u53C8\u5728\u4E00\u4E2A\u65B9\u6CD5\u4E2D\u90A3\u5C31\u53EF\u4EE5\u901A\u8FC7\u6784\u9020\u4E00\u4E2A\u7EDF\u4E00\u7684\u4E0A\u4E0B\u6587\u5BF9\u8C61\u6765\u89E3\u51B3\uFF0C\u5982\u4E0B\u662F\u4F18\u5316\u540E\u7684\u4EE3\u7801\uFF1A</p><p>TaskService.java</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TaskService</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Autowired</span>
    <span class="token keyword">private</span> <span class="token class-name">TaskRepositoryService</span> taskRepositoryService<span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * \u63D0\u4EA4\u53D1\u5E03\u4FE1\u606F
     *
     * <span class="token keyword">@param</span> <span class="token parameter">taskId</span>
     * <span class="token keyword">@param</span> <span class="token parameter">operateUser</span>
     * <span class="token keyword">@return</span>
     */</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">submitPublish</span><span class="token punctuation">(</span><span class="token class-name">String</span> taskId<span class="token punctuation">,</span> <span class="token class-name">String</span> operateUser<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 1. \u6784\u9020\u4E0A\u4E0B\u6587\u5BF9\u8C61</span>
        <span class="token class-name">TaskContextDTO</span> taskContextDTO <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">TaskContextDTO</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        taskContextDTO<span class="token punctuation">.</span><span class="token function">setTaskId</span><span class="token punctuation">(</span>taskId<span class="token punctuation">)</span><span class="token punctuation">;</span>
        taskContextDTO<span class="token punctuation">.</span><span class="token function">setOperateUser</span><span class="token punctuation">(</span>operateUser<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 2. \u67E5\u8BE2\u4EFB\u52A1\u4FE1\u606F</span>
        <span class="token class-name">TaskDTO</span> taskDTO <span class="token operator">=</span> taskRepositoryService<span class="token punctuation">.</span><span class="token function">queryTaskById</span><span class="token punctuation">(</span>taskId<span class="token punctuation">)</span><span class="token punctuation">;</span>
        taskContextDTO<span class="token punctuation">.</span><span class="token function">setTaskInfo</span><span class="token punctuation">(</span>taskDTO<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 3. \u53D1\u5E03\u4EFB\u52A1</span>
        <span class="token function">publishTask</span><span class="token punctuation">(</span>taskContextDTO<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 4. \u8BB0\u5F55\u65E5\u5FD7</span>
        <span class="token function">insertPublishLog</span><span class="token punctuation">(</span>taskContextDTO<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">return</span> taskContextDTO<span class="token punctuation">.</span><span class="token function">getTaskId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * \u53D1\u5E03\u4EFB\u52A1
     *
     * <span class="token keyword">@param</span> <span class="token parameter">taskContextDTO</span>
     */</span>
    <span class="token keyword">private</span> <span class="token keyword">void</span> <span class="token function">publishTask</span><span class="token punctuation">(</span><span class="token class-name">TaskContextDTO</span> taskContextDTO<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            <span class="token comment">// ... \u7701\u7565\u6389\u4E86\u5404\u79CD\u4E1A\u52A1\u903B\u8F91\u64CD\u4F5C</span>
            taskContextDTO<span class="token punctuation">.</span><span class="token function">setResultCode</span><span class="token punctuation">(</span><span class="token string">&quot;1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            taskContextDTO<span class="token punctuation">.</span><span class="token function">setResultMsg</span><span class="token punctuation">(</span><span class="token string">&quot;success&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span><span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            taskContextDTO<span class="token punctuation">.</span><span class="token function">setResultCode</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span><span class="token function">getCode</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            taskContextDTO<span class="token punctuation">.</span><span class="token function">setResultMsg</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span><span class="token function">getMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * \u63D2\u5165\u53D1\u5E03\u65E5\u5FD7
     *
     * <span class="token keyword">@param</span> <span class="token parameter">taskContextDTO</span>
     */</span>
    <span class="token keyword">private</span> <span class="token keyword">void</span> <span class="token function">insertPublishLog</span><span class="token punctuation">(</span><span class="token class-name">TaskContextDTO</span> taskContextDTO<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u901A\u8FC7\u4EFB\u52A1\u4FE1\u606F\u548C\u53D1\u5E03\u7ED3\u679C\u6784\u9020\u65E5\u5FD7\u6570\u636E\u63D2\u5165\u6570\u636E\u5E93\u4E2D\uFF0C\u5177\u4F53\u903B\u8F91\u7701\u7565...</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br></div></div><p>TaskContextDTO.java</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * \u4EFB\u52A1\u4E0A\u4E0B\u6587DTO\u5BF9\u8C61
 *
 * <span class="token keyword">@author</span> cafehaus
 * <span class="token keyword">@date</span> 2025/01/04
 */</span>
<span class="token annotation punctuation">@Data</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TaskContextDTO</span> <span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * \u4EFB\u52A1id
     */</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> taskId<span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * \u64CD\u4F5C\u4EBA
     */</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> operateUser<span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * \u53D1\u5E03code
     */</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> resultCode<span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * \u53D1\u5E03\u7ED3\u679C\u4FE1\u606F
     */</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> resultMsg<span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * \u4EFB\u52A1\u4FE1\u606F
     */</span>
    <span class="token keyword">private</span> <span class="token class-name">TaskDTO</span> taskInfo<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br></div></div><p>\u6240\u6709\u53C2\u6570\u7684\u4F20\u9012\u548C\u63A5\u6536\u5168\u90E8\u901A\u8FC7\u4E00\u4E2A TaskContextDTO \u5BF9\u8C61\u89E3\u51B3\uFF0C\u50CF TaskDTO \u91CC\u7684\u4FE1\u606F\u4E5F\u53EF\u4EE5\u4F5C\u4E3A\u4E0A\u4E0B\u6587\u5BF9\u8C61\u91CC\u7684\u4E00\u4E2A\u5C5E\u6027\u6765\u5D4C\u5957\u50A8\u5B58\uFF0C\u5229\u7528\u5F15\u7528\u6570\u636E\u7C7B\u578B\u7684\u7279\u70B9\u3002</p><p>\u524D\u9762\u7684\u6B65\u9AA4\u4E5F\u4E0D\u9700\u8981 return \u51FA\u7ED3\u679C\u518D\u4F20\u7ED9\u540E\u9762\u7684\u6B65\u9AA4\u53BB\u83B7\u53D6\u4E86\uFF0C\u5728\u83B7\u53D6\u5230\u7ED3\u679C\u65F6\u76F4\u63A5\u53BB set \u4E0A\u4E0B\u6587\u5BF9\u8C61 TaskContextDTO\uFF0C\u5176\u4ED6\u9700\u8981\u7684\u5730\u65B9\u901A\u8FC7 get \u5C31\u80FD\u76F4\u63A5\u83B7\u53D6\u5230\u3002\u5982\u6B64\u65B9\u6CD5\u7684\u53C2\u6570\u4E5F\u51CF\u5C11\u4E86\uFF0C\u4E5F\u4E0D\u9700\u8981\u518D\u4F20\u6765\u4F20\u53BB\u4E86\u3002</p>`,34);function e(t,c){return p}var r=s(a,[["render",e]]);export{r as default};
