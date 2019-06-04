const browserSync = require("browser-sync");
const reload = browserSync.reload;

const gulp = require('gulp');

const sass = require('gulp-sass');

gulp.task('compileSass', function () {
    console.log('compiling...');

    return gulp.src('./app/sass/styles.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(gulp.dest('./app'))
      .pipe(browserSync.stream());
});
   
gulp.task('compileSassWatch', function () {
    gulp.watch(['./app/sass/**/*.scss'], gulp.series('compileSass'));
});