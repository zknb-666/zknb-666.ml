    /*加载等待*/
    document.onreadystatechange = function () {
    if (document.readyState == "complete") {    
        $(".loader-div").hide();
        $("#pageContent").removeClass("loadhidden");
        $('.footer_div').removeClass('loadhidden');
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
        Prism.highlightAll();
    });
    /*超链接触发结束*/
    /*逻辑判断*/
    if (window.location.hash && window.location.hash == "#blog") {
        $(".panel-cover").addClass("panel-cover--collapsed");
    }

    if ($('.panel-cover').hasClass('panel-cover--collapsed')) {
        $(".cover-clear").addClass("panel-cover--overlay");
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
    /*黑夜模式*/
    function addDarkmodeWidget() {
        const options = {
            bottom: '64px', // default: '32px'
            right: 'unset', // default: '32px'
            left: '32px', // default: 'unset'
            time: '0.5s', // default: '0.3s'
            mixColor: '#fff', // default: '#fff'
            backgroundColor: '#fff',  // default: '#fff'
            buttonColorDark: '#100f2c',  // default: '#100f2c'
            buttonColorLight: '#fff', // default: '#fff'
            saveInCookies: false, // default: true,
            label: '🌓', // default: ''
            autoMatchOsTheme: true // default: true
          }
          
          const darkmode = new Darkmode(options);
          darkmode.showWidget();
          
        new Darkmode().showWidget();
      }
      window.addEventListener('load', addDarkmodeWidget);
    /*黑夜模式结束*/