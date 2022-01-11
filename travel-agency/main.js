const header = document.querySelector('.header-container');
window.addEventListener('scroll', fixNav);

function fixNav() {
    (window.scrollY > header.offsetHeight + 140) ?
        header.classList.add('active')
        : header.classList.remove('active');
}

const btn = document.getElementById('menu-btn');  //hamburger icon
const nav = document.getElementById('menu');      //mobile menu container

function mobileNav() {
    header.classList.add('active')
    btn.classList.toggle('open');
    nav.classList.toggle('hidden');
    document.body.classList.toggle('no-scroll');
}

btn.addEventListener('click', mobileNav);

const mobileMenuItem = document.querySelectorAll('.mobile-nav-item');

function mobileMenuClose() {
    btn.classList.toggle('open');
    nav.classList.toggle('hidden');
    document.body.classList.toggle('no-scroll');

    //popraviti - kada se klikne na prvi element da nestane i pozadinska boja header containera
}

mobileMenuItem.forEach(element => {
    element.addEventListener('click', mobileMenuClose);
});
