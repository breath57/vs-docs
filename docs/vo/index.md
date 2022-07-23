# View Object对象

`视图对象(View Object，VO)`为[VSearcher](../api/#vsearcher-api)对各种资源处理后的结果返回的对象，或说内容装载对象。这些对象同时包括`属性`和`方法`。
可以根据具体返回的数据，进行筛选以应对不同的需求，研发出更具体和复杂的功能。

考虑到开发者有搭建API服务的需求，故`视图对象`的父类[BaseVO](#basevo)定义了`json()`方法，使得子类的`视图对象`可简单通过调用`view_oject.json()`就能实现序列化，而无需关注内部的结构考虑如何正确的序列化。

例如：[VSearcher.executeVideo(video_file_path)](../api/#executevideo)方法的返回值为[vo.ResourceVO](#resourcevo)的子类[vo.VideoVO](#videovo)

* 使用: (注：不推荐外部进行实例化使用，因为该VO模块处于`_core`的包中，不希望对外使用)
    ```py
    from vsearcher._core import vo 
    vo.VideoVO(id=id, ..., ...., boxes=boxes) # 实例化
    ```
---
## BaseVO
VO基类，即所有VO类的父类
* 抽象类方法
  * isEmpty() -> bool: 判断对象的内容是否为空
* 抽象静态方法
  * create() -> None: (不推荐外部使用)属性拷贝的方式，创建VO对象
    * 参数:
      * object: 内部的资源对象
* 方法:
  * json() -> str: 返回序列化后的json字符串

---
## FrameVO
储存帧的信息
* 父类: [BaseVO](#basevo) | [VOExtend](#voextend)
* 属性
    * id: int # 帧的id编号，具体为该帧在视频中的帧数
    * name: str # 帧的别名
    * title: list # 该帧对应的标题
    * img: str # 帧对应图片的url地址
    * img_local_path: str  # 帧对应图片的本地路径
    * ms: int # 帧对应的视频中的时间位置，单位：毫秒
    * time: str # 帧对应视频中的时间字符串
    * txts: list  # 帧所含文本内容的列表
      * 示例: 
      ```py
       txts = ['content1','content2', ..., 'content_x']
      ```
    * boxes: list  # 帧所含文本框的位置信息
      * 示例: 
      ```py
       boxes = [
                [x1, y1, x2, y2],
                ...,
                [xa, ya, xb, yb]
            ]
      ```

* 方法:
  * isEmpty() -> bool: 判断对象的内容是否为空
  * json() -> str: 返回序列化后的json字符串
## VOExtend
扩展VO的能力，具备搜索和释放资源的功能

* 方法:
  * search()
    * 参数:
      * key: 搜索内容
      * json_dumps: 返回的结果是否需要json序列化
      * search_result_restore_time_seconds: 搜索结果保留的时间, 默认配置文件中的args.search_result_restore_time_seconds, 超出时间将自动进行清理
    * 返回: [ResourceVO](#resourcevo)

  * release()
    * 参数:
      * output_dir: 执行execute{Chapter | Course | Video}()方法时, 设置的output_dir, 或VO属性中的`output_dir`属性
    * 返回: None

## ResourceVO
记录资源的输出路径(即，VO对象中的`output_dir`属性)，和释放输出路径对应的资源
* 父类: [BaseVO](#basevo) | [VOExtend](#voextend)

* 属性：
  * o_path: str  # pickle对象所在的路径
  * output_dir: str # 资源的输出路径

* 方法:
  * isEmpty() -> bool: 判断对象的内容是否为空
  * json() -> str: 返回序列化后的json字符串
  * search()
    * 参数:
      * key: 搜索内容
      * json_dumps: 返回的结果是否需要json序列化
      * search_result_restore_time_seconds: 搜索结果保留的时间, 默认配置文件中的args.search_result_restore_time_seconds, 超出时间将自动进行清理
    * 返回: [ResourceVO](#resourcevo)
  * release()
    * 参数:
      * output_dir: 执行execute{Chapter | Course | Video}()方法时, 设置的output_dir, 或VO属性中的`output_dir`属性
    * 返回: None



## VideoVO

* 父类：[ResourceVO](#resourcevo)
* 属性：
    * id: int  # id
    * name: str  # 视频名称
    * local_path: str  # 视频的本地路径
    * chapter_id: int  # 视频所属章节的id
    * kfs: List[[FrameVO](#framevo)]  # 关键帧列表
    * url: str  # 视频的url路径
    * img: str  # 封面图片的url路径，该图片为关键帧作的第一帧
    * o_path: str  # 内部对象的路径，可以通过[VSearcher.loadResource(o_path)]进行读取
    * cw: str  # 生成课件的url路径
    * cw_local: str  # 生成课件的本地路径
    * output_dir: str  # 资源的输出目录路径
    * step: int  # 处理视频时的帧间隔 | 即，每间隔step帧读取一次视频帧
    * speed_x: float  # real step = step * speed_x

* 方法:
  * isEmpty() -> bool: 判断对象的内容是否为空
  * json() -> str: 返回序列化后的json字符串
  * search()
    * 参数:
      * key: 搜索内容
      * json_dumps: 返回的结果是否需要json序列化
      * search_result_restore_time_seconds: 搜索结果保留的时间, 默认配置文件中的args.search_result_restore_time_seconds, 超出时间将自动进行清理
    * 返回: [VideoVO](#videovo)
  * release()
    * 参数:
      * output_dir: 执行execute{Chapter | Course | Video}()方法时, 设置的output_dir, 或VO属性中的`output_dir`属性
    * 返回: None

## ChapterVO
* 父类：[ResourceVO](#resourcevo)
* 属性：
    * id: int # id
    * name: str # 章节名称
    * course_id: int # 章节所属课程的课程id
    * videos: List[[VideoVO](#videovo)] # 章节下的所有视频对象
    * output_dir: str  # 资源的输出目录路径
* 方法：
  * isEmpty() -> bool: 判断对象的内容是否为空
  * json() -> str: 返回序列化后的json字符串
  * search()
    * 参数:
      * key: 搜索内容
      * json_dumps: 返回的结果是否需要json序列化
      * search_result_restore_time_seconds: 搜索结果保留的时间, 默认配置文件中的args.search_result_restore_time_seconds, 超出时间将自动进行清理
    * 返回: [VideoVO](#videovo)
  * release()
    * 参数:
      * output_dir: 执行execute{Chapter | Course | Video}()方法时, 设置的output_dir, 或VO属性中的`output_dir`属性
    * 返回: None
    
## CourseVO
* 父类：[ResourceVO](#resourcevo)
* 属性：
    * id: int # 课程id
    * name: str # 课程名称
    * chapters: List[[ChapterVO](#chaptervo)] # 课程下的所有ChapterVO对象
    * output_dir: str # 资源的输出目录路径
* 方法：
  * isEmpty() -> bool: 判断对象的内容是否为空
  * json() -> str: 返回序列化后的json字符串
  * search()
    * 参数:
      * key: 搜索内容
      * json_dumps: 返回的结果是否需要json序列化
      * search_result_restore_time_seconds: 搜索结果保留的时间, 默认配置文件中的args.search_result_restore_time_seconds, 超出时间将自动进行清理
    * 返回: [VideoVO](#videovo)
  * release()
    * 参数:
      * output_dir: 执行execute{Chapter | Course | Video}()方法时, 设置的output_dir, 或VO属性中的`output_dir`属性
    * 返回: None


<style lang="scss">
.staticmethod{
    background-color: #f3ff33;
}

.classmethod{
    background-color: #f3f1f3;
}
</style>

<!-- <span class="staticmethod">staticmethod</span> -->