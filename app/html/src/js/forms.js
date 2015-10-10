$(function () {
  people = [
    { id: 0, name: 'Adam',      email: 'adam@email.com',      age: 12, country: 'United States' },
    { id: 1, name: 'Amalie',    email: 'amalie@email.com',    age: 12, country: 'Argentina' },
    { id: 2, name: 'Estefanía', email: 'estefania@email.com', age: 21, country: 'Argentina' },
    { id: 3, name: 'Adrian',    email: 'adrian@email.com',    age: 21, country: 'Ecuador' },
    { id: 4, name: 'Wladimir',  email: 'wladimir@email.com',  age: 30, country: 'Ecuador' },
    { id: 5, name: 'Samantha',  email: 'samantha@email.com',  age: 30, country: 'United States' },
    { id: 6, name: 'Nicole',    email: 'nicole@email.com',    age: 43, country: 'Colombia' },
    { id: 7, name: 'Natasha',   email: 'natasha@email.com',   age: 54, country: 'Ecuador' },
    { id: 8, name: 'Michael',   email: 'michael@email.com',   age: 15, country: 'Colombia' },
    { id: 9, name: 'Nicolás',   email: 'nicolas@email.com',   age: 43, country: 'Colombia' }
  ];
  colors = ['Red','Green','Blue','Yellow','Magenta','Maroon','Umbra','Turquoise'];
  states = ['Alabama','Alaska','Arizona','Arkansas','California','Colorado','Connecticut','Delaware','Florida','Georgia','Hawaii','Idaho','Illinois','Indiana','Iowa','Kansas','Kentucky','Louisiana','Maine','Maryland','Massachusetts','Michigan','Minnesota','Mississippi','Missouri','Montana','Nebraska','Nevada','New Hampshire','New Jersey','New Mexico','New York','North Dakota','North Carolina','Ohio','Oklahoma','Oregon','Pennsylvania','Rhode Island','South Carolina','South Dakota','Tennessee','Texas','Utah','Vermont','Virginia','Washington','West Virginia','Wisconsin','Wyoming'];

  templateSelection = function(selection) {
    return selection.name;
  };
  templateResult = function(result) {
    template = $('<div>' +
                   '<div>' + result.name + '</div>' +
                   '<small>' + result.email + '</small>' +
                 '</div>');
    return template;
  };

  $('.select2').select2({
    data: people,
    minimumResultsForSearch: Infinity,
    placeholder: 'Select based on select2',
    templateSelection: templateSelection,
    templateResult: templateResult
  });

  $('.select2-tags').select2({
    data: colors,
    tags: true,
    placeholder: 'Choose a color',
  });

  $('.datepicker').datetimepicker({
    format: 'MM/DD/YYYY'
  });

  $('.timepicker').datetimepicker({
    format: 'HH:mm'
  });

  $('.datepicker-from').datetimepicker({
    format: 'MM/DD/YYYY'
  });
  $('.datepicker-until').datetimepicker({
    format: 'MM/DD/YYYY'
  });
  $('.datepicker-from').on('dp.change', function (e) {
    $('.datepicker-until').data('DateTimePicker').minDate(e.date);
  });
  $('.datepicker-until').on('dp.change', function (e) {
    $('.datepicker-from').data('DateTimePicker').maxDate(e.date);
  });

  $('.typeahead').typeahead({source: states, autoSelect: true});

  $('.fileupload').fileupload({
    dataType: 'json',
    done: function (e, data) {
      $.each(data.result.files, function (index, file) {
        $('<li/>').text(file.name).appendTo('#fileupload .response');
      });
    }
  });

  $('.wysiwyg').summernote();

  $('.slider-1').noUiSlider({
    start: 6,
    step: 0,
    range: {
      'min': [ 0 ],
      'max': [ 21 ]
    }
  });

  $('.slider-2').noUiSlider({
    start: [6, 25],
    step: 1,
    range: {
      'min': [ 0 ],
      'max': [ 100 ]
    }
  });

  $('.slider-2').on('slide', function(a, b){

    var bind = $('.sliderval');
    var bindRange = $('.sliderval2');

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

  $('.slider-3').noUiSlider({
    start: [16],
    step: 2,
    range: {
      'min': [ 0 ],
      'max': [ 20 ]
    }
  });

  $('.slider-3').on('slide set change', function(a,b){
    if( !$(this).find('.noUi-handle div').length ){
      $(this).find('.noUi-handle').append('<div>'+b+'</div>');
    }
    $(this).find('.noUi-handle div').html(b);
  });
});
