
// scroll figs when you click on figure refs in text
$(function() {
  $(".figure").click(function(){
    refPos = $(this).offset().top;
    fPos = $("#fig_" + this.dataset.n).offset().top;
    colPos = $("#figure_column").offset().top;
    p = colPos + ($(document).scrollTop() - fPos) + 100;
    $("#figure_column").animate({top: p});
  });
});
// scroll entire figure column when you click on figure numbers to find figure locations in text
// Do do cyclically. That is, for each reference, scroll entire column till they're both in view.// When you reach the last reference, the next click takes you back to the first one. 

$( function() {

  // Count the number of references in the text column to each figure
  $(".textLink").each( function() {
    figNum = this.dataset.n;
    fig = this;
    $(".figure").each( function() {
      if (this.dataset.n == figNum)
        fig.dataset.nrefs++;
    });
  });

  $(".textLink").click( function() {
    var figNum = this.dataset.n;
    var figRef = getFigRef( figNum, parseInt(this.dataset.clicks) % parseInt(this.dataset.nrefs)  );
    var refNum = this.dataset.clicks % this.dataset.nrefs;
    this.dataset.clicks++;
    moveToRef( figRef, this );
  });

  $(".resetLink").click( function() {
    $("#figure_column").animate({top: "17.5em"}, 500);  
    $('html, body').animate({scrollTop: 0}, 500);
    $(".drag_wrapper").each( function() { 
      $(this).animate( {left: this.dataset.left, top: this.dataset.top} ); 
    });
//    $(".figure_container").each( function() {
//      $(this).animate( {"width": this.dataset.width, "height": this.dataset.height} );
//    });
  });

  $(".topLink").click( function () {
    $("#figure_column").animate({top: "17.5em"}, 500);  
    $('html, body').animate({scrollTop: 0}, 500);
  });
});

function getFigRef(figNum,refNum) {
  return $(".figure").filter(function(){
      return this.dataset.n == figNum;}
    ).eq(refNum); 
}

function moveToRef( ref, current ) {
//alert($(ref).offset().top);
var textPos = $(ref).offset().top;
var figPos = $(current).offset().top;
var colPos = $("#figure_column").offset().top;
var p = colPos + textPos - figPos + 
   1 * parseInt($("#fig_1").parent().css("marginTop"));
$("#figure_column").animate({top: p}, 500);
$('html, body').animate({scrollTop: $(ref).offset().top}, 500);
// should the above have the same animation times? 
// matching with async times is snazzy, same times, is smooth
}


//
//$( function() {
//  $("#content_section").mouseover( function() {
//    $("#figure_column").css({"position": "fixed", "top": $("#figure_column").scrollTop()});
//  });
//  $("#content_section").mouseout( function() {
//    $("#figure_column").css({"position": "absolute", "top": $("#figure_column").scrollTop()});
//  });
//});
// //
// $( function() {
//   $("#figure_column").mouseover( function() {
//     var p = $("#content_section").offset().top - $(window).scrollTop();
//     console.log(p);
//     $("#content_section").css({"position": "fixed", "top": p + "px"});
//   });
//   $("#figure_column").mouseout( function() {
//     $("#content_section").css({"position": "absolute", "top": ($("#content_section").offset().top - $(document).scrollTop())});
//   });
// });
// 
// fix/unfix a figure
// $(function() {
//   $(".fix").click( function() {
//     if (this.dataset.clicks == 0) {
//       var figContainer = $(this).closest(".figure_container");
//     //  var l = figContainer.offsetLeft;
//     //  var t = figContainer.offsetTop;
//     //  var w = figContainer.width();
//     //  var h = figContainer.height();
//     //  figContainer.css({position: "fixed", left: l, top: t, width: w, height: h});
//       figContainer.css({position: "fixed"});
//       $(this).text("unfix");
//       this.dataset.clicks = 1;
//     } else {
//       $(this).closest(".figure_container").css({position: "relative"});
//       $(this).text("fix");
//       this.dataset.clicks = 0;
//     }
//   });
// });
// 

