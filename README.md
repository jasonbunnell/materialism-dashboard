# Materialism

### Preview theme
To preview the theme, place the contents on a webserver and visit **http://webserver/dist/**

--------------

For developing based on the theme you want to setup your workflow with the following steps:

#### Grunt and Bower
make sure you have node.js installed (http://nodeguide.com/beginner.html)
```sh
$ npm install -g grunt-cli
$ npm install -g bower
```

#### Using grunt and bower
With bower you can download the needed packages and with npm you need to download the grunt dependencies
```sh
$ cd /to/path/where Gruntfile.js and bower.json are located
$ npm install
$ bower install
```

#### Making changes
You can use the grunt tasks to develop your own application
To make changes and automatically compile your CSS run:
```sh
$ grunt
```

When you are done for a distribution of your own version run:
```sh
$ grunt dist
```
