# 搭建API服务

该服务是基于[vsearcher](https://gitee.com/breath57/vsearch)库，使用`flask`将其进一步扩展为可提供API服务的应用。

这里提供三种搭建的方式，按照个人需求进行选择。
::: tip
完整的`HTTP`的API接口请求文档，[点击查看](../demo/vs-api/)
:::
## 方式1：常规搭建
1. 安装`python`环境(version: 3.8+)
2. 拉取仓库
```sh
git clone https://gitee.com/breath57/vs-api vs-api
```
::: tip
1. 我们以 vs-api 作为工程名，当然您也可以以任意您喜爱的名字作为工程名。<br>
2. 如果您想以某个版本，如0.0.1版，作为起始项目，那么请在 github 上的版本页下载相应的版本即可。
:::
3. 进入工程目录
```sh
cd vs-api
```
4. 安装项目依赖
```sh
pip install -r ./requirements.txt
```
5. 启动工程
```sh
flask run -h 0.0.0.0 -p 5000
```
::: tip
`-h`指定ip地址，`-p`指定访问的端口号
:::
6. 即可访问API服务，例如：`http://127.0.0.1:5000/v1/video/get`

> 完整的`HTTP`的API接口请求文档，[点击查看](../demo/vs-api/)

## 方式2：Docker搭建

::: tip 运行的前置条件
* 主机有可用的docker环境
* 主机可以正常访问外网拉取镜像
:::
1. 拉取镜像     
```sh
docker pull breath57/vs-api-flask
```
2. 创建容器并运行
```sh
docker run  -itd -p 3306:3306/tcp -p 33060:33060/tcp -p 5000:5000/tcp  breath57/vs-api-flask
```
3. 通过`http://localhost:5000`访问服务

> 完整的`HTTP`的API接口请求文档，[点击查看](../demo/vs-api/)

## 方式3：vs-api.exe程序搭建
该程序是使用`pyinstaller`进行打包的flask应用。
::: warning 提示
[方式3](#方式3-exe程序搭建)只指支持`window7+`操作系统中使用
:::
1. 下载`vs-api.exe`程序文件  
[点击下载 vs-api.exe](https://pan.baidu.com/s/1GobdGqOsFGKm1t0AwrGD5Q?pwd=0q0v)
2. 双击`exe文件`运行
3. 通过`http://localhost:5000`访问

::: tip
当然，这里提供的`vs-api.exe`，端口号是`5000`，IP地址为`127.0.0.1`，若需要应对不同的需求，需要`配合nginx`进行端口转发。或者，使用[方式4](#方式4-改配置文件-打包)进行搭建API服务。
:::

> 完整的`HTTP`的API接口请求文档，[点击查看](../demo/vs-api/)


## 方式4：改配置文件+打包
1. 拉取仓库
```sh
git clone https://gitee.com/breath57/vs-api vs-api
```
::: tip
1. 我们以 vs-api 作为工程名，当然您也可以以任意您喜爱的名字作为工程名。   
2. 如果您想以某个版本，如0.0.1版，作为起始项目，那么请在 github 上的版本页下载相应的版本即可。
:::
3. 进入工程目录
```sh
cd vs-api
```
4. 安装项目依赖
```sh
pip install -r ./requirements.txt
```
5. 修改`app/config/secure.py`文件内容
```py
HOST = '0.0.0.0' # IP地址
PORT = 5001 # 运行后端口号
```
::: tip
`HOST`、`PORT`可以修改成自己实际项目使用的。   
:::
1. 在项目的根目录下运行
```sh
pyinstaller vs-proxy.py -F --add-data  "app/models/db/vsearcher.db;./app/models/db" --nowindowed
```
::: tip
若提示未安装pyinstaller     
则应运行`pip install pyinstaller`进行安装
:::
7. 将得到的`dist/vs-proxy.exe`，双击运行。
8. 通过http://`HOST`:`PORT`访问

> 完整的`HTTP`的API接口请求文档，[点击查看](../demo/vs-api/)