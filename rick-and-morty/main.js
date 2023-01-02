const anchor = document.getElementById("anchor");
const eyes = document.querySelectorAll(".eye");
const rect = anchor.getBoundingClientRect();

const anchorX = rect.left + rect.width / 2;
const anchorY = rect.top + rect.height / 2;

document.addEventListener("mousemove", (e) => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    const angleDeg = angle(mouseX, mouseY, anchorX, anchorY);
    // console.log(angleDeg);

    eyes.forEach((eye) => {
        eye.style.transform = `rotate(${90 + angleDeg}deg)`;
        anchor.style.filter = `hue-rotate(${angleDeg}deg)`;
    });
});

function angle(cx, cy, ex, ey) {
    const dy = ey - cy;
    const dx = ex - cx;

    const rad = Math.atan2(dy, dx); // In radians
    const deg = (rad * 180) / Math.PI;

    return deg;
}
