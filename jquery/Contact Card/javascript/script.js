$(document).ready(function() {

    $("form").on("submit", function() {

        var fname = $("#fname").val();
        var lname = $("#lname").val();
        var desc = $("textarea").val();
        var prompt = "(Click for Description)";

        $("#contacts").append("<div class='card'></div>");
        $(".card:last-of-type").append("<h2>"+fname+" "+lname+"</h2>");
        $(".card:last-of-type").append("<h3>"+prompt+"</h3>");
        $(".card:last-of-type").append("<p class='toggle'>"+desc+"</p>");

        return false;
    });
    $("#contacts").on("click", ".card", function() {
        $(this).children().toggle();
    });
});
