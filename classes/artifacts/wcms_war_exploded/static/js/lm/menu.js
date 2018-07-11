;(function(){

    window.lmui = window.lmui ?  window.lm : {};

    lmui.menu = function(selector){
        var $e = $(selector);
        var mn = $e.data("lmmenu");
        return !mn ? new lmmenu(selector) : mn;
    }

    var lmmenu = function(selector){
        this.$e = $(selector);
        var mn = this.$e.data("lmmenu");

        this.init();
    }

    lmmenu.prototype = {
        //菜单初始化
        init: function(){
            var that = this;

            //自动化配置菜单层级
            this.$e.children('.lmui-menu').each(function(){
                var level = $(this).parents(".lmui-menu").size() + 1;
                $(this).data('level', level);
            })

            this.$e.on('click', '.lmui-menu-btn', function(){
                var $menu = $(this).parent();
                var open = $menu.data('open');
                open = open == undefined ? false : open;

                if(open) {
                    that.closeSecondLevel($menu);
                } else {
                    that.openSecondLevel($menu);
                }
            })
        },
        //打开二级菜单
        openSecondLevel: function($menu){
            var level = $menu.data('level');

            if(level == 1) {
                this.closeSecondLevel($menu.prevAll(".lmui-menu"));
                $menu.children('.lmui-menu-children').eq(0).slideDown(function(){
                    $menu.data("open", true)
                });
            }
        },
        //关闭二级菜单
        closeSecondLevel: function($menu){
            var level = $menu.data('level');

            if(level == 1) {
                $menu.children('.lmui-menu-children').eq(0).slideUp(function(){
                    $menu.data("open", false)
                });
            }
        }
    }



})(window, jQuery)