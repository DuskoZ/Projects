const form = document.querySelector(".lorem-form");
const ammount = document.getElementById("ammount");
const result = document.querySelector(".lorem-text");

let text = [
    "Cornhole gluten-free bitters street art semiotics, listicle chicharrones put a bird on it. Squid YOLO fanny pack roof party.  Edison bulb beard ennui freegan, craft beer gastropub master cleanse 90's organic. Vexillologist cloud bread tote bag kale chips fashion axe. VHS tumeric selvage everyday carry, distillery helvetica bitters wolf kombucha shoreditch whatever. Synth pork belly readymade godard, kinfolk jianbing kale chips wolf prism.",
];

form.addEventListener("submit", async function (e) {
    // prevents submision to the server when user clicks on submit button
    e.preventDefault();

    // gets num of paragraphs and creates API url
    const value = parseInt(ammount.value);
    let url = `https://hipsum.co/api/?type=hipster-centric&paras=${value}`;

    async function fetchText() {
        const response = await fetch(url);
        const data = await response.json();

        let myJSON = JSON.stringify(data);
        let jsonData = JSON.parse(myJSON);

        text = Object.values(jsonData);
        // console.log(typeof text, text);
    }

    await fetchText();

    // fetch(url)
    //     .then((response) => response.json())
    //     .then((data) => {
    //         console.log(data);
    //         text = Object.values(data);
    //         console.log(typeof text);
    //     });

    if (isNaN(value) || value < 1) {
        result.innerHTML = `<p class="result">${text[0]}</p>`;
    } else {
        let tempText = text.slice(0, value);
        tempText = tempText
            .map(function (item) {
                return `<p class="result">${item}</p>`;
            })
            .join("");
        // console.log(tempText);
        result.innerHTML = tempText;
    }
});
