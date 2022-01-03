const header = document.querySelector('.header-container');
window.addEventListener('scroll', fixNav);

function fixNav() {
    (window.scrollY > header.offsetHeight + 140) ?
        header.classList.add('active')
        : header.classList.remove('active');
}