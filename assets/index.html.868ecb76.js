import{h as n}from"./app.c91e4ae6.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},e=n(`<h1 id="\u516C\u53F8springboot\u5FAE\u670D\u52A1java\u9879\u76EE\u672C\u5730\u8FD0\u884C\u7B14\u8BB0" tabindex="-1"><a class="header-anchor" href="#\u516C\u53F8springboot\u5FAE\u670D\u52A1java\u9879\u76EE\u672C\u5730\u8FD0\u884C\u7B14\u8BB0" aria-hidden="true">#</a> \u516C\u53F8SpringBoot\u5FAE\u670D\u52A1java\u9879\u76EE\u672C\u5730\u8FD0\u884C\u7B14\u8BB0</h1><p>\u5F00\u53D1\u5DE5\u5177\u63A8\u8350\u5B89\u88C5 IDE intelliJ 2021.2.2 \u7248\u672C\uFF0C\u53EF\u5B89\u88C5\u7684\u63D2\u4EF6\uFF1A\u65E0\u9650\u8BD5\u7528\u63D2\u4EF6 IDE Eval Reset\u3001\u4E2D\u6587\u63D2\u4EF6 Chinese</p><h3 id="\u8FD0\u884C\u6B65\u9AA4" tabindex="-1"><a class="header-anchor" href="#\u8FD0\u884C\u6B65\u9AA4" aria-hidden="true">#</a> \u8FD0\u884C\u6B65\u9AA4</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>* 1\u3001\u62C9\u5404\u4E2A\u670D\u52A1\u4EE3\u7801
* 2\u3001pom.xml\u914D\u7F6E\u6587\u4EF6\uFF0C\u53F3\u952E\u6DFB\u52A0\u4E3A maven \u9879\u76EE\uFF0C\u6839\u636E dependencies \u91CC\u7684 artifactId \u62C9\u53D6\u5176\u4ED6\u9879\u76EE\uFF1Axx
* 3\u3001settings - Build,Execution,Deployment - Build Tools - Maven - User settings file \u91CC\u914D\u7F6E\u81EA\u5DF1\u7684\u79C1\u6709\u4ED3\u5E93\u6587\u4EF6
* 4\u3001settings - Build,Execution,Deployment - Build Tools - compiler - java compiler\uFF0C\u9009\u62E9 1.8 \u7248\u672C
* 5\u3001\u9009\u4E2D\u6BCF\u4E2A\u9879\u76EE\u70B9\u51FB\u5C0F\u9524\u5B50\u56FE\u6807 build project
* 6\u3001\u518D\u70B9\u51FB\u5C0F\u4E09\u89D2\u542F\u52A8\u5165\u53E3\u670D\u52A1\u7C7B

\u4FEE\u6539\u914D\u7F6E\uFF1AServices - Run Configuration Type - Application\uFF0CEdit Configuration\uFF0C\u4E13\u4E1A\u7248\u7684settings\u91CC\u624D\u6709 spring boot \u7684\u914D\u7F6E\uFF0C\u81EA\u5B9A\u4E49\u53C2\u6570\u5728 VM options \u91CC\uFF0C-Dspring.profiles.active=test -Dserver.port=9906\uFF0CServices \u83DC\u5355\u5982\u679C\u6CA1\u6709\uFF0C\u5728\u9876\u90E8 View - Tool Windows - Services
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>java\u7A0B\u5E8F\u91CD\u542F\u7AEF\u53E3\u88AB\u5360\u7528</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u67E5\u627E\u88AB\u5360\u7528\u7AEF\u53E3\u8FDB\u7A0B</span>
<span class="token function">netstat</span> -aon<span class="token operator">|</span>findstr <span class="token number">8888</span>

<span class="token comment"># \u6740\u6B7B\u8FDB\u7A0B</span>
taskkill -PID <span class="token number">2523</span> -F
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="\u8F93\u5165\u7AEF\u53E3\u53F7\u81EA\u52A8\u6740\u6B7B\u8FDB\u7A0Bbat\u811A\u672C" tabindex="-1"><a class="header-anchor" href="#\u8F93\u5165\u7AEF\u53E3\u53F7\u81EA\u52A8\u6740\u6B7B\u8FDB\u7A0Bbat\u811A\u672C" aria-hidden="true">#</a> \u8F93\u5165\u7AEF\u53E3\u53F7\u81EA\u52A8\u6740\u6B7B\u8FDB\u7A0Bbat\u811A\u672C</h3><p>\u4F7F\u7528\u65B9\u5F0F\uFF1A\u76F4\u63A5\u590D\u5236\u5982\u4E0B\u4EE3\u7801\uFF0C\u7C98\u8D34\u5230\u8BB0\u4E8B\u672C\u4E0A\uFF0C\u4FEE\u6539\u6587\u4EF6\u540E\u7F00\u540D .bat\uFF0C\u53CC\u51FB\u4F1A\u81EA\u52A8\u6253\u5F00 cmd \u547D\u4EE4\u884C\u7A97\u53E3\uFF0C\u6839\u636E\u63D0\u793A\u8F93\u5165\u7AEF\u53E3\u53F7\u5C31\u884C\u4E86\uFF1A</p><div class="language-bat ext-bat line-numbers-mode"><pre class="language-bat"><code>@echo off &amp; setlocal EnableDelayedExpansion
CHCP 65001
title \u8F93\u5165\u7AEF\u53E3\u6740\u6B7B\u5BF9\u5E94\u7684\u8FDB\u7A0B
CLS
echo \u8BF7\u8F93\u5165\u7A0B\u5E8F\u6B63\u5728\u8FD0\u884C\u7684\u7AEF\u53E3\u53F7
set /p port=
echo \u627E\u5230\u7684\u8FDB\u7A0B\u8BB0\u5F55
echo =================================================================================
netstat -nao|findstr !port!
echo =================================================================================
echo \u56DE\u8F66\u8FDB\u884C\u9010\u4E2A\u786E\u8BA4
pause
for /f &quot;tokens=2,5&quot; %%i in (&#39;netstat -nao^|findstr :%%port%%&#39;) do (
	::if &quot;!processed[%%j]!&quot; == &quot;&quot; (
	if not defined processed[%%j] (
		set pname=N/A
		for /f &quot;tokens=1&quot; %%p in (&#39;tasklist^|findstr %%j&#39;) do (set pname=%%p)
		echo %%i	%%j	!pname!
		echo \u8F93\u5165Y\u786E\u8BA4Kill\uFF0C\u5426\u5219\u8DF3\u8FC7\uFF0C\u53EF\u56DE\u8F66\u8DF3\u8FC7
		set flag=N/A
		set /p flag=
		if &quot;!flag!&quot; == &quot;Y&quot; (
			taskkill /pid %%j -t -f
		) else (
			echo \u5DF2\u8DF3\u8FC7
		)
		set processed[%%j]=1
	)
)

cmd
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br></div></div>`,9);function r(t,l){return e}var b=s(a,[["render",r]]);export{b as default};
