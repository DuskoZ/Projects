let navLinks = document.querySelectorAll(".slider .nav-link");
let slides = document.querySelectorAll(".slider .slides img");
let overlays = document.querySelectorAll(".slider .bar");
let maxZIndex = navLinks.length;
let easeInOutQuart = "cubic-bezier(0.77, 0, 0.175, 1)";
slides[0].classList.add("active");
navLinks[0].classList.add("active");
