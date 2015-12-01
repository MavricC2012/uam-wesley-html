//site.js//
var marker;

function toggleBounce() {
    "use strict";
    if (marker.getAnimation() !== null) {
        marker.setAnimation(null);
    } else {
        marker.setAnimation(google.maps.Animation.BOUNCE);
    }
}

function initMap() {
    "use strict";
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 16,
        center: {
            lat: 33.5883,
            lng: -91.8131
        }
    });

    marker = new google.maps.Marker({
        map: map,
        draggable: true,
        title: "UAM Wesley",
        animation: google.maps.Animation.DROP,
        position: {
            lat: 33.5883,
            lng: -91.8131
        }
    });
    marker.addListener('click', toggleBounce);
}
