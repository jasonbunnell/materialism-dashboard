app.directive('vectormap', ['colorService', function(colorService) {

  return {
    restrict: 'E',
    'markers': '=markers',
    link: function(scope, element, attrs) {
      var chart = null;
      var markers = scope.markers;

      scope.$watch('datamap', function(n,o){
        if (!chart){
          $(element).width('auto');
          $(element).height('100%');

          options = {
            backgroundColor: 'transparent',
            series: {
              regions: [{
                values: scope.datamap,
                scale: [colorService.theme('darken-2'), colorService.theme('lighten-2')],
                attribute:'fill'
              }],
            },
            regionStyle: {
              initial: {
                fill: colorService.theme()
              }
            },
            markerStyle: {
              initial: {
                stroke: colorService.theme_secondary('lighten-1'),
                fill: colorService.theme_secondary('darken-1')
              },
              hover: {
                stroke: colorService.theme_secondary('lighten-3')
              }
            }
          };

          if (markers !== null) {
            options.markers = markers;
          }

          chart = $(element).vectorMap(options);
        } else {
          chart.vectorMap('get', 'mapObject').series.regions[0].setValues(scope.datamap);
          chart.vectorMap('get', 'mapObject').series.regions[0].setNormalizeFunction('polynomial');
          chart.vectorMap('get', 'mapObject').series.regions[0].setScale([colorService.theme('darken-2'), colorService.theme('lighten-2')]);
        }
      });
    }
  };

}]);
