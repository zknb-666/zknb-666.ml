    /*加载等待*/
    document.onreadystatechange = function () {
    if (document.readyState == "complete") {    
        $(".loader-div").hide('animate__bounceOut');
        $("#pageContent").removeClass("loadhidden");
        $('.footer_div').removeClass('loadhidden');
        if (!$('.panel-cover').hasClass('panel-cover--collapsed'))
        $('.panel-cover').addClass('animate__bounceIn');
    }}
    /*加载等待结束*/
    /*Pjax功能*/
    $(document).pjax('a[target!=_blank]', '#pageContent', {fragment: '#pageContent',timeout: 50000,cache: false});
    $(document).on('pjax:start',function() { NProgress.start();});
    $(document).on('pjax:end',function() { NProgress.done();});
    $(document).on("pjax:complete",function(){hljs.initHighlighting();});
    /*Pjax功能结束*/
    /*超链接触发*/
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
    });
    /*超链接触发结束*/
    /*逻辑判断*/
    if (window.location.hash && window.location.hash == "#blog") {
        $(".panel-cover").addClass("panel-cover--collapsed");
    }

    if ($('.panel-cover').hasClass('panel-cover--collapsed')) {
        $("#pageContent").removeClass("hidden");
        $('.footer_div').removeClass('hidden');
        setTimeout(function(){  $(".panel-cover").addClass("bgsize");},15);
    }
    /*逻辑判断结束*/
    /*打赏*/
    $(function(){
        $(".pay_item").click(function(){
            $(this).addClass('checked').siblings('.pay_item').removeClass('checked');
            var dataid=$(this).attr('data-id');
            $(".shang_payimg img").attr("src","/images/payimg/"+dataid+"img.png");
            $("#shang_pay_txt").text(dataid=="alipay"?"支付宝":"微信");
        });
    });

    function dashangToggle(){
        $.getScript("/js/main.js");
        $(".hide_box").fadeToggle();
        $(".shang_box").fadeToggle();
    }
    /*打赏结束*/