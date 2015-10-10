app.controller('ColorsController', ['$scope', function($scope){

  angular.forEach(angular.element(".dynamic-color .col-md-4 div"), function(element){

    var elem = angular.element(element);
    var cls = elem.attr('class');

    var piece = cls.split(' ');

    if(piece[1] === undefined){
      piece[1] = 'base';
    }

    elem.html(piece[0]);
    elem.append('<div class="pull-right">'+piece[1]+'</div>');

    if(piece[1] == "darken-4"){
      elem.after('<br/>');
    }
  });

}]);