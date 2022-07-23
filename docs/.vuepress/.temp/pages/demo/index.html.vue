<template><div><h1 id="案例项目" tabindex="-1"><a class="header-anchor" href="#案例项目" aria-hidden="true">#</a> 案例项目</h1>
<h2 id="系统介绍" tabindex="-1"><a class="header-anchor" href="#系统介绍" aria-hidden="true">#</a> 系统介绍</h2>
<h2 id="api服务" tabindex="-1"><a class="header-anchor" href="#api服务" aria-hidden="true">#</a> API服务</h2>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>这是一个提示</p>
</div>
<div class="custom-container warning"><p class="custom-container-title">WARNING</p>
<p>这是一个警告</p>
</div>
<div class="custom-container danger"><p class="custom-container-title">DANGER</p>
<p>这是一个危险警告</p>
</div>
<details class="custom-container details">
<p>这是一个 details 标签</p>
</details>
<div class="custom-container danger"><p class="custom-container-title">自定义标题</p>
<p>这是一个危险警告</p>
</div>
<h3 id="flask-api" tabindex="-1"><a class="header-anchor" href="#flask-api" aria-hidden="true">#</a> Flask API</h3>
<h4 id="使用步骤" tabindex="-1"><a class="header-anchor" href="#使用步骤" aria-hidden="true">#</a> 使用步骤</h4>
<ol>
<li>安装<code v-pre>python</code>环境(version: 3.8+)</li>
<li>拉取仓库</li>
</ol>
<div class="custom-container danger"><p class="custom-container-title">DANGER</p>
<p>这里需要修改为正确的仓库地址 {{'123456' + '哈哈哈'}}</p>
</div>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">git</span> clone https://gitee.com/breath57/wxdb_api.git vs-api
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">TIP</p>
<ol>
<li>我们以 vs-api 作为工程名，当然您也可以以任意您喜爱的名字作为工程名。<br></li>
<li>如果您想以某个版本，如0.0.1版，作为起始项目，那么请在 github 上的版本页下载相应的版本即可。</li>
</ol>
</div>
<ol start="3">
<li>进入工程目录</li>
</ol>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token builtin class-name">cd</span> vs-api
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="4">
<li>安装项目依赖</li>
</ol>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>pip <span class="token function">install</span> -r ./requirements.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="5">
<li>启动工程</li>
</ol>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>flask run -h <span class="token number">0.0</span>.0.0 -p <span class="token number">5000</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote>
<p>Tips:</p>
<p><code v-pre>-h</code>指定ip地址，<code v-pre>-p</code>指定访问的端口号</p>
</blockquote>
<ol start="6">
<li>即可访问API</li>
</ol>
<blockquote>
<p>http://127.0.0.1:5000/api/v1/video/get</p>
</blockquote>
<p>具体的API接口文档，<RouterLink to="/vs-api/">点击查看</RouterLink></p>
<hr>
<h3 id="基于ai教学视频系统" tabindex="-1"><a class="header-anchor" href="#基于ai教学视频系统" aria-hidden="true">#</a> 基于AI教学视频系统</h3>
<h2 id="flask-api服务" tabindex="-1"><a class="header-anchor" href="#flask-api服务" aria-hidden="true">#</a> Flask API服务</h2>
<h2 id="window安装包" tabindex="-1"><a class="header-anchor" href="#window安装包" aria-hidden="true">#</a> window安装包</h2>
<h2 id="docker镜像" tabindex="-1"><a class="header-anchor" href="#docker镜像" aria-hidden="true">#</a> Docker镜像</h2>
<h3 id="flask-api-镜像-可以" tabindex="-1"><a class="header-anchor" href="#flask-api-镜像-可以" aria-hidden="true">#</a> Flask API 镜像(可以)</h3>
<h3 id="视频学习系统镜像-不方便透露" tabindex="-1"><a class="header-anchor" href="#视频学习系统镜像-不方便透露" aria-hidden="true">#</a> 视频学习系统镜像(不方便透露)</h3>
<h2 id="flask后端镜像" tabindex="-1"><a class="header-anchor" href="#flask后端镜像" aria-hidden="true">#</a> flask后端镜像</h2>
<h2 id="vue前端镜像" tabindex="-1"><a class="header-anchor" href="#vue前端镜像" aria-hidden="true">#</a> vue前端镜像</h2>
<h2 id="exe后端程序" tabindex="-1"><a class="header-anchor" href="#exe后端程序" aria-hidden="true">#</a> exe后端程序</h2>
<h2 id="exe前端服务程序" tabindex="-1"><a class="header-anchor" href="#exe前端服务程序" aria-hidden="true">#</a> exe前端服务程序</h2>
</div></template>
