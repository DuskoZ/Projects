$(document).ready(function () {
    // Find all .sliding-solution elements
    var slidingSolutions = $(".sliding__solutions");

    // Add a click event listener to buttons inside .sliding__solutions-tabs
    slidingSolutions.each(function () {
        var dataId = $(this).data("id");
        var tabButtons = $(".sliding__solutions-tabs .tab-btn");
        var paginationPages = $(".splide__pagination__page");

        tabButtons.on("click", function () {
            tabButtons.removeClass("is-active");
            $(this).addClass("is-active");

            // Get the index of the clicked button
            var tabIndex = tabButtons.index(this);

            // Find the corresponding button inside the <ul> and trigger a click
            paginationPages.eq(tabIndex).trigger("click");
        });
    });

    // Function to handle changes to the pagination buttons
    function handlePaginationChanges(mutationsList) {
        for (const mutation of mutationsList) {
            if (
                mutation.type === "attributes" &&
                mutation.attributeName === "class"
            ) {
                const paginationButtons = $(".splide__pagination__page");
                const activeIndex = paginationButtons.index(
                    $(".splide__pagination__page.is-active")
                );

                if (activeIndex !== -1) {
                    // Add the 'is-active' class to the corresponding tab-btn
                    const tabBtns = $(".sliding__solutions-tabs .tab-btn");
                    tabBtns.eq(activeIndex).addClass("is-active");

                    // Remove the 'is-active' class from other tab-btns
                    tabBtns
                        .not(tabBtns.eq(activeIndex))
                        .removeClass("is-active");
                }
            }
        }
    }

    // Create a MutationObserver to watch for changes to class attributes
    // https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver
    const observer = new MutationObserver(handlePaginationChanges);

    // Start observing changes to the pagination buttons
    const paginationButtons = $(".splide__pagination__page");
    if (paginationButtons.length) {
        paginationButtons.each(function () {
            observer.observe(this, { attributes: true });
        });
    }
});
