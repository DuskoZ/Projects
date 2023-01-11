// DOM elements
const form = document.querySelector("#search-form");
const input = document.querySelector("#search-term");
const msg = document.querySelector(".form-msg");
const list = document.querySelector(".cities");

// Get your OpenWeather API key: https://home.openweathermap.org/users/sign_up
const apiKey = "4d8fb5b93d4af21d66a2948710284366";

form.addEventListener("submit", (e) => {
    e.preventDefault();

    msg.textContent = "";
    msg.classList.remove("visible");

    let inputVal = input.value;

    // Check if there's a city that matches the search term
    const listItemsArray = Array.from(list.querySelectorAll(".cities li"));

    if (listItemsArray.length > 0) {
        const filteredArray = listItemsArray.filter((elem) => {
            let content = "";
            let cityName = elem
                .querySelector(".city__name")
                .textContent.toLowerCase();

            let cityCountry = elem
                .querySelector(".city__country")
                .textContent.toLowerCase();

            // Check for the format <city, country>
            if (inputVal.includes(",")) {
                // If the country code is invalid (ex. berlin, deee), keep only the city name
                if (inputVal.split(",")[1].length > 2) {
                    inputVal = inputVal.split(",")[0];

                    // Get the content from the existing city
                    content = cityName;
                } else {
                    // Country code is valid so keep both city and country
                    content = `${cityName},${cityCountry}`;
                }
            } else {
                // Only the <city> format is used
                content = cityName;
            }

            // Return whether or not the existing content matches the form input value
            return content == inputVal.toLowerCase();
        });

        // If filteredArray is not blank, we have matches so we show a message and exit
        if (filteredArray.length > 0) {
            msg.textContent = `You already know the weather for ${
                filteredArray[0].querySelector(".city__name").textContent
            } ...otherwise be more specific by providing the country code as well 😉`;

            msg.classList.add("visible");

            form.reset();
            input.focus();

            return;
        }
    }

    // AJAX url
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputVal}&appid=${apiKey}&units=metric`;

    // Fetching the data
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            // If we get a 404 code, throw an error
            if (data.cod == "404") {
                throw new Error(`${data.cod}, ${data.message}`);
            }

            // Let's destructure the data object
            const { main, name, sys, weather } = data;

            // Define the icon location
            const icon = `img/weather/${weather[0]["icon"]}.svg`;

            // Create the list item for the new city
            const li = document.createElement("li");

            // Define markup
            const markup = `
				<figure>
					<img src="${icon}" alt="${weather[0]["description"]}">
				</figure>

				<div>
					<h2>${Math.round(main.temp)}<sup>°C</sup></h2>
					<p class="city__conditions">${weather[0]["description"].toUpperCase()}</p>
					<h3><span class="city__name">${name}</span><span class="city__country">${
                sys.country
            }</span></h3>
				</div>
			`;

            // Add the new markup to the list item
            li.innerHTML = markup;

            // Add the new list item to the page
            list.appendChild(li);
        });
});
