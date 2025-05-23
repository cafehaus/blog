import{h as n}from"./app.c91e4ae6.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},t=n(`<h1 id="\u524D\u7AEF\u5E38\u7528\u4EE3\u7801\u7247\u6BB5" tabindex="-1"><a class="header-anchor" href="#\u524D\u7AEF\u5E38\u7528\u4EE3\u7801\u7247\u6BB5" aria-hidden="true">#</a> \u524D\u7AEF\u5E38\u7528\u4EE3\u7801\u7247\u6BB5</h1><p>\u4E00\u4E9B\u9879\u76EE\u4E2D\u5E38\u7528\u7684\u4EE3\u7801\u7247\u6BB5\uFF0C\u63D0\u9AD8\u5F00\u53D1\u6548\u7387</p><p><strong>vue \u4EE3\u7801\u7247\u6BB5</strong></p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
	<span class="token property">&quot;vue template&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;prefix&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vue&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;body&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token string">&quot;&lt;template&gt;&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;  &lt;div class=\\&quot;view\\&quot;&gt;&quot;</span><span class="token punctuation">,</span>
			<span class="token string">&quot;  &lt;/div&gt;&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;&lt;/template&gt;&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;&lt;script&gt;&quot;</span><span class="token punctuation">,</span>
			<span class="token string">&quot;  export default {&quot;</span><span class="token punctuation">,</span>
			<span class="token string">&quot;    props: {&quot;</span><span class="token punctuation">,</span>
			<span class="token string">&quot;    },&quot;</span><span class="token punctuation">,</span>
			<span class="token string">&quot;    data() {&quot;</span><span class="token punctuation">,</span>
			<span class="token string">&quot;      return {&quot;</span><span class="token punctuation">,</span>
			<span class="token string">&quot;      }&quot;</span><span class="token punctuation">,</span>
			<span class="token string">&quot;    },&quot;</span><span class="token punctuation">,</span>
			<span class="token string">&quot;    computed: {&quot;</span><span class="token punctuation">,</span>
			<span class="token string">&quot;    },&quot;</span><span class="token punctuation">,</span>
			<span class="token string">&quot;    watch: {&quot;</span><span class="token punctuation">,</span>
			<span class="token string">&quot;    },&quot;</span><span class="token punctuation">,</span>
			<span class="token string">&quot;    filters: {&quot;</span><span class="token punctuation">,</span>
			<span class="token string">&quot;    },&quot;</span><span class="token punctuation">,</span>
			<span class="token string">&quot;    created() {&quot;</span><span class="token punctuation">,</span>
			<span class="token string">&quot;    },&quot;</span><span class="token punctuation">,</span>
			<span class="token string">&quot;    methods: {&quot;</span><span class="token punctuation">,</span>
			<span class="token string">&quot;    },&quot;</span><span class="token punctuation">,</span>
			<span class="token string">&quot;  }&quot;</span><span class="token punctuation">,</span>
			<span class="token string">&quot;&lt;/script&gt;&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;&lt;style lang=&#39;stylus&#39; scoped&gt;&quot;</span><span class="token punctuation">,</span>
			<span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
			<span class="token string">&quot;.view&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;  width 100%&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;  height 100%&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;&lt;/style&gt;&quot;</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vue \u9875\u9762\u6A21\u677F&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
	<span class="token property">&quot;vue table and modal template&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;prefix&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vue-table&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;body&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token string">&quot;&lt;template&gt;&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;  &lt;div class=\\&quot;view\\&quot;&gt;&quot;</span><span class="token punctuation">,</span>
			<span class="token string">&quot;    &lt;div class=\\&quot;table-box\\&quot;&gt;&quot;</span><span class="token punctuation">,</span>
			<span class="token string">&quot;      &lt;Table class=\\&quot;table\\&quot; :data=\\&quot;tableData\\&quot; :columns=\\&quot;columns\\&quot;&gt;&quot;</span><span class="token punctuation">,</span>
			<span class="token string">&quot;        &lt;template slot=\\&quot;action\\&quot; slot-scope=\\&quot;{ row }\\&quot;&gt;&quot;</span><span class="token punctuation">,</span>
			<span class="token string">&quot;          &lt;Button type=\\&quot;primary\\&quot; size=\\&quot;small\\&quot; style=\\&quot;margin-right: 5px\\&quot;&gt;\u7F16\u8F91{{ row }}&lt;/Button&gt;&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;          &lt;Button size=\\&quot;small\\&quot;&gt;\u8BE6\u60C5&lt;/Button&gt;&quot;</span><span class="token punctuation">,</span>
			<span class="token string">&quot;        &lt;/template&gt;&quot;</span><span class="token punctuation">,</span>
			<span class="token string">&quot;      &lt;/Table&gt;&quot;</span><span class="token punctuation">,</span>
			<span class="token string">&quot;    &lt;/div&gt;&quot;</span><span class="token punctuation">,</span>
			<span class="token string">&quot;    &lt;VModal v-model=\\&quot;showDetail\\&quot; /&gt;&quot;</span><span class="token punctuation">,</span>
			<span class="token string">&quot;  &lt;/div&gt;&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;&lt;/template&gt;&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;&lt;script&gt;&quot;</span><span class="token punctuation">,</span>
			<span class="token string">&quot;  import VModal from &#39;@/components/v-modal&#39;&quot;</span><span class="token punctuation">,</span>
			<span class="token string">&quot;  export default {&quot;</span><span class="token punctuation">,</span>
			<span class="token string">&quot;    name: &#39;&#39;,&quot;</span><span class="token punctuation">,</span>
			<span class="token string">&quot;    components: {&quot;</span><span class="token punctuation">,</span>
			<span class="token string">&quot;      VModal,&quot;</span><span class="token punctuation">,</span>
			<span class="token string">&quot;    },&quot;</span><span class="token punctuation">,</span>
			<span class="token string">&quot;    props: {&quot;</span><span class="token punctuation">,</span>
			<span class="token string">&quot;    },&quot;</span><span class="token punctuation">,</span>
			<span class="token string">&quot;    data() {&quot;</span><span class="token punctuation">,</span>
			<span class="token string">&quot;      return {&quot;</span><span class="token punctuation">,</span>
			<span class="token string">&quot;        page: {&quot;</span><span class="token punctuation">,</span>
			<span class="token string">&quot;          index: 1,&quot;</span><span class="token punctuation">,</span>
			<span class="token string">&quot;          size: 10,&quot;</span><span class="token punctuation">,</span>
			<span class="token string">&quot;          total: 0,&quot;</span><span class="token punctuation">,</span>
			<span class="token string">&quot;        },&quot;</span><span class="token punctuation">,</span>
			<span class="token string">&quot;        loading: false,&quot;</span><span class="token punctuation">,</span>
			<span class="token string">&quot;        empty: false,&quot;</span><span class="token punctuation">,</span>
			<span class="token string">&quot;        tableData: [],&quot;</span><span class="token punctuation">,</span>
			<span class="token string">&quot;        columns: [&quot;</span><span class="token punctuation">,</span>
			<span class="token string">&quot;          { type: &#39;selection&#39;, width: 60, align: &#39;center&#39; },&quot;</span><span class="token punctuation">,</span>
			<span class="token string">&quot;          { type: &#39;index&#39;, width: 60, align: &#39;center&#39; },&quot;</span><span class="token punctuation">,</span>
			<span class="token string">&quot;          { title: &#39;\u59D3\u540D&#39;, key: &#39;userName&#39;, width: 120, align: &#39;center&#39; },&quot;</span><span class="token punctuation">,</span>
			<span class="token string">&quot;          { title: &#39;\u64CD\u4F5C&#39;, slot: &#39;action&#39;, width: 120, align: &#39;center&#39; },&quot;</span><span class="token punctuation">,</span>
			<span class="token string">&quot;        ],&quot;</span><span class="token punctuation">,</span>
			<span class="token string">&quot;        showDetail: false,&quot;</span><span class="token punctuation">,</span>
			<span class="token string">&quot;        curRow: {},&quot;</span><span class="token punctuation">,</span>
			<span class="token string">&quot;      }&quot;</span><span class="token punctuation">,</span>
			<span class="token string">&quot;    },&quot;</span><span class="token punctuation">,</span>
			<span class="token string">&quot;    computed: {&quot;</span><span class="token punctuation">,</span>
			<span class="token string">&quot;    },&quot;</span><span class="token punctuation">,</span>
			<span class="token string">&quot;    watch: {&quot;</span><span class="token punctuation">,</span>
			<span class="token string">&quot;    },&quot;</span><span class="token punctuation">,</span>
			<span class="token string">&quot;    filters: {&quot;</span><span class="token punctuation">,</span>
			<span class="token string">&quot;    },&quot;</span><span class="token punctuation">,</span>
			<span class="token string">&quot;    created() {&quot;</span><span class="token punctuation">,</span>
			<span class="token string">&quot;      this.init()&quot;</span><span class="token punctuation">,</span>
			<span class="token string">&quot;    },&quot;</span><span class="token punctuation">,</span>
			<span class="token string">&quot;    methods: {&quot;</span><span class="token punctuation">,</span>
			<span class="token string">&quot;      init() {&quot;</span><span class="token punctuation">,</span>
			<span class="token string">&quot;        this.getList()&quot;</span><span class="token punctuation">,</span>
			<span class="token string">&quot;      },&quot;</span><span class="token punctuation">,</span>
			<span class="token string">&quot;      async getList() {&quot;</span><span class="token punctuation">,</span>
			<span class="token string">&quot;        let params = {&quot;</span><span class="token punctuation">,</span>
			<span class="token string">&quot;          page: this.page.index,&quot;</span><span class="token punctuation">,</span>
			<span class="token string">&quot;          size: this.page.size,&quot;</span><span class="token punctuation">,</span>
			<span class="token string">&quot;        }&quot;</span><span class="token punctuation">,</span>
			<span class="token string">&quot;        this.loading = true&quot;</span><span class="token punctuation">,</span>
			<span class="token string">&quot;        const res = await this.\\\\$api.getList(params)&quot;</span><span class="token punctuation">,</span>
			<span class="token string">&quot;        this.loading = false&quot;</span><span class="token punctuation">,</span>
			<span class="token string">&quot;        if (res.code === &#39;200&#39;) {&quot;</span><span class="token punctuation">,</span>
			<span class="token string">&quot;          let data = res.data || {}&quot;</span><span class="token punctuation">,</span>
			<span class="token string">&quot;          let list = data.records || []&quot;</span><span class="token punctuation">,</span>
			<span class="token string">&quot;          this.tableData = list&quot;</span><span class="token punctuation">,</span>
			<span class="token string">&quot;          this.page.total = data.total&quot;</span><span class="token punctuation">,</span>
			<span class="token string">&quot;          this.empty = !list.length&quot;</span><span class="token punctuation">,</span>
			<span class="token string">&quot;        } else {&quot;</span><span class="token punctuation">,</span>
			<span class="token string">&quot;          this.\\\\$Message.error(res.msg)&quot;</span><span class="token punctuation">,</span>
			<span class="token string">&quot;        }&quot;</span><span class="token punctuation">,</span>
			<span class="token string">&quot;      },&quot;</span><span class="token punctuation">,</span>
			<span class="token string">&quot;    },&quot;</span><span class="token punctuation">,</span>
			<span class="token string">&quot;  }&quot;</span><span class="token punctuation">,</span>
			<span class="token string">&quot;&lt;/script&gt;&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;&lt;style lang=&#39;stylus&#39; scoped&gt;&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;@import &#39;~@/styles/var&#39;&quot;</span><span class="token punctuation">,</span>
			<span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
			<span class="token string">&quot;.view&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;  width 100%&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;  height 100%&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;&lt;/style&gt;&quot;</span><span class="token punctuation">,</span>
			<span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vue \u5E26\u8868\u683C\u548C\u5F39\u7A97\u9875\u9762\u6A21\u677F&quot;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br><span class="line-number">111</span><br><span class="line-number">112</span><br><span class="line-number">113</span><br><span class="line-number">114</span><br><span class="line-number">115</span><br><span class="line-number">116</span><br><span class="line-number">117</span><br><span class="line-number">118</span><br><span class="line-number">119</span><br><span class="line-number">120</span><br><span class="line-number">121</span><br><span class="line-number">122</span><br><span class="line-number">123</span><br><span class="line-number">124</span><br><span class="line-number">125</span><br><span class="line-number">126</span><br><span class="line-number">127</span><br><span class="line-number">128</span><br><span class="line-number">129</span><br><span class="line-number">130</span><br><span class="line-number">131</span><br><span class="line-number">132</span><br></div></div><p><strong>javascript \u4EE3\u7801\u7247\u6BB5</strong></p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
  	<span class="token property">&quot;comment&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
		<span class="token property">&quot;prefix&quot;</span><span class="token operator">:</span> <span class="token string">&quot;comment&quot;</span><span class="token punctuation">,</span>
		<span class="token property">&quot;body&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
		   <span class="token string">&quot;/**&quot;</span><span class="token punctuation">,</span>
		   <span class="token string">&quot;*  \u5224\u65AD\u53D6\u503C\u8303\u56F4&quot;</span><span class="token punctuation">,</span>
		   <span class="token string">&quot;*&quot;</span><span class="token punctuation">,</span>
		   <span class="token string">&quot;*  @param {*} x \u5F53\u524D\u503C&quot;</span><span class="token punctuation">,</span>
		   <span class="token string">&quot;*  @param {string} arr \u6570\u636E\u5217\u8868&quot;</span><span class="token punctuation">,</span>
		   <span class="token string">&quot;*/&quot;</span><span class="token punctuation">,</span>
		<span class="token punctuation">]</span><span class="token punctuation">,</span>
		<span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u751F\u6210 jsDoc \u89C4\u8303\u6CE8\u91CA&quot;</span>
	<span class="token punctuation">}</span><span class="token punctuation">,</span>
	<span class="token property">&quot;pc request&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;prefix&quot;</span><span class="token operator">:</span> <span class="token string">&quot;req&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;body&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token string">&quot;async func() {&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;  const res = await this.\\\\$api.name()&quot;</span><span class="token punctuation">,</span>
			<span class="token string">&quot;  if (res.code === &#39;200&#39;) {&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;  } else {&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;    this.\\\\$Message.error(res.msg)&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;  }&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;},&quot;</span><span class="token punctuation">,</span>
			<span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vue pc \u7AEF\u5F02\u6B65\u8BF7\u6C42\u901A\u7528\u683C\u5F0F&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
	<span class="token property">&quot;mobile request&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;prefix&quot;</span><span class="token operator">:</span> <span class="token string">&quot;req-m&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;body&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token string">&quot;async func() {&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;  const res = await this.\\\\$api.name()&quot;</span><span class="token punctuation">,</span>
			<span class="token string">&quot;  if (res.code === &#39;200&#39;) {&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;  } else {&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;    this.\\\\$tips.toast(res.msg)&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;  }&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;},&quot;</span><span class="token punctuation">,</span>
			<span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vue \u79FB\u52A8\u7AEF\u5F02\u6B65\u8BF7\u6C42\u901A\u7528\u683C\u5F0F&quot;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br></div></div>`,6);function p(o,e){return t}var c=s(a,[["render",p]]);export{c as default};
