import{g as n}from"./app.b281c902.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},p=n(`<h1 id="iview\u7684poptip\u7EC4\u4EF6\u52A8\u6001\u83B7\u53D6\u6570\u636E\u5C01\u88C5" tabindex="-1"><a class="header-anchor" href="#iview\u7684poptip\u7EC4\u4EF6\u52A8\u6001\u83B7\u53D6\u6570\u636E\u5C01\u88C5" aria-hidden="true">#</a> iview\u7684Poptip\u7EC4\u4EF6\u52A8\u6001\u83B7\u53D6\u6570\u636E\u5C01\u88C5</h1><p>\u9700\u6C42\u4E2D\u63D0\u793A\u6BD4\u8F83\u590D\u6742\u7684\u5185\u5BB9\uFF0C\u53EF\u4EE5\u57FA\u4E8E Poptip \u4E8C\u6B21\u5C01\u88C5\uFF0C\u4E00\u822C\u4E3A\u4E86\u5C42\u7EA7\u4E0D\u53D7\u5F71\u54CD\uFF0C\u4F1A\u5F00\u542F transfer\uFF0C\u9ED8\u8BA4\u7684 slot \u6837\u5F0F\u9700\u8981\u53BB\u5168\u5C40\u8986\u76D6\uFF0C\u5982\u679C\u6BD4\u8F83\u7B80\u5355\u7684\u53EF\u4EE5\u76F4\u63A5\u7528 style \u5199\u5728\u884C\u5185\uFF0C\u590D\u6742\u7684\u53EF\u8003\u8651\u7EE7\u7EED\u7EC4\u4EF6\u5316\u5C01\u88C5\u3002\u4E0B\u9762\u7684\u793A\u4F8B\u5728\u5F02\u6B65\u6570\u636E\u56DE\u6765\u4E4B\u524D\uFF0C\u6709\u589E\u52A0 css \u52A0\u8F7D\u52A8\u753B\uFF0C\u7ED9\u7528\u6237\u66F4\u597D\u7684\u4F53\u9A8C\u3002</p><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Poptip</span>
    <span class="token attr-name">:trigger</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>trigger<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">transfer</span>
    <span class="token attr-name">placement</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>top<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">@on-popper-show</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>onPopperShow<span class="token punctuation">&quot;</span></span>
  <span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">color</span><span class="token punctuation">:</span> #116df3<span class="token punctuation">;</span> <span class="token property">margin-bottom</span><span class="token punctuation">:</span> 4px<span class="token punctuation">;</span> <span class="token property">cursor</span><span class="token punctuation">:</span> pointer</span><span class="token punctuation">&quot;</span></span></span><span class="token punctuation">&gt;</span></span>\u8BE6\u60C5<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">slot</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>content<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>showSpin<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>spinner<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ContentInfo</span> <span class="token attr-name">v-else</span> <span class="token attr-name">:info</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>info<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Poptip</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> ContentInfo <span class="token keyword">from</span> <span class="token string">&#39;./content-info&#39;</span>
  <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;PoptipPrice&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      ContentInfo<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">trigger</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">type</span><span class="token operator">:</span> String<span class="token punctuation">,</span>
        <span class="token keyword">default</span><span class="token operator">:</span> <span class="token string">&#39;hover&#39;</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token literal-property property">item</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">type</span><span class="token operator">:</span> Object<span class="token punctuation">,</span>
        <span class="token function-variable function">default</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">showSpin</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token literal-property property">info</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token function">onPopperShow</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getList</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>

      <span class="token keyword">async</span> <span class="token function">getList</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>item<span class="token punctuation">)</span>

        <span class="token keyword">let</span> params <span class="token operator">=</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">countryCode</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>item<span class="token punctuation">.</span>countryCode<span class="token punctuation">,</span>
          <span class="token literal-property property">rateVersion</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>item<span class="token punctuation">.</span>rateVersion<span class="token punctuation">,</span>
          <span class="token literal-property property">serviceCode</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>item<span class="token punctuation">.</span>serviceCode<span class="token punctuation">,</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>showSpin <span class="token operator">=</span> <span class="token boolean">true</span>
        <span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token keyword">this</span><span class="token punctuation">.</span>$api<span class="token punctuation">.</span><span class="token function">testRequset</span><span class="token punctuation">(</span>params<span class="token punctuation">)</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>showSpin <span class="token operator">=</span> <span class="token boolean">false</span>

        <span class="token keyword">if</span> <span class="token punctuation">(</span>res<span class="token punctuation">.</span>success <span class="token operator">&amp;&amp;</span> res<span class="token punctuation">.</span>data<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">let</span> data <span class="token operator">=</span> res<span class="token punctuation">.</span>data <span class="token operator">||</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
          <span class="token keyword">this</span><span class="token punctuation">.</span>info <span class="token operator">=</span> data
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
          <span class="token keyword">this</span><span class="token punctuation">.</span>$Message<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span>res<span class="token punctuation">.</span>msg <span class="token operator">||</span> res<span class="token punctuation">.</span>message <span class="token operator">||</span> <span class="token string">&#39;\u51FA\u9519\u5566\uFF01&#39;</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>stylus<span class="token punctuation">&#39;</span></span> <span class="token attr-name">scoped</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">

.spinner
  width 20px
  height 20px
  margin 10px auto
  background-color #2d8cf0
  border-radius 100%
  -webkit-animation sk-scaleout 1s infinite ease-in-out
  animation sk-scaleout 1s infinite ease-in-out
@keyframes sk-scaleout
  0%
    -webkit-transform <span class="token function">scale</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span>
  100%
    -webkit-transform <span class="token function">scale</span><span class="token punctuation">(</span>1<span class="token punctuation">)</span>
    opacity 0
@keyframes sk-scaleout
  0%
    -webkit-transform <span class="token function">scale</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span>
    transform <span class="token function">scale</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span>
  100%
    -webkit-transform <span class="token function">scale</span><span class="token punctuation">(</span>1<span class="token punctuation">)</span>
    transform <span class="token function">scale</span><span class="token punctuation">(</span>1<span class="token punctuation">)</span>
    opacity 0
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br></div></div>`,3);function t(e,o){return p}var u=s(a,[["render",t]]);export{u as default};