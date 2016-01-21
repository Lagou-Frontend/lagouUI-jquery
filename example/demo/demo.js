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
})