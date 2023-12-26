const filterList = document.querySelector(".filter");
const filterButtons = filterList.querySelectorAll(".filter-btn");
const conferences = document.querySelectorAll(".conference");

let conferenceIndex = 0;

conferences.forEach((conference) => {
    conference.style.viewTransitionName = `conf-${++conferenceIndex}`;
});

filterButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
        let confCategory = e.target.getAttribute("data-filter");

        if (!document.startViewTransition) {
            updateActiveButton(e.target);
            filterEvents(confCategory);
        }

        document.startViewTransition(() => {
            updateActiveButton(e.target);
            filterEvents(confCategory);
        });
    });
});
