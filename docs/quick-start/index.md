# 快速使用

## 1. 安装

### `步骤 1` 安装Paddle框架(选择CPU或GPU其一安装即可)
    

#### **CPU版:**
```sh
python3 -m pip install paddlepaddle==2.3.0 -i https://mirror.baidu.com/pypi/simple
```
**GPU版:** (通常需要安装CUDA等显卡适配软件)


具体的安装方式，由于不同环境(Mac、Linux)的安装方式不同, 可[点击查看具体安装方式](https://www.paddlepaddle.org.cn/)

### `步骤 2` 安装vsearcher库
```sh
pip install vsearcher==0.2.16
```
## 2. 基本使用案例
```python
from vsearcher import VSearcher

def case1_base_use():
    """ 处理视频获取课件，并检索视频 """
    # 视频处理, 并返回处理结果对象
    executed_video = VSearcher.executeVideo(video_file_path='./test.mp4') 
     # 获取生成的课件本地路径
    print(f'courseware_path: {executed_video.cw_local}')  
    # 搜索，并返回搜索结果对象
    search_result = executed_video.search(key="学习")  
    # 查看搜索结果(考虑到通用性，.json()方法默认编码为utf-8，此处为了方便中文显示, 转码为unicode-escape)
    print(search_result.json().encode('utf-8').decode('unicode-escape')) 

if __name__ == '__main__':
    case1_base_use()

```
::: tip
更多高级用法请参照[VSeacher API](/api/)
:::

## 3. 问题

### 3.1 在linux环境下出现cv2相关的异常问题

`解决方案 1`： 安装如下包
```sh
pip install opencv-contrib-python
pip install opencv-python-headless
pip install openpyxl
```

若执行`方案1`之后还有报错，则执行如下命令即可
```sh
pip uninstall opencv-contrib-python
pip uninstall opencv-python-headless
pip uninstall openpyxl

pip install opencv-contrib-python
pip install opencv-python-headless
pip install openpyxl
```


### 3.2 在Linux下出现如下异常信息
```sh
_message.Message._CheckCalledFromGeneratedFile()
TypeError: Descriptors cannot not be created directly.
If this call came from a _pb2.py file, your generated code is out of date and must be regenerated with protoc >= 3.19.0.
If you cannot immediately regenerate your protos, some other possible workarounds are:
 1. Downgrade the protobuf package to 3.20.x or lower.
 2. Set PROTOCOL_BUFFERS_PYTHON_IMPLEMENTATION=python (but this will use pure-Python parsing and will be much slower).
```
解决
```sh
pip3 install protobuf==3.20
```