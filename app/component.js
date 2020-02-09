'use strict';
import mapboxgl from 'mapbox-gl';

function hello () {
    var element = document.getElementById('map');
    debugger
    mapboxgl.accessToken = 'pk.eyJ1IjoiZGNsdyIsImEiOiJjazZkaWk4MmcxaXJ5M2pxamExbmZxYjNuIn0.Y1ysE7j7idjKmIFXBsgNNg';
    const map = new mapboxgl.Map({
        container: element,
        style: 'mapbox://styles/mapbox/streets-v9'
    });

};

export default hello
