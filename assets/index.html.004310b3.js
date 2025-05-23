import{r as p,o as e,c as t,a as n,d as o,F as l,g as s,h as c}from"./app.c91e4ae6.js";import{_ as r}from"./plugin-vue_export-helper.21dcd24c.js";const i={},u=n("h1",{id:"\u7528driverjs\u5236\u4F5C\u7528\u6237\u9875\u9762\u64CD\u4F5C\u6B65\u9AA4\u5F15\u5BFC",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u7528driverjs\u5236\u4F5C\u7528\u6237\u9875\u9762\u64CD\u4F5C\u6B65\u9AA4\u5F15\u5BFC","aria-hidden":"true"},"#"),s(" \u7528driverjs\u5236\u4F5C\u7528\u6237\u9875\u9762\u64CD\u4F5C\u6B65\u9AA4\u5F15\u5BFC")],-1),b={href:"https://github.com/kamranahmedse/driver.js",target:"_blank",rel:"noopener noreferrer"},k=s("driver.js"),m=c(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># npm i driver.js</span>
<span class="token comment"># yarn add driver.js</span>

<span class="token function">import</span> Driver from <span class="token string">&#39;driver.js&#39;</span>
<span class="token function">import</span> <span class="token string">&#39;driver.js/dist/driver.min.css&#39;</span>

<span class="token builtin class-name">export</span> default <span class="token punctuation">{</span>
  <span class="token function-name function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin class-name">return</span> <span class="token punctuation">{</span>
      driver: null,
      steps: <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          element: <span class="token string">&#39;.guide-1&#39;</span>, // \u5BF9\u5E94\u9700\u8981\u663E\u793A\u7684id\u83B7\u53D6class
          popover: <span class="token punctuation">{</span>
            title: <span class="token string">&#39; &#39;</span>,
            description: <span class="token string">&#39;\u6211\u662F\u7B2C\u4E00\u4E2A\u6B65\u9AA4&#39;</span>,
            position: <span class="token string">&#39;bottom&#39;</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>,
        <span class="token punctuation">{</span>
          element: <span class="token string">&#39;.guide-2&#39;</span>,
          popover: <span class="token punctuation">{</span>
            title: <span class="token string">&#39; &#39;</span>,
            description: <span class="token string">&#39;\u6211\u662F\u7B2C\u4E8C\u6B65&#39;</span>,
            position: <span class="token string">&#39;bottom&#39;</span>
          <span class="token punctuation">}</span>,
          padding: <span class="token number">5</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>,

  <span class="token function-name function">mounted</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    setTimeout<span class="token punctuation">((</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token punctuation">{</span>
      this.init<span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>, <span class="token number">0</span><span class="token punctuation">)</span>
    // this.<span class="token variable">$nextTick</span><span class="token punctuation">((</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token punctuation">{</span>
    //   this.init<span class="token punctuation">(</span><span class="token punctuation">)</span>
    // <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>,

  <span class="token function-name function">destroyed</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    // driver.reset<span class="token punctuation">(</span><span class="token punctuation">)</span>
    this.driver <span class="token operator">=</span> null
  <span class="token punctuation">}</span>,

  methods: <span class="token punctuation">{</span>
    <span class="token function-name function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      this.driver <span class="token operator">=</span> new Driver<span class="token punctuation">(</span><span class="token punctuation">{</span>
        className: <span class="token string">&#39;driver-popover&#39;</span>, // className to wrap driver.js popover
        animate: true, // Animate <span class="token keyword">while</span> changing highlighted element
        opacity: <span class="token number">0.75</span>, // Background opacity <span class="token punctuation">(</span><span class="token number">0</span> means only popovers and without overlay<span class="token punctuation">)</span>
        padding: <span class="token number">10</span>, // Distance of element from around the edges
        allowClose: false, // Whether clicking on overlay should close or not
        overlayClickNext: false, // Should it move to next step on overlay click
        doneBtnText: <span class="token string">&#39;\u5B8C\u6210&#39;</span>, // Text on the final button
        closeBtnText: <span class="token string">&#39;\u5173\u95ED&#39;</span>, // Text on the close button <span class="token keyword">for</span> this step
        nextBtnText: <span class="token string">&#39;\u4E0B\u4E00\u6B65&#39;</span>, // Next button text <span class="token keyword">for</span> this step
        prevBtnText: <span class="token string">&#39;\u4E0A\u4E00\u6B65&#39;</span>, // Previous button text <span class="token keyword">for</span> this step
        onHighlightStarted: <span class="token punctuation">(</span>Element<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token punctuation">{</span>
          Element.node.style.pointerEvents <span class="token operator">=</span> <span class="token string">&#39;none&#39;</span>
        <span class="token punctuation">}</span>,
        onDeselected: <span class="token punctuation">(</span>Element<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token punctuation">{</span>
          Element.node.style.pointerEvents <span class="token operator">=</span> <span class="token string">&#39;auto&#39;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
      this.driver.defineSteps<span class="token punctuation">(</span>this.steps<span class="token punctuation">)</span>
      this.driver.start<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br></div></div>`,1);function d(h,g){const a=p("ExternalLinkIcon");return e(),t(l,null,[u,n("p",null,[n("a",b,[k,o(a)])]),m],64)}var x=r(i,[["render",d]]);export{x as default};
