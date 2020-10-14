const map = L.map('mapid').setView([ -1.34794, -48.3888481], 13);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1Ijoid2VsaXNzb24xMjMiLCJhIjoiY2tnOGlicWNlMGhobjJ4bXVweWpyYXVpbCJ9.RXdJGt3qOn_13vISUix-2Q'
}).addTo(map);

/* Icon */
const icon = L.icon({
    iconUrl: "./public/images/map-marker.svg",
    iconSize:[58,68],
    iconAnchor:[29.68],
    popupAnchor:[10,2],


})

const popup = L.popup({
    closeButton: false,
    className: "map-popup",
    minWidth:240,
    minHeigth:240,
}).setContent('Casa esperança <a href="orphanage.html?id=1" class="choose-orphanage"> <img src="./public/images/arrow-white.svg" > </a> ')

var marker = L.marker([ -1.34794, -48.3888481],{ icon })
.addTo(map);
marker.bindPopup(popup)

