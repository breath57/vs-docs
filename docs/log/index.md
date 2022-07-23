# 更新日志


## 最新更新
1. [vo.VideoVO](../vo/#videovo)、[vo.ChapterVO](../vo/#chaptervo)、[vo.CourseVO](../vo/#coursevo)增加search、json和release方法，使用检索方法和释放资源更佳的简洁
   
`更新前的使用方式`
```python
from vsearcher import VSearcher
executed_video = VSearcher.executeVideo(video_file_path='./test.mp4')  # 对视频进行处理, 并返回处理结果
search_result = VSearcher.search(executed_video, key="学习") # 搜索并返回结果
VSearcher.releaseByOutputDir(video.output_dir) # 释放资源
# 无法直接print查看search_result 和 executed_video
```

`更新后的使用方式（简洁、见名知意)`
```python
from vsearcher import VSearcher
executed_video = VSearcher.executeVideo(video_file_path='./test.mp4' )  # 对视频进行处理, 并返回处理结果
search_result = executed_video.search(key= "学习")  # 返回搜索结果
executed_video.release()  # 释放资源

# 可进行json序列化，默认编码为utf8
print(executed_video.json())
print(search_result.json())
```
2. [vo.VideoVO](../vo/#videovo) 新增 cw_local 属性， 即课件的本地地址

3. [VSearcher.executeChapter()](../api/#executechapter) and [VSearcher.executeCourse()](../api/#executecourse) 新增name参数，可以自定义输出的文件名
