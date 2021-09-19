const body = document.body;
const slides = document.querySelectorAll('.slide');
const leftBtn = document.getElementById('left');
const rightBtn = document.getElementById('right');

let activeSlide = 0;

leftBtn.addEventListener('click', () => {
    activeSlide--;

    if (activeSlide < 0) {
        activeSlide = slides.length - 1;
    };

    setBodyBg();
    setActiveSlide();
});

rightBtn.addEventListener('click', () => {
    activeSlide++;

    if (activeSlide > slides.length - 1) {
        activeSlide = 0;
    };

    setBodyBg();
    setActiveSlide();
});

function setBodyBg() {
    body.style.backgroundImage = slides[activeSlide].style.backgroundImage;
}

setBodyBg();

function setActiveSlide() {
    slides.forEach(slide => slide.classList.remove('active'));

    slides[activeSlide].classList.add('active');
}
