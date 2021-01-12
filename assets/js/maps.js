function initMap() {
    var coordinates = {lat: 57.1384483, lng: 65.6170126},
    popupContent = '<p class="content">Что угодно</p>',
    markerImage = 'assets/img/logo'
    
        map = new google.maps.Map(document.getElementById('maps'), {
            center: coordinates
        });
        marker = new google.maps.Marker({
            position: coordinates,
            map: map,
            animation: google.maps.Animation.BOUNCE,
            icon: markerImage
        });
}