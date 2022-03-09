const year = document.querySelectorAll(".year");
const navBtn = document.getElementById("nav-toggle");
const links = document.getElementById("nav-links");
const scrollLinks = document.querySelectorAll(".scroll-link");

// set year in tour dates and in copyright at the end of the page
year.forEach((spanEl) => {
    spanEl.innerHTML = new Date().getFullYear();
});

// add event listener on hamburger menu
navBtn.addEventListener("click", () => {
    links.classList.toggle("show-links");
});

// fixes "landing" position when user clicks on nav link
scrollLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
        // prevent default
        e.preventDefault();
        // hides menu when user clicks on nav link
        links.classList.remove("show-links");

        const id = e.target.getAttribute("href").slice(1);
        const element = document.getElementById(id);

        let position = element.offsetTop - 64;

        window.scrollTo({
            left: 0,
            top: position,
            behavior: "smooth",
        });
    });
});
