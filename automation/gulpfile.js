'use strict';

var gulp   = require('gulp'),
    inject = require('gulp-inject'),
    bower  = require('main-bower-files');

gulp.task('index', function() {

  var target      = gulp.src('./src/index.html'),
      bowerStream = gulp.src(bower(), {read:false}),
      appStream   = gulp.src(['./src/components/**/*.js'], {read: false});

  target
    .pipe(inject(bowerStream, {name: 'bower', relative: true}))
    .pipe(inject(appStream,   {name: 'app',   relative: true}))
    .pipe(gulp.dest('./src'));
});
