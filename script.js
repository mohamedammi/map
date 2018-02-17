
var mymap = L.map('mapid').setView([43.29695, 5.38107], 10);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1Ijoia2FpbHgiLCJhIjoiY2pjdWthd3VkMHdoazJ3cGdndHM5bzAwMCJ9.wcf9Wj4vvJij6VY1N2sZsw'
}).addTo(mymap);


var marker = L.marker([43.29695, 5.381070]).addTo(mymap);

var popup = L.popup()
    .setLatLng([43.29695, 5.38107])
    .setContent("I am a standalone popup.")
    .openOn(mymap);

d3.csv("Monuments.csv", function(data) {
  console.log(data[0]);
});
function place(data) {
    var i = 0;
    while (i < data.length) {
        var info1 = data[i].RaisonSociale + "<br>" + data[i].Codepostal + "<br>" + data[i].Ville;
        var marker2 = L.marker([data[i].Latitude, data[i].Longitude]).addTo(mymap);
        marker2.bindPopup(info1);
        i ++;
    }
}