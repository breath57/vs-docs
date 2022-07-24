# 案例[vs-proxy](https://gitee.com/breath57/vs-proxy)的接口文档

::: tip 描述
版本: v0.1.0    
作者: [breath57](https://gitee.com/breath57)  
e-mail: breath57@163.com    
发布日期: 2022-7-14
:::

该文档是[vs-proxy](https://gitee.com/breath57/vs-proxy)项目`HTTP`请求的接口文档。

## 资源相关
### 资源上传  ###
* 请求地址
```http
  POST /v1/resource/upload
```
* 请求参数

属性   |   类型      |      默认值     |      必填    |     说明
-------- |-------------|----------------|-------------|-----------
token|string||是|用户token
type|string||是|上传的资源类型，{“1”："单个视频"， “2”：”章节“，“3”：”课程“}
file|FileObject||否|文件对象， 当type=1时为必填
path|string||否| 本地章节或者课程的根目录， 当type!=1是为必填
step|string or int | fps |否| 帧遍历步长
speed| float | 3 | 否 | 实际的step = step * speed
chapter_id|int ||否| 将视频上传到章节id为chapter_id的章节下
course_id|int||否| 将视频上传到课程id为course_id的 章节id 为 chapter_id的章节下

#### 使用案例
##### 上传视频
* 请求参数

属性   |  取值 
-------- |-------------
token| eyJ0eXAiOiJqd3QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSw
file| 机器学习.mp4 (注意：此处需传入的是字节流构成的视频文件对象)
type|1
step|50
speed|10

* 返回值
```json
{
    "msg": {
        "id": 1,
        "name": "机器学习",
        "type": 1,
        "config": {
            "step": 50.0,
            "speed": 10.0,
            "min_process_box_height": null,
            "min_searcher_box_with_height": null
        },
        "msg": "上传成功"
    },
    "error_code": 0,
    "request": "POST /v1/resource/upload"
}
```

##### 上传章节
* 请求参数

属性   |  取值 
-------- |-------------
token| eyJ0eXAiOiJqd3QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSw
path| F:\Download\BaiduNetDiskDownLoad\101 - OpenCV三大经典项目实战 一次性掌握计算机视觉核心技能\第13章 机器学习
type|2
step|fps
speed|100

* 返回值
```json
{
    "name": "第13章 机器学习",
    "dir": "F:\\Download\\BaiduNetDiskDownLoad\\101 - OpenCV三大经典项目实战 一次性掌握计算机视觉核心技能\\第13章 机器学习",
    "belong_course": null,
    "fail_videos": []
}
```
属性   |     说明
-------- |-----------
belong_course| 章节所属的课程
fail_videos| 章节中上传失败的视频列表

##### 上传课程
* 请求参数

属性   |  取值 
-------- |-------------
token| eyJ0eXAiOiJqd3QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSw
path| F:\Download\BaiduNetDiskDownLoad\101 - OpenCV三大经典项目实战 一次性掌握计算机视觉核心技能\第13章 机器学习
type|3
step|fps
speed|60

* 返回值
```json
{
    "name": "数据分析",
    "dir": "F:\\Download\\BaiduNetDiskDownLoad\\数据分析",
    "fail_chapters": []
}
```
属性   |     说明
-------- |-----------
fail_videos| 课程中上传失败的章节列表


## 配置相关


### 获取配置
* 请求地址
```http
  POST /v1/config/get
```
* 请求参数：无

#### 使用案例
* 请求参数：无

* 返回值
```json
{
    "step": "fps",
    "speed": 3.0
}
```

### 设置配置

* 请求地址
```http
POST /v1/config/set
```

* 请求参数

属性   |   类型      |      默认值     |      必填    |     说明
-------- |-------------|----------------|-------------|-----------
step|string or int | fps |否| 帧遍历步长
speed| float | 3 | 否 | 实际的step = step * speed

#### 使用案例

* 请求参数

属性   |  取值 
-------- |-------------
step|50
speed|10

* 返回值
```json
{
    "msg": {
        "msg": "参数更新成功",
        "config": {
            "step": "90",
            "speed": "50",
            "min_process_box_height": null,
            "min_searcher_box_with_height": null
        }
    },
    "error_code": 0,
    "request": "POST /v1/config/set"
}
```