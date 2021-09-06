const steps = document.querySelectorAll('.step');
const progress = document.getElementById('progress');
const prev = document.getElementById('prev');
const next = document.getElementById('next');

let currentActive = 1;

next.addEventListener('click', () => {
    currentActive++;

    if (currentActive > steps.length) {
        currentActive = steps.length;
    }

    update();
});

prev.addEventListener('click', () => {
    currentActive--;

    if (currentActive < 1) {
        currentActive = 1;
    }

    update();
});

function update() {
    steps.forEach((step, idx) => {
        (idx < currentActive) ?
            step.classList.add('active') :
            step.classList.remove('active');
    });

    const activeSteps = document.querySelectorAll('.active');

    //counts width of the progress line, e.g. 33.3%, 66.6%, 100%
    progress.style.width = ((activeSteps.length - 1) / (steps.length - 1) * 100).toFixed(1) + '%';
    console.log(progress.style.width);

    if (currentActive === 1) {
        prev.disabled = true;
    } else if (currentActive === steps.length) {
        next.disabled = true;
    } else {
        prev.disabled = false;
        next.disabled = false;
    }
}