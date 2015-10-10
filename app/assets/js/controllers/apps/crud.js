app.controller('CrudController', ['$scope', '$window', '$aside', 'PlaceholderTextService', function($scope, $window, $aside, PlaceholderTextService){

  // settings
  $scope.settings = {
    singular: 'Item',
    plural: 'Items',
    cmd: 'Add'
  };

  // adding demo data
  var data = [];
  for (var i = 1; i <= 90; i++){
    data.push({
      icon: PlaceholderTextService.createIcon(true),
      firstname: PlaceholderTextService.createFirstname(),
      lastname: PlaceholderTextService.createLastname(),
      paragraph: PlaceholderTextService.createSentence()
    });
  }
  $scope.data = data;

  // defining template
  var formTpl = $aside({
    scope: $scope,
    template: 'assets/tpl/apps/crud-form.html',
    show: false,
    placement: 'left',
    backdrop: false,
    animation: 'am-slide-left'
  });

  // methods
  $scope.checkAll = function () {
    angular.forEach($scope.data, function (item) {
      item.selected = !item.selected;
    });
  };

  $scope.editItem = function(item){
    if(item){
      item.editing = true;
      $scope.item = item;
      $scope.settings.cmd = 'Edit';
      showForm();
    }
  };

  $scope.viewItem = function(item){
    if(item){
      item.editing = false;
      $scope.item = item;
      $scope.settings.cmd = 'View';
      showForm();
    }
  };

  $scope.createItem = function(){
    var item = {
      icon: PlaceholderTextService.createIcon(true),
      editing: true
    };
    $scope.item = item;
    $scope.settings.cmd = 'New';
    showForm();
  };

  $scope.saveItem = function(){
    if($scope.settings.cmd == 'New'){
      $scope.data.push($scope.item);
    }
    hideForm();
  };

  $scope.remove = function(item){
    if(confirm('Are you sure?')){
      if(item){
        $scope.data.splice($scope.data.indexOf(item), 1);
      } else {
        $scope.data = $scope.data.filter(
          function(item) {
            return !item.selected;
          }
        );
        $scope.selectAll = false;
      }
    }
  };

  showForm = function(){
    angular.element('.tooltip').remove();
    formTpl.show();
  };

  hideForm = function(){
    formTpl.hide();
  };

  $scope.$on('$destroy', function() {
    hideForm();
  });

}]);
