<template><div><h1 id="config-全局配置" tabindex="-1"><a class="header-anchor" href="#config-全局配置" aria-hidden="true">#</a> Config 全局配置</h1>
<p>涵盖vsearcher库的所有配置的入口, Config包含三个属性<a href="">args</a>、<a href="">rootPath</a>和<a href="#config-performance">performance</a>。配置变量的默认值是经过无数次实验结果调试出来的，默认值在大多数场景已经可以取得不错的效果。</p>
<ul>
<li>注意：
<ul>
<li>优先推荐调用<RouterLink to="/api/#init">VSearcher.init</RouterLink>方法进行设置相关参数, 若不满足需求再考虑修改上述配置中的参数。</li>
<li>修改值等同于修改全局配置的默认值。</li>
<li>最好在使用<RouterLink to="/api/">VSearcher</RouterLink>具体类方法之前进行赋值配置</li>
</ul>
</li>
</ul>
<h2 id="使用方法" tabindex="-1"><a class="header-anchor" href="#使用方法" aria-hidden="true">#</a> 使用方法</h2>
<ul>
<li>导入<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code><span class="token keyword">from</span> vsearcher <span class="token keyword">import</span> Config
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
<li>示例：<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">vsearcher_config</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
  Config<span class="token punctuation">.</span>args<span class="token punctuation">.</span>step <span class="token operator">=</span> <span class="token number">40</span> <span class="token comment"># 修改视频的帧遍历间隔为40，每间隔40帧进行一次读取</span>
  Config<span class="token punctuation">.</span>args<span class="token punctuation">.</span>speed_x <span class="token operator">=</span> <span class="token number">3.5</span>
  Config<span class="token punctuation">.</span>rootPath<span class="token punctuation">.</span>output_search_result_dir <span class="token operator">=</span> <span class="token string">'static/vs-out/search_result'</span> <span class="token comment"># 搜索结果输出目录</span>
  Config<span class="token punctuation">.</span>performance<span class="token punctuation">.</span>use_gpu <span class="token operator">=</span> <span class="token boolean">True</span> <span class="token comment"># 若检测到可使用的GPU，则优先使用GPU加速</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><code v-pre>注意：</code>下方两种通过<RouterLink to="/api/">VSearcher</RouterLink>调用的方法与上述效果等同，并且<strong>推荐优先使用</strong><RouterLink to="/api/#init">VSearcher.init</RouterLink><div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code>VSearcher<span class="token punctuation">.</span>init<span class="token punctuation">(</span>step<span class="token operator">=</span><span class="token number">40</span><span class="token punctuation">,</span> speed_x<span class="token operator">=</span><span class="token number">3.5</span><span class="token punctuation">)</span>
VSearcher<span class="token punctuation">.</span>setStep<span class="token punctuation">(</span>step<span class="token operator">=</span><span class="token number">40</span><span class="token punctuation">,</span> speed_x<span class="token operator">=</span><span class="token number">3.5</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<hr>
<h2 id="config-args" tabindex="-1"><a class="header-anchor" href="#config-args" aria-hidden="true">#</a> Config.args</h2>
<p>优先推荐调用<RouterLink to="/api/#init">VSearcher.init</RouterLink>方法进行设置, 若不满足需求再考虑修改如下配置变量的值。</p>
<ul>
<li>使用：Config.args.[参数名] = value
<ul>
<li>案例:<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code>Config<span class="token punctuation">.</span>args<span class="token punctuation">.</span>step <span class="token operator">=</span> <span class="token number">30</span> <span class="token comment"># 视频帧的遍历步长设置为每间隔30帧, 读取一次视频帧</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
</ul>
</li>
<li>变量:
<ul>
<li>step = &quot;fps&quot; # 'fps': 按照视频的帧率进行取值</li>
<li>speed_x = 1 # real step = step * speed_x</li>
<li>search_result_restore_time_seconds = 120  # 搜索结果在系统存储的时间，超过该时间将会</li>
<li>img_format = &quot;png&quot;  # 图片保存的格式</li>
<li>img_name_gap = &quot;-&quot;  # 图片名：1{img_name_gap}1072%804.png | 1代表视频的id</li>
<li>section_gap = &quot;#&quot;  # 图片名：3{section_gap}1{img_name_gap}1072%804.png  | 3 代表第三区</li>
<li>url_prefix = None<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code>url_prefix为本地的图片或者视频链接<span class="token punctuation">,</span> 转换为http链接时需要的参数
例<span class="token punctuation">:</span> 
    假设：
        url_prefix <span class="token operator">=</span>  <span class="token string">"http://127.0.0.1:5000"</span>
        video_file_path <span class="token operator">=</span> <span class="token string">"{project_dir}/a/b.mp4"</span>
    则<span class="token punctuation">:</span>
        video_url <span class="token operator">=</span> <span class="token string">"http://127.0.0.1:5000/a/b.mp4"</span>

    取值为<span class="token boolean">None</span>时<span class="token punctuation">,</span> 将不生成视频的url路径<span class="token punctuation">,</span> 但还是会提供本地路径
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>frame_name_gap = '-' # 帧名的间隔符<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code>frame_name<span class="token punctuation">:</span> <span class="token number">123</span><span class="token punctuation">{</span>frame_name_gap<span class="token punctuation">}</span><span class="token number">66</span>
其中<span class="token punctuation">,</span> <span class="token number">123</span>代表当前帧的帧编号<span class="token punctuation">,</span> <span class="token number">66</span>该帧内容帧的位置<span class="token punctuation">,</span>即该画面开始的位置
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<blockquote>
<p>以下为关键帧筛选参数</p>
</blockquote>
<ul>
<li>title_num = 3  # 帧获取的标题数量</li>
<li>th_avg_score = 0.83  # 视频越清晰,越容易高分</li>
<li>th_sim_score = 0.85  # 前后两帧相似度</li>
<li>th_blur_score = 60  # 可以依靠统计 均值来定 | 根据视频的分别率来定</li>
<li>th_min_box_height = 50  # 具体调用 get_th_min_box_height(real_height)动态获取<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code><span class="token number">1.</span> <span class="token punctuation">(</span>已经进行适配处理<span class="token punctuation">)</span>如果视频画面大小为 <span class="token number">1920</span> <span class="token operator">*</span><span class="token number">1080</span><span class="token punctuation">,</span> 则最小的高度为<span class="token number">50</span>像素
<span class="token number">2.</span> 其他比例的画面<span class="token punctuation">,</span> 会自动根据<span class="token number">1920</span><span class="token operator">*</span><span class="token number">1080</span>的标准进行缩放
<span class="token number">3.</span> 故按照<span class="token number">1920</span> <span class="token operator">*</span> <span class="token number">1080</span>的假设来设置阈值
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>th_min_boxes_num = 50  # 低于 th_min_box_height 阈值的框的数量, 高于这个数量将会被过滤</li>
<li>th_min_boxes_rate = 0.9  # 最小框的比例, 超过该比例判断为内容过多, 不容易观看, 很大可能不是PPT, 比例多将会被过滤</li>
<li>height_multiple_x = 6  # 假设代码框, w/h的比值为 height_multiple_x</li>
<li>th_max_codeline_num = 7  # 最大代码框的数量, 大于该值判断为代码页, 那么将会被过滤</li>
<li>det_db_box_thresh = 0.5  # 能检测到的框的阈值, 越小检测出的文本框越多</li>
</ul>
</li>
</ul>
<hr>
<h2 id="config-rootpath" tabindex="-1"><a class="header-anchor" href="#config-rootpath" aria-hidden="true">#</a> Config.rootPath</h2>
<p>优先推荐调用<RouterLink to="/api/#init">VSearcher.init</RouterLink>方法进行设置, 若不满足需求再考虑修改如下配置变量的值。</p>
<ul>
<li>变量:
<ul>
<li>project_root_dir = &quot;&quot; # 项目的根路径, 默认为__main__所在目录路径</li>
<li>static_folder_dir = str(
Path(project_root_dir).joinpath(&quot;static&quot;))  # 静态文件夹存放路径</li>
<li>static_folder_dir_prefix = str(Path(static_folder_dir).parent) # 静态文件夹的前缀 a/c/static -&gt; a/c<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code>作用<span class="token punctuation">:</span> 用于锁定url 
例如<span class="token punctuation">:</span> 
    假设<span class="token punctuation">:</span>
        文件e<span class="token punctuation">.</span>png的路径<span class="token punctuation">:</span> a<span class="token operator">/</span>c<span class="token operator">/</span>e<span class="token punctuation">.</span>png 
        其对应的url路径<span class="token punctuation">:</span> http<span class="token punctuation">:</span><span class="token operator">//</span>xxx<span class="token operator">/</span>a<span class="token operator">/</span>c<span class="token operator">/</span>e<span class="token punctuation">.</span>png 
但是static_url为 http<span class="token punctuation">:</span><span class="token operator">//</span>xxx<span class="token operator">/</span>c<span class="token operator">/</span>e<span class="token punctuation">.</span>png才能访问
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>output_dir = str(Path(static_folder_dir, 'vsearch-output')) # 输出目录的路径</li>
<li>output_search_result_dir = str(Path(output_dir).joinpath('search-result'))# 搜索结果输出目录</li>
<li>output_courses_dir = str(Path(output_dir).joinpath('courses')) # 处理课程后产生的内容保存的目录路径</li>
<li>output_chapters_dir = str(Path(output_dir).joinpath('chapters')) # 处理章节后产生的内容保存的目录路径</li>
<li>output_videos_dir = str(Path(output_dir).joinpath('videos')) # 处理视频后产生的内容保存的目录路径</li>
<li>det_model_dir, rec_model_dir = None, None  # 导入训练好的机器学习模型路径</li>
</ul>
</li>
</ul>
<hr>
<h2 id="config-performance" tabindex="-1"><a class="header-anchor" href="#config-performance" aria-hidden="true">#</a> Config.performance</h2>
<p>与性能相关的配置变量，绝大多数场景下，默认值已经可以取得很好的效果。</p>
<ul>
<li>变量:
<ul>
<li>th_mul_thread_on_frame_counts = 60  # 启用多线程的最低要求，也就是说，如果存在一个线程的任务量比该情况低，那么就不触发多线程机制，一种动态多线程机制</li>
</ul>
<blockquote>
<p>全局线程默认设置, 当细粒度有设置时, 将优先细粒度的设置</p>
</blockquote>
<ul>
<li>process_mode = 'thread'  # [thread, process, other] thread: 多线程 |  process: 多进程 | other : 单线程</li>
<li>th_thread_nums = 1  # 'auto' # [auto：自动, int: 指定个数]</li>
<li>th_process_nums = 1  # 'auto' # 进程的数量 ['auto': 系统自动分配, int: 指定个数 ]</li>
</ul>
<blockquote>
<p>线程 | 进程 细粒度的配置</p>
</blockquote>
<ul>
<li>course_process_mode = 'thread' # # [thread, process, other] thread: 多线程 |  process: 多进程 | other : 单线程</li>
<li>th_course_multiple_nums = 1 # # 处理一个课程, 处理章节分配的线程|进程 数量 | 总线程(进程)数 = 课程线程 * 章节线程 * 视频线程</li>
<li>chapter_process_mode = 'thread' # [thread, process, other] thread: 多线程 |  process: 多进程 | other : 单线程</li>
<li>th_chapter_multiple_nums = 1 # # 处理一个章节的每个视频的线程|进程 数量 | 总线程(进程)数 = 章节线程 * 视频线程</li>
<li>video_process_mode = 'thread'  # @RISK 目前只能使用线程, 不能使用多进程 # [thread, process, other] thread: 多线程 |  process: 多进程 | other : 单线程</li>
<li>th_video_multiple_nums = 1  # 处理一个视频分配的线程|进程数量 |　总线程(进程)数 = 视频线程</li>
<li>cpu_threads = 20  # paddleOCR参数  # 或许对于GPU版本来说没有用</li>
<li>ocr_num = 1  # 创建的OCR的个数 = 进程数量 * 线程数量 # WAIT 让所有的线程共享</li>
<li>ocr_load = 1 # # OCR载荷: 每个OCR对象同时处理的线程数量 (| 当前的paddleocr版本建议设置1, 多了可能出问题|), 原因: 载荷过大, @RISK OCR识别的数据会错误, 和其它帧图像的数据混合</li>
<li>use_gpu = True  # 是否使用GPU</li>
<li>gpu_name = 'gpu'  # 指定gpu  @NOTE 至于多GPU, 该项目目前对GPU的要求内存要求不高, 对CPU内存要求高</li>
</ul>
</li>
</ul>
</div></template>
