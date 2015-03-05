'use strict';

var gulp    = require('gulp'),
    wiredep = require('wiredep').stream;

gulp.task('inject', function() {

  gulp
    .src('./src/index.html')
    .pipe(wiredep())
    .pipe(gulp.dest('./src'));
});
