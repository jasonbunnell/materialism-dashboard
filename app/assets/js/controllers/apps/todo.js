app.controller('TodoController', ['$scope', 'todoService', function($scope, todoService){
  $scope.todoService = new todoService($scope);
}]);
