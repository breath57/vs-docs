---
level: 3
---
# 案例[vs-api](https://gitee.com/breath57/vs-api)的接口文档


::: tip 描述
版本: v0.1.0    
作者: [breath57](https://gitee.com/breath57)  
e-mail: breath57@163.com    
发布日期: 2022-6-27
:::

该文档是[vs-api](https://gitee.com/breath57/vs-api)项目`HTTP`请求的接口文档。

## 使用步骤
> 场景描述：[注册](#注册)一个新用户(账号：breath57, 密码：123456)
* 步骤
  1. 准备`url前缀`：`http://localhost:5000`
  2. 查看文档可知，请求地址为：`POST /v1/user/register`
  3. 拼接`完整url`：
  4. 准备请求参数
        ```json
        {
            "account": "breath57",
            "password": "123456"
        }
        ```
  5. 对`http://localhost:5000/v1/user/register`发起HTTP的`POST`请求

## User 用户部分 ##
### 注册 ###
* 请求地址
```http
  POST /v1/user/register
```
* 请求参数

属性   |   类型      |      默认值     |      必填    |     说明
-------- |-------------|----------------|-------------|-----------
account|string||是|账号
password|string||是|密码
nickname|string|新用户|否|昵称
email|string||否|邮箱

#### 使用案例

* 请求参数

属性|取值
----|---
account|breath57
password|123456

* 返回值

```json
{
    "token": "eyJ0eXAiOiJqd3QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6Miwibmlja25hbWUiOiJcdTY1YjBcdTc1MjhcdTYyMzciLCJhY2NvdW50IjoiYnJlYXRoNTciLCJwYXNzd29yZCI6IjEyMzQ1NiIsInNjb3BlIjo4LCJleHAiOjIyNjQwMzQyNTh9.cImxRFDCk7WHE98vGY4D8JGqu7-jMB7WodQJf985RlQ",
    "msg": "新用户(account: breath57)注册！"
}
```
属性   |     说明
-------- |-----------
token| 发起其它资源请求的令牌
msg| 提示信息

### 获取Token ###
* 请求地址
```http
  POST /v1/token/get
```
* 请求参数

属性   |   类型      |      默认值     |      必填    |     说明
-------- |-------------|----------------|-------------|-----------
account|string||是|账号
password|string||是|密码

#### 使用案例
* 请求参数

属性|取值
---|---
account|breath57
password|123456

**返回值**
```json
{
    "token": "eyJ0eXAiOiJqd3QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6Miwibmlja25hbWUiOiJcdTY1YjBcdTc1MjhcdTYyMzciLCJhY2NvdW50IjoiYnJlYXRoNTciLCJwYXNzd29yZCI6IjEyMzQ1NiIsInNjb3BlIjo4LCJleHAiOjIyNjQwMzQ3NzB9.1HfvG-xp1rTk6YdmshU7-UAtl16T5e3oYRQVZ3DuvSU",
    "msg": "新用户(account: breath57)的token获取成功！"
}
```
属性   |     说明
-------- |-----------
token| 发起其它资源请求的令牌
msg| 提示信息


## Resource 资源部分 ##

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

### 单记录获取  ###
* 请求地址
```
  POST /v1/resource/get
```
* 请求参数

属性   |   类型      |      默认值     |      必填    |     说明
-------- |-------------|----------------|-------------|-----------
token|string||是|用户token
type|string||是|资源类型，{“1”："单个视频"， “2”：”章节“，“3”：”课程“}
id|int||是|资源id
#### 使用案例
##### 根据id获取视频
* 请求参数

属性   |  取值 
-------- |-------------
token| eyJ0eXAiOiJqd3QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSw
type|1
id |1

* 返回值
```json
{
    "id": 1,
    "name": "机器学习",
    "url": "http://localhost:5000/static/vsearch-output/videos/%E6%9C%BA%E5%99%A8%E5%AD%A6%E4%B9%A0/%E6%9C%BA%E5%99%A8%E5%AD%A6%E4%B9%A0.mp4",
    "img": "http://localhost:5000/static/vsearch-output/videos/%E6%9C%BA%E5%99%A8%E5%AD%A6%E4%B9%A0/0%23500.png",
    "chapter_id": null,
    "kfs": [
        {
            "id": 500,
            "name": "0#500",
            "img": "http://localhost:5000/static/vsearch-output/videos/%E6%9C%BA%E5%99%A8%E5%AD%A6%E4%B9%A0/0%23500.png",
            "ms": 20000.0,
            "time": "00:00:20"
        },
 		 ....
        {
            "id": 13500,
            "name": "0#13500",
            "img": "http://localhost:5000/static/vsearch-output/videos/%E6%9C%BA%E5%99%A8%E5%AD%A6%E4%B9%A0/0%2313500.png",
            "ms": 540000.0,
            "time": "00:09:00"
        }
    ],
    "cw": "http://localhost:5000/static/vsearch-output/videos/%E6%9C%BA%E5%99%A8%E5%AD%A6%E4%B9%A0/%E6%9C%BA%E5%99%A8%E5%AD%A6%E4%B9%A0.pdf",
    "create_time": [
        "2022-07-24",
        "10:37:25.177926"
    ]
}
```
属性   | 描述
-------- |-------------
url|视频的url地址
kfs| 关键帧列表
kfs.ms| 关键帧视频中出现的时间
path| F:\Download\BaiduNetDiskDownLoad\101 - OpenCV三大经典项目实战 一次性掌握计算机视觉核心技能\第13章 机器学习
cw|生成的pdf课件的url地址

##### 根据id获取章节
**请参数**

属性   |  取值 
-------- |-------------
token| eyJ0eXAiOiJqd3QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSw
type|2
id |1

* 返回值
```json
{
    "id": 1,
    "name": "第13章 机器学习",
    "img": null,
    "course_id": null,
    "videos": [
        {
            "id": 2,
            "name": "13-1",
            "img": "http://localhost:5000/static/vsearch-output/chapters/%E7%AC%AC13%E7%AB%A0%20%E6%9C%BA%E5%99%A8%E5%AD%A6%E4%B9%A0/13-1/0%232500.png",
            "create_time": [
                "2022-07-24",
                "10:52:59.650885"
            ]
        },
  		...
        {
            "id": 6,
            "name": "13-5",
            "img": "http://localhost:5000/static/vsearch-output/chapters/%E7%AC%AC13%E7%AB%A0%20%E6%9C%BA%E5%99%A8%E5%AD%A6%E4%B9%A0/13-5/0%232500.png",
            "create_time": [
                "2022-07-24",
                "10:53:39.537382"
            ]
        }
    ],
    "create_time": [
        "2022-07-24",
        "10:52:51.410117"
    ]
}
```
属性   | 描述
-------- |-------------
videos|章节下的所有视频
videos[0].img| 视频的封面

##### 根据id获取课程
* 请求参数

属性   |  取值 
-------- |-------------
token| eyJ0eXAiOiJqd3QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSw
type|3
id |1

* 返回值
```json
{
    "id": 1,
    "name": "数据分析",
    "img": null,
    "chapters": [
        {
            "id": 2,
            "name": "第3章 单因子探索分析与可视化",
            "img": null,
            "course_id": 1,
            "create_time": [
                "2022-07-24",
                "10:55:49.223517"
            ]
        },
        {
            "id": 3,
            "name": "第4章 多因子探索分析",
            "img": null,
            "course_id": 1,
            "create_time": [
                "2022-07-24",
                "10:55:55.767599"
            ]
        }
    ],
    "create_time": [
        "2022-07-24",
        "10:55:49.169553"
    ]
}
```
属性   | 描述
-------- |-------------
chapters|课程下的所有章节


### 多记录获取  ###
* 请求地址
```http
  POST /v1/resource/gets/pure
```
* 请求参数

属性   |   类型      |      默认值     |      必填    |     说明
-------- |-------------|----------------|-------------|-----------
token|string||是|用户token
type|string||是|资源类型，{“1”："单个视频"， “2”：”章节“，“3”：”课程“}
offset|int|0|否|偏移量，也就是从第offset条记录开始向后取limit条记录
limit|int|20|否|取的记录条数

#### 使用案例
##### 获取某个用户下的所属视频
* 请求参数

属性   |  取值 
-------- |-------------
token| eyJ0eXAiOiJqd3QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSw
type|1

* 返回值
```json
{
    "videos": [
        {
            "id": 1,
            "name": "机器学习",
            "img": "http://localhost:5000/static/vsearch-output/videos/%E6%9C%BA%E5%99%A8%E5%AD%A6%E4%B9%A0/0%23500.png",
            "create_time": [
                "2022-07-24",
                "10:37:25.177926"
            ]
        },
        {
            "id": 7,
            "name": "test6",
            "img": "http://localhost:5000/static/vsearch-output/videos/test6/0%231200.png",
            "create_time": [
                "2022-07-24",
                "10:54:53.412755"
            ]
        }
    ],
    "pager": {
        "offset": 0,
        "limit": 20
    }
}
```
属性   | 描述
-------- |-------------
pager|使用的分页参数
videos| 视频列表


##### 获取某个用户下的所属章节
* 请求参数

属性   |  取值 
-------- |-------------
token| eyJ0eXAiOiJqd3QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSw
type|2

* 返回值
```json
{
    "chapters": [
        {
            "id": 1,
            "name": "第13章 机器学习",
            "img": null,
            "course_id": null,
            "create_time": [
                "2022-07-24",
                "10:52:51.410117"
            ]
        }
    ],
    "pager": {
        "offset": 0,
        "limit": 20
    }
}
```
属性   | 描述
-------- |-------------
pager|使用的分页参数
chapters| 章节列表


##### 获取某个用户下的所属课程
* 请求参数

属性   |  取值 
-------- |-------------
token| eyJ0eXAiOiJqd3QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSw
type|3

* 返回值
```json
{
    "courses": [
        {
            "id": 1,
            "name": "数据分析",
            "img": null,
            "create_time": [
                "2022-07-24",
                "10:55:49.169553"
            ]
        }
    ],
    "pager": {
        "offset": 0,
        "limit": 20
    }
}
```
属性   | 描述
-------- |-------------
pager|使用的分页参数
courses| 课程列表



### 资源搜索  ###
* 请求地址
```http
  POST /v1/resource/search
```
* 请求参数

属性   |   类型      |      默认值     |      必填    |     说明
-------- |-------------|----------------|-------------|-----------
token|string||是|用户token
id | int ||是|资源id
type|string||是|资源类型，{“1”："单个视频"， “2”：”章节“，“3”：”课程“}
key|string||是|搜索关键词

#### 使用案例
##### 搜索某个视频的视频内容
* 请求参数

属性   |  取值 
-------- |-------------
token| eyJ0eXAiOiJqd3QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSw
type|1
id|1
key|机器学习

* 返回值
```json
{
    "id": 1,
    "name": "机器学习",
    "kfs": [
        {
            "id": 500,
            "name": "0#500",
            "img": "http://localhost:5000/static/vsearch-output/search-result/1658633292/54643800_.png",
            "ms": 20000.0,
            "time": "00:00:20"
        },
        {
            "id": 13000,
            "name": "0#13000",
            "img": "http://localhost:5000/static/vsearch-output/search-result/1658633292/76762000_.png",
            "ms": 520000.0,
            "time": "00:08:40"
        },
        {
            "id": 13500,
            "name": "0#13500",
            "img": "http://localhost:5000/static/vsearch-output/search-result/1658633292/98071300_.png",
            "ms": 540000.0,
            "time": "00:09:00"
        }
    ],
    "url": "http://localhost:5000/static/vsearch-output/videos/%E6%9C%BA%E5%99%A8%E5%AD%A6%E4%B9%A0/%E6%9C%BA%E5%99%A8%E5%AD%A6%E4%B9%A0.mp4"
}
```
属性   | 描述
-------- |-------------
kfs|搜索到的关键帧列表


##### 搜索章节下的所有视频内容
* 请求参数

属性   |  取值 
-------- |-------------
token| eyJ0eXAiOiJqd3QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSw
type|2
id|1
key|学习

* 返回值
```json
{
    "id": 1,
    "name": "第13章 机器学习",
    "videos": [
        {
            "id": 2,
            "name": "13-1",
            "kfs": [
                {
                    "id": 2500,
                    "name": "0#2500",
                    "img": "http://localhost:5000/static/vsearch-output/search-result/1658633398/29102600_.png",
                    "ms": 100000.0,
                    "time": "00:01:40"
                }
            ],
            "url": "http://localhost:5000/static/vsearch-output/chapters/%E7%AC%AC13%E7%AB%A0%20%E6%9C%BA%E5%99%A8%E5%AD%A6%E4%B9%A0/13-1/13-1.mp4"
        },
        {
            "id": 5,
            "name": "13-4",
            "kfs": [
                {
                    "id": 0,
                    "name": "0#0",
                    "img": "http://localhost:5000/static/vsearch-output/search-result/1658633398/71443400_.png",
                    "ms": 0.0,
                    "time": "00:00:00"
                },
                {
                    "id": 25000,
                    "name": "0#25000",
                    "img": "http://localhost:5000/static/vsearch-output/search-result/1658633398/72926900_.png",
                    "ms": 1000000.0,
                    "time": "00:16:40"
                }
            ],
            "url": "http://localhost:5000/static/vsearch-output/chapters/%E7%AC%AC13%E7%AB%A0%20%E6%9C%BA%E5%99%A8%E5%AD%A6%E4%B9%A0/13-4/13-4.mp4"
        }
    ]
}
```
属性   | 描述
-------- |-------------
videos| 搜索到的视频列表
videos[0].kfs| 搜索到的视频关键帧列表

##### 搜索课程下的所有视频内容
* 请求参数

属性   |  取值 
-------- |-------------
token| eyJ0eXAiOiJqd3QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSw
type|3
id|1
key|分析

* 返回值
```json
{
    "id": 1,
    "name": "数据分析",
    "chapters": [
        {
            "id": 2,
            "name": "第3章 单因子探索分析与可视化",
            "videos": [
                {
                    "id": 8,
                    "name": "3-01 数据使用案例介绍",
                    "kfs": [
                        {
                            "id": 0,
                            "name": "0#0",
                            "img": "http://localhost:5000/static/vsearch-output/search-result/1658633574/93821200_.png",
                            "ms": 0.0,
                            "time": "00:00:00"
                        }
                    ],
                    "url": "http://localhost:5000/static/vsearch-output/courses/%E6%95%B0%E6%8D%AE%E5%88%86%E6%9E%90/3-01%20%E6%95%B0%E6%8D%AE%E6%A1%88%E4%BE%8B%E4%BB%8B%E7%BB%8D/3-01%20%E6%95%B0%E6%8D%AE%E6%A1%88%E4%BE%8B%E4%BB%8B%E7%BB%8D.mp4"
                }
            ]
        },
        {
            "id": 3,
            "name": "第4章 多因子探索分析",
            "videos": [
                {
                    "id": 10,
                    "name": "4-01 假设检验",
                    "kfs": [
                        {
                            "id": 0,
                            "name": "0#0",
                            "img": "http://localhost:5000/static/vsearch-output/search-result/1658633574/39821800_.png",
                            "ms": 0.0,
                            "time": "00:00:00"
                        }
                    ],
                    "url": "http://localhost:5000/static/vsearch-output/courses/%E6%95%B0%E6%8D%AE%E5%88%86%E6%9E%90/4-01%20%E5%81%87%E8%AE%BE%E6%A3%80%E9%AA%8C/4-01%20%E5%81%87%E8%AE%BE%E6%A3%80%E9%AA%8C.mp4"
                }
            ]
        }
    ]
}
```
属性   | 描述
-------- |-------------
chapters| 搜索到的章节列表
chapters[0].videos| 搜索到的视频列表
chapters[0].videos[0].kfs| 搜索到的视频关键帧列表


### 资源删除  ###
* 请求地址
```http
  POST /v1/resource/del
```
* 请求参数

属性   |   类型      |      默认值     |      必填    |     说明
-------- |-------------|----------------|-------------|-----------
token|string||是|用户token
type|string||是|资源类型，{“1”："单个视频"， “2”：”章节“，“3”：”课程“}
id | int ||是|需要删除资源的id

#### 使用案例
##### 根据id删除视频
* 请求参数

属性   |  取值 
-------- |-------------
token| eyJ0eXAiOiJqd3QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSw
type|1
id | 1

* 返回值
```json
{
    "msg": {
        "id": 1,
        "name": "机器学习",
        "type": 1,
        "msg": "资源删除成功!"
    },
    "error_code": 0,
    "request": "POST /v1/resource/del"
}
```
##### 根据id删除章节
* 请求参数

属性   |  取值 
-------- |-------------
token| eyJ0eXAiOiJqd3QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSw
type|2
id | 1

* 返回值
```json
{
    "msg": {
        "id": 1,
        "name": "第13章 机器学习",
        "type": 2,
        "msg": "资源删除成功!"
    },
    "error_code": 0,
    "request": "POST /v1/resource/del"
}
```
##### 根据id删除课程
* 请求参数

属性   |  取值 
-------- |-------------
token| eyJ0eXAiOiJqd3QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSw
type|3
id | 1

* 返回值
```json
{
    "msg": {
        "id": 1,
        "name": "数据分析",
        "type": 3,
        "msg": "资源删除成功!"
    },
    "error_code": 0,
    "request": "POST /v1/resource/del"
}
```



