// ИЗМЕНЕНИЕ ЦВЕТА задать размер div и изображениям на главном экране. для плавного изменения применить для класса opacity: 0 и opacity:1 и в классах show и hide, и прописать Keyframes с transition,  textpath можно переместить в text/ можно через show и hide, но для плавного перехода нужен отдельный класс и keyframes, с transition  и opacity  0 1, через метод css animation play-state: running
$(document).ready(function(){

  function setRoundWidth() {
        const screen_1 = document.querySelector('.screen_1')
        const newWidth = Math.floor(document.documentElement.clientWidth / 75) * 75 - 50 - 25
        screen_1.style.width = newWidth + 'px'
      }
      setRoundWidth()
      window.addEventListener('resize', setRoundWidth)

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
} );

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

  $(document).ready(function(){
          // ПО КЛИКУ НА ПЕРВОЕ РАСТЕНИЕ ОНО ОСТАНАВЛИВАЕТСЯ
          $(".frame").click(function(){
              $(".frame").toggleClass("stop");
          });
          // ДЛЯ ВТОРОГО РАСТЕНИЯ
          $(".frame_2").click(function(){
              $(".frame_2").toggleClass("stop");
          });
      });

      // ИЗМЕНЕНИЕ ЦВЕТА // ЗЕЛЕНЫЙ
    $(document).ready(function(){
      $("div.button>span:nth-child(1)").click(function() {
      var varColor = ["green","red","blue","yellow"];
      var hasClass;

      for (var i = 0; i<=3; i++) {
        if (hasClass = $(".container>div>div").hasClass(varColor[i]) ) {
          $(".container>div>div").removeClass(varColor[i]);
        }
      }
      $(".container>div>div").addClass("green");
    });

    // КРАСНЫЙ
    $("div.button>span:nth-child(2)").click(function() {
    var varColor = ["green","red","blue","yellow"];
    var hasClass;

    for (var i = 0; i<=3; i++) {
      if (hasClass = $(".container>div>div").hasClass(varColor[i]) ) {
        $(".container>div>div").removeClass(varColor[i]);
      }
    }
    $(".container>div>div").addClass("red");
  });

  // СИНИЙ
  $("div.button>span:nth-child(3)").click(function() {
  var varColor = ["green","red","blue","yellow"];
  var hasClass;

  for (var i = 0; i<=3; i++) {
    if (hasClass = $(".container>div>div").hasClass(varColor[i]) ) {
      $(".container>div>div").removeClass(varColor[i]);
    }
  }
  $(".container>div>div").addClass("blue");
});

// ЖЕЛТЫЙ
$("div.button>span:nth-child(4)").click(function() {
var varColor = ["green","red","blue","yellow"];
var hasClass;

for (var i = 0; i<=3; i++) {
  if (hasClass = $(".container>div>div").hasClass(varColor[i]) ) {
    $(".container>div>div").removeClass(varColor[i]);
  }
}
$(".container>div>div").addClass("yellow");
});
    });
