
$(".submenu").slideUp();

$(".heading").click(function(){
  $(".submenu").hide();
  $(this).next(".submenu").slideToggle(1000);

  $(".heading").removeClass("toggleOn");
  $(this).toggleClass("toggleOn");
});
