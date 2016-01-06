;(function ($) {
	'use strict';
	var Checkbox = function (ele,option){
		this.ele = $(ele);
		this.option = option;
		this.dataSetting = this.ele.attr('data-dataSetting');
		this._default = {
            data:[],
            item:{
                value:'',
                text:''
            }, 
            template : '<div class="box_checkbox"><input type="checkbox" value="{{item.value}}" class="checkbox" id="{{data-id}}" data-text="{{item.text}}" ><label for="{{data-id}}" ></label></div>'
        };
        this.option = this.option == '' ? {} : this.option;
        $.extend(this._default, this.option);
        this.init();
	};
	Checkbox.prototype = {
		constructor : Checkbox,
		init : function (){
			if(this.dataSetting != null){
				var _setting = $.parseJSON(this.dataSetting);
				$.extend(this._default, _setting);
			}
			this.render();
		},
		render: function(){
			var that = this,
				id = lg.Utils.getRandom();
			this.ele.each(function() {
				var $this = $(this),
				    _text = $this.attr('data-text'),
				    _value = $this.val(),
				    _template = $(that._default.template);
				if($this.hasClass('screenbox')){
					_template.find('.checkbox').addClass('screenbox');
				}
				_template.find('input').attr('id',id);
            	_template.find('label').attr('for',id);
            	_template.find('input').attr({'data-text': _text,'value': _value}).siblings('label').text(_text);
            	_template.appendTo($this.parent());
			});
			this.ele.remove();	
		},
		setValue: function(str){
			this.ele.attr('data-text', str);
		},
		getValue: function(e){
			var self = this,
			    _template = $(self._default.template);
			return _template.find('input').val();
			e.stopPropagation();
		}
	};
	window['Checkbox'] = Checkbox;
	$.fn.checkbox = function (options){
		return this.each(function() {
			new Checkbox(this,options)
		});
	};
})(jQuery)