<template><div><h1 id="vsearcher-api" tabindex="-1"><a class="header-anchor" href="#vsearcher-api" aria-hidden="true">#</a> VSearcher API</h1>
<p><code v-pre>VSearcher</code>是vsearcher库中的核心类，该库的所有功能均通过该类的类方法和静态方法进行实现。</p>
<h2 id="使用方法" tabindex="-1"><a class="header-anchor" href="#使用方法" aria-hidden="true">#</a> 使用方法</h2>
<ul>
<li>导入</li>
</ul>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code><span class="token keyword">from</span> vsearcher <span class="token keyword">import</span> VSearcher
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>通过类方法的调用使用</li>
</ul>
<blockquote>
<p>VSearcher.[函数名](参数)</p>
</blockquote>
<ul>
<li>例如：</li>
</ul>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code>VSeacher<span class="token punctuation">.</span>executeVideo<span class="token punctuation">(</span><span class="token string">'test.mp4'</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>其它方法如下所示：</p>
<hr>
<h2 id="init" tabindex="-1"><a class="header-anchor" href="#init" aria-hidden="true">#</a> init</h2>
<p>初始化与VSearcher后续处理相关的配置</p>
<ul>
<li>
<p>参数:</p>
<ul>
<li>
<p>domain_url:</p>
<p>外部访问静态资源时的URL前半部分，例如：http://{domain_url}/a/b.mp4<br>
若设置：后续的处理结果中的资源路径，将为url路径(http://{domain_url}/a/b.mp4);<br>
不设置：结果将返回本地路径(a/b.mp4);</p>
</li>
<li>
<p>project_root_dir: 默认为__main__文件所在目录的路径</p>
</li>
<li>
<p>step: 视频遍历的帧间隔, 越大速度越快, 当取值为'fps'是为视频的帧率</p>
</li>
<li>
<p>speed_x: 对step进行整数倍的加速, 即 最终的step = step * speed_x</p>
</li>
<li>
<p>ocr_model_dir: 含有.pdmodel文件的目录相对路径, 默认为: ocrv3模型</p>
</li>
<li>
<p>static_folder: 可以外部url访问的静态文件夹的目录路径, 该路径是相对于项目的根路径</p>
</li>
<li>
<p>output_dir: vsearch处理结果输出的保存的相对于static_folder的路径, 即: 实际的输出目录为: {static_folder}/{output_dir}</p>
</li>
</ul>
</li>
<li>
<p>返回：None</p>
</li>
</ul>
<hr>
<h2 id="executevideo" tabindex="-1"><a class="header-anchor" href="#executevideo" aria-hidden="true">#</a> executeVideo</h2>
<p>处理视频,并返回处理结果</p>
<ul>
<li>
<p>参数:</p>
<ul>
<li>video_file_path: 视频文件的本地路径</li>
<li>video_name: 默认自动从路径中获取</li>
<li>step: 视频遍历的帧间隔, 越大速度越快, 默认为视频的帧率</li>
<li>speed_x: 对step进行整数倍的加速, 即 最终的step = step * speed_x, 默认为3</li>
<li>output_dir: 处理过程中产生的输出结果存放的目录, 若该处不指定, 且也没有进行<a href="#init">VSearcher.init()</a>的初始化, 则路径为{project_dir}/static/vsearch-output/videos</li>
</ul>
</li>
<li>
<p>返回: <RouterLink to="/vo/#vo-video">vo.VideoVO</RouterLink></p>
</li>
</ul>
<hr>
<h2 id="executechapter" tabindex="-1"><a class="header-anchor" href="#executechapter" aria-hidden="true">#</a> executeChapter</h2>
<p>处理章节,并返回处理结果</p>
<ul>
<li>参数:
<ul>
<li>chapter_dir_path: 章节的根目录, 即该目录下含有一个或以上的视频</li>
<li>chapter_name: 默从路径中自动获取</li>
<li>step: 视频遍历的帧间隔, 越大速度越快, 当取值为'fps'是为视频的帧率</li>
<li>speed_x: 对step进行整数倍的加速, 即 最终的step = step * speed_x</li>
<li>output_dir: 处理过程中产生的输出结果存放的目录, 若该处不指定, 且也没有进行VSearcher.init()的初始化, 则路径为{project_dir}/static/vsearch-output/videos</li>
</ul>
</li>
<li>返回：<RouterLink to="/vo/#vo-chapter">vo.ChapterVO</RouterLink></li>
</ul>
<hr>
<h2 id="executecourse" tabindex="-1"><a class="header-anchor" href="#executecourse" aria-hidden="true">#</a> executeCourse</h2>
<p>处理课程,并返回处理结果</p>
<ul>
<li>参数:
<ul>
<li>course_dir_path: 课程的根目录, 即该目录下含有一个或以上的章节</li>
<li>course_name: 默从路径中自动获取</li>
<li>step: 视频遍历的帧间隔, 越大速度越快, 当取值为'fps'是为视频的帧率</li>
<li>speed_x: 对step进行整数倍的加速, 即 最终的step = step * speed_x</li>
<li>output_dir: 处理过程中产生的输出结果存放的目录, 若该处不指定, 且也没有进行VSearcher.init()的初始化, 则路径为{project_dir}/static/vsearch-output/videos</li>
</ul>
</li>
<li>返回: <RouterLink to="/vo/#vo-course">vo.CourseVO</RouterLink></li>
</ul>
<hr>
<h2 id="search" tabindex="-1"><a class="header-anchor" href="#search" aria-hidden="true">#</a> search</h2>
<p>搜索某个资源的内容，即视频中的内容，并返回<RouterLink to="/vo/#resourcevo">vo.ResourceVO</RouterLink>的子类作为结果</p>
<ul>
<li>
<p>参数:</p>
<ul>
<li>o_or_path: <RouterLink to="/vo/#resourcevo">vo.ResourceVO</RouterLink>, 即调用execute{Chapter | Course | Video}()返回的对象, 或者对象中o_path属性对应的pickle对象路径
key: 关键字</li>
</ul>
</li>
<li>
<p>返回: vo.{<RouterLink to="/vo/#chaptervo">Chapter</RouterLink> | <RouterLink to="/vo/#coursevo">Course</RouterLink> | <RouterLink to="/vo/#videovo">Video</RouterLink> }VO 对象作为结果</p>
</li>
</ul>
<hr>
<h2 id="setpaddleocrmodeldir" tabindex="-1"><a class="header-anchor" href="#setpaddleocrmodeldir" aria-hidden="true">#</a> setPaddleOcrModelDir</h2>
<p>指定使用paddle模型</p>
<ul>
<li>参数:
<ul>
<li>model_dir: 模型的目录路径
<ul>
<li>默认使用的模型:<br>
文本识别: ch_ppocr_mobile_v2.0_rec_infer<br>
文本检测: ch_ppocr_mobile_v2.0_det_infer<br>
可参考：<code v-pre>https://gitee.com/paddlepaddle/PaddleOCR/blob/release/2.5/doc/doc_ch/models_list.md</code></li>
</ul>
</li>
</ul>
</li>
</ul>
<hr>
<h2 id="setoutputdir" tabindex="-1"><a class="header-anchor" href="#setoutputdir" aria-hidden="true">#</a> setOutputDir</h2>
<p>设置输出路径</p>
<ul>
<li>
<p>参数:</p>
<ul>
<li>relative_static_folder_path: 该路径是相对于输出项目的相对路径</li>
</ul>
</li>
<li>
<p>示例:</p>
</li>
</ul>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>假设:
    relative_static_folder_path: c/d
    project_dir: a/b
最终的输出路径: {project_dir}/{relative_static_folder_path}, 即 a/b/c/d
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<h2 id="setstaticdir" tabindex="-1"><a class="header-anchor" href="#setstaticdir" aria-hidden="true">#</a> setStaticDir</h2>
<p>设置静态文件夹路径，若使用的框架为flask，则为flask应用的静态目录</p>
<ul>
<li>
<p>参数:</p>
<ul>
<li>relative_project_dir_path: 该路径是相对于输出项目的相对路径</li>
</ul>
</li>
<li>
<p>示例：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>  假设:
      project_dir: E://a/b/project_dir
      relative_project_dir_path: 
  那么:
      real static path is {project_dir}/{relative_project_dir_path}
      url_prefix_local_path: {project_dir}/x
  假设:
      img_local_path: E://a/b/project_dir/x/ff/ss/c.pn    
  那么:
      url: http://localhost:5000/ff/ss/c.png
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<hr>
<h2 id="setstep" tabindex="-1"><a class="header-anchor" href="#setstep" aria-hidden="true">#</a> setStep</h2>
<p>设置全局默认step</p>
<ul>
<li>参数:
<ul>
<li>step: 视频遍历的帧间隔, 越大速度越快, 当取值为'fps'是为视频的帧率</li>
<li>speed_x: 对step进行整数倍的加速, 即 最终的step = step * speed_x</li>
</ul>
</li>
</ul>
<hr>
<h2 id="createcoursedir" tabindex="-1"><a class="header-anchor" href="#createcoursedir" aria-hidden="true">#</a> createCourseDir</h2>
<p>创建课程资源对应的目录, 并返回路径</p>
<ul>
<li>参数:
<ul>
<li>course_name: 课程名称</li>
</ul>
</li>
<li>返回: 新建的目录路径</li>
</ul>
<hr>
<h2 id="createchapterdir" tabindex="-1"><a class="header-anchor" href="#createchapterdir" aria-hidden="true">#</a> createChapterDir</h2>
<p>创建章节资源对应的目录, 并返回路径</p>
<ul>
<li>参数:
<ul>
<li>chapter_name: 章节名称</li>
<li>course_name: 章节所属的课程名称</li>
</ul>
</li>
<li>返回: 新建的目录路径</li>
</ul>
<hr>
<h2 id="loadresource" tabindex="-1"><a class="header-anchor" href="#loadresource" aria-hidden="true">#</a> loadResource</h2>
<p>将处理输出的pickle对象文件, 载入为<RouterLink to="/vo/#resourcevo">vo.ResourceVO</RouterLink>的子类对象</p>
<ul>
<li>
<p>参数:</p>
<ul>
<li>o_or_path: [vo.ResourceVO], 即调用execute{Chapter | Course | Video}()返回的对象, 或者对象中o_path属性对应的pickle对象路径</li>
</ul>
</li>
<li>
<p>返回: vo.{<RouterLink to="/vo/#chaptervo">Chapter</RouterLink> | <RouterLink to="/vo/#coursevo">Course</RouterLink> | <RouterLink to="/vo/#videovo">Video</RouterLink> }VO 对象作为结果</p>
</li>
</ul>
<hr>
<h2 id="releaseresource" tabindex="-1"><a class="header-anchor" href="#releaseresource" aria-hidden="true">#</a> releaseResource</h2>
<p>释放o_path对应的pickle对象对应的所有存储资源</p>
<ul>
<li>参数:
<ul>
<li>o_or_path: [vo.ResourceVO], 即调用execute{Chapter | Course | Video}()返回的对象, 或者对象中o_path属性对应的pickle对象路径</li>
</ul>
</li>
</ul>
<hr>
<h2 id="releasebyoutputdir" tabindex="-1"><a class="header-anchor" href="#releasebyoutputdir" aria-hidden="true">#</a> <s>releaseByOutputDir</s></h2>
<blockquote>
<p>请使用<a href="#releaseresource">releaseResource</a>方法</p>
</blockquote>
<p>释放处理产生的输出文件, 包括： 1. 注释文件 2.视频文件 3.图片文件 4. 课件 @WAIT（或许实时生成比较好，就是get的时候进行获取文件）</p>
<ul>
<li>参数:
<ul>
<li>output_dir: vo.ResourceVO对象的output_dir属性, 执行execute{Chapter | Course | Video}()方法时, 设置的output_dir</li>
</ul>
</li>
</ul>
<hr>
</div></template>
