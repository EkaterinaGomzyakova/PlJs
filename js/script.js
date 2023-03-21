// ИЗМЕНЕНИЕ ЦВЕТА
$(document).ready(function(){
// ПЕРЕХОД МЕЖДУ ЭКРАНАМИ
  $(".top").click(function(){
    $(".screen_1, .screen_3, .screen_4, .screen_5").removeClass("show");
    $(".screen_1, .screen_3, .screen_4, .screen_5").addClass("hide");
    $(".screen_2").removeClass("hide");
    $(".screen_2").addClass("show");
  });

  $(".right").click(function(){
    $(".screen_1, .screen_2, .screen_4, .screen_5").removeClass("show");
    $(".screen_1, .screen_2, .screen_4, .screen_5").addClass("hide");
    $(".screen_3").removeClass("hide");
    $(".screen_3").addClass("show");
  });

  $(".bottom").click(function(){
    $(".screen_1, .screen_2, .screen_3, .screen_5").removeClass("show");
    $(".screen_1, .screen_2, .screen_3, .screen_5").addClass("hide");
    $(".screen_4").removeClass("hide");
    $(".screen_4").addClass("show");
  });

  $(".left").click(function(){
    $(".screen_1, .screen_2, .screen_3, .screen_4").removeClass("show");
    $(".screen_1, .screen_2, .screen_3, .screen_4").addClass("hide");
    $(".screen_5").removeClass("hide");
    $(".screen_5").addClass("show");
  });

  $(".center").click(function(){
    $(".screen_2, .screen_3, .screen_4, .screen_5").removeClass("show");
    $(".screen_2, .screen_3, .screen_4, .screen_5").addClass("hide");
    $(".screen_1").removeClass("hide");
    $(".screen_1").addClass("show");
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
