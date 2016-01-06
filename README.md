# lagouUI-jquery
lagouUI base styles and simple components base on jQuery

示例：请点击<a href="http://lagou-frontend.github.io/lagouUI-jquery/example/">示例文档 </a>

使用方式：
<br>
1、clone 或 download 一份源文件<br>
2、执行 npm install 安装gulp 依赖<br>
3、执行 gulp 生成dist/ <br>
4、执行 gulp watch 实施监听代码更改<br>
<br>
<br>
<br>
源文档结构如下
``` 
├── README.md
├── example
│   ├── README.md
│   ├── demo
│   │   ├── demo.css
│   │   ├── demo.js
│   │   └── img
│   │       └── logo.png
│   ├── dist
│   │   ├── css
│   │   │   ├── lagou.css
│   │   │   ├── lagou.css.map
│   │   │   ├── lagou.css.min.map
│   │   │   └── lagou.min.css
│   │   ├── img
│   │   │   ├── arrow-icon.png
│   │   │   ├── checkbox.png
│   │   │   ├── icon-download.png
│   │   │   ├── info.png
│   │   │   └── tips-close.png
│   │   └── js
│   │       ├── ui.js
│   │       └── ui.min.js
│   ├── index.html
│   └── vender
│       ├── SHcode
│       │   ├── shAutoloader.js
│       │   ├── shBrushCss.js
│       │   ├── shBrushJScript.js
│       │   ├── shBrushXml.js
│       │   ├── shCore.js
│       │   └── shCoreDefault.css
│       ├── h5shiv.min.js
│       ├── jquery
│       │   └── jquery.min.js
│       ├── modernizr.js
│       └── sticky.js
├── gulpfile.js
├── package.json
└── src
    ├── img
    │   ├── arrow-icon.png
    │   ├── checkbox.png
    │   ├── icon-download.png
    │   ├── info.png
    │   └── tips-close.png
    ├── js
    │   ├── ui.baseUtils.js
    │   ├── ui.checkbox.js
    │   ├── ui.datepicker.js
    │   ├── ui.dropbox.js
    │   └── ui.multiSelect.js
    └── less
        ├── lagou.less
        ├── mixins
        │   ├── btn-icon.less
        │   ├── caret.less
        │   ├── clearfix.less
        │   ├── mixins.less
        │   ├── text-overflow.less
        │   └── vender-prefixes.less
        ├── modules
        │   ├── btn.less
        │   ├── checkbox.less
        │   ├── datepicker.less
        │   ├── dropbox.less
        │   ├── input.less
        │   ├── multiselect.less
        │   └── reset.less
        └── variables.less
``` 
