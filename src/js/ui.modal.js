;(function ($) {
    'use strict';
    var Modal = function (ele , options){
        this.options        = options;
        this.ele            = $(ele);
        this.$body          = $(document.body);
        this.modal_mask     = null;
        this.isShow         = null;
        this.modal_title    = '';
        this.modal_confirm  = '';
        this.modal_cancel   = '';
        this.template       = this.$body.find('.modal');
        this.options = $.extend({},Modal._default, this._options,this.ele.data());

        this.init();

        $(document).on('click', '[data-toggle="modal"]', function (e){
            var $this = $(this);
            var $target = $($this.next('.modal'));
            $target.one('click' ,function(){
                $this.show();
            });
        });
    };
    Modal._default = {
        width: '',
        height: '',
        hasMask: '',
        modal_confirm : '确 定',
        modal_cancel : '取 消',
        modal_title : '弹框标题'
    }
    Modal.prototype =  {
        constructor : Modal,
        init : function (){
            var modal_temp = $(this.template);
            modal_temp.css({ width:this.options.width,height:this.options.height});
            modal_temp.find('.modal_title').text(this.options.modal_title);
            modal_temp.find('.modal_confirm').text(this.options.modal_confirm);
            modal_temp.find('.modal_cancel').text(this.options.modal_cancel);
            this.render();
        },
        render : function (){
            var modal_temp = $(this.template);
            this.ele.after(this.template);
            this.toggle();
        },
        toggle : function (){
            return this.isShow ? this.hide() : this.show();
        },
        show : function (){
            this.isShow = true;
            this.$body.append('<div class="modal_mask"></div>');
            this.ele.next('.modal').slideDown(300);



            console.log(11111);
        },
        hide : function (){
            this.isShow = false;
            console.log(2222);
        }
    }
    $.fn.modal = function (option , target){
        return this.each(function() {
            var $this = $(this),
                data = $this.data('modal'),
                options = typeof option == 'object' && option;
                if(!data) {
                    $this.data('modal' , (data = new Modal(this,options)))
                }
                if(typeof option == 'string'){
                    data[option](target);
                }
        });
    }
})(jQuery)
