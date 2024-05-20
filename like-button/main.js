$(document).ready(function () {
    $(".btn").click(function () {
        $(".btn-wrapper").addClass("btn--liked-big");
        setTimeout(function () {
            $(".btn-wrapper").removeClass("btn--liked-big");
            $(".btn-wrapper").addClass("btn--liked-small");
        }, 250);
    });
});
