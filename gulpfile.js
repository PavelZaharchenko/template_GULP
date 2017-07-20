'use strict';

var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    less = require('gulp-less'),
    livereload = require('gulp-livereload'),
    watch = require('gulp-watch');

gulp.task('default', function() {
   console.log('Hello, Bro');
});

gulp.task('do-it', function() {
    gulp.src('js/*.js')
        .pipe(uglify())
        .pipe(concat('bundle.js'))
        .pipe(gulp.dest('dist'));
});

gulp.task('less', function() {
    gulp.src('css/style/style.less')
        .pipe(less())
        .pipe(gulp.dest('dist'))
});

gulp.task('default', ['do-it', 'less']);


// gulp.src('./less/**/*.less')
//   .pipe(sourcemaps.init())
//   .pipe(less())
//   .pipe(sourcemaps.write('./maps'))
//   .pipe(gulp.dest('./public/css'));