app.factory('colorService', function() {

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

  function get_colors(){

  }

  return {
    brand_primary: brand_primary,
    brand_success: brand_success,
    brand_info: brand_info,
    brand_warning: brand_warning,
    brand_danger: brand_danger,
    theme: theme,
    theme_secondary: theme_secondary,
    get_color: get_color
  };
});
