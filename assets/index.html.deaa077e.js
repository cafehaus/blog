import{g as n}from"./app.b281c902.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";var a="/assets/1.18bfd851.png",e="/assets/2.2282cbb9.png";const r={},p=n('<h1 id="\u7528docker\u548Cnginx\u90E8\u7F72\u524D\u7AEF\u9879\u76EE\u8BBF\u95EE\u672C\u5730java\u7F51\u5173gateway\u670D\u52A1" tabindex="-1"><a class="header-anchor" href="#\u7528docker\u548Cnginx\u90E8\u7F72\u524D\u7AEF\u9879\u76EE\u8BBF\u95EE\u672C\u5730java\u7F51\u5173gateway\u670D\u52A1" aria-hidden="true">#</a> \u7528docker\u548Cnginx\u90E8\u7F72\u524D\u7AEF\u9879\u76EE\u8BBF\u95EE\u672C\u5730java\u7F51\u5173gateway\u670D\u52A1</h1><p>\u9700\u6C42\u80CC\u666F\uFF1A\u672C\u5730\u5F00\u53D1 java \u5FAE\u670D\u52A1\u9879\u76EE\uFF0C\u4F46\u662F\u62FF\u5230\u7684\u5BF9\u5E94\u7684web\u524D\u7AEF\u9879\u76EE\u53EA\u6709\u6253\u5305\u7F16\u8BD1\u8FC7\u540E\u7684 dist \u76EE\u5F55\u91CC\u7684\u9759\u6001\u8D44\u6E90\uFF08\u91CC\u9762\u53EA\u6709\u4E00\u4E2Aindex.html\u548C\u4E00\u4E9B\u7F16\u8BD1\u8FC7\u540E\u7684 js\u3001css\u6587\u4EF6\uFF09\uFF0C\u524D\u7AEF\u63A5\u53E3\u9700\u8981\u5148\u8BBF\u95EE\u5230 java \u7684\u7F51\u5173\u670D\u52A1\uFF0C\u7136\u540E\u7F51\u5173\u91CC\u518D\u505A\u8F6C\u53D1\u3002</p><img src="'+a+`"><p>\u56E0\u4E3A\u6CA1\u6709\u524D\u7AEF\u6E90\u7801\uFF0C\u4E5F\u4E0D\u80FD\u50CF\u6B63\u5E38\u5F00\u53D1\u4E2D\u7684\u524D\u7AEF\u9879\u76EE\u4E00\u6837\uFF0C\u6211\u4EEC\u53EF\u4EE5\u968F\u4FBF\u4FEE\u6539\u4EE3\u7406\u8BBF\u95EE\u4EFB\u610F\u670D\u52A1\u5730\u5740\uFF0C\u800C\u4E14\u53EA\u80FD\u901A\u8FC7 nginx \u4E4B\u7C7B\u7684\u670D\u52A1\u5668\u5B9E\u73B0\u90E8\u7F72\u8BBF\u95EE\u548C\u4EE3\u7406\u63A5\u53E3\u5730\u5740\u3002</p><h3 id="\u89E3\u51B3\u6B65\u9AA4" tabindex="-1"><a class="header-anchor" href="#\u89E3\u51B3\u6B65\u9AA4" aria-hidden="true">#</a> \u89E3\u51B3\u6B65\u9AA4</h3><p>\u901A\u8FC7\u5728\u672C\u5730\u5B89\u88C5docker\u6765\u8FD0\u884Cnginx\u670D\u52A1\u5668</p><h4 id="\u4E00\u3001\u5B89\u88C5-docker" tabindex="-1"><a class="header-anchor" href="#\u4E00\u3001\u5B89\u88C5-docker" aria-hidden="true">#</a> \u4E00\u3001\u5B89\u88C5 docker</h4><p>\u76F4\u63A5\u53BBdocker\u5B98\u7F51\u4E0B\u8F7D\u5B89\u88C5\u597Ddocker\uFF0Cwindows\u3001mac\u90FD\u6709\u5BF9\u5E94\u7684\u7248\u672C</p><h4 id="\u4E8C\u3001\u62C9\u53D6-nginx-\u955C\u50CF" tabindex="-1"><a class="header-anchor" href="#\u4E8C\u3001\u62C9\u53D6-nginx-\u955C\u50CF" aria-hidden="true">#</a> \u4E8C\u3001\u62C9\u53D6 nginx \u955C\u50CF</h4><p>\u76F4\u63A5\u62C9\u53D6\u6700\u65B0\u7248\u672C\u7684nginx</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">docker</span> pull nginx
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h4 id="\u4E09\u3001\u6DFB\u52A0-docker-compose-\u914D\u7F6E\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u4E09\u3001\u6DFB\u52A0-docker-compose-\u914D\u7F6E\u6587\u4EF6" aria-hidden="true">#</a> \u4E09\u3001\u6DFB\u52A0 docker-compose \u914D\u7F6E\u6587\u4EF6</h4><p>\u76F4\u63A5\u5229\u7528docker-compose\u6765\u542F\u52A8\u5BB9\u5668\uFF0C\u5C31\u4E0D\u9700\u8981\u81EA\u5DF1\u624B\u52A8\u4E00\u884C\u4E00\u884C\u6765\u6572\u547D\u4EE4\u4E86\u3002\u5728\u524D\u7AEF\u9759\u6001\u8D44\u6E90\u76EE\u5F55\u91CC\u65B0\u5EFA docker-compose.yml \u6587\u4EF6\uFF1A</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&quot;3&quot;</span>
<span class="token key atrule">services</span><span class="token punctuation">:</span>
  <span class="token key atrule">nginx</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> nginx
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token string">&quot;8801:8801&quot;</span> <span class="token comment"># \u524D\u7AEF\u9879\u76EE\u8BBF\u95EE\u7AEF\u53E3(\u5BBF\u4E3B\u673A:\u5BB9\u5668\u5185)</span>
    <span class="token key atrule">volumes</span><span class="token punctuation">:</span> <span class="token comment"># \u6570\u636E\u5377\u76EE\u5F55\u6620\u5C04(\u5BBF\u4E3B\u673A:\u5BB9\u5668\u5185)</span>
        <span class="token punctuation">-</span> ./nginx.conf<span class="token punctuation">:</span>/etc/nginx/nginx.conf <span class="token comment"># \u914D\u7F6E\u6587\u4EF6</span>
        <span class="token punctuation">-</span> ./<span class="token punctuation">:</span>/usr/share/nginx/html  <span class="token comment"># \u9879\u76EEhtml\u6587\u4EF6</span>
        <span class="token punctuation">-</span> ./log<span class="token punctuation">:</span>/var/log/nginx  <span class="token comment"># \u65E5\u5FD7\u6587\u4EF6(\u65B9\u4FBF\u6392\u67E5\u95EE\u9898\uFF0C\u4E0D\u8981\u4E5F\u53EF\u4EE5)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h4 id="\u56DB\u3001\u6DFB\u52A0-nginx-\u914D\u7F6E\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u56DB\u3001\u6DFB\u52A0-nginx-\u914D\u7F6E\u6587\u4EF6" aria-hidden="true">#</a> \u56DB\u3001\u6DFB\u52A0 nginx \u914D\u7F6E\u6587\u4EF6</h4><p>\u5728\u524D\u7AEF\u9759\u6001\u8D44\u6E90\u76EE\u5F55\u91CC\u65B0\u5EFA nginx.conf \u6587\u4EF6\uFF1A</p><div class="language-conf ext-conf line-numbers-mode"><pre class="language-conf"><code>#user  nobody;
worker_processes  1;
events {
    worker_connections  1024;
}
http {
    include       mime.types;
    default_type  application/octet-stream;
    sendfile        on;
    keepalive_timeout  65;
	upstream app-gateway { # \u8D1F\u8F7D\u5747\u8861
        server host.docker.internal:51601; # \u7F51\u5173\u670D\u52A1\u7684\u5730\u5740\u548C\u7AEF\u53E3
    }
    server {
        listen 8801;
        location / {
            root /usr/share/nginx/html;
            index index.html;
        }

        location ~/app/(.*) {
            proxy_pass http://app-gateway/$1;
            proxy_set_header HOST $host; # \u4E0D\u6539\u53D8\u6E90\u8BF7\u6C42\u5934\u7684\u503C
            proxy_pass_request_body on; # \u5F00\u542F\u83B7\u53D6\u8BF7\u6C42\u4F53
            proxy_pass_request_headers on; # \u5F00\u542F\u83B7\u53D6\u8BF7\u6C42\u5934
            proxy_set_header X-Real-IP $remote_addr; # \u8BB0\u5F55\u771F\u5B9E\u53D1\u51FA\u8BF7\u6C42\u7684\u5BA2\u6237\u7AEFIP
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for; # \u8BB0\u5F55\u4EE3\u7406\u4FE1\u606F
        }
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br></div></div><ul><li>\u6CE8\u610F nginx \u91CC\u7684\u524D\u7AEF\u76EE\u5F55/usr/share/nginx/html\u548C\u914D\u7F6E\u6587\u4EF6/etc/nginx/nginx.conf\uFF0C\u5728\u4E0A\u9762\u7B2C\u4E09\u6B65\u91CC\u5DF2\u7ECF\u901A\u8FC7 docker \u7684\u6570\u636E\u5377 volumns \u6302\u8F7D\u5230\u5BBF\u4E3B\u673A\u76EE\u5F55\u91CC\u4E86\u3002</li></ul><p>\u8FD8\u6709\u5C31\u662F\u56E0\u4E3A\u524D\u7AEF\u9879\u76EE\u662F\u8FD0\u884C\u5728 docker \u5BB9\u5668\u91CC\u7684\uFF0C\u4F46\u662F\u524D\u7AEF\u63A5\u53E3\u662F\u8981\u8BBF\u95EE\u5BBF\u4E3B\u673A\u4E0A\u7684\u7F51\u5173\u670D\u52A1\uFF0C\u8FD9\u5C31\u6D89\u53CA\u5230 docker \u5BB9\u5668\u548C\u5916\u90E8\u5BBF\u4E3B\u673A\u901A\u4FE1\u7684\u95EE\u9898\uFF0C\u6240\u4EE5\u4E0A\u9762\u7684\u7F51\u5173\u5730\u5740\u4E0D\u80FD\u5199 localhost \u6216 127.0.0.1\uFF08\u8FD9\u5B9E\u9645\u662F\u5728\u8BBF\u95EEdocker\u5185\u7684\u672C\u5730\u670D\u52A1\uFF09\uFF0C\u800C\u662F\u8981\u5199\u6210\u771F\u5B9E\u7684 ip\uFF0C\u53EF\u4EE5\u901A\u8FC7 ipconfig \u6216 ifconfig\uFF08mac\u3001linux\u7CFB\u7EDF\uFF09\u547D\u4EE4\u67E5\u770B\u3002</p><p>\u4E0D\u8FC7\u4E0A\u9762\u7528\u547D\u4EE4\u83B7\u53D6\u5230\u7684\u8FD9\u4E2A\u672C\u673Aip\u5730\u5740\u662F\u53EF\u80FD\u4F1A\u53D8\u7684\uFF0C\u6240\u4EE5\u6700\u597D\u7684\u65B9\u5F0F\u662F\u76F4\u63A5\u5199\u6210 host.docker.internal\uFF0C\u8FD9\u4E2A\u5C31\u6307\u4EE3\u5BBF\u4E3B\u673A\u7684\u771F\u5B9Eip\uFF0C\u6CE8\u610F\u4F4E\u7248\u672C\u7684docker\u4E0D\u652F\u6301\u8FD9\u4E2A\u3002</p><h4 id="\u4E94\u3001\u8FD0\u884C\u524D\u7AEF\u670D\u52A1" tabindex="-1"><a class="header-anchor" href="#\u4E94\u3001\u8FD0\u884C\u524D\u7AEF\u670D\u52A1" aria-hidden="true">#</a> \u4E94\u3001\u8FD0\u884C\u524D\u7AEF\u670D\u52A1</h4><p>\u76F4\u63A5\u5728\u524D\u7AEF\u9759\u6001\u8D44\u6E90\u76EE\u5F55\u91CC\u8F93\u5165\u547D\u4EE4\uFF1Adocker-compose up\uFF0C\u8FD0\u884C\u6210\u529F\u4E86\uFF0C\u5C31\u53EF\u4EE5\u5728\u672C\u5730\u6D4F\u89C8\u5668\u91CC\u8BBF\u95EE\u524D\u7AEF\u548C\u540E\u7AEF\u7F51\u5173\u670D\u52A1\u4E86\uFF1A</p><img src="`+e+'">',23);function c(l,i){return p}var u=s(r,[["render",c]]);export{u as default};