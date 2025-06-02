const colorTheme = localStorage.getItem("color-theme") || "light";
const mapContainer = document.getElementById("map");
const toggleThemeButton = document.getElementById("theme-toggle");
let isChecked = false;

toggleThemeButton.addEventListener("click", () => {
    isChecked = toggleThemeButton.checked;

    if (isChecked) {
        mapContainer.classList.add("dark");
        localStorage.setItem("color-theme", "dark");
    } else {
        mapContainer.classList.remove("dark");
        localStorage.setItem("color-theme", "light");
    }
});

if (colorTheme === "dark") {
    mapContainer.classList.add("dark");
} else {
    mapContainer.classList.remove("dark");
}

var map = L.map("map").setView([44.816441, 20.460208], 14);

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution:
        '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);

navigator.geolocation.watchPosition(success, error);

let marker, circle, zoomed;

function success(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const accuracy = position.coords.accuracy;

    if (marker) {
        map.removeLayer(marker);
        map.removeLayer(circle);
    }

    marker = L.marker([lat, lon]).addTo(map);
    circle = L.circle([lat, lon], { radius: accuracy }).addTo(map);

    // map.setView([lat, lon], 14);
    // map.fitBounds(circle.getBounds(), { animate: true, duration: 1 });

    if (!zoomed) {
        zoomed = map.flyTo([lat, lon], 14, { animate: true, duration: 1 });
    }

    map.setView([lat, lon]);
    marker.bindPopup("You are here").openPopup();
}

function error(err) {
    if (err.code == 1) {
        alert("Please allow location access to use this feature.");
    } else {
        alert("Unable to retrieve your location.");
    }
}

function onMapClick(e) {
    alert("You clicked the map at " + e.latlng);
}

map.on("click", onMapClick);
