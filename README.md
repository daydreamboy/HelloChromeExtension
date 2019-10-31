# Chrome Extension开发
[TOC]



## 1、Extension介绍

​        Chrome extensions（Chrome扩展）是Chrome浏览器上扩展程序，一般以一个按钮的形式显示在浏览器上工具栏上，在`More Tools > Extensions`可以看到所有已安装的扩展程序。



## 2、一个简单的Extension开发[^1]



### （1）开发三个文件



Extension开发，需要三个文件

* manifest.json文件，是扩展程序的清单，相当于是配置文件
* html文件，是扩展程序的内容承载。例如扩展按钮点击弹出的弹出框内容
* png图标文件，是扩展按钮的图标，用于显示在浏览器上。官方tutorial给的图标大小是16px X 16px。

以上三个文件的组织结构，是平级的，如下

```shell
$ tree .
.
├── hello.html
├── hello_extensions.png
└── manifest.json
```



以HelloWorld扩展程序为例，如下



manifest.json

```json
{
  "name": "Hello Extensions",
  "description": "Base Level Extension",
  "version": "1.0",
  "manifest_version": 2,
  "browser_action": {
    "default_popup": "hello.html",
    "default_icon": "hello_extensions.png"
  },
  "commands": {
    "_execute_browser_action": {
      "suggested_key": {
        "default": "Ctrl+Shift+F",
        "mac": "MacCtrl+Shift+F"
      },
      "description": "Opens hello.html"
    }
  }
}
```



hello.html

```html
<html>
  <body>
    <h1>Hello Extensions</h1>
  </body>
</html>
```



### （2）安装Extension

安装Extension，三个步骤，如下

* 浏览器打开`chrome://extensions`
* 勾选Developer Mode按钮
* 点击Load Unpacked Extension，选择Extension目录

完成后，浏览器工具栏会多出这个Extension按钮







## References

[^1]:https://developer.chrome.com/extensions



