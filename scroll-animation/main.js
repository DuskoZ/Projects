const boxes = document.querySelectorAll('.box');

window.addEventListener('scroll', scrollBoxes);

scrollBoxes();

function scrollBoxes() {
    const bottomTrigger = window.innerHeight / 5 * 4;

    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top;

        (boxTop < bottomTrigger) ?
            box.classList.add('show') :
            box.classList.remove('show');
    });
}