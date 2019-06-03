const sass = require('gulp-ruby-sass');
const reload = browserSync.reload;
const gulp = require('gulp');

gulp.task('compileSass', () => {
    return sass('app/sass/*.scss') // which Sass file to grab    
    .pipe(gulp.dest('app/css')) // where to put the compiled stylesheet
    .pipe(reload({ stream:true })); // if the stylesheet is altered, reload the browser
});

const browserSync = require("browser-sync");
const reload = browserSync.reload;