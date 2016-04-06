//Google Maps Setup
var map;

function initMap() {
    var myLatLng = { lat: 42.484992, lng: -96.491806 };

    map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 42.484992, lng: -96.491806 },
        zoom: 12
    });

    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'Dakota Dunes Country Club'
    });

}