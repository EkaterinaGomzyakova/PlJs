// ИЗМЕНЕНИЕ ЦВЕТА
$(document).ready(function(){
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
