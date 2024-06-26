let circularProgress = document.querySelector(".circular-progress"),
    progressValue = document.querySelector(".progress-value");

let progressStartValue = 0,
    progressEndValue = 90,
    speed = 25;

let progress = setInterval(() => {
    progressStartValue++;

    progressValue.textContent = `${progressStartValue}%`;
    circularProgress.style.background = `conic-gradient(#40826d ${
        progressStartValue * 3.6
    }deg, #ededed 0deg)`;

    if (progressStartValue == progressEndValue) {
        clearInterval(progress);
    }
}, speed);
