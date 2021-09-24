const themeToggle = document.querySelector('.theme-toggle');
const menuToggle = document.querySelector('.menu-toggle');
const body = document.body;
const sideNav = document.querySelector('.nav-list');
const copyright = document.querySelector('.copyright');

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark');
    themeToggle.classList.toggle('active');
});

menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    sideNav.classList.toggle('active');
});
