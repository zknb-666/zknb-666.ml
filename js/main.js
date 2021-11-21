$(document).ready(function() {
    $(document).on("pjax:complete",
    function() {
        $.getScript("//busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js")
    });
    $("a.blog-button").click(function() {
        $(".main-post-list").removeClass("hidden");
        currentWidth = $(".panel-cover").width();
        if (currentWidth < 2000) {
            $(".panel-cover").addClass("panel-cover--collapsed")
        } else {
            $(".panel-cover").css("max-width", currentWidth);
            $(".panel-cover").animate({
                "max-width": "320px",
                "width": "22%"
            },
            400, swing = "swing",
            function() {})
        }
    });
    $("a.menu").click(function() {
        $(".main-post-list").removeClass("hidden");
        currentWidth = $(".panel-cover").width();
        if (currentWidth < 2000) {
            $(".panel-cover").addClass("panel-cover--collapsed")
        } else {
            $(".panel-cover").css("max-width", currentWidth);
            $(".panel-cover").animate({
                "max-width": "320px",
                "width": "22%"
            },
            400, swing = "swing",
            function() {})
        }
    });
    if (window.location.hash && window.location.hash == "#blog") {
        $(".panel-cover").addClass("panel-cover--collapsed");
        $(".main-post-list").removeClass("hidden")
    }
    if (window.location.pathname.substring(0, 5) == "/tag/") {
        $(".panel-cover").addClass("panel-cover--collapsed")
    }  
   /* if ($('.panel-cover').hasClass('panel-cover--collapsed')) 
    $(".cover-clear").addClass("panel-cover--overlay");
/* 通过头图判断什么时候添加遮罩*/
});