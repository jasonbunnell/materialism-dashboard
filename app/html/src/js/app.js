$(function () {
  $('[data-toggle="tooltip"]').tooltip();
  $('[data-toggle="popover"]').popover();

  $('.navbar-toggle').sideNav({ menuWidth: 260, closeOnClick: true });

  var withRipples = [
    '.btn:not(.withoutripple)',
    '.card-image',
    '.navbar a:not(.withoutripple)',
    '.dropdown-menu a',
    '.nav-tabs a:not(.withoutripple)',
    '.withripple'
  ].join(',');

  $('body').find(withRipples).ripples();

  $('.form-control').each(function (){
    // Add class filled to form-control's that have a value
    if($(this).val()){
      $(this).parent().addClass('filled');
    }

    // Animate form labels
    $(this).bind('blur', function (e) {
      input = $(e.currentTarget);
      if(input.val()){
        input.parent().addClass('filled');
      } else {
        input.parent().removeClass('filled');
      }
      input.parent().removeClass('active');
    }).bind('focus', function (e) {
      input = $(e.currentTarget);
      input.parent().addClass('active');
    });
  });

});



function brand_primary(variation) {
  return get_color(get_color_name('brand-primary'), variation);
}
function brand_success(variation) {
  return get_color(get_color_name('brand-success'), variation);
}
function brand_info(variation) {
  return get_color(get_color_name('brand-info'), variation);
}
function brand_warning(variation) {
  return get_color(get_color_name('brand-warning'), variation);
}
function brand_danger(variation) {
  return get_color(get_color_name('brand-danger'), variation);
}

function theme(variation) {
  variation = ( variation ? variation : 'base' );
  return get_color(get_color_name('theme'), variation);
}
function theme_secondary(variation) {
  variation = ( variation ? variation : 'base' );
  return get_color(get_color_name('theme-secondary'));
}

function get_color_name(name) {
  if(theme_colors[name] !== undefined){
    return theme_colors[name];
  }

  return global_colors[name];
}

function get_color(color, variation) {
  variation = ( variation ? variation : 'base' );

  return global_colors[color][variation];
}

var themeColor = "theme-pink";
var themeTemplate = "theme-template-dark";

function changeTemplateTheme(cls){
  themeTemplate = cls;
  $("body").attr('class', cls + ' ' + themeColor);
  $(".theme-picker .icon").addClass('hide');
  $(".theme-picker ."+cls+" .icon").removeClass('hide');
}

function changeColorTheme(cls){
  themeColor = cls;
  $("body").attr('class', cls + ' ' + themeTemplate);
  $(".theme-picker .icon").addClass('hide');
  $(".theme-picker ."+cls+" .icon").removeClass('hide');
}
