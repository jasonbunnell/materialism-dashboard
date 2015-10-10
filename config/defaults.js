module.exports.tasks = {
  // version update
  bump: {
    options: {
      files: ['package.json', 'bower.json'],
      pushTo: 'origin'
    }
  },

  // application constants
  ngconstant: {
    options: {
      dest: '<%= paths.assets %>/js/app.constants.js',
      name: 'app.constants',
    }
  },

  // remove all bs from css
  cssmin: {
    options: {
      keepSpecialComments: 0
    }
  },
};
