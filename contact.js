/**
 * Created by Joran on 14/03/16.
 */
function initMap() {
    var mapDiv = document.getElementById('map');
    var map = new google.maps.Map(mapDiv, {
        center: {lat: 50.965805, lng: 3.123271},
        zoom: 16
    });
}