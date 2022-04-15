const container = document.getElementById("container");
const colorDisplay = document.getElementById("color-display");
const numOfSquares = 945;

for (let i = 0; i < numOfSquares; i++) {
    const square = document.createElement("div");
    square.classList.add("square");

    square.addEventListener("mouseover", () => setColor(square));
    square.addEventListener("mouseout", () => removeColor(square));

    container.appendChild(square);
}

const setColor = (elem) => {
    const color = getRandomColor();
    colorDisplay.innerHTML = color;

    elem.style.background = color;
    elem.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
};

const removeColor = (elem) => {
    elem.style.background = "#2d2d2d";
    elem.style.boxShadow = "0 0 2px #000";
};

const getRandomColor = () => {
    return "#" + Math.floor(Math.random() * 16777215).toString(16);
};
