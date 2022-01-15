const navigation = document.querySelector('.navigation');

function showActions() {
    navigation.classList.toggle('active');
}

navigation.addEventListener('click', showActions);