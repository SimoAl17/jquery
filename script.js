$(document).ready(() => {
    $.get( "./assets/array.json", function(data) {
        $(".result").html(data);
        $.each(data, function(index, value) {
            ($("<p>").append(value)).appendTo("div");
        })
        $("p").mouseover(function() {
            let nome = $(this).text();
            $("p").filter(function() { return ($(this).text() === nome)}).css("background-color", "yellow");
        })
        $("p").mouseout(function() {
            let nome = $(this).text();
            $("p").filter(function() { return ($(this).text() === nome)}).css("background-color", "white");
        })
        $("p").click(function() {
            let nome = $(this).text();
            $("p").filter(function() { return ($(this).text() === nome)}).remove();
        })
    });
});