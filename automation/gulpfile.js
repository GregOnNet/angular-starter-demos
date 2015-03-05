'use strict';

var gulp            = require('gulp'),
    browserSync     = require('browser-sync'),
    inject          = require('gulp-inject'),
    bower           = require('main-bower-files'),
    angularFileSort = require('gulp-angular-filesort');

var paths = {
  src : './src/'
};

var appFiles = [
  paths.src + 'components/**/*.js',
  paths.src + '/*.html'
];

gulp.task('serve', ['watch'], function(){
  browserSync(
    appFiles,
    { startPath: paths.src,
      server: {
        baseDir: "./" }
    }
  );
});

gulp.task('watch', function(){
  gulp.watch([
    'bower.json'
  ], ['inject']);
});

gulp.task('inject', function() {

  var target      = gulp.src(paths.src + 'index.html'),
      appStream   = gulp.src(paths.src + 'components/**/*.js').pipe(angularFileSort()),
      bowerStream = gulp.src(bower(), {read:false});

  target
    .pipe(inject(appStream,   {name: 'app',   relative: true}))
    .pipe(inject(bowerStream, {name: 'bower', relative: true}))
    .pipe(gulp.dest(paths.src));
});
