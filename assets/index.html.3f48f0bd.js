import{r as l,o as r,c as i,a as s,d as e,F as c,g as n,h as p}from"./app.c91e4ae6.js";import{_ as t}from"./plugin-vue_export-helper.21dcd24c.js";var o="/assets/1.aba1fb2a.png",b="/assets/2.36b843dd.png",u="/assets/3.098d7849.png",m="/assets/4.b9d83ab4.png",d="/assets/5.70b7fe96.png";const g={},h=s("h1",{id:"\u4EAC\u4E1C\u8F7B\u91CF\u4E91\u4E3B\u673A\u6D4B\u8BC4\u4F53\u9A8C",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#\u4EAC\u4E1C\u8F7B\u91CF\u4E91\u4E3B\u673A\u6D4B\u8BC4\u4F53\u9A8C","aria-hidden":"true"},"#"),n(" \u4EAC\u4E1C\u8F7B\u91CF\u4E91\u4E3B\u673A\u6D4B\u8BC4\u4F53\u9A8C")],-1),x=n("\u83B7\u5F97\u4E86\u4E00\u53F0"),k={href:"https://www.jdcloud.com/",target:"_blank",rel:"noopener noreferrer"},f=n("\u4EAC\u4E1C\u4E91"),_=n("\u65B0\u63A8\u51FA\u7684\u8F7B\u91CF\u4E91\u4E3B\u673A1\u4E2A\u6708\u514D\u8D39\u4F53\u9A8C\u6743\u9650\uFF0C\u611F\u8C22\u5F3A\u54E5\uFF0C\u611F\u8C22\u4EAC\u4E1C\u4E91\uFF01"),v=p('<h3 id="\u767B\u5F55\u670D\u52A1\u5668" tabindex="-1"><a class="header-anchor" href="#\u767B\u5F55\u670D\u52A1\u5668" aria-hidden="true">#</a> \u767B\u5F55\u670D\u52A1\u5668</h3><p>\u670D\u52A1\u5668\u914D\u7F6E\uFF1A2\u68384GB\uFF0C80GB\u7CFB\u7EDF\u76D8\uFF0C\u7CFB\u7EDF\uFF1ACentOS Linux 7 (Core)</p><h4 id="\u62FF\u5230\u516C\u7F51-ip" tabindex="-1"><a class="header-anchor" href="#\u62FF\u5230\u516C\u7F51-ip" aria-hidden="true">#</a> \u62FF\u5230\u516C\u7F51 IP</h4><p>\u5148\u767B\u5F55\u5230\u540E\u53F0\u62FF\u5230\u516C\u7F51IP\uFF0C\u7B49\u4E0B\u76F4\u63A5\u8FDC\u7A0B\u767B\u5F55\uFF0C\u6700\u53F3\u8FB9\u6709\u4E00\u4E2A\u767B\u5F55\u6309\u94AE\u4E5F\u53EF\u4EE5\u76F4\u63A5\u70B9\u51FB\u767B\u5F55\u670D\u52A1\u5668\u3002</p><img src="'+o+'"><p>\u670D\u52A1\u5668\u7BA1\u7406\u7AEF\u611F\u89C9\u4EA4\u4E92\u6709\u70B9\u522B\u626D\uFF0C\u767B\u5F55\u7528\u4EAC\u4E1C\u4E91\u8D26\u53F7\u5BC6\u7801\u4E00\u76F4\u62A5\u5BC6\u7801\u4E0D\u6B63\u786E\uFF0C\u660E\u660E\u662F\u6B63\u786E\u7684\uFF0C\u6700\u540E\u626B\u7801\u767B\u8FDB\u53BB\u4E86\u3002</p><img src="'+b+'"><h4 id="\u7528-tabby-\u8FDC\u7A0B\u767B\u5F55" tabindex="-1"><a class="header-anchor" href="#\u7528-tabby-\u8FDC\u7A0B\u767B\u5F55" aria-hidden="true">#</a> \u7528 Tabby \u8FDC\u7A0B\u767B\u5F55</h4>',8),w=n("\u5148\u5B89\u88C5"),y={href:"https://tabby.sh",target:"_blank",rel:"noopener noreferrer"},B=n("Tabby"),S=n("\uFF0C\u65B0\u5EFA\u914D\u7F6E\u548C\u8FDE\u63A5\uFF0C\u70B9\u51FB\u6309\u94AE\uFF1A+\u65B0\u914D\u7F6E => SSH\u8FDE\u63A5 => \u8F93\u5165\u8FDC\u7A0B ip \u548C\u5BC6\u7801\u3002"),N=p('<img src="'+u+`"><h3 id="\u5B89\u88C5-nginx" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5-nginx" aria-hidden="true">#</a> \u5B89\u88C5 nginx</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u4E0B\u8F7D</span>
<span class="token function">wget</span> -c https://nginx.org/download/nginx-1.18.0.tar.gz

<span class="token comment"># \u89E3\u538B</span>
<span class="token function">tar</span> -zxvf nginx-1.18.0.tar.gz 

<span class="token comment"># \u8FDB\u5230\u76EE\u5F55</span>
<span class="token builtin class-name">cd</span> nginx-1.18.0/

<span class="token comment"># \u914D\u7F6E</span>
./configure 

<span class="token comment"># \u7F16\u8BD1\u5B89\u88C5</span>
<span class="token function">make</span>
<span class="token function">make</span> <span class="token function">install</span>

<span class="token comment"># \u542F\u52A8</span>
/usr/local/nginx/sbin/nginx -c /usr/local/nginx/conf/nginx.conf
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><p>\u6700\u540E\u4E00\u6B65\u5B89\u88C5 make \u53EF\u80FD\u4F1A\u62A5\u9519:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>*** No rule to <span class="token function">make</span> target <span class="token variable"><span class="token variable">\`</span>build&#39;, needed by <span class="token variable">\`</span></span>default&#39;. Stop
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u5B89\u88C5\u4EE5\u4E0B\u7F3A\u5C11\u7684\u4F9D\u8D56\u91CD\u65B0\u7F16\u8BD1\u5C31\u53EF\u4EE5\u4E86\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u5B89\u88C5\u7F3A\u5C11\u7684\u4F9D\u8D56</span>
yum -y <span class="token function">install</span> <span class="token function">make</span> zlib-devel gcc-c++ libtool openssl openssl-devel

<span class="token comment"># \u914D\u7F6E</span>
./configure 

<span class="token comment"># \u7F16\u8BD1\u5B89\u88C5</span>
<span class="token function">make</span>
<span class="token function">make</span> <span class="token function">install</span>

<span class="token comment"># \u542F\u52A8</span>
/usr/local/nginx/sbin/nginx -c /usr/local/nginx/conf/nginx.conf
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>\u7136\u540E\u53D1\u73B0\u7EE7\u7EED\u62A5\u9519\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>nginx: <span class="token punctuation">[</span>emerg<span class="token punctuation">]</span> bind<span class="token punctuation">(</span><span class="token punctuation">)</span> to <span class="token number">0.0</span>.0.0:80 failed <span class="token punctuation">(</span><span class="token number">98</span>: Address already <span class="token keyword">in</span> use<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u662F\u56E0\u4E3A\u670D\u52A1\u5668\u4E0A\u9ED8\u8BA4\u5DF2\u7ECF\u88C5\u4E86 fastpanel2-nginx\uFF0C\u5728\u6D4F\u89C8\u5668\u4E2D\u76F4\u63A5\u8F93\u5165\u670D\u52A1\u5668\u7684\u516C\u7F51ip\u4E5F\u53EF\u4EE5\u770B\u5230 fastpanel \u7684\u5185\u5BB9\uFF1A</p><img src="`+m+'"><p>\u6CE8\u610F\u5982\u679C\u8981\u914D\u7F6E\u5176\u4ED6\u7AEF\u53E3\u9700\u8981\u5728\u670D\u52A1\u5668\u540E\u53F0\u9632\u706B\u5899\u90A3\u81EA\u5DF1\u914D\u7F6E\uFF0C\u9ED8\u8BA4\u53EA\u914D\u7F6E\u4E8622\u300180\u548C443\u7AEF\u53E3</p><img src="'+d+`"><h4 id="\u542F\u52A8\u548C\u505C\u6B62" tabindex="-1"><a class="header-anchor" href="#\u542F\u52A8\u548C\u505C\u6B62" aria-hidden="true">#</a> \u542F\u52A8\u548C\u505C\u6B62</h4><p>nginx \u8FD0\u884C\u76EE\u5F55\uFF1A/usr/local/sbin</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u8FDB\u5165\u76EE\u5F55</span>
<span class="token builtin class-name">cd</span> /usr/local/sbin

<span class="token comment"># \u542F\u52A8</span>
nginx

<span class="token comment"># \u6307\u5B9A\u914D\u7F6E\u6587\u4EF6\u542F\u52A8\uFF08\u5E73\u65F6\u542F\u52A8\u63A8\u8350\u7528\u8FD9\u79CD\u65B9\u5F0F\uFF09</span>
nginx -c xx.conf

<span class="token comment"># \u7ED9\u4E3B\u8FDB\u7A0B\u53D1\u9001\u4E00\u4E2A\u4FE1\u53F7\u3010nginx -s \u53C2\u6570\u3011reopen/stop/quit/reload</span>
<span class="token comment"># \u91CD\u542F</span>
nginx -s reopen

<span class="token comment"># \u5F3A\u5236\u5173\u95ED</span>
nginx -s stop

<span class="token comment"># \u7B49\u5F85\u5DE5\u4F5C\u8FDB\u7A0B\u5904\u7406\u5B8C\u6210\u540E\u5173\u95ED</span>
nginx -s quit

<span class="token comment"># \u4FEE\u6539\u914D\u7F6E\u540E\u91CD\u65B0\u52A0\u8F7D\u751F\u6548</span>
nginx -s reload

<span class="token comment"># \u67E5\u770B nginx \u5B89\u88C5\u4F4D\u7F6E</span>
<span class="token function">whereis</span> nginx

<span class="token comment"># \u6D4B\u8BD5 nginx \u914D\u7F6E\u6587\u4EF6</span>
nginx -t <span class="token punctuation">[</span>xx.conf<span class="token punctuation">]</span>

<span class="token comment"># \u67E5\u770B nginx \u7248\u672C</span>
nginx -v

<span class="token comment"># \u67E5\u770B nginx \u8FDB\u7A0B\u53F7\u547D\u4EE4</span>
<span class="token function">ps</span> -ef <span class="token operator">|</span> <span class="token function">grep</span> nginx

<span class="token comment"># \u67E5\u627E\u5E76\u6740\u6B7B\u6240\u6709 nginx \u8FDB\u7A0B</span>
<span class="token function">ps</span> aux <span class="token operator">|</span> <span class="token function">grep</span> nginx <span class="token operator">|</span> <span class="token function">awk</span> <span class="token string">&#39;{print $2}&#39;</span> <span class="token operator">|</span> <span class="token function">xargs</span> <span class="token function">kill</span> -9
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br></div></div><h4 id="\u7528-nginx-\u90E8\u7F72-vue-\u9879\u76EE" tabindex="-1"><a class="header-anchor" href="#\u7528-nginx-\u90E8\u7F72-vue-\u9879\u76EE" aria-hidden="true">#</a> \u7528 nginx \u90E8\u7F72 vue \u9879\u76EE</h4><ul><li>1\u3001\u672C\u5730\u6253 build \u6253\u5305\u540E\uFF0C\u5C06 dist \u76EE\u5F55\u538B\u7F29</li><li>2\u3001\u5C06 dist \u538B\u7F29\u5305\u76F4\u63A5\u5728 Tabby \u7684 SFTP \u4E0A\u4F20\u5230 /data/www/blog \u76EE\u5F55\u4E0B\uFF0C\u5F53\u7136\u8FD9\u4E2A\u76EE\u5F55\u53EF\u4EE5\u81EA\u5B9A\u4E49</li><li>3\u3001\u4FEE\u6539 nginx \u914D\u7F6E\u6587\u4EF6</li></ul><div class="language-conf ext-conf line-numbers-mode"><pre class="language-conf"><code>http {
    server {
        listen       80;
        server_name  localhost;
        charset utf-8;

        location / {
            root      /data/www/blog;
            index     index.html index.htm;
            try_files $uri $uri/ /index.html;
        }
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p>\u7AEF\u53E3\u6211\u4EEC\u4E00\u822C\u5C31\u7528\u9ED8\u8BA4\u7684 80\uFF0C\u6CE8\u610F index \u90A3\u884C\u6700\u540E\u4E00\u4E2A\u662F index.htm\uFF0C\u4E0D\u662F\u5199\u9519\u4E86\u5C11\u4E2A l\u3002try_files \u662F\u4E3A\u4E86\u914D\u5408\u524D\u7AEF\u7684 history \u8DEF\u7531\u3002</p><ul><li>4\u3001\u542F\u52A8 nginx\uFF0C\u542F\u52A8\u7684\u65F6\u5019\u6700\u597D\u7528 -c \u6307\u5B9A\u914D\u7F6E\u6587\u4EF6\uFF0C\u521A\u5F00\u59CB\u6211\u5C31\u662F\u600E\u4FEE\u6539\u600E\u4E48\u914D\u7F6E\u4E00\u76F4 404\uFF0C\u6700\u540E\u628A\u6240\u6709\u8FDB\u7A0B\u90FD\u6740\u4E86\uFF0C\u6307\u5B9A\u914D\u7F6E\u6587\u4EF6\u91CD\u542F nginx \u5C31\u597D\u4E86\u3002\u731C\u6D4B\u53EF\u80FD\u662F\u56E0\u4E3A\u670D\u52A1\u5668\u4E0A\u597D\u51E0\u4E2A\u5730\u65B9\u90FD\u88C5\u4E86 nginx\uFF0C\u4E0D\u6307\u5B9A\u914D\u7F6E\u6587\u4EF6\u9ED8\u8BA4\u4F1A\u53BB\u53D6\u4E86 /etc/nginx/nginx.conf\uFF0C\u5BFC\u81F4\u81EA\u5DF1\u4FEE\u6539 /usr/local/nginx/nginx.conf \u53D1\u73B0\u4E00\u76F4\u4E0D\u751F\u6548\u3002</li></ul><p>\u6700\u7EC8\u90E8\u7F72\u4E0A\u53BB\u4E86\u81EA\u5DF1\u7684\u535A\u5BA2\uFF0C\u662F\u6BD4\u90E8\u7F72\u5230 github \u4E0A\u5FEB\u597D\u591A\uFF0C\u9875\u9762\u5207\u6362\u57FA\u672C\u79D2\u5F00\uFF0C\u6BD5\u7ADF 2\u68384GB \u7684\u914D\u7F6E\u6446\u5728\u90A3\uFF0C\u6211\u90A3\u5C0F\u5C0F\u535A\u5BA2\u7EF0\u7EF0\u6709\u4F59\u3002</p><h4 id="\u7528-nginx-\u90E8\u7F72-java-\u9879\u76EE" tabindex="-1"><a class="header-anchor" href="#\u7528-nginx-\u90E8\u7F72-java-\u9879\u76EE" aria-hidden="true">#</a> \u7528 nginx \u90E8\u7F72 Java \u9879\u76EE</h4>`,23);function T(z,I){const a=l("ExternalLinkIcon");return r(),i(c,null,[h,s("p",null,[x,s("a",k,[f,e(a)]),_]),v,s("p",null,[w,s("a",y,[B,e(a)]),S]),N],64)}var C=t(g,[["render",T]]);export{C as default};
