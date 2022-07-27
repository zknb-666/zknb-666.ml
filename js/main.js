document.onreadystatechange = function () {
    if (document.readyState == "complete") {    
        $(".loading-div").hide();
        $("#pageContent").removeClass("loadhidden");
        $('.footer_div').removeClass('loadhidden');
    }}
    
   $(document).on("pjax:complete",function(){
    hljs.initHighlighting();
   });
   $("a").click(function() {
        currentWidth = $(".panel-cover").width();
        if (currentWidth < 2000) {
            $(".panel-cover").addClass("panel-cover--collapsed")
        } else {
            $(".panel-cover").css("max-width", currentWidth);
            $(".panel-cover").animate({
                "max-width": "320px",
                "width": "22%"
            },
            400, swing = "swing");
        }
        $.getScript("/js/main.js");
        Prism.highlightAll();
    });
    if (window.location.hash && window.location.hash == "#blog") {
        $(".panel-cover").addClass("panel-cover--collapsed");
    }
    if ($('.panel-cover').hasClass('panel-cover--collapsed')) {
        $(".cover-clear").addClass("panel-cover--overlay");
        $("#pageContent").removeClass("hidden");
        $('.footer_div').removeClass('hidden');
        setTimeout(function(){  $(".panel-cover").addClass("bgsize");});
    }
    /*打赏脚本*/
    $(function(){
        $(".pay_item").click(function(){
            $(this).addClass('checked').siblings('.pay_item').removeClass('checked');
            var dataid=$(this).attr('data-id');
            $(".shang_payimg img").attr("src","/images/payimg/"+dataid+"img.png");
            $("#shang_pay_txt").text(dataid=="alipay"?"支付宝":"微信");
        });
    });
    function dashangToggle(){
        $(".hide_box").fadeToggle();
        $(".shang_box").fadeToggle();
    }