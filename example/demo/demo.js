$(function (){
	$('.input:text').blur(function() {
		if($(this).val().length==0 && $(this).attr('data-required') ){
			$(this).addClass('input_warning');
			if($(this).parent().next('span.input_tips').length>0){
				$(this).parent().next('span.input_tips').toggle()
			}else{
				$(this).parent().after('<span class="input_tips">必填</span>');
			}
		}else if($(this).val().length!=0){
			$(this).removeClass('input_warning');
			$(this).parent().next('span.input_tips').remove();
		}
	}).keyup(function(){
        $(this).triggerHandler("blur");
    }).focus(function(){
        $(this).triggerHandler("blur");
    }); 
    // 菜单号航
    var menu_li = $('.item_menu li');
    var content = $('.main .item');
    menu_li.first().addClass('active');
    menu_li.each(function (i){
    	$(this).click(function (){
    		$(this).addClass('active').siblings().removeClass('active');
    		$('html,body').stop().animate({scrollTop : content.eq(i).offset().top},600);
    	})
    })

    // 配置

    // 调用sticky插件
    $(".item_menu").stick_in_parent();
    // 调用语法高亮插件
    SyntaxHighlighter.autoloader(
            ['js','jscript','javascript','vender/SHcode/shBrushJScript.js'],
            ['css','vender/SHcode/shBrushCss.js'],
            ['html','vender/SHcode/shBrushXml.js']
        );
    SyntaxHighlighter.defaults['gutter'] = false;
    SyntaxHighlighter.defaults['toolbar'] = false;
    SyntaxHighlighter.all();

    $('.dropbox').dropbox();
    $('#testDropbox').dropbox({
        width: 320,
        maxHeight : 200,
        placeholder : "测试测试"
    });
    $('.multiselect').multiselect();
    $('#testMultiselect').multiselect({
        width: 320,
        maxHeight : 200,
        placeholder : "下拉测试",
        multiNumTips: "(最多选择三个)",
        multiNum : 3
    });
    $('.checkbox').checkbox();

    $('#datepicker').datetimepicker();
    $('#datepicker2').datetimepicker({
        prevButton : true,
        nextButton : true
    });
    $('#datepicker3').datetimepicker({
        prevButton : true,
        nextButton : true,
        timepicker : true,
        format: 'Y年m月d日 H:i'
    });
    

})
