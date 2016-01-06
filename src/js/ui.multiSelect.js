;(function ( $) {
	'use strict';
	var Multiselect = function (ele,options){
		this.ele = $(ele);
		this.dataSetting = this.ele.attr('data-setting');
		this._options = options == '' ? {} : options;
		this.options = $.extend({},Multiselect._default, this._options,this.ele.data());
		this.init();
		$(document).off('click',this.toggle).on('click',hide)
					.on('click', '.multiselect,[data-role=multiselect]', this.toggle)
					.on('click','.multiselect .select_menu,[data-role=multiselect] .select_menu',function(e){ e.stopPropagation();})
					.on('click', '.multiselect li,[data-role=multiselect] li', $.proxy(this.getValue , this));
	}
	// 默认配置
	Multiselect._default = {
		width : '',
		height : '',
		minHeight:'',
		bgcolor : "white",
		isOverflow : false,
		multiNum : 2,
		placeholder : '请选择行业领域',
		multiNumTips : '(最多可选择两个)',
		data : ['2K以下','5K以下','10K以下','20K以下','25K以下','40K以下','50K以下'],
		template : '<button class="selectbtn"><span></span><i class="caret"></i></button><div class="select_menu"><em class="multiNumTips"></em><ul></ul></div>'
	};
	Multiselect.prototype = {
		constructor : Multiselect,
		init : function (){
			if(this.dataSetting != null ){
				var _setting = $.parseJSON(this.dataSetting);
				$.extend(this.options, _setting);
			}
			this.ele.css({ width:this.options.width,height:this.options.height});
			this.render();
			this.ele.find('span').text(this.options.placeholder);
			this.ele.find('.multiNumTips').text(this.options.multiNumTips)
			if(this.options.bgcolor == "gray"){
				this.ele.find('.selectbtn').addClass('selectbtn_gray');
			}else{
				this.ele.find('.selectbtn').addClass('selectbtn_white');
			}
			if(this.options.isOverflow){
				this.ele.find('.selectbtn').addClass('text_overflow');
			}
		},
		render : function (){
			this.ele.append(this.options.template);
			this.setValue(this.options.data);
		},
		setValue : function ( arr ){
			var dataContainer = this.ele.find('.select_menu > ul'),
				dataItem = '';
			arr = (arr instanceof Array) ? arr : [];
			for ( var i = 0 ; i< arr.length ; i++ ) {
				dataItem += '<li><input type="checkbox" value="" class="checkbox" data-text='+arr[i]+'></li>';
			}
			dataContainer.html(dataItem);
		},
		toggle : function (e){
			var $this = $(this);
			var isActive = $this.find('.select_menu').is(':visible');
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
		getValue : function (e){
			var self = this,
				$this = $(e.currentTarget),
				$parent = $this.parent(),
				multiNum = self.options.multiNum,
				checkedNum = $parent.find('input:checked').length,
				inputItem = $parent.find('input'),
				selectItem =[];
			if(checkedNum == multiNum ){
				return
			}else if(checkedNum > multiNum){
				$parent.prev('.multiNumTips').css('color','#fd5f39');
				return false;
			}
			$parent.prev('.multiNumTips').css('color','#999');
			inputItem.change(function() {
				inputItem.each(function() {
					if($(this).is(':checked')){
						selectItem.push($(this).data('text'));
					}
				});
				$(this).parents('.select_menu').siblings('.selectbtn').find('span').html(selectItem.join(' '));
			});
			e.stopPropagation();
		}
	}

	function hide (){
		$('.multiselect,[data-role=multiselect]').each(function() {
			$(this).removeClass('open');
			// 解决火狐浏览器:focus不支持到bug
			if(!$.browser.mozilla){
				$(this).find('i.caret').css('transform', 'rotate(0deg)');
			}
		});
	}
	$.fn.multiselect = function (option){
		return this.each(function() {
			var $this = $(this),
				data = $this.data('multiselect'),
				options = typeof option == 'object' && option;
				if(!data) {
					$this.data('multiselect' , (data = new Multiselect(this,options)))
				}
				if(typeof option == 'string'){
					data[option]();
				}
		});
	}
	
})(jQuery)