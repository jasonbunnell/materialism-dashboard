app.directive('initRipples', function() {
  return {
    restrict: 'A',
    link: function(scope, element, attrs) {
      var withRipples = [
        '.btn:not(.withoutripple)',
        '.card-image',
        '.navbar a:not(.withoutripple)',
        '.dropdown-menu a',
        '.nav-tabs a:not(.withoutripple)',
        '.withripple'
      ].join(',');

      $(element).find(withRipples).ripples();
    }
  };
});
