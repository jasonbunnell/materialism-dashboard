$(function () {
  // Card reveal
  $('body').find('.btn-flip, .card-image').on('click', function(e){
    $(e.currentTarget).parents('.card').find('.card-reveal').toggleClass('active');
  });
});
