'use strict';

var gulp   = require('gulp'),
    inject = require('gulp-inject'),
    bower  = require('main-bower-files');

var angularFileSort = require('gulp-angular-filesort');

gulp.task('inject', function() {

  var target      = gulp.src('./src/index.html'),
      bowerStream = gulp.src(bower(), {read:false}),
      appStream   = gulp.src('./src/components/**/*.js')
                        .pipe(angularFileSort());

  target
    .pipe(inject(bowerStream, {name: 'bower', relative: true}))
    .pipe(inject(appStream,   {name: 'app',   relative: true}))
    .pipe(gulp.dest('./src'));
});
