
//jQuery functions///////////////////////////////
// lazy load from (http://jquery.eisbehr.de/lazy/)
$(function(){
  $(".lazy").Lazy();
});

$(document).ready(function () {
  // delani
  $("#delani").fadeOut(1000);
  $("#head").addClass("onLoad").fadeIn(2000);
  $("html, body").scrollTop(0);

