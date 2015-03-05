'use strict';

var gulp   = require('gulp'),
    jshint = require('gulp-jshint');

// JS hint task
gulp.task('jshint', function() {
  gulp.src('./src/scripts/*.js')
      .pipe(jshint())
      .pipe(jshint.reporter('default'));
})
