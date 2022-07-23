# Config 全局配置
涵盖vsearcher库的所有配置的入口, Config包含三个属性[args]()、[rootPath]()和[performance](#config-performance)。配置变量的默认值是经过无数次实验结果调试出来的，默认值在大多数场景已经可以取得不错的效果。


* 注意：
    * 优先推荐调用[VSearcher.init](./api/#init)方法进行设置相关参数, 若不满足需求再考虑修改上述配置中的参数。
    * 修改值等同于修改全局配置的默认值。
    * 最好在使用[VSearcher](./api/)具体类方法之前进行赋值配置
## 使用方法
* 导入
  ```py
  from vsearcher import Config
  ```
* 示例：
  ```py
  def vsearcher_config():
    Config.args.step = 40 # 修改视频的帧遍历间隔为40，每间隔40帧进行一次读取
    Config.args.speed_x = 3.5
    Config.rootPath.output_search_result_dir = 'static/vs-out/search_result' # 搜索结果输出目录
    Config.performance.use_gpu = True # 若检测到可使用的GPU，则优先使用GPU加速
  ```
  `注意：`下方两种通过[VSearcher](./api/)调用的方法与上述效果等同，并且**推荐优先使用**[VSearcher.init](./api/#init)
  ```py
  VSearcher.init(step=40, speed_x=3.5)
  VSearcher.setStep(step=40, speed_x=3.5)
  ```
---
## Config.args
优先推荐调用[VSearcher.init](./api/#init)方法进行设置, 若不满足需求再考虑修改如下配置变量的值。
* 使用：Config.args.[参数名] = value
    * 案例:
        ```py
        Config.args.step = 30 # 视频帧的遍历步长设置为每间隔30帧, 读取一次视频帧
        ```
* 变量: 
    * step = "fps" # 'fps': 按照视频的帧率进行取值
    * speed_x = 1 # real step = step * speed_x
    * search_result_restore_time_seconds = 120  # 搜索结果在系统存储的时间，超过该时间将会
    * img_format = "png"  # 图片保存的格式
    * img_name_gap = "-"  # 图片名：1{img_name_gap}1072%804.png | 1代表视频的id
    * section_gap = "#"  # 图片名：3{section_gap}1{img_name_gap}1072%804.png  | 3 代表第三区
    * url_prefix = None
        ```py
        url_prefix为本地的图片或者视频链接, 转换为http链接时需要的参数
        例: 
            假设：
                url_prefix =  "http://127.0.0.1:5000"
                video_file_path = "{project_dir}/a/b.mp4"
            则:
                video_url = "http://127.0.0.1:5000/a/b.mp4"

            取值为None时, 将不生成视频的url路径, 但还是会提供本地路径
        ```
    * frame_name_gap = '-' # 帧名的间隔符
        ```py
        frame_name: 123{frame_name_gap}66
        其中, 123代表当前帧的帧编号, 66该帧内容帧的位置,即该画面开始的位置
        ```
    > 以下为关键帧筛选参数
    * title_num = 3  # 帧获取的标题数量
    * th_avg_score = 0.83  # 视频越清晰,越容易高分
    * th_sim_score = 0.85  # 前后两帧相似度 
    * th_blur_score = 60  # 可以依靠统计 均值来定 | 根据视频的分别率来定
    * th_min_box_height = 50  # 具体调用 get_th_min_box_height(real_height)动态获取
        ```py
        1. (已经进行适配处理)如果视频画面大小为 1920 *1080, 则最小的高度为50像素
        2. 其他比例的画面, 会自动根据1920*1080的标准进行缩放
        3. 故按照1920 * 1080的假设来设置阈值
        ```
    * th_min_boxes_num = 50  # 低于 th_min_box_height 阈值的框的数量, 高于这个数量将会被过滤
    * th_min_boxes_rate = 0.9  # 最小框的比例, 超过该比例判断为内容过多, 不容易观看, 很大可能不是PPT, 比例多将会被过滤
    * height_multiple_x = 6  # 假设代码框, w/h的比值为 height_multiple_x
    * th_max_codeline_num = 7  # 最大代码框的数量, 大于该值判断为代码页, 那么将会被过滤
    * det_db_box_thresh = 0.5  # 能检测到的框的阈值, 越小检测出的文本框越多

---
## Config.rootPath
优先推荐调用[VSearcher.init](./api/#init)方法进行设置, 若不满足需求再考虑修改如下配置变量的值。
* 变量:
    * project_root_dir = "" # 项目的根路径, 默认为__main__所在目录路径
    * static_folder_dir = str(
        Path(project_root_dir).joinpath("static"))  # 静态文件夹存放路径
    * static_folder_dir_prefix = str(Path(static_folder_dir).parent) # 静态文件夹的前缀 a/c/static -> a/c
        ```py
        作用: 用于锁定url 
        例如: 
            假设:
                文件e.png的路径: a/c/e.png 
                其对应的url路径: http://xxx/a/c/e.png 
        但是static_url为 http://xxx/c/e.png才能访问
        ```
    * output_dir = str(Path(static_folder_dir, 'vsearch-output')) # 输出目录的路径
    * output_search_result_dir = str(Path(output_dir).joinpath('search-result'))# 搜索结果输出目录
    * output_courses_dir = str(Path(output_dir).joinpath('courses')) # 处理课程后产生的内容保存的目录路径
    * output_chapters_dir = str(Path(output_dir).joinpath('chapters')) # 处理章节后产生的内容保存的目录路径
    * output_videos_dir = str(Path(output_dir).joinpath('videos')) # 处理视频后产生的内容保存的目录路径
    * det_model_dir, rec_model_dir = None, None  # 导入训练好的机器学习模型路径
---
## Config.performance
与性能相关的配置变量，绝大多数场景下，默认值已经可以取得很好的效果。
* 变量:
    * th_mul_thread_on_frame_counts = 60  # 启用多线程的最低要求，也就是说，如果存在一个线程的任务量比该情况低，那么就不触发多线程机制，一种动态多线程机制
    > 全局线程默认设置, 当细粒度有设置时, 将优先细粒度的设置
    * process_mode = 'thread'  # [thread, process, other] thread: 多线程 |  process: 多进程 | other : 单线程
    * th_thread_nums = 1  # 'auto' # [auto：自动, int: 指定个数]
    * th_process_nums = 1  # 'auto' # 进程的数量 ['auto': 系统自动分配, int: 指定个数 ]
    > 线程 | 进程 细粒度的配置
    * course_process_mode = 'thread' # # [thread, process, other] thread: 多线程 |  process: 多进程 | other : 单线程
    * th_course_multiple_nums = 1 # # 处理一个课程, 处理章节分配的线程|进程 数量 | 总线程(进程)数 = 课程线程 * 章节线程 * 视频线程
    * chapter_process_mode = 'thread' # [thread, process, other] thread: 多线程 |  process: 多进程 | other : 单线程
    * th_chapter_multiple_nums = 1 # # 处理一个章节的每个视频的线程|进程 数量 | 总线程(进程)数 = 章节线程 * 视频线程
    * video_process_mode = 'thread'  # @RISK 目前只能使用线程, 不能使用多进程 # [thread, process, other] thread: 多线程 |  process: 多进程 | other : 单线程
    * th_video_multiple_nums = 1  # 处理一个视频分配的线程|进程数量 |　总线程(进程)数 = 视频线程
    * cpu_threads = 20  # paddleOCR参数  # 或许对于GPU版本来说没有用
    * ocr_num = 1  # 创建的OCR的个数 = 进程数量 * 线程数量 # WAIT 让所有的线程共享
    * ocr_load = 1 # # OCR载荷: 每个OCR对象同时处理的线程数量 (| 当前的paddleocr版本建议设置1, 多了可能出问题|), 原因: 载荷过大, @RISK OCR识别的数据会错误, 和其它帧图像的数据混合
    * use_gpu = True  # 是否使用GPU
    * gpu_name = 'gpu'  # 指定gpu  @NOTE 至于多GPU, 该项目目前对GPU的要求内存要求不高, 对CPU内存要求高





