module.exports.tasks = {
  // copy files to correct folders
  copy: {
    dev: {
      files: [
        { expand: true, src: '**', cwd: '<%= paths.app %>/bower_components/font-awesome/fonts',                    dest: '<%= paths.assets %>/fonts' },
        { expand: true, src: '**', cwd: '<%= paths.app %>/bower_components/material-design-iconic-font/fonts',     dest: '<%= paths.assets %>/fonts' },
        { expand: true, src: '**', cwd: '<%= paths.app %>/bower_components/roboto-fontface/fonts',                 dest: '<%= paths.assets %>/fonts' },
        { expand: true, src: '**', cwd: '<%= paths.app %>/bower_components/weather-icons/font',                    dest: '<%= paths.assets %>/fonts' },
        { expand: true, src: '**', cwd: '<%= paths.app %>/bower_components/bootstrap-sass/assets/fonts/bootstrap', dest: '<%= paths.assets %>/fonts' }
      ]
    }
  },

  // watch for changes during development
  watch: {
    js: {
      files: ['Gruntfile.js', '<%= paths.assets %>/js/**/*.js'],
      tasks: ['jshint'],
      options: {
        livereload: true
      }
    },
    css: {
      files: [
        '<%= paths.assets %>/css/**/*.scss'
      ],
      tasks: ['sass'],
      options: {
        livereload: true
      }
    }
  },

  // debug while developing
  jshint: {
    all: ['Gruntfile.js', '<%= paths.assets %>/js/**/*.js']
  },
};
