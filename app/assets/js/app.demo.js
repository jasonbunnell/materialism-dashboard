app.run(['$rootScope', '$analytics', function ($rootScope, $analytics) {
  $rootScope.$on('theme:change', function(event, msg) {
    $analytics.eventTrack(msg, {  category: 'Themepicker' });
  });
}]);
