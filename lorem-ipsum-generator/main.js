const form = document.querySelector(".lorem-form");
const ammount = document.getElementById("ammount");
const result = document.querySelector(".lorem-text");
const numLabel = document.getElementById("num");

let text = [
    "Cornhole gluten-free bitters street art semiotics, listicle chicharrones put a bird on it. Squid YOLO fanny pack roof party. Edison bulb beard ennui freegan, craft beer gastropub master cleanse 90's organic. Vexillologist cloud bread tote bag kale chips fashion axe. VHS tumeric selvage everyday carry, distillery helvetica bitters wolf kombucha shoreditch whatever. Synth pork belly readymade godard, kinfolk jianbing kale chips wolf prism.",
];

// changes label value between "Num of paragraphs:", "Num of sentences:" and "Num of words:"
const radios = document.querySelectorAll('input[type="radio"]');
radios.forEach((radio) => {
    radio.addEventListener("click", (e) => {
        numLabel.innerHTML = `Num of ${e.target.value}s:`;
    });
});

form.addEventListener("submit", async function (e) {
    // prevents submision to the server when user clicks on submit button
    e.preventDefault();

    // gets user's choice - and sets variable which will be used in API url
    const type = document.querySelector('input[name="type"]:checked').value;
    let typeOfText = "";
    type === "sentence" ? (typeOfText = "sentences") : (typeOfText = "paras");

    // gets num of paragraphs/sentences/words and creates API url
    const value = parseInt(ammount.value);
    let url = "";

    // if the type is "word", it gets 10 paragraphs and later checks is it enough words, API doesn't support words as url parameter
    if (type === "word") {
        url = `https://hipsum.co/api/?type=hipster-centric&paras=10`;
    } else {
        url = `https://hipsum.co/api/?type=hipster-centric&${typeOfText}=${value}`;
    }

    // gets text from API
    async function fetchText() {
        const response = await fetch(url);
        const data = await response.json();

        let myJSON = JSON.stringify(data);
        let jsonData = JSON.parse(myJSON);

        return jsonData;
    }

    text = Object.values(await fetchText());

    // joins paragraphs then splits into words and filters empty strings from the array
    const cleanArray = (textArray) => {
        return textArray
            .join(" ")
            .split(" ")
            .filter((elem) => elem != "");
    };

    // if the last word ends with "," eliminates it
    // checks if "." is the last character and adds it if not
    const checkLastWord = (textArray) => {
        let lastWordIndex = textArray.length - 1;
        const lastWordLength = textArray[lastWordIndex].length;

        if (textArray[lastWordIndex][lastWordLength - 1] === ",") {
            let temp = textArray[textArray.length - 1];
            textArray.pop();

            temp = temp
                .split("")
                .filter((elem) => elem !== ",")
                .join("");
            textArray.push(temp);
        }

        if (textArray[lastWordIndex][lastWordLength - 1] !== ".") {
            textArray[textArray.length - 1] += ".";
        }

        return textArray;
    };

    // displays result, depending of user choice - word, paragraph, sentence, also prevents potential bad input
    if (isNaN(value) || value < 1) {
        result.innerHTML = `<p class="result">${text[0]}</p>`;
    } else if (type === "word") {
        let tempText = [];
        let tempArray = cleanArray(text);

        if (tempArray.length >= value) {
            // gets desired word count, checks last element and calls helper function
            tempText = tempArray.slice(0, value);
            tempText = checkLastWord(tempText).join(" ");
        } else {
            // if the array length is less than desired number of words calls fetch func
            let fetchMoreWords = Object.values(await fetchText());
            fetchMoreWords = cleanArray(fetchMoreWords);
            tempText.push(fetchMoreWords);

            tempText = tempArray.slice(0, value);
            tempText = checkLastWord(tempText).join(" ");
        }

        result.innerHTML = `<p class="result">${tempText}</p>`;
    } else {
        // if user selects paragraphs or sentences
        let tempText = text.slice(0, value);
        tempText = tempText
            .map(function (item) {
                return `<p class="result">${item}</p>`;
            })
            .join("");

        result.innerHTML = tempText;
    }
});

// Notes
// v0.1
// added basic API call which gets desired num of paragraphs

// v0.2
// added choice between paragraphs and sentences

// v0.3
// added third option for a desired number of words

// v0.4
// string bug fixes, ",", ".", ""
