$(function () {

  if ( $('#full-map-canvas').length > 0 ) {
    new GMaps({
      div: '#full-map',
      lat: 45,
      lng: -73,
      zoom: 8,
      width: '100%',
      height: '100%'
    });
  }

  if ( $('.maps-widgets').length > 0 ) {

    new GMaps({
      div: '#map-basic',
      lat: 45,
      lng: -73,
      zoom: 8,
      height: '350px'
    });

    // map zoomable
    var mz = new GMaps({
      div: '#map-zoomable',
      lat: 52.369371,
      lng: 4.894494,
      zoom: 8,
      height: '350px'
    });

    $('#slider').on({
      slide: function(a,b){
        mz.setZoom(parseInt(b));
      }
    });

    start = $('#slider').data('start');
    min = $('#slider').data('min');
    max = $('#slider').data('max');

    $('#slider').noUiSlider({
      start: start,
      step: 0,
      range:  {
        'min': [ min ],
        'max': [ max ]
      }
    });

    // map searchable
    var ms = new GMaps({
      div: '#map-searchable',
      lat: 40.399516,
      lng: -22.703348,
      zoom: 2,
      height: '350px'
    });

    $('#card-map-searchable button').click(function(e) {
      e.preventDefault();

      GMaps.geocode({
        address: $('#card-map-searchable input').val().trim(),
        callback: function (results, status) {
          if (status == 'OK') {
            var latlng = results[0].geometry.location;
            ms.setCenter(latlng.lat(), latlng.lng());
            ms.addMarker({
              lat: latlng.lat(),
              lng: latlng.lng()
            });
          }
        }
      });

    });

    // map clickable
    var mc = new GMaps({
      div: '#map-clickable',
      lat: 45,
      lng: -73,
      zoom: 2,
      height: '350px'
    });

    var markers = [];
    markers.push({
      id: 0,
      lat: 52.369371,
      lng: 4.894494,
      title: 'Amsterdam'
    });
    markers.push({
      id: 1,
      lat: 40.712942,
      lng: -74.005774,
      title: 'New York'
    });
    markers.push({
      id: 2,
      lat: 41.385196,
      lng: 2.173315,
      title: 'Barcelona'
    });
    markers.push({
      id: 3,
      lat: 37.764355,
      lng: -122.451954,
      title: 'San Francisco'
    });

    mc.addMarkers(markers);

    $("#card-map-clickable .btn-group .btn").click(function(){
      index = $(this).find('input').val();
      var position = mc.markers[index].getPosition();
      lat = position.lat();
      lng = position.lng();
      mc.setCenter(lat, lng);
    });

  }

  // vector maps
  $('.map-canvas').vectorMap({
    map: 'world_mill_en',
    normalizeFunction: 'polynomial',
    hoverOpacity: 0.7,
    hoverColor: false,
    series: {
      regions: [{
        scale: [theme('darken-2'), theme('lighten-2')],
        attribute:'fill'
      }],
    },
    regionStyle: {
      initial: {
        fill: theme()
      }
    },
    markerStyle: {
      initial: {
        stroke: theme_secondary('lighten-1'),
        fill: theme_secondary('darken-1')
      },
      hover: {
        stroke: theme_secondary('lighten-3')
      }
    },
    backgroundColor: 'transparent',
    markers: [
      {latLng: [41.90, 12.45], name: 'Vatican City'},
      {latLng: [43.73, 7.41], name: 'Monaco'},
      {latLng: [-0.52, 166.93], name: 'Nauru'},
      {latLng: [-8.51, 179.21], name: 'Tuvalu'},
      {latLng: [43.93, 12.46], name: 'San Marino'},
      {latLng: [47.14, 9.52], name: 'Liechtenstein'},
      {latLng: [7.11, 171.06], name: 'Marshall Islands'},
      {latLng: [17.3, -62.73], name: 'Saint Kitts and Nevis'},
      {latLng: [3.2, 73.22], name: 'Maldives'},
      {latLng: [35.88, 14.5], name: 'Malta'},
      {latLng: [12.05, -61.75], name: 'Grenada'},
      {latLng: [13.16, -61.23], name: 'Saint Vincent and the Grenadines'},
      {latLng: [13.16, -59.55], name: 'Barbados'},
      {latLng: [17.11, -61.85], name: 'Antigua and Barbuda'},
      {latLng: [-4.61, 55.45], name: 'Seychelles'},
      {latLng: [7.35, 134.46], name: 'Palau'},
      {latLng: [42.5, 1.51], name: 'Andorra'},
      {latLng: [14.01, -60.98], name: 'Saint Lucia'},
      {latLng: [6.91, 158.18], name: 'Federated States of Micronesia'},
      {latLng: [1.3, 103.8], name: 'Singapore'},
      {latLng: [1.46, 173.03], name: 'Kiribati'},
      {latLng: [-21.13, -175.2], name: 'Tonga'},
      {latLng: [15.3, -61.38], name: 'Dominica'},
      {latLng: [-20.2, 57.5], name: 'Mauritius'},
      {latLng: [26.02, 50.55], name: 'Bahrain'},
      {latLng: [0.33, 6.73], name: 'São Tomé and Príncipe'}
    ]
  });

});