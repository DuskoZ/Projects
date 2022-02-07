const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];

const weekdays = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
];

const giveaway = document.querySelector(".giveaway");
const deadline = document.querySelector(".deadline");
const digits = document.querySelectorAll(".digit");
// console.log(digits);

let tempDate = new Date();
let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
let tempDay = tempDate.getDate();

// months are ZERO index based;
const futureDate = new Date(tempYear, tempMonth, tempDay + 10, 11, 30, 0);

const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();
// console.log(year, hours, minutes);

let month = futureDate.getMonth();
month = months[month];
const weekday = weekdays[futureDate.getDay()];
const date = futureDate.getDate();
// console.log(month, weekday, date);

// change date value in h3.giveaway on page load
giveaway.textContent = `giveaway ends on ${weekday}, ${date} ${month} ${year} ${hours}:${minutes}am`;

const futureTime = futureDate.getTime();

function getRemainingTime() {
    const today = new Date().getTime();

    const tempTime = futureTime - today;
    // values are in miliseconds
    // console.log(today, tempTime);

    // 1s = 1000ms
    // 1m = 60s
    // 1hr = 60m
    // 1d = 24hr

    const oneMinute = 60 * 1000;
    const oneHour = 60 * 60 * 1000;
    const oneDay = 24 * 60 * 60 * 1000;

    // calculate remaining time values
    let days = Math.floor(tempTime / oneDay);
    let hours = Math.floor((tempTime % oneDay) / oneHour);
    let minutes = Math.floor((tempTime % oneHour) / oneMinute);
    let seconds = Math.floor((tempTime % oneMinute) / 1000);
    // console.log(days, hours, minutes, seconds);

    // set values array
    const values = [days, hours, minutes, seconds];

    // helper function - adds 0 in front if number is < 10
    function format(item) {
        if (item < 10) {
            return (item = `0${item}`);
        }
        return item;
    }

    digits.forEach(function (item, index) {
        item.innerHTML = format(values[index]);
    });

    if (tempTime < 0) {
        clearInterval(countdown);
        deadline.innerHTML = `<h4 class="expired">Sorry, this giveaway has expired!</h4>`;
    }
}

// set initial values
getRemainingTime();

// update remaining time every 1s
let countdown = setInterval(getRemainingTime, 1000);
