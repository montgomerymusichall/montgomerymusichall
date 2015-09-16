(function (window, $, musichall) {
    "use strict";
    if (!$) {
        throw 'jQuery not found.';   
    }
    
    var getMap = function (locLatLng) {
        return new google.maps.Map(document.getElementById('map'), {
            zoom: 15,
            center: locLatLng
        });
    };
    
    var getPanorama = function (locLatLng) {
        return new google.maps.StreetViewPanorama(
            document.getElementById('pano'), {
            position: locLatLng,
            pov: {
              heading: 260,
              pitch: 10
            }
        });
    };
    
    var getMarker = function (map, locLatLng) {
        return new google.maps.Marker({
            position: locLatLng,
            map: map,
            title: 'Montgomery Music Hall'
        });
    };
    
    var getInfoWindow = function () {
        return new google.maps.InfoWindow({
            content: '<b style="font-size: 16px">Montgomery Music Hall</b><br>219 McDonough Street Montgomery, AL 36104<br><br><b>Coming Soon in 2015!</b><br><br>Hours of operation:  <b>TBD</b>'
        });
    };
    
    musichall.location = {
        marker: null,
        map: null,
        panorama: null,
        infoWindow: null,
        locLatLng: {lat: 32.380599, lng: -86.305114},
        initialize: function() {
            musichall.location.map = getMap(musichall.location.locLatLng);
            musichall.location.panorama = getPanorama(musichall.location.locLatLng);
            
            musichall.location.map.setStreetView(musichall.location.panorama);

            musichall.location.marker = getMarker(musichall.location.map, musichall.location.locLatLng);

            musichall.location.infoWindow = getInfoWindow(); 
            musichall.location.infoWindow.open(musichall.location.map, musichall.location.marker);
            
            var that = musichall.location;
            google.maps.event.addListener(musichall.location.marker, 'click', function () {
                that.infoWindow.open(that.map, that.marker);
            });  
        }
    };
    
    google.maps.event.addDomListener(window, 'load', musichall.location.initialize);
    
})(window, jQuery, window.musichall = window.musichall || {});

