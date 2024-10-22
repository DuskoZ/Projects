const menu = document.querySelector(".menu-btn");
const topLeftSlider = document.querySelector(".top-left-slide");
const bottomLeftSlider = document.querySelector(".bottom-left-slide");

const topRightSlider = document.querySelector(".top-right-slide");
const middleRightSlider = document.querySelector(".middle-right-slide");
const bottomRightSlider = document.querySelector(".bottom-right-slide");

const eksOne = document.querySelector(".eks-one");
const eksTwo = document.querySelector(".eks-two");
const eksThree = document.querySelector(".eks-three");

var isOpen = false;

menu.addEventListener("click", () => {
    topLeftSlider.classList.toggle("top-left-slide-show");
    bottomLeftSlider.classList.toggle("bottom-left-slide-show");
    topRightSlider.classList.toggle("top-right-slide-show");
    middleRightSlider.classList.toggle("middle-right-slide-show");
    bottomRightSlider.classList.toggle("bottom-right-slide-show");
    eksTwo.classList.toggle("eks-two-fade");

    const tl = gsap.timeline();
    const tlEksThree = gsap.timeline();

    isOpen = !isOpen;
});
