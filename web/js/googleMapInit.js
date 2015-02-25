$(document).ready(function () {

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
/* google */
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

/*<iframe width="425" height="350" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com.mx/maps?cid=16619488032421414993&amp;q=Centro+de+Innovaci%C3%B3n+y+Emprendedurismo+CIE&amp;ie=UTF8&amp;hq=&amp;hnear=&amp;t=m&amp;iwloc=A&amp;ll=28.6757,-106.07965&amp;spn=0,0&amp;output=embed"></iframe><br /><small><a href="https://maps.google.com.mx/maps?cid=16619488032421414993&amp;q=Centro+de+Innovaci%C3%B3n+y+Emprendedurismo+CIE&amp;ie=UTF8&amp;hq=&amp;hnear=&amp;t=m&amp;iwloc=A&amp;ll=28.6757,-106.07965&amp;spn=0,0&amp;source=embed" style="color:#0000FF;text-align:left">Ver mapa más grande</a></small>
*/


function initialize() {
    var map_canvas = document.getElementById('googleMap');

    var map_options = {
        center: new google.maps.LatLng(28.644897,-106.066754),
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        scrollwheel: false
    };

    var map = new google.maps.Map(map_canvas, map_options);
    var marker = new google.maps.Marker({
        position: new google.maps.LatLng(28.644897,-106.066754),
        map: map,
        title: 'VTS'
    });
   /* var styles = [
        {
            "featureType": "landscape",
            "stylers": [
                { "visibility": "on" },
                { "color": "#282828" }
            ]
        },
        {
            "featureType": "poi",
            "stylers": [
                { "visibility": "off" }
            ]
        },
        {
            "featureType": "road",
            "stylers": [
                { "color": "#383838" }
            ]
        },
        {
            "elementType": "geometry.stroke",
            "stylers": [
                { "visibility": "off" }
            ]
        },
        {
            "featureType": "poi",
            "elementType": "labels.text.fill",
            "stylers": [
                { "visibility": "on" },
                { "weight": 8 },
                { "hue": "#ff0000" },
                { "color": "#ffffff" }
            ]
        },
        {
            "featureType": "landscape",
            "elementType": "labels.text.stroke",
            "stylers": [
                { "color": "#ffffff" },
                { "visibility": "on" }
            ]
        },
        {
            "featureType": "poi",
            "elementType": "labels.icon",
            "stylers": [
                { "visibility": "on" }
            ]
        },
        {
            "featureType": "water",
            "elementType": "labels.text.fill",
            "stylers": [
                { "visibility": "off" },
                { "color": "#ffffff" }
            ]
        },
        {
            "featureType": "water",
            "elementType": "labels.text.stroke",
            "stylers": [
                { "visibility": "on" },
                { "color": "#ffffff" }
            ]
        },
        {
            "featureType": "water",
            "stylers": [
                { "color": "#004044" }
            ]
        },
        {
        } 
    ]*/
    map.setOptions({styles: styles});
}
google.maps.event.addDomListener(window, 'load', initialize);


});