$(function(){

  // トップへ戻るボタン
  $('#top-btn').click(function(){
    $('html,body').animate({
      'scrollTop': 0
    }, 'slow');
  });

  // ヘッダー内の<a>タグをクリックしたときのclickイベント
  $('header a').click(function(){
    var id = $(this).attr('href');
    var position = $(id).offset().top;

    $('html, body').animate({

      'scrollTop':position
    },500);

  });

  // 徐々にフェードインするやつ
  $(window).on('load scroll', function (){

    var box = $('.fadeIn');
    var animated = 'animated';

    box.each(function(){

      var boxOffset = $(this).offset().top;
      var scrollPos = $(window).scrollTop();
      var wh = $(window).height();

      if(scrollPos > boxOffset - wh + 200 ){
        $(this).addClass(animated);
      }
    });

  });


});
