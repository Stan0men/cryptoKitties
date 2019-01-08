const gulp = require('gulp');
const pug = require('gulp-pug');
const sass = require('gulp-sass');


//Pug-> HTML

gulp.task('views', function () {
    return gulp.src('src/*.pug')
        .pipe(pug({
            pretty: true
        }))
        .pipe(gulp.dest('dist'))
});


//SCSS-> CSS

sass.compiler = require('node-sass');

gulp.task('sass', function () {
    return gulp.src('src/scss/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('dist/css'));
});

gulp.task('sass:watch', function () {
    gulp.watch('src/scss/*.scss', ['scss']);
});

//default

gulp.task('default', ['sass', 'sass:watch', 'views'], function () {
    
});