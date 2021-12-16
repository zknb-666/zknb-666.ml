   $(document).on("pjax:complete",
    function() {
        $.getScript("/js/main.js");
        $.getScript("//busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js");
    });
$(document).ready(function() { 
   $("a").click(function(){
        $.getScript("/js/main.js");
    });
    $("a.blog-button").click(function() {
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
    }
    if ($('.panel-cover').hasClass('panel-cover--collapsed')) {
        $(".cover-clear").addClass("panel-cover--overlay");
        $('.panel-cover').removeClass('cnm');
        $('.panel-cover').addClass('cnmb');
        $(".main-post-list").removeClass("hidden");
        $('.footer').removeClass('hidden');
    }
});
