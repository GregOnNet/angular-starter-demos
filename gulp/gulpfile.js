'use strict';

var gulp     = require('gulp'),
    jshint   = require('gulp-jshint'),
    changed  = require('gulp-changed'),
    imagemin = require('gulp-imagemin');

// JS hint task
gulp.task('jshint', function() {
  gulp.src('./src/scripts/*.js')
      .pipe(jshint())
      .pipe(jshint.reporter('default'));
})

// Minify new images
gulp.task('imagemin', function() {
  var source      = './src/images/**/*',
      destination = './build/images';

  gulp.src(source)
      .pipe(changed(destination))
      .pipe(imagemin())
      .pipe(gulp.dest(destination));
})
