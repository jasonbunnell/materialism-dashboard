app.directive('nouiSlider', function() {

  return {
    restrict: 'A',
    link: function(scope, element, attrs) {

      var bind = angular.element(attrs.bind);
      var bindRange = angular.element(attrs.bindRange);
      var indicator = angular.element(attrs.indicator);

      if ( bind.length ) start = bind.val();

      // setting range or start
      start = ( attrs.start ? attrs.start : 0 );
      range = ( attrs.range ? attrs.range : 0 );

      if(range){
        startPoint = [start, range];
        element.addClass('noUi-range');
      } else {
        startPoint = [start];
      }

      // settings
      step = ( attrs.step ? parseInt(attrs.step) : 0 );
      min = ( attrs.min ? parseInt(attrs.min) : 0 );
      max = ( attrs.max ? parseInt(attrs.max) : 10 );

      $(element).noUiSlider({
        start: startPoint,
        step: step,
        range: {
          'min': [ min ],
          'max': [ max ]
        }
      });

      if ( indicator.selector === 'true' ) {
        $(element).on('slide set change', function(a,b){
          if( !$(this).find('.noUi-handle div').length ){
            $(this).find('.noUi-handle').append('<div>'+b+'</div>');
          }
          $(this).find('.noUi-handle div').html(b);
        });
      }

      $(element).on('slide', function(a,b){

        if ( bindRange.length ) {
          v = parseInt(b[0]);
          v2 = parseInt(b[1]);
        } else {
          v = parseInt(b);
        }

        if ( bind.length ) {
          if (bind[0].value !== undefined) {
            bind.val(v);
          } else {
            bind.html(v);
          }
        }

        if ( bindRange.length ) {
          if (bindRange[0].value !== undefined) {
            bindRange.val(v2);
          } else {
            bindRange.html(v2);
          }
        }
      });
    }
  };

});
