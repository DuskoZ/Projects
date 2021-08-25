const cards = document.querySelectorAll('.card');

cards.forEach(card => {
    card.addEventListener('click', () => {
        removeActiveClasses();
        card.classList.add('active');    
    });
});

const removeActiveClasses = () => {
    cards.forEach(card => {
        card.classList.remove('active');
    });
}

