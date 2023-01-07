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
        });

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
    }
});
