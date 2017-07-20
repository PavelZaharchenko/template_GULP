'use strict';

var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    less = require('gulp-less'),
    livereload = require('gulp-livereload'),
    watch = require('gulp-watch');

gulp.task('do-it', function() {
    gulp.src('js/*.js')
        .pipe(uglify())
        .pipe(concat('bundle.js'))
        .pipe(gulp.dest('dist'));
});

gulp.task('less', function() {
    gulp.src('style/*.less')
        .pipe(watch())
        .pipe(less())
        .pipe(gulp.dest('css'))
        .pipe(livereload());
});

gulp.task('default', ['do-it', 'less']);


// ____________________________________
// var gulp = require('gulp'),
//     less = require('gulp-less'),
//     livereload = require('gulp-livereload'),
//     watch = require('gulp-watch');
  
// gulp.task('less', function() {
//   gulp.src('less/*.less')
//     .pipe(watch())
//     .pipe(less())
//     .pipe(gulp.dest('css'))
//     .pipe(livereload());
// });
// __________________________________

// gulp.task('minify', function () {
//     gulp.src('js/*.js')
//         .pipe(uglify())
//         .pipe(gulp.dest('build'));
// });
//
// gulp.task('concat', function() {
//     gulp.src('build/*.js')
//         .pipe(concat('dist.js'))
//         .pipe(gulp.dest('dist'));
// });

// gulp.task('watch',function(){
//     gulp.watch('js/app.js', ['main']);
// });

// gulp.task('connect', function() {
//     connect.server({
//         livereload: true
//     });
// });

// gulp.task('main', function() {
//     gulp.src('js/app.js')
//         .pipe(jslint({
//             vars: true,
//             white: true,
//             browser: true
//         }))
//         .pipe(jslint.reporter('default', true))
//         .pipe(uglify())
//         .pipe(concat('dist.js'))
//         .pipe(gulp.dest('dist'))
//         .pipe(connect.reload());
// });


// gulp.task('default', ['connect', 'watch']);