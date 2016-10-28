var gulp = require('gulp'),
    sass = require('gulp-sass');
    sync = require('browser-sync') .create();

gulp.task('scss', function() {
  return gulp.src('app/scss/style.scss')
      .pipe(sass())
      .pipe(gulp.dest('dist/css'))
      .pipe(sync.stream());
});

gulp.task('sync', ['scss'], function() {
  sync.init({
    server: './'
  })

  gulp.watch("app/scss/**/*.scss", ['scss']);
})
