const cityInput = document.querySelector(".city-input");
const searchButton = document.querySelector(".search-btn");
const locationButton = document.querySelector(".location-btn");
const currentWeatherDiv = document.querySelector(".current-weather");
const weatherCardsDiv = document.querySelector(".weather-cards");

const API_KEY = ""; // API key for OpenWeatherMap API

const getUserCoordinates = () => {
    navigator.geolocation.getCurrentPosition(
        (position) => {
            const { latitude, longitude } = position.coords; // Get coordinates of user location
            // Get city name from coordinates using reverse geocoding API
            const API_URL = `https://api.openweathermap.org/geo/1.0/reverse?lat=${latitude}&lon=${longitude}&limit=1&appid=${API_KEY}`;
            fetch(API_URL)
                .then((response) => response.json())
                .then((data) => {
                    const { name } = data[0];
                    getWeatherDetails(name, latitude, longitude);
                })
                .catch(() => {
                    alert("An error occurred while fetching the city name!");
                });
        },
        (error) => {
            // Show alert if user denied the location permission
            if (error.code === error.PERMISSION_DENIED) {
                alert(
                    "Geolocation request denied. Please reset location permission to grant access again."
                );
            } else {
                alert(
                    "Geolocation request error. Please reset location permission."
                );
            }
        }
    );
};

locationButton.addEventListener("click", getUserCoordinates);
searchButton.addEventListener("click", getCityCoordinates);
cityInput.addEventListener(
    "keyup",
    (e) => e.key === "Enter" && getCityCoordinates()
);
