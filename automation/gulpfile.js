'use strict';

var gulp   = require('gulp'),
    inject = require('gulp-inject'),
    bower  = require('main-bower-files');

var angularFileSort = require('gulp-angular-filesort');

var srcDir = './src/';

gulp.task('inject', function() {

  var target      = gulp.src(srcDir + 'index.html'),
      appStream   = gulp.src(srcDir + 'components/**/*.js').pipe(angularFileSort()),
      bowerStream = gulp.src(bower(), {read:false});

  target
    .pipe(inject(appStream,   {name: 'app',   relative: true}))
    .pipe(inject(bowerStream, {name: 'bower', relative: true}))
    .pipe(gulp.dest(srcDir));
});
