var gulp       = require('gulp');
var browserify = require('browserify');
var watchify   = require('watchify');
var source     = require('vinyl-source-stream');
var l     = require('lodash');

gulp.task('build',function(){
  compile();
});

function compile(){
  var customOpts = {
    entries: ['./src/javascripts/index.js'],
    debug: true
  };
  var opts = l.assign({}, watchify.args, customOpts);

  bundler = watchify(browserify(opts));
  bundler.on('update', bundle);

  function bundle(){
    return bundler.bundle()
      .pipe(source('index.js'))
      .pipe(gulp.dest('src/'));
  }
}
