const containers = document.querySelectorAll(".container");
const navigation = document.querySelector(".navigation");
const navBtns = document.querySelectorAll(".nav-btn");

const pageTransitions = () => {
    navBtns.forEach((navBtn) => {
        navBtn.addEventListener("click", () => {
            document
                .querySelector(".active-btn")
                .classList.remove("active-btn");
            this.classList.add("active-btn");
            document.querySelector(".active").classList.remove("active");
            document.getElementById(button.dataset.id).classList.add("active");
        });
    });
};

pageTransitions();

// Change color mode - dark/light
document.querySelector(".theme-btn").addEventListener("click", () => {
    document.body.classList.toggle("light-mode");
});

// (function () {
//     [...document.querySelectorAll(".control")].forEach((button) => {
//         button.addEventListener("click", function () {
//             document
//                 .querySelector(".active-btn")
//                 .classList.remove("active-btn");
//             this.classList.add("active-btn");
//             document.querySelector(".active").classList.remove("active");
//             document.getElementById(button.dataset.id).classList.add("active");
//         });
//     });
//     document.querySelector(".theme-btn").addEventListener("click", () => {
//         document.body.classList.toggle("light-mode");
//     });
// })();
