$(function () {
  $(window).on("load", function () {
    //Hide the first span (".one") after 2.8s when window load
    setTimeout(function () {
      $(".one").hide();
    }, 2800);

    //Show the second span (".two")
    setTimeout(function () {
      $(".two").show();
    }, 2800);

    //Hide loader and show wrapper
    setTimeout(function () {
      $(".loader").fadeOut();
      //Show wrapper
      $(".wrapper").show();
    }, 5660);
  });
});
