$(document).on('pjax:complete', function () {
  // 重新加载不蒜子
  $.getScript('//busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js');
});

/*$(window).on('popstate.pjax', function () {
  pjax();
  });
*/

$(document).ready(function() {
  
  $('a.blog-button').click(function() {
    $.pjax.reload('#pageContent', options);
    // If already in blog, return early without animate overlay panel again.
    if (location.hash && location.hash == "#blog") return; 

    if ($('.panel-cover').hasClass('panel-cover--collapsed')) return;
    $('.main-post-list').removeClass('hidden');
    currentWidth = $('.panel-cover').width();
    if (currentWidth < 2000) {
      $('.panel-cover').addClass('panel-cover--collapsed');
    } else {
      $('.panel-cover').css('max-width',currentWidth);
      $('.panel-cover').animate({'max-width': '320px', 'width': '22%'}, 400, swing = 'swing', function() {} );
    }

    
  });

  $('a.menu').click(function() {
    // 导航按钮被点击
    // this.style.backgroundColor = '#fff'; 设置颜色后会自动消失
    // If already in blog, return early without animate overlay panel again.
    //if (location.hash && location.hash == "#blog") return;
    //if ($('.panel-cover').hasClass('panel-cover--collapsed')) return;
    $('.main-post-list').removeClass('hidden');
    currentWidth = $('.panel-cover').width();
    if (currentWidth < 2000) {
      $('.panel-cover').addClass('panel-cover--collapsed');
    } else {
      $('.panel-cover').css('max-width',currentWidth);
      $('.panel-cover').animate({'max-width': '320px', 'width': '22%'}, 400, swing = 'swing', function() {} );
    }
  });  

  if (window.location.hash && window.location.hash == "#blog") {
    $('.panel-cover').addClass('panel-cover--collapsed');
    $('.main-post-list').removeClass('hidden');
  }
  

  if (window.location.pathname.substring(0, 5) == "/tag/") {
    $('.panel-cover').addClass('panel-cover--collapsed');
  }

});