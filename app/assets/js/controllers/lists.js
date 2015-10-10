app.controller('ListsController', ['$scope', '$routeParams', '$http', function($scope, $routeParams, $http){
  $('#range').on('slide set', function(a,b){
    if(!$(this).find('.noUi-handle div').length){
      $(this).find('.noUi-handle').append('<div>'+b+'</div>');
    }
    $(this).find('.noUi-handle div').html(b);
  });
}]);
