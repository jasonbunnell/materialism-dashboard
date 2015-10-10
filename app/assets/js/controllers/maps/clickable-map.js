app.controller('ClickableMapController', ['$scope', function($scope) {
  $scope.map = { center: { latitude: 40.399516, longitude: -22.703348 }, zoom: 2 };

  $scope.centerOn = function(lat, lng){
    $scope.map.center = { latitude: lat, longitude: lng };
  };

  var markers = [];

  markers.push({
    id: 0,
    latitude: 52.369371,
    longitude: 4.894494,
    title: 'Amsterdam'
  });
  markers.push({
    id: 1,
    latitude: 40.712942,
    longitude: -74.005774,
    title: 'New York'
  });
  markers.push({
    id: 2,
    latitude: 41.385196,
    longitude: 2.173315,
    title: 'Barcelona'
  });
  markers.push({
    id: 3,
    latitude: 37.764355,
    longitude: -122.451954,
    title: 'San Francisco'
  });



  $scope.markers = markers;
}]);
