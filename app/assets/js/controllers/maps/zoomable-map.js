app.controller('ZoomableMapController', ['$scope', function($scope) {
  $scope.zoomed_from_slider = false;
  $scope.map = {
    center: {
      latitude: 52.369371,
      longitude: 4.894494
    },
    control: {},
    events: {
      zoom_changed: function(maps, eventName, args) {
        if ($scope.zoomed_from_slider === false) {
          zoom = $scope.getMapInstance().getZoom();
          $('#slider').val(zoom);
        } else {
          $scope.zoomed_from_slider = false;
        }
      }
    },
    zoom: 6
  };

  $('#slider').on({
    slide: function(a,b){
      $scope.zoomed_from_slider = true;
      $scope.getMapInstance().setZoom(parseInt(b));
    }
  });

  $scope.getMapInstance = function () {
    return $scope.map.control.getGMap();
  };
}]);
