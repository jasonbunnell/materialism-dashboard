app.controller('TablesBasicController', ['$scope', 'PlaceholderTextService', function($scope, PlaceholderTextService){

  // settings
  $scope.settings = {
    singular: 'Item',
    plural: 'Items',
    cmd: 'Add'
  };

  // adding demo data
  var data = [];
  for (var i = 1; i <= 10; i++){
    data.push({
      icon: PlaceholderTextService.createIcon(true),
      firstname: PlaceholderTextService.createFirstname(),
      lastname: PlaceholderTextService.createLastname(),
      name: PlaceholderTextService.createName(),
      paragraph: PlaceholderTextService.createSentence()
    });
  }
  $scope.data = data;

  // methods
  $scope.checkAll = function () {
    angular.forEach($scope.data, function (item) {
      item.selected = !item.selected;
    });
  };

}]);
