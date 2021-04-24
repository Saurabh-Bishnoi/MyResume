$(".nav-menu ul li").on("click", function() {
    $(".nav-menu ul li").removeClass("active");
    $(this).addClass("active");
  });
