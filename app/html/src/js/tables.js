$(function () {

  $('#example')
    .addClass( 'nowrap' )
    .dataTable( {
      responsive: true,
      columnDefs: [
        { targets: [-1, -3], className: 'dt-body-right' }
      ]
    });

});