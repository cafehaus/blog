import{h as n}from"./app.c91e4ae6.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},e=n(`<h1 id="\u524D\u7AEF\u9879\u76EE\u76EE\u5F55\u7ED3\u6784" tabindex="-1"><a class="header-anchor" href="#\u524D\u7AEF\u9879\u76EE\u76EE\u5F55\u7ED3\u6784" aria-hidden="true">#</a> \u524D\u7AEF\u9879\u76EE\u76EE\u5F55\u7ED3\u6784</h1><h2 id="vue-\u9879\u76EE" tabindex="-1"><a class="header-anchor" href="#vue-\u9879\u76EE" aria-hidden="true">#</a> vue \u9879\u76EE</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u251C\u2500\u2500 public/static -- \u9759\u6001\u8D44\u6E90\uFF0C\u65E0\u9700\u7F16\u8BD1\u7684\u56FE\u7247\u4E4B\u7C7B\u7684
\u251C    \u2514\u2500\u2500 img -- \u56FE\u7247\u8D44\u6E90
\u251C    \u2514\u2500\u2500 svg -- SVG\u8D44\u6E90
\u251C    \u2514\u2500\u2500 favicon.ico -- \u7F51\u7AD9\u56FE\u6807
\u251C    \u2514\u2500\u2500 index.html -- \u7F51\u7AD9\u9996\u9875
\u2502
\u251C\u2500src -- \u9879\u76EE\u5F00\u53D1\u76EE\u5F55
\u2502  \u251C\u2500assets -- \u516C\u5171\u9759\u6001\u6570\u636E\u6216\u8F83\u5C0F\u7684\u56FE\u7247\u8D44\u6E90\uFF0Cvue-cli\u4F1A\u628A\u8F83\u5C0F\u7684\u56FE\u7247\u7F16\u8BD1\u6210base64\uFF0C\u5982\u679C\u65F6\u9875\u9762\u72EC\u6709\u7684\u5EFA\u8BAE\u76F4\u63A5\u653E\u5230\u9875\u9762\u76EE\u5F55\u91CC
\u2502  \u2502  \u251C\u2500data -- \u9759\u6001\u6570\u636E
\u2502  \u2502  \u2514\u2500images -- \u8F83\u5C0F\u56FE\u7247\u8D44\u6E90
\u2502  \u251C\u2500common -- \u516C\u5171\u6587\u4EF6
\u2502  \u251C\u2500libs/utils -- \u516C\u5171\u65B9\u6CD5\u3001\u5DE5\u5177
\u2502  \u251C\u2500api/request -- \u6570\u636E\u8BF7\u6C42
\u2502  \u251C\u2500styles -- \u516C\u5171\u6837\u5F0F
\u2502  \u251C\u2500router/routes -- \u8DEF\u7531
\u2502  \u251C\u2500store -- \u72B6\u6001
\u2502  \u251C\u2500components -- \u516C\u5171\u7EC4\u4EF6
\u2502  \u2502    \u251C\u2500base -- \u57FA\u7840\u7EC4\u4EF6
\u2502  \u2502    \u2514\u2500hello -- \u4E1A\u52A1\u7EC4\u4EF6
\u2502  \u251C\u2500filters -- \u8FC7\u6EE4\u5668
\u2502  \u251C\u2500directives -- \u6307\u4EE4
\u2502  \u251C\u2500plugins -- \u63D2\u4EF6
\u2502  \u251C\u2500mixins -- \u6DF7\u5165
\u2502  \u251C\u2500views/pages -- \u9875\u9762
\u2502  \u251C\u2500app.vue -- \u6839\u7EC4\u4EF6
\u2502  \u251C\u2500main.js -- \u5165\u53E3\u6587\u4EF6
\u2502  \u2514\u2500config.js -- \u914D\u7F6E\u6587\u4EF6
\u2502
\u251C\u2500\u2500 .gitignore -- git\u5FFD\u7565\u5217\u8868
\u251C\u2500\u2500 package.json -- \u9879\u76EE\u4F9D\u8D56\u914D\u7F6E
\u251C\u2500\u2500 vue.config.js -- vue cli3\u7684webpack\u914D\u7F6E
\u251C\u2500\u2500 README.md -- \u9879\u76EE\u7B80\u4ECB
\u251C\u2500\u2500 docs -- \u6587\u6863
\u251C\u2500\u2500 examples -- \u793A\u4F8B\u6587\u4EF6
\u251C\u2500\u2500 test -- \u6D4B\u8BD5\u811A\u672C
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br></div></div>`,3);function r(l,p){return e}var c=s(a,[["render",r]]);export{c as default};
