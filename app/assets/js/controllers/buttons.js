app.controller('ButtonsController', ['$scope', function($scope){

  $scope.colorPalette = [
    'pink','red','purple','indigo','blue',
    'light-blue','cyan','teal','green','light-green',
    'lime','yellow','amber','orange','deep-orange'
  ];

  $scope.colorsVariants = [
    "lighten-5","lighten-4","lighten-3","lighten-2","lighten-1",
    "base",
    "darken-1","darken-2","darken-3","darken-4",
    "accent-1","accent-2","accent-3","accent-4"
  ];

  $scope.buttons = [
    'btn-default','btn-primary','btn-success','btn-info','btn-warning','btn-danger'
  ];

  $scope.buttonTypes = [
    '','btn-flat','btn-round','btn-round btn-flat','btn-border'
  ];

  $scope.buttonSizes = [
    'btn-lg','btn','btn-sm', 'btn-xs'
  ];

}]);

