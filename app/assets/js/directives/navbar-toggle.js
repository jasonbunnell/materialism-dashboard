app.directive('navbarToggle', function() {
  return {
    restrict: 'C',
    link: function(scope, element, attrs) {
      element.sideNav({ menuWidth: 260, closeOnClick: true });
    }
  };
});
