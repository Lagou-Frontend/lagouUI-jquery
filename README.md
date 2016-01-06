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
lagouUI-jquery/<br>
|—— src/<br>
|	 |———— img/<br>
|	 |──── js/<br>
|	 |      ├── ui.baseUtils.js  	基础方法，公共方法<br>
|    |      ├── ui.checkbox.js   	复选框js源文件<br>
|    |      ├── ui.datepicker.js 	日期时间js源文件<br>
|    |      ├── ui.dropbox.js    	下拉框js源文件<br>
|	 |      └── ui.multiSelect.js   多选框js源文件 <br>
|    |<br>
|    |──── less/<br>
|    |      |── mixins/<br>        
|	 |		|      |── btn-icon.less 		带图标按钮Less源文件<br>
|	 |		|      |── caret.less 	    	上/右/下/左箭头Less源文件<br>
|	 |		|      |── clearfix.less 		清楚浮动Less源文件<br>
|	 |		|      |── text-overflow.less 	文本溢出Less源文件<br>
|	 |		|      |── verder-prefixes.less 带有第三方前缀属性Less源文件<br>
|	 |		|      └── mixins.less 	        引入所有方法Less源文件<br>
|	 |		|<br>
|    |      |── modules/<br>
|	 |		|      ├── btn.less 			按钮Less源文件<br>
|	 |		|      ├── checkbox.less 		复选框Less源文件<br>
|	 |		|      ├── datepicker.less 		日期时间选框Less源文件<br>
|	 |		|      ├── dropbox.less 		下拉框Less源文件<br>
|	 |		|      ├── input.less 			输入框Less源文件<br>
|	 |		|      ├── multiselect.less 	多选框Less源文件<br>
|	 |		|      ├── reset.less 			重置样式Less源文件<br>
|	 |		|      ├── textarea.less 		文本域Less源文件<br>
|	 |		|      └── tips.less 			提示框Less源文件<br>
|	 |		|—— lagou.less 					引入方法和模块less文件<br>
|	 |		└—— variables.less 				变量less文件<br>
|	 |<br>
├── gulpfile.js<br>
├── package.json <br>
└── README.md <br>
