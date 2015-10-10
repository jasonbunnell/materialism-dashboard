module.exports.tasks = {
  // application constants
  ngconstant: {
    dist: {
      constants: {
        APP: {
          version: '<%= pkg.version %>'
        }
      }
    }
  },

  // clean generated files
  clean: {
    demo: [
      '<%= paths.dist %>'
    ]
  },

  // copy files to correct folders
  copy: {
    demo: {
      files: [
        { src: '<%= paths.indexDev %>', dest: '<%= paths.indexTmp %>' },
        { expand: true, src: '**', cwd: '<%= paths.app %>/bower_components/font-awesome/fonts',                    dest: '<%= paths.distAssets %>/fonts' },
        { expand: true, src: '**', cwd: '<%= paths.app %>/bower_components/material-design-iconic-font/fonts',     dest: '<%= paths.distAssets %>/fonts' },
        { expand: true, src: '**', cwd: '<%= paths.app %>/bower_components/roboto-fontface/fonts',                 dest: '<%= paths.distAssets %>/fonts' },
        { expand: true, src: '**', cwd: '<%= paths.app %>/bower_components/weather-icons/font',                    dest: '<%= paths.distAssets %>/fonts' },
        { expand: true, src: '**', cwd: '<%= paths.app %>/bower_components/bootstrap-sass/assets/fonts/bootstrap', dest: '<%= paths.distAssets %>/fonts' },
        { expand: true, src: '**/*', cwd: '<%= paths.app %>/pages',                                                dest: '<%= paths.dist %>/pages' },
        { expand: true, src: '**/*', cwd: '<%= paths.app %>/assets/tpl',                                           dest: '<%= paths.distAssets %>/tpl' },
        { src: '<%= paths.app %>/bower_components/ng-file-upload/FileAPI.flash.swf',                               dest: '<%= paths.distAssets %>/FileAPI.flash.swf' },
        { src: '<%= paths.app %>/bower_components/ng-file-upload/FileAPI.min.js',                                  dest: '<%= paths.distAssets %>/FileAPI.min.js' }
      ]
    },
    postusemin: {
      files: [
        { src: '<%= paths.indexTmp %>', dest: '<%= paths.index %>' }
      ]
    }
  },

  // set usemin working file
  useminPrepare: {
    html: '<%= paths.indexTmp %>',
    options: {
      dest: '<%= paths.dist %>',
      root: '<%= paths.app %>'
    }
  },

  // sass our development files into 1 stylesheet
  sass: {
    dist: {
      options: {
        style: 'expanded'
      },
      files: {
        '<%= paths.assets %>/css/materialism.css': '<%= paths.assets %>/css/sass/materialism.scss'
      }
    }
  },

  // optimize images
  imagemin : {
    dynamic : {
      files : [{
        expand : true,
        cwd : '<%= paths.assets %>/img/', // source images (not compressed)
        src : ['**/*.{png,jpg,gif,svg,xml,json,ico}'], // Actual patterns to match
        dest : '<%= paths.distAssets %>/img/' // Destination of compressed files
      }]
    }
  },

  // add rev to bust cache
  filerev: {
    options: {
      encoding: 'utf8',
      algorithm: 'md5',
      length: 20
    },
    release: {
      src: [
        '<%= paths.distAssets %>/**/*.js',
        '<%= paths.distAssets %>/**/*.css',
      ]
    }
  },

  // replace tags
  usemin:{
    html: ['<%= paths.indexTmp %>', '<%= paths.dist %>/pages/*.html'],
    options: {
      assetsDirs: ['<%= paths.dist %>', '<%= paths.dist %>/pages/'],
      // This is a workaround so we can use the builds created from index.dev within other pages
      patterns: {
        html: [
          [
            /(<!-- reusebuild:css .+? -->[\s\S\r\n]*?<!-- endreusebuild -->)/gm,
            'Re-use css build',
            function (m) {
              return m.match(/[\/.a-z]*?\.css/gm)[0];
            },
            function (m) {
              return '<link href="'+m+'" rel="stylesheet" />';
            }
          ],
          [
            /(<!-- reusebuild:js .+? -->[\s\S\r\n]*?<!-- endreusebuild -->)/gm,
            'Re-use js build',
            function (m) {
              return m.match(/[\/.a-z]*?\.js/gm)[0];
            },
            function (m) {
              return '<script charset="utf-8" src="'+m+'"></script>';
            }
          ]
        ]
      }
    }
  },

  // lightweight env replacements for development
  grep: {
    demo: {
      files: {
        '<%= paths.index %>': ['<%= paths.index %>']
      },
      options: {
        pattern: 'demo',
        fileOverride: true
      }
    }
  },

  // tag generated filenames for reference
  usebanner: {
    taskName: {
      options: {
        position: 'top',
        banner: '/*! <%=  grunt.template.today("dd-mm-yyyy hh:MM:ss")  %> */',
        linebreak: true
      },
      files: {
        src: [ '<%= paths.distAssets %>/*.css', '<%= paths.distAssets %>/*.js' ]
      }
    }
  },
};
