app.directive('todoWidget', ['todoService', function(todoService) {
  return {
    restrict: 'EA',
    templateUrl: 'assets/tpl/directives/todo-widget.html',
    replace: true,
    link: function($scope, $element) {
      $scope.todoService = new todoService($scope);
    }
  };
}]);
