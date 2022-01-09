const header = document.querySelector('.header-container');
window.addEventListener('scroll', fixNav);

function fixNav() {
    (window.scrollY > header.offsetHeight + 140) ?
        header.classList.add('active')
        : header.classList.remove('active');
}

const btn = document.getElementById('menu-btn');
// const nav = document.getElementById('menu');

function navigation() {
    btn.classList.toggle('open');
    // nav.classList.toggle('hidden');
    document.body.classList.toggle('no-scroll');
}

btn.addEventListener('click', navigation);