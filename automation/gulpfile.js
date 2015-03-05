'use strict';

var gulp   = require('gulp'),
    inject = require('gulp-inject');

gulp.task('index', function() {

  var target  = gulp.src('./src/index.html'),
      sources = gulp.src(['./src/components/**/*.js'], {read: false});

  target
    .pipe(inject(sources, {relative: true}))
    .pipe(gulp.dest('./src'));
});
