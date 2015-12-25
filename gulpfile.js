var gulp       = require('gulp');
var util       = require('gulp-util');
var duration   = require('gulp-duration');
var browserify = require('browserify');
var watchify   = require('watchify');
var vueify     = require('vueify');
var babelify   = require('babelify')
var source     = require('vinyl-source-stream');
var l          = require('lodash');

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
  bundler.transform(vueify)
         .transform(babelify, {presets: ["es2015"]})

  bundler.on('update', bundle);
  bundle();

  function bundle(){
    return bundler.bundle()
      .on('error', util.log)
      .pipe(duration("compiled"))
      .pipe(source('index.js'))
      .pipe(gulp.dest('src/'));
  }
}
