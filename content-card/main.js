const header = document.getElementById('header');
const title = document.getElementById('title');
const description = document.getElementById('description');
const profileImg = document.getElementById('profile-img');
const name = document.getElementById('name');
const date = document.getElementById('date');

const animated_bgs = document.querySelectorAll('.animated-bg');
const animated_bg_texts = document.querySelectorAll('.animated-bg-text');

const getData = () => {
    header.innerHTML = '<img src="./laptop.jpg" alt="laptop on a desk"></img>'
    title.innerHTML = 'Lorem ipsum dolor sit amet.';
    description.innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, quas!';
    profileImg.innerHTML = '<img src="https://randomuser.me/api/portraits/men/23.jpg" alt="profile photo">';
    name.innerHTML = 'Dusko Z.';
    date.innerHTML = '12.9.2021.';

    animated_bgs.forEach(bg => bg.classList.remove('animated-bg'));
    animated_bg_texts.forEach(bg => bg.classList.remove('animated-bg-text'));
}

setTimeout(getData, 2500);