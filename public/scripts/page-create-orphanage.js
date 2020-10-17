const map = L.map("mapid").setView([-1.34794, -48.3888481], 13);

L.tileLayer(
  "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",
  {
    attribution:
      'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: "mapbox/streets-v11",
    tileSize: 512,
    zoomOffset: -1,
    accessToken:
      "pk.eyJ1Ijoid2VsaXNzb24xMjMiLCJhIjoiY2tnOGlicWNlMGhobjJ4bXVweWpyYXVpbCJ9.RXdJGt3qOn_13vISUix-2Q",
  }
).addTo(map);

/* Icon */
const icon = L.icon({
  iconUrl: "./public/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29.68],
});

let marker;
// create and add marker

map.on("click", (event) => {
  const lat = event.latlng.lat;
  const lng = event.latlng.lng;

  document.querySelector("[name=lat]").value = lat;
  document.querySelector("[name=lng").value = lng;
  // remove icon
  marker && map.removeLayer(marker);

  // add icon layer
  marker = L.marker([lat, lng, { icon }]).addTo(map);
});

//adicioanr campo de fotos
function addPhotoField() {
  const container = document.querySelector("#images");

  const fieldsContainer = document.querySelectorAll(".new-upload");

  const newFieldContainer = fieldsContainer[
    fieldsContainer.length - 1
  ].cloneNode(true);

  const input = newFieldContainer.children[0];

  if (input.value == "") {
    return;
  }
  input.value = "";

  newFieldContainer.children[0].value = "";

  container.appendChild(newFieldContainer);
}

function deleteField(event) {
  const span = event.currentTarget;

  const fieldsContainer = document.querySelectorAll(".new-upload");

  if (fieldsContainer.length <= 1) {
    span.parentNode.children[0].value = "";
    return;
  }

  span.parentNode.remove();
}

//Select yes or no

function toggleSelect(event) {
  document
    .querySelectorAll(".button-select button")
    .forEach((button) => button.classList.remove("active"));

  const button = event.currentTarget;
  button.classList.add("active");

  const input = document.querySelector('[name="open-on-weekends]"');

  input.value = button.dataset.value;
}
