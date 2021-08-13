const loadingText = document.querySelector('.loading-text');
const background = document.querySelector('.background');

let load = 0;

const blur = () => {
    load++;

    if (load > 99) {
        clearInterval(interval);
    }

    loadingText.innerHTML = `${load}%`;
    loadingText.style.opacity = (Math.abs((load / 100) - 1)).toFixed(2);
    // loadingText.style.opacity = scale(load, 0, 100, 1, 0);

    background.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;
}

// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
const scale = (num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
  }

let interval = setInterval(blur, 30);
