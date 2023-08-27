jQuery(function () {
    $("#figma0").hide();
    $("#figma").hide();
    $("#transat").hide();
    $("#print0").on("click", function () {
        if ($(this).text() === "Afficher") {
            $("#figma0").fadeIn(1500);
            $("#figma0").attr("style", "display: flex");
            $("#print0").text("Fermer");
        }
        else {
            $("#figma0").fadeOut(1500);
            $("#print0").text("Afficher");
        }
    });
    $("#print1").on("click", function () {
        if ($(this).text() === "Afficher") {
            $("#figma").fadeIn(1500);
            $("#figma").attr("style", "display: flex");
            $("#print1").text("Fermer");
        }
        else {
            $("#figma").fadeOut(1500);
            $("#print1").text("Afficher");
        }
    });
    $("#print2").on("click", function () {
        if ($(this).text() === "Afficher") {
            $("#transat").fadeIn(1500);
            $("#transat").attr("style", "display: flex");
            $("#print2").text("Fermer");
        }
        else {
            $("#transat").fadeOut(1500);
            $("#print2").text("Afficher");
        }
    });
});
