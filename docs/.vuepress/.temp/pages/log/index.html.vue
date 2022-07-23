<template><div><h1 id="更新日志" tabindex="-1"><a class="header-anchor" href="#更新日志" aria-hidden="true">#</a> 更新日志</h1>
<h2 id="最新更新" tabindex="-1"><a class="header-anchor" href="#最新更新" aria-hidden="true">#</a> 最新更新</h2>
<ol>
<li><RouterLink to="/vo/#videovo">vo.VideoVO</RouterLink>、<RouterLink to="/vo/#chaptervo">vo.ChapterVO</RouterLink>、<RouterLink to="/vo/#coursevo">vo.CourseVO</RouterLink>增加search、json和release方法，使用检索方法和释放资源更佳的简洁</li>
</ol>
<p><code v-pre>更新前的使用方式</code></p>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code><span class="token keyword">from</span> vsearcher <span class="token keyword">import</span> VSearcher
executed_video <span class="token operator">=</span> VSearcher<span class="token punctuation">.</span>executeVideo<span class="token punctuation">(</span>video_file_path<span class="token operator">=</span><span class="token string">'./test.mp4'</span><span class="token punctuation">)</span>  <span class="token comment"># 对视频进行处理, 并返回处理结果</span>
search_result <span class="token operator">=</span> VSearcher<span class="token punctuation">.</span>search<span class="token punctuation">(</span>executed_video<span class="token punctuation">,</span> key<span class="token operator">=</span><span class="token string">"学习"</span><span class="token punctuation">)</span> <span class="token comment"># 搜索并返回结果</span>
VSearcher<span class="token punctuation">.</span>releaseByOutputDir<span class="token punctuation">(</span>video<span class="token punctuation">.</span>output_dir<span class="token punctuation">)</span> <span class="token comment"># 释放资源</span>
<span class="token comment"># 无法直接print查看search_result 和 executed_video</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>更新后的使用方式（简洁、见名知意)</code></p>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code><span class="token keyword">from</span> vsearcher <span class="token keyword">import</span> VSearcher
executed_video <span class="token operator">=</span> VSearcher<span class="token punctuation">.</span>executeVideo<span class="token punctuation">(</span>video_file_path<span class="token operator">=</span><span class="token string">'./test.mp4'</span> <span class="token punctuation">)</span>  <span class="token comment"># 对视频进行处理, 并返回处理结果</span>
search_result <span class="token operator">=</span> executed_video<span class="token punctuation">.</span>search<span class="token punctuation">(</span>key<span class="token operator">=</span> <span class="token string">"学习"</span><span class="token punctuation">)</span>  <span class="token comment"># 返回搜索结果</span>
executed_video<span class="token punctuation">.</span>release<span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment"># 释放资源</span>

<span class="token comment"># 可进行json序列化，默认编码为utf8</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>executed_video<span class="token punctuation">.</span>json<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>search_result<span class="token punctuation">.</span>json<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2">
<li>
<p><RouterLink to="/vo/#videovo">vo.VideoVO</RouterLink> 新增 cw_local 属性， 即课件的本地地址</p>
</li>
<li>
<p><RouterLink to="/api/#executechapter">VSearcher.executeChapter()</RouterLink> and <RouterLink to="/api/#executecourse">VSearcher.executeCourse()</RouterLink> 新增name参数，可以自定义输出的文件名</p>
</li>
</ol>
</div></template>
