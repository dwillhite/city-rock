//google maps api

var map;
//function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 41.885202, lng: -87.631717},
        zoom: 15,
        scrollwheel: false
});

//center map responsively
var centerMap;
function calculateCenter() {
    centerMap = map.getCenter();
    }
        google.maps.event.addDomListener(map, 'idle', function() {
            calculateCenter();
        });
        google.maps.event.addDomListener(window, 'resize', function() {
            map.setCenter(centerMap);

});
//map markers
var chiPosition = {lat: 41.885202, lng: -87.631717};

var chiMarker = new google.maps.Marker ({
    position: chiPosition,
    map: map,
    title: "City Rock"
});



