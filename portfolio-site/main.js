const navbar = document.getElementById("nav");
const navBtn = document.getElementById("nav-btn");
const closeBtn = document.getElementById("close-btn");
const sidebar = document.getElementById("sidebar");
// const date = document.querySelector("#date");

// shows and hides sidebar
navBtn.addEventListener("click", () => {
    sidebar.classList.add("show-sidebar");
});

closeBtn.addEventListener("click", () => {
    sidebar.classList.remove("show-sidebar");
});

// set year in footer
date.innerHTML = new Date().getFullYear();

// adds fixed class to navbar
window.addEventListener("scroll", () => {
    if (window.pageYOffset > 80) {
        navbar.classList.add("fixed");
    } else {
        navbar.classList.remove("fixed");
    }
});
