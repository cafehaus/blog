import{r as a,o as t,c as p,a as n,d as e,F as o,g as l,h as c}from"./app.9ce014b4.js";import{_ as i}from"./plugin-vue_export-helper.21dcd24c.js";const u={},r=l(`<h1 id="\u7528springboot\u5F00\u53D1java\u7A0B\u5E8F\u548C\u90E8\u7F72\u7B14\u8BB0" tabindex="-1"><a class="header-anchor" href="#\u7528springboot\u5F00\u53D1java\u7A0B\u5E8F\u548C\u90E8\u7F72\u7B14\u8BB0" aria-hidden="true">#</a> \u7528SpringBoot\u5F00\u53D1java\u7A0B\u5E8F\u548C\u90E8\u7F72\u7B14\u8BB0</h1><h2 id="springboot\u5FEB\u901F\u4E0A\u624B" tabindex="-1"><a class="header-anchor" href="#springboot\u5FEB\u901F\u4E0A\u624B" aria-hidden="true">#</a> SpringBoot\u5FEB\u901F\u4E0A\u624B</h2><ul><li>New Project</li><li>Spring Initializr \u6CE8\u610F\u793E\u533A\u7248 Intellij IDE \u6CA1\u6709\u8FD9\u9879\uFF0C\u9700\u8981\u989D\u5916\u5B89\u88C5\u63D2\u4EF6</li><li>Project SDK: 1.8</li><li>Spring Initializr Project Settings\uFF1AGroup \u7EC4\u7EC7\u4E00\u822C\u516C\u53F8\u57DF\u540D\u5012\u5199\uFF0CArtifact \u9879\u76EE\u540D\uFF0CMaven\uFF0CJava\uFF0CJar\uFF0CJava version: 8</li><li>Web\uFF0CSpring Web</li></ul><p>JDK8\u6216\u8005JDK1.8\u662F\u7531\u4E8E\u81EA\u4ECEJDK1.5/JDK5\u547D\u540D\u65B9\u5F0F\u6539\u53D8\u540E\u9057\u7559\u7684\u65B0\u65E7\u547D\u540D\u65B9\u5F0F\u95EE\u9898\uFF0C\u6240\u4EE5\u6211\u4EEC\u53E3\u4E2D\u5E38\u8BF4\u7684Java8\u3001JDK8\u3001JDK1.8\u5176\u5B9E\u662F\u540C\u4E00\u4E2A\u4E1C\u897F\u3002</p><h4 id="\u8FD0\u884C\u62A5\u9519" tabindex="-1"><a class="header-anchor" href="#\u8FD0\u884C\u62A5\u9519" aria-hidden="true">#</a> \u8FD0\u884C\u62A5\u9519\uFF1A</h4><ul><li>Error:Cannot determine path to &#39;tools.jar&#39; library for openjdk-19</li><li>Error:java: \u9519\u8BEF: \u4E0D\u652F\u6301\u53D1\u884C\u7248\u672C 17</li></ul><p>\u4E0A\u9762\u8FD9\u4E24\u4E2A\u62A5\u9519\u4E00\u822C\u662F JDK \u6216\u7F16\u8F91\u5668\u7248\u672C\u4E0D\u5BF9\uFF0C\u53EF\u4EE5\u76F4\u63A5\u7528\u6700\u65B0\u7684\u7684\u793E\u533A\u7248 Intellij IDE</p><h4 id="\u7AEF\u53E3\u88AB\u5360\u7528" tabindex="-1"><a class="header-anchor" href="#\u7AEF\u53E3\u88AB\u5360\u7528" aria-hidden="true">#</a> \u7AEF\u53E3\u88AB\u5360\u7528</h4><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u3010mac\u3011</span>
<span class="token comment"># \u67E5\u770B\u88AB\u5360\u7528\u7684\u7AEF\u53E3\u53F7\uFF0C8080 \u5C31\u662F\u8981\u67E5\u770B\u7684\u7AEF\u53E3</span>
<span class="token function">sudo</span> <span class="token function">lsof</span> -i tcp:8080

<span class="token comment"># \u6740\u6B7B\u8FDB\u7A0B\uFF0CPID \u662F\u5BF9\u5E94\u8FDB\u7A0B\u7684 PID</span>
<span class="token function">sudo</span> <span class="token function">kill</span> -9 PID

<span class="token comment"># \u3010windows\u3011</span>
<span class="token comment"># \u67E5\u770B\u7AEF\u53E38080\u88AB\u54EA\u4E2A\u8FDB\u7A0B\u5360\u7528</span>
<span class="token function">netstat</span> -ano <span class="token operator">|</span> findstr <span class="token string">&quot;8080&quot;</span>    

<span class="token comment"># \u6740\u6B7B\u8FDB\u7A0B</span>
<span class="token function">kill</span> -9 PID
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h4 id="\u9879\u76EE\u70ED\u90E8\u7F72" tabindex="-1"><a class="header-anchor" href="#\u9879\u76EE\u70ED\u90E8\u7F72" aria-hidden="true">#</a> \u9879\u76EE\u70ED\u90E8\u7F72</h4><p>\u7C7B\u4F3C\u524D\u7AEF\u7684\u81EA\u52A8\u70ED\u66F4\u65B0\u548C\u8FD0\u884C node \u9879\u76EE\u7684 nodemon\uFF0C\u9700\u8981\u501F\u52A9 spring-boot-devtools</p><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.springframework.boot<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-boot-devtools<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>optional</span><span class="token punctuation">&gt;</span></span>true<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>optional</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>\u6DFB\u52A0\u5230 pom.xml \u6587\u4EF6\u4E2D\uFF0C\u7C7B\u4F3C\u524D\u7AEF\u91CC\u7684 package.json\uFF0C\u7528\u6765\u7BA1\u7406\u9879\u76EE\u4F9D\u8D56\u3002</p><p>\u6DFB\u52A0\u597D\u540E\u8FD8\u987B\u5728 src/main/resources/application.properties \u6587\u4EF6\u91CC\u914D\u7F6E\u4E00\u4E0B\u8BA9\u5B83\u751F\u6548\u3002</p><p>IDE \u4E2D\u8FD8\u987B\u989D\u5916\u914D\u7F6E\uFF1A</p><ul><li>Settings\u9875\u9762\uFF08\u793E\u533A\u7248\u7684\u8BBE\u7F6E\u6CA1\u5728File\u83DC\u5355\u4E0B\uFF0C\u5728\u53F3\u4E0A\u89D2\u7684\u8BBE\u7F6E\u5C0F\u56FE\u6807\u91CC\uFF09\uFF0CBuild,Execution,Deployment =&gt; compile =&gt; Build project automatically</li><li>Maintenance\u9875\u9762\uFF1Awindows \u4E0A ctrl+alt+shift+/\uFF08mac \u4E0A\u8FDE\u7EED\u6309\u4E24\u6B21shift\u952E\uFF09\uFF0C\u6253\u5F00\u9009\u62E9\u6846\uFF0C\u8F93\u5165reg\uFF0C\u9009\u62E9 Registry...\uFF0C \u52FE\u9009\u4E0A compiler.automake.allow.when.app.running\u3002\u5751\uFF1A\u6700\u65B0\u7248\u7684 Registry \u91CC\u5DF2\u7ECF\u6CA1\u6709\u90A3\u9879\u4E86\uFF0C\u5728\u8BBE\u7F6E\u91CC\u7684 Advanced Settings \u91CC\uFF1AAllow auto-make to start even if developed application is currently running\u3002</li></ul><h2 id="springboot-controller" tabindex="-1"><a class="header-anchor" href="#springboot-controller" aria-hidden="true">#</a> SpringBoot Controller</h2><p>\u63A7\u5236\u5668 controller\uFF1A</p><ul><li>@Controller\uFF0C\u8FD4\u56DE\u9875\u9762\uFF0C\u901A\u5E38\u4E0E\u6A21\u7248\u5F15\u64CE\u4E00\u8D77\u4F7F\u7528</li><li>@RestController\uFF0C\u8FD4\u56DEjson\u6570\u636E\uFF0C\u524D\u540E\u7AEF\u5206\u79BB</li></ul><p>MVC\u6A21\u5F0F\uFF1A</p><ul><li>Model\uFF1A\u6A21\u578B\uFF0C\u5B58\u50A8\u6570\u636E</li><li>Controller\uFF1A\u63A7\u5236\u5668\uFF0C\u534F\u8C03\u63A7\u5236</li><li>View\uFF1A\u89C6\u56FE\uFF0C\u663E\u793A\u6570\u636E</li></ul><p>\u5927\u767D\u8BDD\u7406\u89E3\uFF1AModel =&gt; \u6570\u636E\u5E93\uFF0CView =&gt; \u524D\u7AEF\uFF0CController =&gt; \u540E\u7AEF</p><p>\u5E38\u7528\u8BF7\u6C42\u6CE8\u89E3\uFF1A</p><ul><li>@RequestMapping</li><li>@GetMapping</li><li>@PostMapping</li></ul><h2 id="springboot\u6587\u4EF6\u4E0A\u4F20-\u62E6\u622A\u5668" tabindex="-1"><a class="header-anchor" href="#springboot\u6587\u4EF6\u4E0A\u4F20-\u62E6\u622A\u5668" aria-hidden="true">#</a> SpringBoot\u6587\u4EF6\u4E0A\u4F20+\u62E6\u622A\u5668</h2><p>\u9759\u6001\u8D44\u6E90\u653E\u5230 src/main/resources/static \u76EE\u5F55\u4E0B\uFF0C\u5C31\u80FD\u76F4\u63A5\u8BBF\u95EE\uFF0C\u548C\u524D\u7AEF\u91CC\u7684 public \u76EE\u5F55\u7C7B\u4F3C\u3002</p><p>\u5982\u679C\u8981\u4FEE\u6539\uFF0C\u5728 application.properties \u4E2D\u5B9A\u4E49\u8FC7\u6EE4\u89C4\u5219\u548C\u9759\u6001\u8D44\u6E90\u4F4D\u7F6E</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>spring.mvc.static-path-pattern=/static/**
spring.web.resources.static-locations=classpath:/static/
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>Spring Boot\u5DE5\u7A0B\u5D4C\u5165\u7684 tomcat \u9650\u5236\u4E86\u6BCF\u4E2A\u6587\u4EF6\u6700\u5927\u4E3A1M\uFF0C\u5355\u6B21\u8BF7\u6C42\u7684\u6587\u4EF6\u7684\u603B\u6570\u4E0D\u80FD\u5927\u4E8E10M\uFF0C\u5982\u679C\u8981\u4FEE\u6539\u914D\u7F6E\uFF0C\u5728 application.properties \u4E2D\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>spring.servlet.multipart.max-file-size=10MB
spring.servlet.multipart.max-request-size=20MB
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u524D\u7AEF\u7528 input \u8868\u5355\u6216 postman \u6A21\u62DF multipart/form-data \u4E0A\u4F20\u6587\u4EF6\uFF0C\u6CE8\u610F\u6587\u4EF6\u7684\u540D\u5B57\u8981\u8DDF\u63A5\u53E3\u91CC\u5B9A\u4E49\u7684 MultipartFile \u7684\u53C2\u6570\u540D\u4E00\u81F4\uFF0C\u4E0B\u9762\u4EE3\u7801\u7528\u7684 file\uFF0C\u518D\u901A\u8FC7 transferTo \u65B9\u6CD5\u53EF\u5C06\u6587\u4EF6\u5199\u5165\u5230\u78C1\u76D8\u4E2D\uFF0C\u7C7B\u4F3C nodejs \u4E2D\u7684 fs.writeFile\u3002</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token annotation punctuation">@RestController</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">FillController</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u4E0A\u4F20\u6587\u4EF6\u76EE\u5F55</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">String</span> UPLOAD_FOLDER <span class="token operator">=</span> <span class="token class-name">System</span><span class="token punctuation">.</span><span class="token function">getProperty</span><span class="token punctuation">(</span><span class="token string">&quot;user.dir&quot;</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;/upload/&quot;</span><span class="token punctuation">;</span>

    <span class="token comment">// \u4E0A\u4F20\u6587\u4EF6</span>
    <span class="token annotation punctuation">@PostMapping</span><span class="token punctuation">(</span><span class="token string">&quot;upload&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">upload</span><span class="token punctuation">(</span><span class="token class-name">String</span> nickname<span class="token punctuation">,</span> <span class="token class-name">MultipartFile</span> file<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;\u6587\u4EF6\u5927\u5C0F\uFF1A&quot;</span> <span class="token operator">+</span> file<span class="token punctuation">.</span><span class="token function">getSize</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>file<span class="token punctuation">.</span><span class="token function">getContentType</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>file<span class="token punctuation">.</span><span class="token function">getOriginalFilename</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">saveFile</span><span class="token punctuation">(</span>file<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token string">&quot;\u4E0A\u4F20\u6587\u4EF6\u6210\u529F&quot;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">saveFile</span><span class="token punctuation">(</span><span class="token class-name">MultipartFile</span> file<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;\u9879\u76EE\u76EE\u5F55\uFF1A&quot;</span> <span class="token operator">+</span> <span class="token class-name">System</span><span class="token punctuation">.</span><span class="token function">getProperty</span><span class="token punctuation">(</span><span class="token string">&quot;user.dir&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;\u6587\u4EF6\u4E0A\u4F20\u76EE\u5F55\uFF1A&quot;</span> <span class="token operator">+</span> UPLOAD_FOLDER<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">File</span> upDir <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">File</span><span class="token punctuation">(</span>UPLOAD_FOLDER<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// \u76EE\u5F55\u4E0D\u5B58\u5728\u5C31\u65B0\u5EFA\u4E00\u4E2A</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>upDir<span class="token punctuation">.</span><span class="token function">exists</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            upDir<span class="token punctuation">.</span><span class="token function">mkdir</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token class-name">File</span> f <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">File</span><span class="token punctuation">(</span>UPLOAD_FOLDER <span class="token operator">+</span> file<span class="token punctuation">.</span><span class="token function">getOriginalFilename</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// \u901A\u8FC7transferTo\u65B9\u6CD5\u5199\u5165\u6587\u4EF6\uFF0C\u7C7B\u4F3C node \u91CC\u7684 fs.writeFile</span>
        file<span class="token punctuation">.</span><span class="token function">transferTo</span><span class="token punctuation">(</span>f<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br></div></div><p>\u6587\u4EF6\u4FDD\u5B58\u76EE\u5F55\u4E5F\u53EF\u4EE5\u7528 HttpServletRequest \u5BF9\u8C61\u7684 getServletContext().getRealPath(&quot;/upload/&quot;) \u53BB\u521B\u5EFA\uFF0C\u6B64\u76EE\u5F55\u662F\u670D\u52A1\u5668\u4E0A\u7684\u8DEF\u5F84\uFF0C\u6BCF\u6B21\u91CD\u542F\u670D\u52A1\u5668\u4F1A\u53D1\u751F\u53D8\u5316\uFF0C\u76F4\u63A5\u5C06\u6B64\u8DEF\u5F84\u590D\u5236\u5230\u6D4F\u89C8\u5668\u4E2D\u662F\u53EF\u4EE5\u76F4\u63A5\u6253\u5F00\u7684\u3002\u901A\u8FC7\u6B64\u8DEF\u5F84\u5728\u989D\u5916\u914D\u7F6E\u4E0B\u9759\u6001\u76EE\u5F55\uFF0C\u8FD9\u6837\u5C31\u53EF\u4EE5\u76F4\u63A5\u901A\u8FC7\u9879\u76EE\u8BBF\u95EE\u5230\u4E0A\u4F20\u7684\u6587\u4EF6\u3002</p><p>\u4E5F\u53EF\u4EE5\u901A\u8FC7 ClassUtils.getDefaultClassLoader().getResource(&quot;&quot;).getPath() + &quot;static/&quot; \u76F4\u63A5\u5C06\u6587\u4EF6\u5B58\u5165 static \u76EE\u5F55\u4E2D\u3002</p><h3 id="\u5B66\u4E60\u8BFE\u7A0B" tabindex="-1"><a class="header-anchor" href="#\u5B66\u4E60\u8BFE\u7A0B" aria-hidden="true">#</a> \u5B66\u4E60\u8BFE\u7A0B</h3>`,35),k={href:"https://www.bilibili.com/video/BV1nV4y1s7ZN",target:"_blank",rel:"noopener noreferrer"},m=c("1\u5929\u641E\u5B9ASpringBoot+Vue\u5168\u6808\u5F00\u53D1");function d(b,g){const s=a("ExternalLinkIcon");return t(),p(o,null,[r,n("ul",null,[n("li",null,[n("a",k,[m,e(s)])])])],64)}var v=i(u,[["render",d]]);export{v as default};
