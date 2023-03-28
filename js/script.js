// ИЗМЕНЕНИЕ ЦВЕТА задать размер div и изображениям на главном экране. для плавного изменения применить для класса opacity: 0 и opacity:1 и в классах show и hide, и прописать Keyframes с transition,  textpath можно переместить в text/ можно через show и hide, но для плавного перехода нужен отдельный класс и keyframes, с transition  и opacity  0 1, через метод css animation play-state: running
$(document).ready(function(){
// СКРЫТЬ ЭКРАНЫ КРОМЕ ПЕРВОГО ПРИ ЗАГРУЗКЕ
  $(".screen_2, .screen_3, .screen_4, .screen_5").hide();
// ПЕРЕХОД МЕЖДУ ЭКРАНАМИ
  $(".top").click(function(){
    $(".screen_1, .screen_3, .screen_4, .screen_5").hide();
    $(".screen_2").show();
  });

  $(".right").click(function(){
    $(".screen_1, .screen_2, .screen_4, .screen_5").hide();
    $(".screen_3").show();
  });

  $(".bottom").click(function(){
    $(".screen_1, .screen_2, .screen_3, .screen_5").hide();
    $(".screen_4").show();
  });

  $(".left").click(function(){
    $(".screen_1, .screen_2, .screen_3, .screen_4").hide();
    $(".screen_5").show();
  });

  $(".center").click(function(){
    $(".screen_2, .screen_3, .screen_4, .screen_5").hide();
    $(".screen_1").show();
  });
// ИЗМЕНЕНИЕ ЦВЕТА
  $(".r, .g, .b").on('input', function(){
    var r = $(".r").val();
    var g = $(".g").val();
    var b = $(".b").val();

    $(".plant").css("fill", "rgb("+r+","+g+","+b+")");
    $(".rgb-val").val( "rgb("+r+","+g+","+b+")");
  });

// ПАРАЛЛАКС
  $(window).on('mousemove', function(e) {
    let w = $(window).width();
    let h = $(window).height();

    let offsetX = 0.5 - e.pageX / w;
    let offsetY = 0.5 - e.pageY / h;

    $(".parallax").each(function(i,el){
      let offset = parseInt($(el).data('offset'));
      let translate = "translate3d(" + Math. round(offsetX * offset)
      + "px," + Math.round(offsetY * offset) + "px, 0px";

      $(el).css({
        'transform':translate
      })
    })
})
});
// ЗАМЕНА ФОНА
  $(document).click(function() {
      let bg0 = "url('img/flowers1.png')";
      let bg1 = "url('img/flowers1.png')";
      let bg2 = "url('img/flowers2.png')";
      let bg3 = "url('img/flowers1.png')";

      let count = 0;
      $('.forma').click(function () {
        count += 1;
        if (count == 1) {
        $(this).css('background-image', bg1);
      } else if (count == 2) {
        $(this).css('background-image', bg2);
      } else if (count == 3) {
        $(this).css('background-image', bg3);
    }
    });
    });
    // ИЗМЕНЕНИЕ ТЕКСТА НА ПЕРВОМ ЭКРАНЕ
$(document).ready(function(){
    setTimeout(function() {
     $('textPath').html('Проводим эксперименты с цветом')
 }, 3000);

 setTimeout(function() {
  $('textPath').html('Проводим эксперименты с формой')
}, 6000);

setTimeout(function() {
 $('textPath').html('Сохраняем новые образцы')
}, 9000);
    });
