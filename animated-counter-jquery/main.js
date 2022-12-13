$(document).ready(function () {
    let trigger = true;
    const container = $("body").find(".stat-cards");
    // Top offset + module height + 200px of section padding
    const containerBottom =
        $(container).offset().top + $(container).outerHeight() + 200;

    // Check on page load
    counter();

    if (trigger) {
        $(window).scroll(function () {
            counter();
        });
    }

    function counter() {
        let scrollBottom = $(document).scrollTop() + $(window).height();
        console.log(
            `Container offset: ${
                $(container).offset().top
            }, scrollBottom position: ${scrollBottom}`
        );

        // Section padding top is 100px, adding a few pixels to the offset just to show zeros
        if (
            $(container).offset().top + 50 <= scrollBottom &&
            containerBottom >= $(document).scrollTop() + 250 &&
            trigger
        ) {
            // Sets trigger to false - animation runs only once
            trigger = false;
            $(".stat-num").each(function () {
                $(this)
                    .prop("Counter", 0)
                    .animate(
                        {
                            Counter: Number($(this).attr("data-number")),
                        },
                        {
                            duration: Number($(this).attr("data-duration")),
                            easing: "swing",
                            step: function (now) {
                                $(this).text(Math.ceil(now));
                            },
                        }
                    );
            });
        }
    }
});
