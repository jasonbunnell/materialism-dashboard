app.controller('SearchableMapController', ['$scope', 'uiGmapGoogleMapApi', function($scope, uiGmapGoogleMapApi) {
  $scope.map = {
    center: {
      latitude: 40.399516,
      longitude: -22.703348
    },
    control: {},
    zoom: 2
  };

  uiGmapGoogleMapApi.then(function(maps) {
    $scope.searchFor = function(query) {
      geocoder = new maps.Geocoder();
      geocoder.geocode( { address: query }, function(results, status) {
        if (status == maps.GeocoderStatus.OK) {
          var latlng = results[0].geometry.location;
          $scope.map.control.refresh({latitude: latlng.lat(), longitude: latlng.lng()});
          $scope.map.control.getGMap().setZoom(6);
        }
      });
    };
  });
}]);
