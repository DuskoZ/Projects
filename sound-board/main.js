const randomColor = () => {
    return Math.floor(Math.random()*16777215).toString(16);
}

// https://stackoverflow.com/questions/23095637/how-do-you-get-random-rgb-in-javascript
function random_rgba() {
    let o = Math.round, r = Math.random, s = 255;
    return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
}

const angle = () => {
    return Math.floor(Math.random() * 360);
}

function randomGradient() {
    let deg = angle() + 'deg';
    let color1 = random_rgba();
    let color2 = random_rgba();
    
    // let gradient = `linear-gradient(${deg}, ${color1}, ${color2});`
    // let gradient = `linear-gradient(${angle()}deg, ${random_rgba()}, ${random_rgba()});`;
    // let gradient = `linear-gradient(${angle()}deg, #${randomColor()}, #${randomColor()});`;
    
    let gradient = 'linear-gradient(' + deg + ',' + color1 + ', '+ color2;

    document.body.style.background = gradient;

    return gradient;
}

const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong'];

sounds.forEach(sound => {
    const btn = document.createElement('button');
    btn.classList.add('btn');

    btn.innerText = sound;

    btn.addEventListener('click', () => {
        stopSongs();

        document.getElementById(sound).play();

        btn.style.background = randomGradient();
        // btn.style.background = random_rgba();
    });

    document.getElementById('buttons').appendChild(btn);
});

function stopSongs() {
    sounds.forEach(sound => {
        const song = document.getElementById(sound);

        song.pause();
        song.currentTime = 0;
    });
};

