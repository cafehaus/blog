import{g as n}from"./app.b281c902.js";import{_ as a}from"./plugin-vue_export-helper.21dcd24c.js";const s={},e=n(`<h1 id="java\u5F00\u53D1\u95EE\u9898\u8BB0\u5F55" tabindex="-1"><a class="header-anchor" href="#java\u5F00\u53D1\u95EE\u9898\u8BB0\u5F55" aria-hidden="true">#</a> java\u5F00\u53D1\u95EE\u9898\u8BB0\u5F55</h1><h3 id="mac-\u4E0A\u5B89\u88C5-itellij-ide" tabindex="-1"><a class="header-anchor" href="#mac-\u4E0A\u5B89\u88C5-itellij-ide" aria-hidden="true">#</a> mac \u4E0A\u5B89\u88C5 Itellij IDE</h3><p>\u4E4B\u524D\u5B89\u88C5\u8FC7\u7684\u8BDD\u8981\u5378\u8F7D\u5E72\u51C0\u4E86\u624D\u80FD\u518D\u88C5\u6700\u65B0\u7684\uFF0C\u5426\u5219\u88C5\u4E0A\u65B0\u7248\u4F1A\u6253\u4E0D\u5F00\u3002\u5378\u8F7D\u53EF\u4EE5\u5728\u7EC8\u7AEF\u91CC\u4E00\u6B21\u8F93\u5165\u4E0B\u97624\u6761\u5220\u9664\u547D\u4EE4\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u7B2C1\u6761</span>
<span class="token function">rm</span> -rf ~/Library/Logs/JetBrains/IntelliJIdea*

<span class="token comment"># \u7B2C2\u6761</span>
<span class="token function">rm</span> -rf ~/Library/Application<span class="token punctuation">\\</span> Support/JetBrains/IntelliJIdea*

<span class="token comment"># \u7B2C3\u6761</span>
<span class="token function">rm</span> -rf ~/Library/Caches/JetBrains/IntelliJIdea*

<span class="token comment"># \u7B2C4\u6761</span>
<span class="token function">rm</span> -rf ~/Library/Preferences/jetbrains.idea*
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h3 id="mac-\u4E0A\u6740\u6B7B\u7AEF\u53E3" tabindex="-1"><a class="header-anchor" href="#mac-\u4E0A\u6740\u6B7B\u7AEF\u53E3" aria-hidden="true">#</a> mac \u4E0A\u6740\u6B7B\u7AEF\u53E3</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u67E5\u51FA\u5360\u7528\u8981\u6740\u6B7B\u7AEF\u53E3\u7684 PID</span>
<span class="token function">lsof</span> -i:8080

<span class="token comment"># \u901A\u8FC7 PID \u6740\u6B7B\u8FDB\u7A0B</span>
<span class="token function">kill</span> -9 <span class="token variable">\${\u67E5\u51FA\u6765\u7684PID}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div>`,6);function r(i,l){return e}var t=a(s,[["render",r]]);export{t as default};
