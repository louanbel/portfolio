jQuery(function () {
  $("#carouselItems").hide();
  $("#print").on("click", function () {
    if ($(this).text() === "Afficher") {
      $("#carouselItems").fadeIn(1500);
      $("#print").text("Fermer");
    } else {
      $("#carouselItems").fadeOut(1500);
      $("#print").text("Afficher");
    }
  });
});
