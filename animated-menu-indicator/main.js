const list = document.querySelectorAll('.list');

function activeNavLink() {
    list.forEach(item => {
        item.classList.remove('active');
        this.classList.add('active');
    });
}

list.forEach(item => {
    item.addEventListener('click', activeNavLink);
});
