var socket = io();

var map = L.map("map").setView([51.505, -0.09], 13);

L.tileLayer("https://b.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
  maxZoom: 18,
  id: "mapbox/streets-v11",
  tileSize: 512,
  zoomOffset: -1,
  accessToken: "your.mapbox.access.token",
}).addTo(map);

map.locate({ enableHighAccuracy: true });
map.on("locationfound", (e) => {
  const coords = [e.latlng.lat, e.latlng.lng];
  const marker = L.marker(coords);
  marker.bindPopup("You are here!");
  map.addLayer(marker);
  socket.emit("UserCoordinates", e.latlng);
});

socket.on("newUser", (coordis) => {
  console.log(coordis);
  const userIcon = L.icon({
    iconUrl: "/img/icon2.png",
    iconSize: [38, 42],
  });

  const newUserMarker = L.marker([coordis.lat + 40, coordis.lng + 40], {
    icon: userIcon,
  });
  newUserMarker.bindPopup("New user!");
  map.addLayer(newUserMarker);
});
/*const marker = L.marker([51.505, -0.09]);
marker.bindPopup("Hello There!");
map.addLayer(marker);
*/
