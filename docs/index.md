---
home: true

title: 官网首页

# actions:
#   - text: 快速开始
#     link: /quick-start/
#     type: primary
#   - text: 项目简介
#     link: /introduce/
#     type: secondary

# features:
#   - title: 易使用
#     details: 最少一行代码即可使用。
#   - title: 搜索精确
#     details: 搜索结果精确到文本框的位置。
#   - title: 信息全面
#     details: 结果对象包括：标题、文本内容、播放位置等多种详细信息。
#   - title: 多配置
#     details: 提供多达几十项的配置，按需配置面对不同的场景和需求。
#   - title: 高性能
#     details: 支持GPU、多线程、多进程机制加速，并可自行配置。
#   - title: 方便构建API服务
#     details: 结果对象具有json序列化方法。


heroImage: "/images/vs-logo.ico"

---




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

.my-video-container{
    width: 80%;
    margin: 1em;
}

</style>

<!-- <div class='logo'>
    <img style="width: 10em;" src="/images/vs-logo.ico"/>
</div> -->

<div class='tag-container'>
<a href="https://pypi.org/project/vsearcher/"><img src='https://img.shields.io/badge/最新版本-v0.2.16-3963bc.svg'/></a>
<a><img src='https://img.shields.io/badge/build-passing-00d508.svg'/></a>
<a><img src='https://img.shields.io/badge/license-LGPL_v3.0-f0f900.svg'/></a>
</div>

<div class='tag-container'>
    <a><img src='https://img.shields.io/badge/python-v3.8+-7efaff.svg'/></a>
    <a><img src='https://img.shields.io/badge/setuptools-v59.8.0+-7ecaff.svg'/></a>
    <a><img src='https://img.shields.io/badge/pip-v21.3.1+-00d5a8.svg'/></a>
    <a><img src='https://img.shields.io/badge/opencv_python-v4.5.5-0fcff8.svg'/></a>
</div>



## 简介

结合AI算法，针对`教学类视频`的特点，发明视频内容检索方法，并申请了`发明专利`；基于该方法研发了该[vsearcher python库](https://gitee.com/breath57/vsearch)，并开源到[PyPI](https://pypi.org/project/vsearcher/), 核心使用方法见[VSearcher](./api)。

为了展现该库的应用场景以及能力，研发了案例系统，包括：[Flask API](./demo/#搭建API服务)、[Docker](./demo/#方式2-docker搭建)、[Pyintaller打包的exe程序](./demo/#方式3-vs-api-exe程序搭建)。

此外，可轻松适配如下特殊场景的视频：`动画切换`，`内容递增`，`中英文内容`，`存在人像移动`

## 特性

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

## 核心能力效果展示
### 1. 视频内容搜索

<video class="my-video-container" controls>
  <source src="http://rh4kkoxmm.bkt.clouddn.com/gitee%2Fbreath57%2Fvs-docs%2Fvideo%2Fsearch-content.mp4" type="video/mp4">
</video>

### 2. 搜索结果定位播放

<video class="my-video-container" controls>
  <source src="http://rh4kkoxmm.bkt.clouddn.com/gitee%2Fbreath57%2Fvs-docs%2Fvideo%2Flocate-content.mp4" type="video/mp4">
</video>


### 3. 自动生成视频对应的pdf课件

<video class="my-video-container" controls>
  <source src="http://rh4kkoxmm.bkt.clouddn.com/gitee%2Fbreath57%2Fvs-docs%2Fvideo%2Fdownload-pdf.mp4" type="video/mp4">
</video>

<!-- <img src="/images/gif/download_pdf.gif" style="width: 40em;" /> -->


<div class='my-action-container' style='margin: .5em 0  3em 0;'>
    <RouterLink to='/quick-start/' class='my-action my-primary-action'> 快速开始 → </RouterLink>
    <a href='https://gitee.com/breath57/vsearch' class='my-action my-common-action'>项目Gitee</a>
</div>

