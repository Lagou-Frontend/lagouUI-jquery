# lagouUI-jquery
lagouUI base styles and simple components base on jQuery

示例：请点击[示例文档](http://lagou-frontend.github.io/lagouUI-jquery/example/)(源文件在<code> gh-pages </code> 分支下)


###使用方式：

1.   clone 或 download 一份源文件<br>
2.   执行 npm install 安装gulp 依赖<br>
3.   执行 gulp 生成dist/ <br>
4.   执行 gulp watch 实施监听代码更改<br>

###源文档结构如下
``` 
├── img                     组件所用图标
│   ├── arrow-icon.png
│   ├── checkbox.png
│   ├── icon-download.png
│   ├── info.png
│   └── tips-close.png
├── js                      js文件
│   ├── ui.baseUtils.js         基础方法、工具方法--------必需引用
│   ├── ui.checkbox.js          复选框js源文件
│   ├── ui.datepicker.js        日期时间选框js源文件
│   ├── ui.dropbox.js           下拉框js源文件
│   └── ui.multiSelect.js       多选下拉框js源文件
└── less                    LESS源文件
    ├── lagou.less              所有方法，组件less元源文件集合
    ├── mixins                  less方法---------------------必需引用
    │   ├── btn-icon.less           带图标按钮less 
    │   ├── caret.less              上/下/左/右箭头 less方法
    │   ├── clearfix.less           清楚浮动less方法
    │   ├── mixins.less             所有方法集合less
    │   ├── text-overflow.less      文本溢出/截断less方法
    │   └── vender-prefixes.less    带有第三方前缀的less
    ├── modules                 基础组件
    │   ├── btn.less                按钮
    │   ├── checkbox.less           下拉框
    │   ├── datepicker.less         日期时间
    │   ├── dropbox.less            下拉框
    │   ├── input.less              输入框
    │   ├── multiselect.less        下拉多选
    │   └── reset.less              重置样式---------必需引用
    └── variables.less          变量文件    
``` 
###文档说明：
	除必需引用外都可以按需引用