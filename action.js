$(document).ready(function () {
    $(".glow-button").hover(function () {
        $(this).css("background-color", "orange");
    });
    $(".glow-button").mouseout(function () {
        $(this).css("background-color", "blueviolet");
    });
});