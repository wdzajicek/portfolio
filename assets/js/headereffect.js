// scrolling header effect
$(document).ready(function (){
  $(window).scroll(function(){
    var pixelstop = 100+300*$(window).scrollTop()/$(window).height();
    $(".masthead ").css("filter", "contrast(" + pixelstop + "%)");
  });
});
