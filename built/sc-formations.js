jQuery(function () {
    $("#youtube").hide();
    $("#print2").on("click", function () {
        if ($(this).text() === "Afficher") {
            $("#youtube").fadeIn(1500);
            $("#youtube").attr("style", "display: flex !important");
            $("#print2").text("Fermer");
        }
        else {
            $("#youtube").fadeOut(1500);
            $("#print2").text("Afficher");
        }
    });
});
