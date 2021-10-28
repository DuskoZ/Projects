const listItem = document.querySelectorAll('.list-item');

function setActiveClass() {
    listItem.forEach(item => 
        item.classList.remove('active'));

        this.classList.add('active');
}

listItem.forEach(item =>
    item.addEventListener('mouseover', setActiveClass));

    

