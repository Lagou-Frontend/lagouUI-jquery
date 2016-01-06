;(function ($) {
	'use strict';
	// 第一步：创建一个匿名函数
	var Dropbox = function (ele,options){
		this.ele = $(ele);
		this.dataSetting = this.ele.attr('data-setting'); // 获取自定义设置data-*
		this._options = options == '' ? {} : options;
		this.options = $.extend({},Dropbox._default, this._options,this.ele.data());
		// 第四步 : 初始化配置
		this.init();
		// 第五步：事件委托
		$(document).off('click',this.toggle).on('click',hide)
				   .on('click', '.dropbox,[data-role=dropbox]', this.toggle)
			       .on('click', '.dropbox li,[data-role=dropbox] li', this.getValue);
	};
	// 默认配置
	Dropbox._default = {
		width : '',
		height : '',
		maxHeight:'',
		bgcolor : "white",
		isOverflow : false,
		placeholder: '请选择',
		data : ['2K以下','5K以下','10K以下','20K以下','25K以下','40K以下','50K以下'],
		template : '<button class="dropbtn"><span></span><i class="caret"></i></button><ul class="drop_menu"></ul>'
	};
	// 第二步：给创建的匿名函数的原型添加方法
	Dropbox.prototype = {
		constructor: Dropbox,
		// 初始化配置
		init: function(){
			if(this.dataSetting != null ){
				var _setting = $.parseJSON(this.dataSetting);
				$.extend(this.options, _setting);
			}
			this.ele.css({ width:this.options.width,height:this.options.height});
			this.render();
			this.ele.find('.drop_menu').css({maxHeight: this.options.maxHeight}); 
			this.ele.find('span').text(this.options.placeholder);
			if(this.options.bgcolor == "gray"){
				this.ele.find('.dropbtn').addClass('dropbtn_gray');
			}else{
				this.ele.find('.dropbtn').addClass('dropbtn_white');
			}
			if(this.options.isOverflow){
				this.ele.find('.dropbtn').addClass('text_overflow');
			}
		},
		// 渲染页面
		render: function() {
			this.ele.append(this.options.template);
			this.setValue(this.options.data);
		},
		// 添加数据
		setValue: function (arr){
			var dataContainer = this.ele.find('.drop_menu'),
				dataItem = '';
			arr = (arr instanceof Array) ? arr : [];
			for ( var i = 0 ; i< arr.length ; i++ ) {
				dataItem += '<li>'+arr[i]+'</li>';
			}
			dataContainer.html(dataItem);
		},
		// 切换
		toggle: function (e){
			var $this = $(this);
			var isActive = $this.find('.drop_menu').is(':visible');
			if(isActive){
				// 解决火狐浏览器:focus不支持到bug
				if(!$.browser.mozilla){
					$this.find('i.caret').css('transform', 'rotate(0deg)');
				}
				$this.removeClass('open');
			}else{
				hide();
				$this.addClass('open');
				// 解决火狐浏览器:focus不支持到bug
				if(!$.browser.mozilla){
					$this.find('i.caret').css('transform', 'rotate(180deg)');
				}
			}
			e.stopPropagation();
		},
		// 获取数据
		getValue:function (e){
			var $this = $(this);
			$this.parent().prev('.dropbtn').find('span').text($this.text());
			$this.addClass('hover').siblings('li').removeClass('hover');
			$this.parent().parent().removeClass('open');
			// 解决火狐浏览器:focus不支持到bug
			if(!$.browser.mozilla){
				$this.parent().parent().find('i.caret').css('transform', 'rotate(0deg)');
			}
			e.stopPropagation();
		},
		// 解除所有事件监听，删除所有组件节点
		destroy:function (){
			this.ele.remove(this.options.template);
			$(document).off('click',this.toggle,this.getValue).removeData('dropbox');
		}
	};
	function hide (){
		$('.dropbox,[data-role=dropbox]').each(function() {
			$(this).removeClass('open');
			// 解决火狐浏览器:focus不支持到bug
			if(!$.browser.mozilla){
				$(this).find('i.caret').css('transform', 'rotate(0deg)');
			}
		});
	}
	$.fn.dropbox = function (option){
		return this.each(function() {
			var $this = $(this),
				data = $this.data('dropbox'),
				options = typeof option == 'object' && option;
				if(!data) {
					$this.data('dropbox' , (data = new Dropbox(this,options)))
				}
				if(typeof option == 'string'){
					data[option]();
				}
		});
	}

})(jQuery)