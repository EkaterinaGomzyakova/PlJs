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
// ИЗМЕНЕНИЕ ЦВЕТА
  // $(".r, .g, .b").on('input', function(){
  //   let r = $(".r").val();
  //   let g = $(".g").val();
  //   let b = $(".b").val();
  //
  //   $(".plant").css("fill", "rgb("+r+","+g+","+b+")");
  //   $(".rgb-val").val( "rgb("+r+","+g+","+b+")");
  // });
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
// ЗАМЕНА ФОНА
  // $(document).click(function() {
  //     let bg0 = "url('img/flowers1.png')";
  //     let bg1 = "url('img/flowers1.png')";
  //     let bg2 = "url('img/flowers2.png')";
  //     let bg3 = "url('img/flowers1.png')";
  //
  //     let count = 0;
  //     $('.forma').click(function () {
  //       count += 1;
  //       if (count == 1) {
  //       $(this).css('background-image', bg1);
  //     } else if (count == 2) {
  //       $(this).css('background-image', bg2);
  //     } else if (count == 3) {
  //       $(this).css('background-image', bg3);
  //   }
  //   });
  //   });

  $(document).ready(function(){
          $(".frame").click(function(){
              $(".frame").toggleClass("stop");
          });
      });
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
