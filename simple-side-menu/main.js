const btn = document.getElementById('menu-btn');

function navigation() {
    btn.classList.toggle('open');
    document.body.classList.toggle('no-scroll');
}

btn.addEventListener('click', navigation);