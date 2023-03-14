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
      let bg0 = "url('img/forma.svg')";
      let bg1 = "url('img/flowers1.png')";
      let bg2 = "url('img/forma2.svg')";
      let bg3 = "url('img/forma3.svg')";

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




// $(document).ready(function () {
//   var maxDist;
//   var mouse = { x: 0, y: 0 };
//   var cursor = {
//       x: window.innerWidth,
//       y: window.innerHeight
//   };
//
//   Math.dist = function(a, b) {
//       var dx = b.x - a.x;
//       var dy = b.y - a.y;
//       return Math.sqrt(Math.pow(dx, 2), Math.pow(dy, 2));
//   }
//
//   window.addEventListener("mousemove", function(e) {
//       cursor.x = e.clientX;
//       cursor.y = e.clientY;
//   });
//
//   window.addEventListener("touchmove", function(e) {
//       var t = e.touches[0];
//       cursor.x = t.clientX;
//       cursor.y = t.clientY;
//   }, {
//       passive: false
//   });
//
//   var Char = function(container, char) {
//       var span = document.createElement("span");
//       span.setAttribute('data-char', char);
//       span.innerText = char;
//       container.appendChild(span);
//       this.getDist = function() {
//           this.pos = span.getBoundingClientRect();
//           return Math.dist(mouse, {
//               x: this.pos.x + (this.pos.width / 1.75),
//               y: this.pos.y
//           });
//       }
//       this.getAttr = function(dist, min, max) {
//           var wght = max - Math.abs((max * dist / maxDist));
//           return Math.max(min, wght + min);
//       }
//       this.update = function(args) {
//           var dist = this.getDist();
//           this.wdth = args.wdth ? ~~this.getAttr(dist, 5, 200) : 100;
//           this.wght = args.wght ? ~~this.getAttr(dist, 100, 800) : 400;
//           this.alpha = args.alpha ? this.getAttr(dist, 0, 1).toFixed(2) : 1;
//           this.ital = args.ital ? this.getAttr(dist, 0, 1).toFixed(2) : 0;
//           this.draw();
//       }
//       this.draw = function() {
//           var style = "";
//           style += "opacity: " + this.alpha + ";";
//           style += "font-variation-settings: 'wght' " + this.wght + ", 'wdth' " + this.wdth + ", 'ital' " + this.ital + ";";
//           span.style = style;
//       }
//       return this;
//   }
//
//   var VFont = function() {
//       this.scale = false;
//       this.flex = false;
//       this.alpha = false;
//       this.stroke = false;
//       this.width = true;
//       this.weight = true;
//       this.italic = false;
//       var title, str, chars = [];
//
//       this.init = function() {
//           title = document.getElementById("title");
//           str = title.innerText;
//           title.innerHTML = "";
//           for (var i = 0; i < str.length; i++) {
//               var _char = new Char(title, str[i]);
//               chars.push(_char);
//           }
//           this.set();
//           window.addEventListener("resize", this.setSize.bind(this));
//       }
//
//       this.set = function() {
//           title.className = "";
//           title.className += this.flex ? " flex" : "";
//           title.className += this.stroke ? " stroke" : "";
//           this.setSize();
//       }
//
//       this.setSize = function() {
//           var fontSize = window.innerWidth / (str.length / 2.7);
//           title.style = "font-size: " + fontSize + "px;";
//           if (this.scale) {
//               var scaleY = (window.innerHeight / title.getBoundingClientRect().height).toFixed(2);
//               var lineHeight = scaleY * 0.8;
//               title.style = "font-size: " + fontSize + "px; transform: scale(1," + scaleY + "); line-height: " + lineHeight + "em;"
//           }
//       }
//
//       this.animate = function() {
//           mouse.x += (cursor.x - mouse.x) / 4;
//           mouse.y += (cursor.y - mouse.y) / 4;
//           requestAnimationFrame(this.animate.bind(this));
//           this.render();
//       }
//
//       this.render = function() {
//           maxDist = title.getBoundingClientRect().width / 2;
//           for (var i = 0; i < chars.length; i++) {
//               chars[i].update({
//                   wght: this.weight,
//                   wdth: this.width,
//                   ital: this.italic,
//                   alpha: this.alpha
//               });
//           }
//       }
//       this.init();
//       this.animate();
//       return this;
//   }
//
//   var txt = new VFont();
// });
//
// })(jQuery);
