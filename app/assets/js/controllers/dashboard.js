app.controller('DashboardController',
  ['$window', '$scope', '$rootScope', '$interval', 'colorService',
  function($window, $scope, $rootScope, $interval, colorService){

  $rootScope.pageTitle = 'Dashboard';

  pattern = [];
  pattern.push(colorService.theme());

  $scope.color_pattern = pattern.join();

  random_load_value = function(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  var values = [];
  for ( i=0; i<30; ++i ){
    values.push(random_load_value(40, 80));
  }

  randomData = function(size, min, max){
    data = [];
    for ( i=0; i<size; ++i ){
      if(data.length){
        factor = 3;
        minOrganic = data[data.length-1]-factor;
        maxOrganic = data[data.length-1]+factor;
        data.push(
          random_load_value(
            minOrganic<min?min:minOrganic,
            maxOrganic>max?max:maxOrganic
          )
        );
      } else {
        data.push(random_load_value(min, max));
      }
    }
    return data;
  };

  $scope.randomDate = function(){
    start = new Date(2012, 0, 1);
    end = new Date();

    date = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
    dateString = date.toLocaleString();
    return dateString;
  };

  $scope.chartData1 = randomData(20, 40, 60);
  $scope.chartData2 = randomData(20, 40, 60);
  $scope.chartData3 = randomData(20, 40, 60);
  $scope.chartData4 = randomData(100, 10, 30);

  // set initial server load
  $scope.serverLoad = values[values.length-1]+'%';

  server_load_options = {
    bindto: '#server-load-chart',
    legend: { show: false },
    padding: {
        top: 6,
        right: -1,
        bottom: -8,
        left: 0
    },
    data: {
      columns: [
        ['Server load'].concat(values),
      ],
      type: 'area'
    },
    size: {
      height: 160
    },
    axis: {
      x: {
        show: false,
        padding: {
          left: 0,
          right: 0
        }
      },
      y: {
        show: false,
        max: 100,
        min: 0,
        padding: {
          top: 0,
          bottom: 0
        }
      }
    },
    grid: {
      focus: { show: false }
    },
    point: { show: false },
    tooltip: {
      format: {
        title: function (d) { return undefined; }, // Disable tooltip header
        value: function (value, ratio, id) {
          return value + '%';
        }
      }
    },
    transition: { duration: 50 },
    color: { pattern: pattern.reverse() }
  };

  var server_load_chart = c3.generate(server_load_options);
  var interval;

  createInterval = function() {
    if(interval) return;

    return $interval(function(){
      v = random_load_value(40, 80);
      $scope.serverLoad = v+'%';
      server_load_chart.flow({
        columns: [['Server load', v]]
      });
    }, 2500);
  };

  cleanInterval = function() {
    if (angular.isDefined(interval)) {
      $interval.cancel(interval);
      interval = false;
    }
  };

  interval = createInterval();
  var window = angular.element($window);
  var prevEvent;

  window.on('blur', function(event) {
    if (prevEvent !== 'blur')
      cleanInterval();
    prevEvent = 'blur';
  });

  window.on('focus', function(event) {
    if (prevEvent !== 'focus')
      interval = createInterval();
    prevEvent = 'focus';
  });

  $scope.$on('$destroy', function() {
    cleanInterval();
  });

  $scope.tabs = ['Log','Timeline','Messages'];

}]);
