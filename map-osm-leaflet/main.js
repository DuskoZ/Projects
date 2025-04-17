var map = L.map("map").setView([44.816441, 20.460208], 14);

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution:
        '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);

navigator.geolocation.watchPosition(success, error);

function success(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const accuracy = position.coords.accuracy;

    let marker = L.marker([lat, lon]).addTo(map);
    let circle = L.circle([lat, lon], { radius: accuracy }).addTo(map);

    // map.setView([lat, lon], 14);
    map.flyTo([lat, lon], 14, { animate: true, duration: 1 });
    marker.bindPopup("You are here").openPopup();
}

function error(err) {
    if (err.code == 1) {
        alert("Please allow location access to use this feature.");
    } else {
        alert("Unable to retrieve your location.");
    }
}
