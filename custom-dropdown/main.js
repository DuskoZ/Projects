$(".list").slideUp(function () {
    $(".button").removeClass("open");
});

$(".button").on("click", function () {
    if ($(this).hasClass("open")) {
        $(".list").slideUp(function () {
            $(".button").removeClass("open");
        });
    } else {
        $(this).addClass("open");
        setTimeout(function () {
            $(".list").stop().slideDown();
        }, 200);
    }
});
