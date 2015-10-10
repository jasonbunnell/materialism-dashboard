app.controller('ChartsController', ['$scope', '$interval', 'colorService', function($scope, $interval, colorService){

  pattern = [];
  pattern.push(colorService.brand_success());
  pattern.push(colorService.brand_primary());
  pattern.push(colorService.brand_info());
  pattern.push(colorService.brand_warning());
  pattern.push(colorService.brand_danger());

  $scope.color_pattern = pattern.join();

  guage_options = {
    data: {
      columns: [
        ['data', 50]
      ],
      type: 'gauge'
    },
    transition: {
      duration: 500
    },
    color: {
      pattern: pattern.reverse(),
      threshold: {
        values: [20, 50, 70, 100, 110]
      }
    }
  };

  var load_options = jQuery.extend({}, guage_options);
  var cpu_options = jQuery.extend({}, guage_options);
  var mem_options = jQuery.extend({}, guage_options);

  load_options.bindto = '#load-chart';
  cpu_options.bindto = '#cpu-chart';
  mem_options.bindto = '#mem-chart';

  var load_chart = c3.generate(load_options);
  var cpu_chart = c3.generate(cpu_options);
  var mem_chart = c3.generate(mem_options);

  interval = $interval(function(){
    load_chart.load({
      columns: [['data', Math.floor((Math.random() * 100) + 1)]]
    });
    cpu_chart.load({
      columns: [['data', Math.floor((Math.random() * 100) + 1)]]
    });
    mem_chart.load({
      columns: [['data', Math.floor((Math.random() * 100) + 1)]]
    });
  }, 2000);

  $scope.$on('$destroy', function() {
    if (angular.isDefined(interval)) {
      $interval.cancel(interval);
      interval = undefined;
    }
  });

}]);
