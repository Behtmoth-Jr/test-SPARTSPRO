const gulp = require('gulp');
const sass = require('gulp-sass') (require('sass'));
const server = require('gulp-server-livereload');
const clean = require('gulp-clean');
const fs = require('fs');
const plumber = require('gulp-plumber');
const notify = require('gulp-notify');
const { error } = require('console');
const { title } = require('process');

const plumberSASS = {
    errorHandler: notify.onError ({
        title: 'Styles',
        message: 'Error <%= error.message %>',
        sound: false
    })
}

gulp.task('sass', function() {
    return gulp
    .src('./scss/*.scss')
    .pipe(plumber(plumberSASS))
    .pipe(sass())
    .pipe(gulp.dest('./css/'));
})

gulp.task('server', function() {
    return gulp.src('./')
    .pipe (server({
        livereload: true,
        open:true
    }))
})

gulp.task('clean', function(){
    return gulp.src('./css/')
    .pipe(clean());
})

gulp.task('watch', function(){
    gulp.watch('./scss/*.scss', gulp.parallel('sass'))
})

gulp.task('default', gulp.series('clean',
    'sass',
    gulp.parallel('server', 'watch')
))