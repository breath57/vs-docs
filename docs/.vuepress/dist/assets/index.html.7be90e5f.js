import{_ as s,o as n,c as d,a as r,b as t,w as l,d as a,e,r as c}from"./app.cd21d4d4.js";const o={},h=a(`<h1 id="\u6848\u4F8B\u9879\u76EE" tabindex="-1"><a class="header-anchor" href="#\u6848\u4F8B\u9879\u76EE" aria-hidden="true">#</a> \u6848\u4F8B\u9879\u76EE</h1><h2 id="\u7CFB\u7EDF\u4ECB\u7ECD" tabindex="-1"><a class="header-anchor" href="#\u7CFB\u7EDF\u4ECB\u7ECD" aria-hidden="true">#</a> \u7CFB\u7EDF\u4ECB\u7ECD</h2><h2 id="api\u670D\u52A1" tabindex="-1"><a class="header-anchor" href="#api\u670D\u52A1" aria-hidden="true">#</a> API\u670D\u52A1</h2><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>\u8FD9\u662F\u4E00\u4E2A\u63D0\u793A</p></div><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>\u8FD9\u662F\u4E00\u4E2A\u8B66\u544A</p></div><div class="custom-container danger"><p class="custom-container-title">DANGER</p><p>\u8FD9\u662F\u4E00\u4E2A\u5371\u9669\u8B66\u544A</p></div><details class="custom-container details"><p>\u8FD9\u662F\u4E00\u4E2A details \u6807\u7B7E</p></details><div class="custom-container danger"><p class="custom-container-title">\u81EA\u5B9A\u4E49\u6807\u9898</p><p>\u8FD9\u662F\u4E00\u4E2A\u5371\u9669\u8B66\u544A</p></div><h3 id="flask-api" tabindex="-1"><a class="header-anchor" href="#flask-api" aria-hidden="true">#</a> Flask API</h3><h4 id="\u4F7F\u7528\u6B65\u9AA4" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528\u6B65\u9AA4" aria-hidden="true">#</a> \u4F7F\u7528\u6B65\u9AA4</h4><ol><li>\u5B89\u88C5<code>python</code>\u73AF\u5883(version: 3.8+)</li><li>\u62C9\u53D6\u4ED3\u5E93</li></ol><div class="custom-container danger"><p class="custom-container-title">DANGER</p><p>\u8FD9\u91CC\u9700\u8981\u4FEE\u6539\u4E3A\u6B63\u786E\u7684\u4ED3\u5E93\u5730\u5740 123456\u54C8\u54C8\u54C8</p></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> clone https://gitee.com/breath57/wxdb_api.git vs-api
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">TIP</p><ol><li>\u6211\u4EEC\u4EE5 vs-api \u4F5C\u4E3A\u5DE5\u7A0B\u540D\uFF0C\u5F53\u7136\u60A8\u4E5F\u53EF\u4EE5\u4EE5\u4EFB\u610F\u60A8\u559C\u7231\u7684\u540D\u5B57\u4F5C\u4E3A\u5DE5\u7A0B\u540D\u3002<br></li><li>\u5982\u679C\u60A8\u60F3\u4EE5\u67D0\u4E2A\u7248\u672C\uFF0C\u59820.0.1\u7248\uFF0C\u4F5C\u4E3A\u8D77\u59CB\u9879\u76EE\uFF0C\u90A3\u4E48\u8BF7\u5728 github \u4E0A\u7684\u7248\u672C\u9875\u4E0B\u8F7D\u76F8\u5E94\u7684\u7248\u672C\u5373\u53EF\u3002</li></ol></div><ol start="3"><li>\u8FDB\u5165\u5DE5\u7A0B\u76EE\u5F55</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> vs-api
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="4"><li>\u5B89\u88C5\u9879\u76EE\u4F9D\u8D56</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>pip <span class="token function">install</span> -r ./requirements.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="5"><li>\u542F\u52A8\u5DE5\u7A0B</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>flask run -h <span class="token number">0.0</span>.0.0 -p <span class="token number">5000</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>Tips:</p><p><code>-h</code>\u6307\u5B9Aip\u5730\u5740\uFF0C<code>-p</code>\u6307\u5B9A\u8BBF\u95EE\u7684\u7AEF\u53E3\u53F7</p></blockquote><ol start="6"><li>\u5373\u53EF\u8BBF\u95EEAPI</li></ol><blockquote><p>http://127.0.0.1:5000/api/v1/video/get</p></blockquote>`,23),p=e("\u5177\u4F53\u7684API\u63A5\u53E3\u6587\u6863\uFF0C"),u=e("\u70B9\u51FB\u67E5\u770B"),v=a('<hr><h3 id="\u57FA\u4E8Eai\u6559\u5B66\u89C6\u9891\u7CFB\u7EDF" tabindex="-1"><a class="header-anchor" href="#\u57FA\u4E8Eai\u6559\u5B66\u89C6\u9891\u7CFB\u7EDF" aria-hidden="true">#</a> \u57FA\u4E8EAI\u6559\u5B66\u89C6\u9891\u7CFB\u7EDF</h3><h2 id="flask-api\u670D\u52A1" tabindex="-1"><a class="header-anchor" href="#flask-api\u670D\u52A1" aria-hidden="true">#</a> Flask API\u670D\u52A1</h2><h2 id="window\u5B89\u88C5\u5305" tabindex="-1"><a class="header-anchor" href="#window\u5B89\u88C5\u5305" aria-hidden="true">#</a> window\u5B89\u88C5\u5305</h2><h2 id="docker\u955C\u50CF" tabindex="-1"><a class="header-anchor" href="#docker\u955C\u50CF" aria-hidden="true">#</a> Docker\u955C\u50CF</h2><h3 id="flask-api-\u955C\u50CF-\u53EF\u4EE5" tabindex="-1"><a class="header-anchor" href="#flask-api-\u955C\u50CF-\u53EF\u4EE5" aria-hidden="true">#</a> Flask API \u955C\u50CF(\u53EF\u4EE5)</h3><h3 id="\u89C6\u9891\u5B66\u4E60\u7CFB\u7EDF\u955C\u50CF-\u4E0D\u65B9\u4FBF\u900F\u9732" tabindex="-1"><a class="header-anchor" href="#\u89C6\u9891\u5B66\u4E60\u7CFB\u7EDF\u955C\u50CF-\u4E0D\u65B9\u4FBF\u900F\u9732" aria-hidden="true">#</a> \u89C6\u9891\u5B66\u4E60\u7CFB\u7EDF\u955C\u50CF(\u4E0D\u65B9\u4FBF\u900F\u9732)</h3><h2 id="flask\u540E\u7AEF\u955C\u50CF" tabindex="-1"><a class="header-anchor" href="#flask\u540E\u7AEF\u955C\u50CF" aria-hidden="true">#</a> flask\u540E\u7AEF\u955C\u50CF</h2><h2 id="vue\u524D\u7AEF\u955C\u50CF" tabindex="-1"><a class="header-anchor" href="#vue\u524D\u7AEF\u955C\u50CF" aria-hidden="true">#</a> vue\u524D\u7AEF\u955C\u50CF</h2><h2 id="exe\u540E\u7AEF\u7A0B\u5E8F" tabindex="-1"><a class="header-anchor" href="#exe\u540E\u7AEF\u7A0B\u5E8F" aria-hidden="true">#</a> exe\u540E\u7AEF\u7A0B\u5E8F</h2><h2 id="exe\u524D\u7AEF\u670D\u52A1\u7A0B\u5E8F" tabindex="-1"><a class="header-anchor" href="#exe\u524D\u7AEF\u670D\u52A1\u7A0B\u5E8F" aria-hidden="true">#</a> exe\u524D\u7AEF\u670D\u52A1\u7A0B\u5E8F</h2>',11);function b(m,f){const i=c("RouterLink");return n(),d("div",null,[h,r("p",null,[p,t(i,{to:"/vs-api/"},{default:l(()=>[u]),_:1})]),v])}var k=s(o,[["render",b],["__file","index.html.vue"]]);export{k as default};
