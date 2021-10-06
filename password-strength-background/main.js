const pass = document.getElementById('password');
const bg = document.getElementById('background');

pass.addEventListener('input', (e) => {
    const input = e.target.value;
    const length = input.length;
    const blurValue = 20 - length * 2;
    background.style.filter = `blur(${blurValue}px)`;
});