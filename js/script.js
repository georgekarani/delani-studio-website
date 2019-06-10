
//jQuery functions///////////////////////////////
// lazy load from (http://jquery.eisbehr.de/lazy/)
$(function(){
  $(".lazy").Lazy();
});

$(document).ready(function () {
  //////////// delani stdio//////////////
  $("#delani").fadeOut(1000);
  $("#head").addClass("onLoad").fadeIn(2000);
  $("html, body").scrollTop(0);

 ////////////logo icons effect////////////////
  $(".text").hide();
  $(".whatDo").click(function () {
    $(this).children(".text").slideToggle(500);
    $(this).children(".hide-img").fadeToggle(500);
  });

  // website effects
  $(".port_desc").removeClass("here");
  $(".port-asc").mouseover(function () {
    $(this).children(".port_desc").addClass("here");
  });
  $(".port-asc").mouseleave(function () {
    $(this).children(".port_desc").removeClass("here").fadeIn;
  });
