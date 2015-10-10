app.controller('TablesDataController', ['$scope', 'PlaceholderTextService', 'ngTableParams', '$filter', function($scope, PlaceholderTextService, ngTableParams, $filter){

  // adding demo data
  var data = [];
  for (var i = 1; i <= 50; i++){
    data.push({
      icon: PlaceholderTextService.createIcon(),
      firstname: PlaceholderTextService.createFirstname(),
      lastname: PlaceholderTextService.createLastname(),
      paragraph: PlaceholderTextService.createSentence()
    });
  }
  $scope.data = data;

  $scope.tableParams = new ngTableParams({
    page: 1,            // show first page
    count: 10,
    sorting: {
      firstname: 'asc'     // initial sorting
    }
  }, {
    filterDelay: 50,
    total: data.length, // length of data
    getData: function($defer, params) {
      var searchStr = params.filter().search;
      var mydata = [];

      if(searchStr){
        searchStr = searchStr.toLowerCase();
        mydata = data.filter(function(item){
          return item.firstname.toLowerCase().indexOf(searchStr) > -1 || item.lastname.toLowerCase().indexOf(searchStr) > -1;
        });

      } else {
        mydata = data;
      }

      mydata = params.sorting() ? $filter('orderBy')(mydata, params.orderBy()) : mydata;
      $defer.resolve(mydata.slice((params.page() - 1) * params.count(), params.page() * params.count()));
    }
  });


}]);
