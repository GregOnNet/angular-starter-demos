'use strict';

var gulp            = require('gulp'),
    watch           = require('gulp-watch'),
    browserSync     = require('browser-sync'),
    inject          = require('gulp-inject'),
    getBowerFiles   = require('main-bower-files'),
    angularFileSort = require('gulp-angular-filesort');

var paths = {
  src : './src/'
};

var appFiles = [
  paths.src + 'components/**/*.js',
  paths.src + '/**/*.html'
];

gulp.task('serve', ['watch'], function(){
  browserSync(appFiles, {
    server: {
      baseDir: "./src",
      routes: {
          '/bower_components': 'bower_components'
      }
    }
  });
});

gulp.task('watch', ['inject'], function(){
  var changingFiles = appFiles.slice();
      changingFiles.push('./bower.json');

  watch(changingFiles, function() {
    gulp.start('inject');
  });
});

gulp.task('inject', function() {
  var target      = gulp.src(paths.src + 'index.html'),
      appStream   = gulp.src(paths.src + 'components/**/*.js').pipe(angularFileSort()),
      bowerStream = gulp.src(getBowerFiles(), {read:false});

  target
    .pipe(inject(appStream,   {name: 'app',   relative: true}))
    .pipe(inject(bowerStream, {name: 'bower', relative: true}))
    .pipe(gulp.dest(paths.src));
});
