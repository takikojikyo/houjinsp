$(function () {

  // popular_smartphone_top3


  $('.slick-box').slick({
    autoplay: true,
    autoplaySpeed: 3000,
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '10%'
  });

  // 画像の対応リスト
  const imageMap = {
    'img/top3-1.png': 'img/IPhone16_128GB.png',
    'img/top3-2.png': 'img/AQUOSwish4_rev01.jpg',
    'img/top3-3.png': 'img/iPhoneSE_rev13.jpg'
  };

  const link = "https://houjinsp-online.com/contact.php";

  // 画像クリックでモーダル表示
  $('.slick__item a').on('click', function(event) {
    event.preventDefault(); 

    let clickedImgSrc = $(this).find('img').attr('src'); 
    let modalImgSrc = imageMap[clickedImgSrc]; 

    if (modalImgSrc) {
      $('#modal-image').attr('src', modalImgSrc); 
      $('#modal-image').data('link', link); 
      $('.modal').addClass('show'); 
    }
  });

  // モーダル外をクリックで閉じる
  $('.modal').on('click', function() {
    $('.modal').removeClass('show');
  });

  // モーダル画像クリックでリンクへ遷移
  $('#modal-image').on('click', function(event) {
    event.stopPropagation(); 
    let link = $(this).data('link'); 
    if (link) {
      window.location.href = link;
    }
  });


  

  // popular_model
  const $slider = $(".slick-box2");

  $slider.slick({
    infinite: false, 
    autoplay: false, 
    arrows: true, 
    prevArrow: '<img src="img/prev-arrow.png" class="slick-prev" alt="前へ">',
    nextArrow: '<img src="img/next-arrow.png" class="slick-next" alt="次へ">',
    dots: false, 
    slidesToShow: 1,
    slidesToScroll: 1
  });

  // スライドの最後・最初でループさせる処理
  $slider.on("afterChange", function (event, slick, currentSlide) {
    if (currentSlide === 0) {
      // 最初のスライドで「前へ」ボタンを押したら最後のスライドに移動
      $(".slick-prev").on("click", function () {
        $slider.slick("slickGoTo", slick.slideCount - 1);
      });
    } else if (currentSlide === slick.slideCount - 1) {
      // 最後のスライドで「次へ」ボタンを押したら最初のスライドに移動
      $(".slick-next").on("click", function () {
        $slider.slick("slickGoTo", 0);
      });
    }
  });

  

  // price_simulationのボタンを押したらスムーススクロール
 $('a[href^="#"]').click(function () {
  let href = $(this).attr("href");
  
  let target = $(href == "#" || href == "" ? "html" : href);
 
  let position = target.offset().top;
  
  $("html, body").animate({ scrollTop: position }, 600, "swing");
  
  return false; 
});



// よくあるご質問
$('.qa-title').on('click', function() {
  var findElm = $(this).next(".qa-box");
  $(findElm).slideToggle();
    
  if($(this).hasClass('close')){
    $(this).removeClass('close');
  }else{
    $(this).addClass('close');
  }
});



// 下の固定メニューをスクロールしたら表示
$(window).on('scroll', function() {
  if ($(window).scrollTop() > $(window).height()) { 
      $('.fixed_menu').addClass('show'); 
  } else {
      $('.fixed_menu').removeClass('show'); 
  }
});





  // スクロール時のイベント
  $(window).scroll(function () {


    $(".fadein").each(function () {

      let scroll = $(window).scrollTop();

      let target = $(this).offset().top;

      let windowHeight = $(window).height();

      if (scroll > target - windowHeight + 200) {

        
        $(this).css("opacity", "1");
        $(this).css("transform", "translateY(0)");
      }
    });

  });


});