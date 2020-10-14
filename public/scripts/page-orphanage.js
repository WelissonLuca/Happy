const options = {
    dragging:false,
    touchZoom:false,
    doubleClickZoom:false,
    scrollWheelZoom:false,
    zoomControl:false,  
}

const map = L.map('mapid', options).setView([ -1.34794, -48.3888481], 13);

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



var marker = L.marker([ -1.34794, -48.3888481],{ icon })
.addTo(map);
marker.bindPopup(popup)



function selectImage(event){
    const button = event.currentTarget
    
    const buttons = document.querySelectorAll(".images button")
    
    buttons.forEach(removeActive)
   
    function removeActive(button){
        button.classList.remove("active")
    }

    const image = button.children[0]
    const imageContainer= document.querySelector(".orphanage-details > img")

    imageContainer.src = image.src



    button.classList.add('active')
}
 




















