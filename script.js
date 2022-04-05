$(document).ready(() => {
    $.get( "./assets/array.json", function(data) {
        $(".result").html(data);
        $.each(data, function(index, value) {
            ($("<p>").append(value)).appendTo("div");
        })
        $("p").hover(function() {
            let nome = $(this).text();
            $(["div",'Pluto']).css("background-color", "yellow");
        })












    });
});