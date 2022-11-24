import{_ as c,o as d,c as r,a as e,b as n,w as i,e as s,d as o,r as t}from"./app.366e899e.js";const p={},u=e("h1",{id:"\u642D\u5EFAapi\u670D\u52A1",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u642D\u5EFAapi\u670D\u52A1","aria-hidden":"true"},"#"),s(" \u642D\u5EFAAPI\u670D\u52A1")],-1),h=s("\u8BE5\u670D\u52A1\u662F\u57FA\u4E8E"),v={href:"https://gitee.com/breath57/vsearch",target:"_blank",rel:"noopener noreferrer"},_=s("vsearcher"),m=s("\u5E93\uFF0C\u4F7F\u7528"),b=e("code",null,"flask",-1),g=s("\u5C06\u5176\u8FDB\u4E00\u6B65\u6269\u5C55\u4E3A\u53EF\u63D0\u4F9BAPI\u670D\u52A1\u7684\u5E94\u7528\u3002"),k=e("p",null,"\u8FD9\u91CC\u63D0\u4F9B\u4E09\u79CD\u642D\u5EFA\u7684\u65B9\u5F0F\uFF0C\u6309\u7167\u4E2A\u4EBA\u9700\u6C42\u8FDB\u884C\u9009\u62E9\u3002",-1),x={class:"custom-container tip"},f=e("p",{class:"custom-container-title"},"TIP",-1),P=s("\u5B8C\u6574\u7684"),T=e("code",null,"HTTP",-1),I=s("\u7684API\u63A5\u53E3\u8BF7\u6C42\u6587\u6863\uFF0C"),E=s("\u70B9\u51FB\u67E5\u770B"),A=o(`<h2 id="\u65B9\u5F0F1-\u5E38\u89C4\u642D\u5EFA" tabindex="-1"><a class="header-anchor" href="#\u65B9\u5F0F1-\u5E38\u89C4\u642D\u5EFA" aria-hidden="true">#</a> \u65B9\u5F0F1\uFF1A\u5E38\u89C4\u642D\u5EFA</h2><ol><li>\u5B89\u88C5<code>python</code>\u73AF\u5883(version: 3.8+)</li><li>\u62C9\u53D6\u4ED3\u5E93</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> clone https://gitee.com/breath57/vs-api vs-api
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">TIP</p><ol><li>\u6211\u4EEC\u4EE5 vs-api \u4F5C\u4E3A\u5DE5\u7A0B\u540D\uFF0C\u5F53\u7136\u60A8\u4E5F\u53EF\u4EE5\u4EE5\u4EFB\u610F\u60A8\u559C\u7231\u7684\u540D\u5B57\u4F5C\u4E3A\u5DE5\u7A0B\u540D\u3002<br></li><li>\u5982\u679C\u60A8\u60F3\u4EE5\u67D0\u4E2A\u7248\u672C\uFF0C\u59820.0.1\u7248\uFF0C\u4F5C\u4E3A\u8D77\u59CB\u9879\u76EE\uFF0C\u90A3\u4E48\u8BF7\u5728 github \u4E0A\u7684\u7248\u672C\u9875\u4E0B\u8F7D\u76F8\u5E94\u7684\u7248\u672C\u5373\u53EF\u3002</li></ol></div><ol start="3"><li>\u8FDB\u5165\u5DE5\u7A0B\u76EE\u5F55</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> vs-api
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="4"><li>\u5B89\u88C5\u9879\u76EE\u4F9D\u8D56</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>pip <span class="token function">install</span> -r ./requirements.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="5"><li>\u542F\u52A8\u5DE5\u7A0B</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>flask run -h <span class="token number">0.0</span>.0.0 -p <span class="token number">5000</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">TIP</p><p><code>-h</code>\u6307\u5B9Aip\u5730\u5740\uFF0C<code>-p</code>\u6307\u5B9A\u8BBF\u95EE\u7684\u7AEF\u53E3\u53F7</p></div><ol start="6"><li>\u5373\u53EF\u8BBF\u95EEAPI\u670D\u52A1\uFF0C\u4F8B\u5982\uFF1A<code>http://127.0.0.1:5000/v1/video/get</code></li></ol>`,12),B=s("\u5B8C\u6574\u7684"),y=e("code",null,"HTTP",-1),q=s("\u7684API\u63A5\u53E3\u8BF7\u6C42\u6587\u6863\uFF0C"),w=s("\u70B9\u51FB\u67E5\u770B"),H=o(`<h2 id="\u65B9\u5F0F2-docker\u642D\u5EFA" tabindex="-1"><a class="header-anchor" href="#\u65B9\u5F0F2-docker\u642D\u5EFA" aria-hidden="true">#</a> \u65B9\u5F0F2\uFF1ADocker\u642D\u5EFA</h2><div class="custom-container tip"><p class="custom-container-title">\u8FD0\u884C\u7684\u524D\u7F6E\u6761\u4EF6</p><ul><li>\u4E3B\u673A\u6709\u53EF\u7528\u7684docker\u73AF\u5883</li><li>\u4E3B\u673A\u53EF\u4EE5\u6B63\u5E38\u8BBF\u95EE\u5916\u7F51\u62C9\u53D6\u955C\u50CF</li></ul></div><ol><li>\u62C9\u53D6\u955C\u50CF</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">docker</span> pull breath57/vs-api-flask
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="2"><li>\u521B\u5EFA\u5BB9\u5668\u5E76\u8FD0\u884C</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">docker</span> run  -itd -p <span class="token number">3306</span>:3306/tcp -p <span class="token number">33060</span>:33060/tcp -p <span class="token number">5000</span>:5000/tcp  breath57/vs-api-flask
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="3"><li>\u901A\u8FC7<code>http://localhost:5000</code>\u8BBF\u95EE\u670D\u52A1</li></ol>`,7),O=s("\u5B8C\u6574\u7684"),C=e("code",null,"HTTP",-1),D=s("\u7684API\u63A5\u53E3\u8BF7\u6C42\u6587\u6863\uFF0C"),F=s("\u70B9\u51FB\u67E5\u770B"),R=o('<h2 id="\u65B9\u5F0F3-vs-api-exe\u7A0B\u5E8F\u642D\u5EFA" tabindex="-1"><a class="header-anchor" href="#\u65B9\u5F0F3-vs-api-exe\u7A0B\u5E8F\u642D\u5EFA" aria-hidden="true">#</a> \u65B9\u5F0F3\uFF1Avs-api.exe\u7A0B\u5E8F\u642D\u5EFA</h2><p>\u8BE5\u7A0B\u5E8F\u662F\u4F7F\u7528<code>pyinstaller</code>\u8FDB\u884C\u6253\u5305\u7684flask\u5E94\u7528\u3002</p><div class="custom-container warning"><p class="custom-container-title">\u63D0\u793A</p><p><a href="#%E6%96%B9%E5%BC%8F3-exe%E7%A8%8B%E5%BA%8F%E6%90%AD%E5%BB%BA">\u65B9\u5F0F3</a>\u53EA\u6307\u652F\u6301<code>window7+</code>\u64CD\u4F5C\u7CFB\u7EDF\u4E2D\u4F7F\u7528</p></div>',3),G=s("\u4E0B\u8F7D"),L=e("code",null,"vs-api.exe",-1),N=s("\u7A0B\u5E8F\u6587\u4EF6"),S=e("br",null,null,-1),V={href:"https://pan.baidu.com/s/1GobdGqOsFGKm1t0AwrGD5Q?pwd=0q0v",target:"_blank",rel:"noopener noreferrer"},K=s("\u70B9\u51FB\u4E0B\u8F7D vs-api.exe"),Q=e("li",null,[s("\u53CC\u51FB"),e("code",null,"exe\u6587\u4EF6"),s("\u8FD0\u884C")],-1),j=e("li",null,[s("\u901A\u8FC7"),e("code",null,"http://localhost:5000"),s("\u8BBF\u95EE")],-1),z=o('<div class="custom-container tip"><p class="custom-container-title">TIP</p><p>\u5F53\u7136\uFF0C\u8FD9\u91CC\u63D0\u4F9B\u7684<code>vs-api.exe</code>\uFF0C\u7AEF\u53E3\u53F7\u662F<code>5000</code>\uFF0CIP\u5730\u5740\u4E3A<code>127.0.0.1</code>\uFF0C\u82E5\u9700\u8981\u5E94\u5BF9\u4E0D\u540C\u7684\u9700\u6C42\uFF0C\u9700\u8981<code>\u914D\u5408nginx</code>\u8FDB\u884C\u7AEF\u53E3\u8F6C\u53D1\u3002\u6216\u8005\uFF0C\u4F7F\u7528<a href="#%E6%96%B9%E5%BC%8F4-%E6%94%B9%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6-%E6%89%93%E5%8C%85">\u65B9\u5F0F4</a>\u8FDB\u884C\u642D\u5EFAAPI\u670D\u52A1\u3002</p></div>',1),J=s("\u5B8C\u6574\u7684"),M=e("code",null,"HTTP",-1),U=s("\u7684API\u63A5\u53E3\u8BF7\u6C42\u6587\u6863\uFF0C"),W=s("\u70B9\u51FB\u67E5\u770B"),X=o(`<h2 id="\u65B9\u5F0F4-\u6539\u914D\u7F6E\u6587\u4EF6-\u6253\u5305" tabindex="-1"><a class="header-anchor" href="#\u65B9\u5F0F4-\u6539\u914D\u7F6E\u6587\u4EF6-\u6253\u5305" aria-hidden="true">#</a> \u65B9\u5F0F4\uFF1A\u6539\u914D\u7F6E\u6587\u4EF6+\u6253\u5305</h2><ol><li>\u62C9\u53D6\u4ED3\u5E93</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> clone https://gitee.com/breath57/vs-api vs-api
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">TIP</p><ol><li>\u6211\u4EEC\u4EE5 vs-api \u4F5C\u4E3A\u5DE5\u7A0B\u540D\uFF0C\u5F53\u7136\u60A8\u4E5F\u53EF\u4EE5\u4EE5\u4EFB\u610F\u60A8\u559C\u7231\u7684\u540D\u5B57\u4F5C\u4E3A\u5DE5\u7A0B\u540D\u3002</li><li>\u5982\u679C\u60A8\u60F3\u4EE5\u67D0\u4E2A\u7248\u672C\uFF0C\u59820.0.1\u7248\uFF0C\u4F5C\u4E3A\u8D77\u59CB\u9879\u76EE\uFF0C\u90A3\u4E48\u8BF7\u5728 github \u4E0A\u7684\u7248\u672C\u9875\u4E0B\u8F7D\u76F8\u5E94\u7684\u7248\u672C\u5373\u53EF\u3002</li></ol></div><ol start="3"><li>\u8FDB\u5165\u5DE5\u7A0B\u76EE\u5F55</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> vs-api
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="4"><li>\u5B89\u88C5\u9879\u76EE\u4F9D\u8D56</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>pip <span class="token function">install</span> -r ./requirements.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="5"><li>\u4FEE\u6539<code>app/config/secure.py</code>\u6587\u4EF6\u5185\u5BB9</li></ol><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code>HOST <span class="token operator">=</span> <span class="token string">&#39;0.0.0.0&#39;</span> <span class="token comment"># IP\u5730\u5740</span>
PORT <span class="token operator">=</span> <span class="token number">5001</span> <span class="token comment"># \u8FD0\u884C\u540E\u7AEF\u53E3\u53F7</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">TIP</p><p><code>HOST</code>\u3001<code>PORT</code>\u53EF\u4EE5\u4FEE\u6539\u6210\u81EA\u5DF1\u5B9E\u9645\u9879\u76EE\u4F7F\u7528\u7684\u3002</p></div><ol><li>\u5728\u9879\u76EE\u7684\u6839\u76EE\u5F55\u4E0B\u8FD0\u884C</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>pyinstaller vs-proxy.py -F --add-data  <span class="token string">&quot;app/models/db/vsearcher.db;./app/models/db&quot;</span> --nowindowed
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>\u82E5\u63D0\u793A\u672A\u5B89\u88C5pyinstaller<br> \u5219\u5E94\u8FD0\u884C<code>pip install pyinstaller</code>\u8FDB\u884C\u5B89\u88C5</p></div><ol start="7"><li>\u5C06\u5F97\u5230\u7684<code>dist/vs-proxy.exe</code>\uFF0C\u53CC\u51FB\u8FD0\u884C\u3002</li><li>\u901A\u8FC7http://<code>HOST</code>:<code>PORT</code>\u8BBF\u95EE</li></ol>`,15),Y=s("\u5B8C\u6574\u7684"),Z=e("code",null,"HTTP",-1),$=s("\u7684API\u63A5\u53E3\u8BF7\u6C42\u6587\u6863\uFF0C"),ee=s("\u70B9\u51FB\u67E5\u770B");function se(ne,ae){const l=t("ExternalLinkIcon"),a=t("RouterLink");return d(),r("div",null,[u,e("p",null,[h,e("a",v,[_,n(l)]),m,b,g]),k,e("div",x,[f,e("p",null,[P,T,I,n(a,{to:"/demo/vs-api/"},{default:i(()=>[E]),_:1})])]),A,e("blockquote",null,[e("p",null,[B,y,q,n(a,{to:"/demo/vs-api/"},{default:i(()=>[w]),_:1})])]),H,e("blockquote",null,[e("p",null,[O,C,D,n(a,{to:"/demo/vs-api/"},{default:i(()=>[F]),_:1})])]),R,e("ol",null,[e("li",null,[G,L,N,S,e("a",V,[K,n(l)])]),Q,j]),z,e("blockquote",null,[e("p",null,[J,M,U,n(a,{to:"/demo/vs-api/"},{default:i(()=>[W]),_:1})])]),X,e("blockquote",null,[e("p",null,[Y,Z,$,n(a,{to:"/demo/vs-api/"},{default:i(()=>[ee]),_:1})])])])}var oe=c(p,[["render",se],["__file","\u642D\u5EFAAPI\u670D\u52A1.html.vue"]]);export{oe as default};
