app.directive('cardFlip', function() {
  return {
    restrict: 'C',
    link: function(scope, element, attrs) {
      element.find('.btn-flip, .card-image').on('click', function(){
        element.find('.card-reveal').toggleClass('active');
      });
    }
  };
});
