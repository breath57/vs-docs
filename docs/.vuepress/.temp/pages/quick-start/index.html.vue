<template><div><h1 id="快速使用" tabindex="-1"><a class="header-anchor" href="#快速使用" aria-hidden="true">#</a> 快速使用</h1>
<h2 id="_1-安装" tabindex="-1"><a class="header-anchor" href="#_1-安装" aria-hidden="true">#</a> 1. 安装</h2>
<h3 id="步骤-1-安装paddle框架-选择cpu或gpu其一安装即可" tabindex="-1"><a class="header-anchor" href="#步骤-1-安装paddle框架-选择cpu或gpu其一安装即可" aria-hidden="true">#</a> <code v-pre>步骤 1</code> 安装Paddle框架(选择CPU或GPU其一安装即可)</h3>
<h4 id="cpu版" tabindex="-1"><a class="header-anchor" href="#cpu版" aria-hidden="true">#</a> <strong>CPU版:</strong></h4>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>python3 -m pip <span class="token function">install</span> <span class="token assign-left variable">paddlepaddle</span><span class="token operator">==</span><span class="token number">2.3</span>.0 -i https://mirror.baidu.com/pypi/simple
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>GPU版:</strong> (通常需要安装CUDA等显卡适配软件)</p>
<p>具体的安装方式，由于不同环境(Mac、Linux)的安装方式不同, 可<a href="https://www.paddlepaddle.org.cn/" target="_blank" rel="noopener noreferrer">点击查看具体安装方式<ExternalLinkIcon/></a></p>
<h3 id="步骤-2-安装vsearcher库" tabindex="-1"><a class="header-anchor" href="#步骤-2-安装vsearcher库" aria-hidden="true">#</a> <code v-pre>步骤 2</code> 安装vsearcher库</h3>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>pip <span class="token function">install</span> <span class="token assign-left variable">vsearcher</span><span class="token operator">==</span><span class="token number">0.2</span>.16
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_2-基本使用案例" tabindex="-1"><a class="header-anchor" href="#_2-基本使用案例" aria-hidden="true">#</a> 2. 基本使用案例</h2>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code><span class="token keyword">from</span> vsearcher <span class="token keyword">import</span> VSearcher

<span class="token keyword">def</span> <span class="token function">case1_base_use</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">""" 处理视频获取课件，并检索视频 """</span>
    <span class="token comment"># 视频处理, 并返回处理结果对象</span>
    executed_video <span class="token operator">=</span> VSearcher<span class="token punctuation">.</span>executeVideo<span class="token punctuation">(</span>video_file_path<span class="token operator">=</span><span class="token string">'./test.mp4'</span><span class="token punctuation">)</span> 
     <span class="token comment"># 获取生成的课件本地路径</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f'courseware_path: </span><span class="token interpolation"><span class="token punctuation">{</span>executed_video<span class="token punctuation">.</span>cw_local<span class="token punctuation">}</span></span><span class="token string">'</span></span><span class="token punctuation">)</span>  
    <span class="token comment"># 搜索，并返回搜索结果对象</span>
    search_result <span class="token operator">=</span> executed_video<span class="token punctuation">.</span>search<span class="token punctuation">(</span>key<span class="token operator">=</span><span class="token string">"学习"</span><span class="token punctuation">)</span>  
    <span class="token comment"># 查看搜索结果(考虑到通用性，.json()方法默认编码为utf-8，此处为了方便中文显示, 转码为unicode-escape)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>search_result<span class="token punctuation">.</span>json<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>encode<span class="token punctuation">(</span><span class="token string">'utf-8'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>decode<span class="token punctuation">(</span><span class="token string">'unicode-escape'</span><span class="token punctuation">)</span><span class="token punctuation">)</span> 

<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">'__main__'</span><span class="token punctuation">:</span>
    case1_base_use<span class="token punctuation">(</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>更多高级用法请参照<RouterLink to="/api/">VSeacher API</RouterLink></p>
</div>
<h2 id="_3-问题" tabindex="-1"><a class="header-anchor" href="#_3-问题" aria-hidden="true">#</a> 3. 问题</h2>
<h3 id="_3-1-在linux环境下出现cv2相关的异常问题" tabindex="-1"><a class="header-anchor" href="#_3-1-在linux环境下出现cv2相关的异常问题" aria-hidden="true">#</a> 3.1 在linux环境下出现cv2相关的异常问题</h3>
<p><code v-pre>解决方案 1</code>： 安装如下包</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>pip <span class="token function">install</span> opencv-contrib-python
pip <span class="token function">install</span> opencv-python-headless
pip <span class="token function">install</span> openpyxl
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>若执行<code v-pre>方案1</code>之后还有报错，则执行如下命令即可</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>pip uninstall opencv-contrib-python
pip uninstall opencv-python-headless
pip uninstall openpyxl

pip <span class="token function">install</span> opencv-contrib-python
pip <span class="token function">install</span> opencv-python-headless
pip <span class="token function">install</span> openpyxl
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-2-在linux下出现如下异常信息" tabindex="-1"><a class="header-anchor" href="#_3-2-在linux下出现如下异常信息" aria-hidden="true">#</a> 3.2 在Linux下出现如下异常信息</h3>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>_message.Message._CheckCalledFromGeneratedFile<span class="token punctuation">(</span><span class="token punctuation">)</span>
TypeError: Descriptors cannot not be created directly.
If this call came from a _pb2.py file, your generated code is out of <span class="token function">date</span> and must be regenerated with protoc <span class="token operator">>=</span> <span class="token number">3.19</span>.0.
If you cannot immediately regenerate your protos, some other possible workarounds are:
 <span class="token number">1</span>. Downgrade the protobuf package to <span class="token number">3.20</span>.x or lower.
 <span class="token number">2</span>. Set <span class="token assign-left variable">PROTOCOL_BUFFERS_PYTHON_IMPLEMENTATION</span><span class="token operator">=</span>python <span class="token punctuation">(</span>but this will use pure-Python parsing and will be much slower<span class="token punctuation">)</span>.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>解决</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>pip3 <span class="token function">install</span> <span class="token assign-left variable">protobuf</span><span class="token operator">==</span><span class="token number">3.20</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></div></template>
