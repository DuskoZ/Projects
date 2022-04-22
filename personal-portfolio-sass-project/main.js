const containers = document.querySelectorAll(".container");
const navBtns = document.querySelectorAll(".nav-btn");

const pageTransitions = () => {
    navBtns.forEach((navBtn) => {
        navBtn.addEventListener("click", (e) => {
            // Updates active btn
            document
                .querySelector(".active-btn")
                .classList.remove("active-btn");
            e.target.classList.add("active-btn");

            // Updates active page
            document.querySelector(".active").classList.remove("active");
            document.getElementById(navBtn.dataset.id).classList.add("active");
        });
    });
};

pageTransitions();

// Change color mode - dark/light
document.querySelector(".theme-btn").addEventListener("click", () => {
    document.body.classList.toggle("light-mode");
});
