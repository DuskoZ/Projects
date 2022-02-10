const form = document.querySelector(".lorem-form");
const ammount = document.getElementById("ammount");
const result = document.querySelector(".lorem-text");

let text = [];

form.addEventListener("submit", function (e) {
    // prevents submision to the server when user clicks on submit button
    e.preventDefault();

    const value = parseInt(ammount.value);

    let url = `https://hipsum.co/api/?type=hipster-centric&paras=${value}`;

    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            text = Object.values(data);
            console.log(typeof text);
        });

    console.log(text.length);

    const random = Math.floor(Math.random() * text.length);

    if (isNaN(value) || value < 1) {
        result.innerHTML = `<p class="result">${text[random]}</p>`;
    } else {
        let tempText = text.slice(0, value);
        tempText = tempText
            .map(function (item) {
                return `<p class="result">${item}</p>`;
            })
            .join("");
        result.innerHTML = tempText;
    }
});
