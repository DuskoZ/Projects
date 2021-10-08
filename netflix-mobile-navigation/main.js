const open = document.querySelector('.open-btn');
const close = document.querySelector('.close-btn');
const nav = document.querySelectorAll('.nav');

open.addEventListener('click', () => {
    nav.forEach(elem => elem.classList.add('visible'));
});

close.addEventListener('click', () => {
    nav.forEach(elem => elem.classList.remove('visible'));
});



