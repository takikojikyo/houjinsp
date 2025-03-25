$(function () {

  
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
    'img/top3-1.png': 'img/IPhone15_128GB.png',
    'img/top3-2.png': 'img/AQUOSwish4_rev01.jpg',
    'img/top3-3.png': 'img/iPhoneSE_rev13.jpg'
  };

  const link = "https://houjinsp-online.com/contact.php"; // モーダル画像のリンク先

  // 画像クリックでモーダル表示
  $('.slick__item a').on('click', function(event) {
    event.preventDefault(); // ページ遷移を防ぐ

    let clickedImgSrc = $(this).find('img').attr('src'); // クリックした画像のsrcを取得
    let modalImgSrc = imageMap[clickedImgSrc]; // 対応するモーダル画像を取得

    if (modalImgSrc) {
      $('#modal-image').attr('src', modalImgSrc); // モーダル画像を変更
      $('#modal-image').data('link', link); // 画像にリンクを保存
      $('.modal').addClass('show'); // モーダルを表示
    }
  });

  // モーダル外をクリックで閉じる
  $('.modal').on('click', function() {
    $('.modal').removeClass('show');
  });

  // モーダル画像クリックでリンクへ遷移
  $('#modal-image').on('click', function(event) {
    event.stopPropagation(); // モーダルを閉じる処理を阻止
    let link = $(this).data('link'); // 事前に保存したリンクを取得
    if (link) {
      window.location.href = link;
    }
  });


  
  const $slider = $(".slick-box2");

  $slider.slick({
    infinite: false, // 無限ループを無効化
    autoplay: false, // 自動スライドなし（手動のみ）
    arrows: true, // 矢印を表示
    prevArrow: '<img src="img/prev-arrow.png" class="slick-prev" alt="前へ">',
    nextArrow: '<img src="img/next-arrow.png" class="slick-next" alt="次へ">',
    dots: false, // ドットナビゲーションなし
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

  
 // ページ内のリンクをクリックした時に動作する
 $('a[href^="#"]').click(function () {
  // クリックしたaタグのリンクを取得
  let href = $(this).attr("href");
  // ジャンプ先のid名をセット hrefの中身が#もしくは空欄なら,htmlタグをセット
  let target = $(href == "#" || href == "" ? "html" : href);
  // ページトップからジャンプ先の要素までの距離を取得
  let position = target.offset().top;
  // animateでスムーススクロールを行う   ページトップからpositionだけスクロールする
  // 600はスクロール速度で単位はミリ秒  swingはイージングのひとつ
  $("html, body").animate({ scrollTop: position }, 600, "swing");
  // urlが変化しないようにfalseを返す
  return false; 
});



// よくあるご質問
$('.qa-title').on('click', function() {//タイトル要素をクリックしたら
  var findElm = $(this).next(".qa-box");//直後のアコーディオンを行うエリアを取得し
  $(findElm).slideToggle();//アコーディオンの上下動作
    
  if($(this).hasClass('close')){//タイトル要素にクラス名closeがあれば
    $(this).removeClass('close');//クラス名を除去し
  }else{
    $(this).addClass('close');//クラス名closeを付与
  }
});

$(window).on('scroll', function() {
  if ($(window).scrollTop() > $(window).height()) { // 100vh（1画面分）スクロールしたら
      $('.fixed_menu').addClass('show'); // メニュー表示
  } else {
      $('.fixed_menu').removeClass('show'); // 元の位置に戻す
  }
});


  // スクロール時のイベント
  $(window).scroll(function () {


    $(".fadein").each(function () {

      let scroll = $(window).scrollTop();

      let target = $(this).offset().top;

      let windowHeight = $(window).height();

      if (scroll > target - windowHeight + 200) {

        // 条件が満たされた場合、要素の不透明度（opacity）を1に設定し、Y軸方向に移動（translateY）させます。
        $(this).css("opacity", "1");
        $(this).css("transform", "translateY(0)");
      }
    });

  });


});