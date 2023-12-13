$(document).ready(function () {
    // Find all .sliding-solution elements
    var slidingSolutions = $(".sliding__solutions");

    // Add a click event listener to buttons inside .sliding__solutions-tabs
    slidingSolutions.each(function () {
        var dataId = $(this).data("id");
        var tabButtons = $("." + dataId + " .sliding__solutions-tabs .tab-btn");
        var paginationPages = $("." + dataId + " .splide__pagination__page");

        tabButtons.on("click", function () {
            tabButtons.removeClass("is-active");
            $(this).addClass("is-active");

            // Get the index of the clicked button
            var tabIndex = tabButtons.index(this);

            // Find the corresponding button inside the <ul> and trigger a click
            paginationPages.eq(tabIndex).trigger("click");
        });
    });
});
