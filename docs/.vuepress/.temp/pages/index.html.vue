<template><div><!-- <div class='logo'>
    <img style="width: 10em;" src="/images/vs-logo.ico"/>
</div> -->
<div class='tag-container'>
<img src='https://img.shields.io/badge/最新版本-v0.2.16-3963bc.svg'/>
<img src='https://img.shields.io/badge/build-passing-00d508.svg'/>
<img src='https://img.shields.io/badge/license-MIT-f0f900.svg'/>
</div>
<div class='tag-container'>
    <img src='https://img.shields.io/badge/python-v3.8+-7efaff.svg'/>
    <img src='https://img.shields.io/badge/setuptools-v59.8.0+-7ecaff.svg'/>
    <img src='https://img.shields.io/badge/pip-v21.3.1+-00d5a8.svg'/>
    <img src='https://img.shields.io/badge/opencv_python-v4.5.5-0fcff8.svg'/>
</div>
<h2 id="简介" tabindex="-1"><a class="header-anchor" href="#简介" aria-hidden="true">#</a> 简介</h2>
<p>结合AI算法，针对课件类视频的特点，发明视频内容检索方法，并申请了<a href="">发明专利</a>；基于该方法研发了该<code v-pre>vsearcher</code>库，并开源到<a href="">PyPI</a>, 核心使用方法见<RouterLink to="/api/">VSearcher</RouterLink>。</p>
<!-- 为了展现该库的应用场景以及能力，研发了案例系统，包括：[Flask API]()、[Docker]()、[Pyintaller打包的exe程序]()和[基于AI的教学视频学习系统(Window桌面应用)]()。 -->
<p>此外，可轻松适配如下特殊场景的视频：<code v-pre>动画切换</code>，<code v-pre>内容递增</code>，<code v-pre>中英文内容</code>，<code v-pre>存在人像移动</code></p>
<h2 id="特性" tabindex="-1"><a class="header-anchor" href="#特性" aria-hidden="true">#</a> 特性</h2>
<div class="features">
    <div class="feature">
        <h2>易使用</h2>
        <p>利用<RouterLink to="/api/#使用方法">VSearcher</RouterLink>可最少一行代码使用功能。</p>
    </div>
    <div class="feature">
        <h2>搜索精确</h2>
        <p>搜索结果精确到文本框的位置。</p>
    </div>
    <div class="feature">
        <h2>信息全面</h2>
        <p><RouterLink to="/vo/#videovo">视图对象</RouterLink>包括：标题、文本内容、播放位置等多种详细信息。</p>
    </div>
</div>
<div class="my-features">
    <div class="feature">
        <h2>多配置</h2>
        <p><RouterLink to="/vs-config/">全局配置</RouterLink>提供多达几十项的配置，按需配置面对不同的场景和需求。</p>
    </div>
    <div class="feature">
        <h2>高性能</h2>
        <p><RouterLink to="/vs-config/#config-performance">性能配置</RouterLink>支持GPU、多线程、多进程等机制配置。</p>
    </div>
    <div class="feature">
        <h2>方便构建API服务</h2>
        <p><RouterLink to="/vo/#resourcevo">ResourceVO</RouterLink>对象具有json序列化方法, 无需开发者考虑序列化细节。</p>
    </div>
</div>
<h2 id="核心能力效果展示" tabindex="-1"><a class="header-anchor" href="#核心能力效果展示" aria-hidden="true">#</a> 核心能力效果展示</h2>
<h3 id="视频内容搜索" tabindex="-1"><a class="header-anchor" href="#视频内容搜索" aria-hidden="true">#</a> 视频内容搜索</h3>
<p><img src="/images/gif/video_search.gif" alt="视频内容搜索"></p>
<h3 id="自动生成视频对应的pdf课件" tabindex="-1"><a class="header-anchor" href="#自动生成视频对应的pdf课件" aria-hidden="true">#</a> 自动生成视频对应的pdf课件</h3>
<p><img src="/images/gif/download_pdf.gif" alt="下载课件"></p>
<!-- <img src="/images/gif/download_pdf.gif" style="width: 40em;" /> -->
<div class='my-action-container' style='margin: .5em 0  3em 0;'>
    <RouterLink to='/quick-start/' class='my-action my-primary-action'> 快速开始 → </RouterLink>
    <!-- <RouterLink to='/introduce/' class='my-action my-common-action'>介绍</RouterLink> -->
</div>
</div></template>

<style lang='scss'>

/* header相关的css */
.logo{
    display: flex; 
    flex-direction: column; 
    justify-content: center; 
    align-items: center;
}

.hero img{
    width: 7em;
    margin-top: 2rem !important;
    margin-bottom: 1rem !important;
}

.hero h1{//title
    font-size: 2rem !important;
    margin: 0 !important;
}

.hero p{//descriptions
    font-size: 1.3rem !important;
    margin-top: 0.2em !important;
    align-self: center !important;
}

/* 特点相关 */
.my-features{
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    margin-top: 0 !important;
    padding: 0 !important;
    padding-bottom: 1rem !important;
    /* flex-wrap: wrap; */
    /* align-items: flex-start; */
    /* align-content: stretch; */
    /* justify-content: space-between; */
    border-bottom: 1px solid #ccc;
    margin-bottom: 2rem !important;
}
.features{
    margin-top: 2rem !important;
    padding-top: 0 !important;
    border-top: 1px solid #ccc !important;
   
}
.feature{
     /* border: 1px solid #ccc !important; */
}

.feature h2{
    /* margin-top: 0 !important; */
    font-size: 1.2rem !important;
    padding-bottom: 0rem !important;
    /* padding-top: 1rem !important; */
    
}

.feature p{
    font-size: 0.97rem !important;
    padding: 0 !important;
    margin: 0 !important;
}


.my-action-container{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}

.my-action{
   
    border-radius: 5px;

    width: 6em;
    font-size: 1.4em;
    text-align: center;
    line-height: 2em;
    height:2em;
    text-decoration-line: none;
}

.my-primary-action{
    background-color: #1387c1;
    color: #fff;
    margin: 0.2em 1em;
}

.my-common-action{
    background-color: #f1f1f1;
    color: #446644;
    margin: 0.2em 1em;
}

.navbar span a{
    display: flex !important;
}

.tag-container{
    display: flex;
    flex-direction: row;
    justify-content: center;
}

.tag-container img{
    margin: 0 .27em;
    margin: .2em;
}
</style>
