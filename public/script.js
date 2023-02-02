$(window).scroll(function () {
    if ($("nav").offset().top > 50) {
      $("nav").addClass("black");
    } else {
      $("nav").removeClass("black");
    }
  });


  $(".responsive").click(function () {
    $("nav ul").toggle("slow");
  });