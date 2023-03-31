$(document).ready(function(){
// ИЗМЕНЕНИЕ РАЗМЕРА СЕТКИ ПОД РАЗМЕР ОКНА
$( window ).resize(function() {
    const screen_1 = $('.screen_1');
    const newWidth = Math.floor($( document ).width() / 75) * 75 - 50 - 25;
});
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

  // ПЕРЕТАСКИВАНИЕ
$(function() {
  $(".object" ).draggable();
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
    // ПО КЛИКУ НА ПЕРВОЕ РАСТЕНИЕ ОНО ОСТАНАВЛИВАЕТСЯ
    $(".frame").click(function(){
        $(".frame").toggleClass("stop");
    });
    // ДЛЯ ВТОРОГО РАСТЕНИЯ
    $(".frame_2").click(function(){
        $(".frame_2").toggleClass("stop");
    });

    // ИЗМЕНЕНИЕ ЦВЕТА // ЗЕЛЕНЫЙ

      $("div.button>span:nth-child(1)").click(function() {
      let varColor = ["green","red","blue","yellow"];
      let hasClass;

      for (var i = 0; i<=3; i++) {
        if (hasClass = $(".container>div>div").hasClass(varColor[i]) ) {
          $(".container>div>div").removeClass(varColor[i]);
        }
      }
      $(".container>div>div").addClass("green");
    });

    // КРАСНЫЙ
    $("div.button>span:nth-child(2)").click(function() {
    let varColor = ["green","red","blue","yellow"];
    let hasClass;

    for (var i = 0; i<=3; i++) {
      if (hasClass = $(".container>div>div").hasClass(varColor[i]) ) {
        $(".container>div>div").removeClass(varColor[i]);
      }
    }
    $(".container>div>div").addClass("red");
  });

  // СИНИЙ
  $("div.button>span:nth-child(3)").click(function() {
  let varColor = ["green","red","blue","yellow"];
  let hasClass;

  for (var i = 0; i<=3; i++) {
    if (hasClass = $(".container>div>div").hasClass(varColor[i]) ) {
      $(".container>div>div").removeClass(varColor[i]);
    }
  }
  $(".container>div>div").addClass("blue");
});

// ЖЕЛТЫЙ
$("div.button>span:nth-child(4)").click(function() {
let varColor = ["green","red","blue","yellow"];
let hasClass;

for (var i = 0; i<=3; i++) {
  if (hasClass = $(".container>div>div").hasClass(varColor[i]) ) {
    $(".container>div>div").removeClass(varColor[i]);
  }
}
$(".container>div>div").addClass("yellow");
});
});
