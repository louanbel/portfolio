jQuery(function () {
  $("#figma").hide();
  $("#transat").hide();
  $("#print1").on("click", function () {
    if ($(this).text() === "Afficher") {
      $("#figma").fadeIn(1500);
      $("#figma").attr("style", "display: flex");
      $("#print1").text("Fermer");
    } else {
      $("#figma").fadeOut(1500);
      $("#print1").text("Afficher");
    }
  });
  $("#print2").on("click", function () {
    if ($(this).text() === "Afficher") {
      $("#transat").fadeIn(1500);
      $("#transat").attr("style", "display: flex");
      $("#print2").text("Fermer");
    } else {
      $("#transat").fadeOut(1500);
      $("#print2").text("Afficher");
    }
  });
});
