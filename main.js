
$(".submenu").slideUp();

$(".heading").click(function(){
  $(".submenu").hide();
  $(this).next(".submenu").slideToggle();

  $(".heading").removeClass("toggleOn");
  $(this).toggleClass("toggleOn");
});
