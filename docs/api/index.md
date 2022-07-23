# VSearcher API
`VSearcher`是vsearcher库中的核心类，该库的所有功能均通过该类的类方法和静态方法进行实现。

## 使用方法
* 导入
```py
from vsearcher import VSearcher
```
* 通过类方法的调用使用
> VSearcher.\[函数名\]\(参数\)

* 例如：
```py
VSeacher.executeVideo('test.mp4')
```

其它方法如下所示：  

---
## init
初始化与VSearcher后续处理相关的配置
* 参数:
  * domain_url: 
    
    外部访问静态资源时的URL前半部分，例如：http://{domain_url}/a/b.mp4<br>
    若设置：后续的处理结果中的资源路径，将为url路径(http://{domain_url}/a/b.mp4);<br>
    不设置：结果将返回本地路径(a/b.mp4);
  * project_root_dir: 默认为__main__文件所在目录的路径
  * step: 视频遍历的帧间隔, 越大速度越快, 当取值为'fps'是为视频的帧率
  * speed_x: 对step进行整数倍的加速, 即 最终的step = step * speed_x
  * ocr_model_dir: 含有.pdmodel文件的目录相对路径, 默认为: ocrv3模型
  * static_folder: 可以外部url访问的静态文件夹的目录路径, 该路径是相对于项目的根路径
  * output_dir: vsearch处理结果输出的保存的相对于static_folder的路径, 即: 实际的输出目录为: {static_folder}/{output_dir}

* 返回：None 


---
## executeVideo
处理视频,并返回处理结果
* 参数:
    * video_file_path: 视频文件的本地路径
    * video_name: 默认自动从路径中获取
    * step: 视频遍历的帧间隔, 越大速度越快, 默认为视频的帧率
    * speed_x: 对step进行整数倍的加速, 即 最终的step = step * speed_x, 默认为3
    * output_dir: 处理过程中产生的输出结果存放的目录, 若该处不指定, 且也没有进行[VSearcher.init()](#init)的初始化, 则路径为{project_dir}/static/vsearch-output/videos

* 返回: [vo.VideoVO](./vo/#vo-video)

---
## executeChapter
处理章节,并返回处理结果
* 参数:
    * chapter_dir_path: 章节的根目录, 即该目录下含有一个或以上的视频
    * chapter_name: 默从路径中自动获取
    * step: 视频遍历的帧间隔, 越大速度越快, 当取值为'fps'是为视频的帧率
    * speed_x: 对step进行整数倍的加速, 即 最终的step = step * speed_x
    * output_dir: 处理过程中产生的输出结果存放的目录, 若该处不指定, 且也没有进行VSearcher.init()的初始化, 则路径为{project_dir}/static/vsearch-output/videos
* 返回：[vo.ChapterVO](./vo/#vo-chapter)

---
## executeCourse
处理课程,并返回处理结果
* 参数:
    * course_dir_path: 课程的根目录, 即该目录下含有一个或以上的章节
    * course_name: 默从路径中自动获取
    * step: 视频遍历的帧间隔, 越大速度越快, 当取值为'fps'是为视频的帧率
    * speed_x: 对step进行整数倍的加速, 即 最终的step = step * speed_x
    * output_dir: 处理过程中产生的输出结果存放的目录, 若该处不指定, 且也没有进行VSearcher.init()的初始化, 则路径为{project_dir}/static/vsearch-output/videos
* 返回: [vo.CourseVO](./vo/#vo-course)
---

## search
搜索某个资源的内容，即视频中的内容，并返回[vo.ResourceVO](./vo/#resourcevo)的子类作为结果


* 参数:
    * o_or_path: [vo.ResourceVO](./vo/#resourcevo), 即调用execute{Chapter | Course | Video}()返回的对象, 或者对象中o_path属性对应的pickle对象路径
    key: 关键字

* 返回: vo.{[Chapter](./vo/#chaptervo) | [Course](./vo/#coursevo) | [Video](./vo/#videovo) }VO 对象作为结果

---

## setPaddleOcrModelDir
指定使用paddle模型

* 参数:
    * model_dir: 模型的目录路径
        * 默认使用的模型:<br>
            文本识别: ch_ppocr_mobile_v2.0_rec_infer<br>
            文本检测: ch_ppocr_mobile_v2.0_det_infer<br>
        可参考：`https://gitee.com/paddlepaddle/PaddleOCR/blob/release/2.5/doc/doc_ch/models_list.md`
---

## setOutputDir
设置输出路径
* 参数:
  * relative_static_folder_path: 该路径是相对于输出项目的相对路径
  
* 示例: 
```
假设:
    relative_static_folder_path: c/d
    project_dir: a/b
最终的输出路径: {project_dir}/{relative_static_folder_path}, 即 a/b/c/d
```
---
## setStaticDir
设置静态文件夹路径，若使用的框架为flask，则为flask应用的静态目录
* 参数:
  * relative_project_dir_path: 该路径是相对于输出项目的相对路径 

* 示例：
  ```
    假设:
        project_dir: E://a/b/project_dir
        relative_project_dir_path: 
    那么:
        real static path is {project_dir}/{relative_project_dir_path}
        url_prefix_local_path: {project_dir}/x
    假设:
        img_local_path: E://a/b/project_dir/x/ff/ss/c.pn    
    那么:
        url: http://localhost:5000/ff/ss/c.png
    ```
---
## setStep
设置全局默认step

* 参数:
  * step: 视频遍历的帧间隔, 越大速度越快, 当取值为'fps'是为视频的帧率
  * speed_x: 对step进行整数倍的加速, 即 最终的step = step * speed_x
--- 

## createCourseDir
创建课程资源对应的目录, 并返回路径
* 参数:
  * course_name: 课程名称
* 返回: 新建的目录路径
---

## createChapterDir
创建章节资源对应的目录, 并返回路径
* 参数: 
  * chapter_name: 章节名称
  * course_name: 章节所属的课程名称
* 返回: 新建的目录路径
---

## loadResource
将处理输出的pickle对象文件, 载入为[vo.ResourceVO](./vo/#resourcevo)的子类对象

* 参数:
  * o_or_path: [vo.ResourceVO], 即调用execute{Chapter | Course | Video}()返回的对象, 或者对象中o_path属性对应的pickle对象路径

* 返回: vo.{[Chapter](./vo/#chaptervo) | [Course](./vo/#coursevo) | [Video](./vo/#videovo) }VO 对象作为结果
---
## releaseResource
释放o_path对应的pickle对象对应的所有存储资源
* 参数:
  * o_or_path: [vo.ResourceVO], 即调用execute{Chapter | Course | Video}()返回的对象, 或者对象中o_path属性对应的pickle对象路径
---

## ~~releaseByOutputDir~~

> 请使用[releaseResource](#releaseresource)方法

释放处理产生的输出文件, 包括： 1. 注释文件 2.视频文件 3.图片文件 4. 课件 @WAIT（或许实时生成比较好，就是get的时候进行获取文件） 

* 参数:
    * output_dir: vo.ResourceVO对象的output_dir属性, 执行execute{Chapter | Course | Video}()方法时, 设置的output_dir

---



