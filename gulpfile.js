'use strict';

// sass compile
var gulp = require('gulp');
var sass = require('gulp-sass');
var prettify = require('gulp-prettify');
var minifyCss = require("gulp-minify-css");
var rename = require("gulp-rename");
var uglify = require("gulp-uglify");
var rtlcss = require("gulp-rtlcss");
var connect = require('gulp-connect');

//*** Localhost server tast
gulp.task('localhost', function() {
  connect.server();
});

gulp.task('localhost-live', function() {
  connect.server({
    livereload: true
  });
});

//*** SASS compiler task
gulp.task('sass', function () {
  // bootstrap compilation
	gulp.src('static/sass/bootstrap.scss').pipe(sass()).pipe(gulp.dest('static/assets/global/plugins/bootstrap/css/'));

  // select2 compilation using bootstrap variables
	gulp.src('static/assets/global/plugins/select2/sass/select2-bootstrap.min.scss').pipe(sass({outputStyle: 'compressed'})).pipe(gulp.dest('static/assets/global/plugins/select2/css/'));

  // global theme stylesheet compilation
	gulp.src('static/sass/global/*.scss').pipe(sass()).pipe(gulp.dest('static/assets/global/css'));
	gulp.src('static/sass/apps/*.scss').pipe(sass()).pipe(gulp.dest('static/assets/apps/css'));
	gulp.src('static/sass/pages/*.scss').pipe(sass()).pipe(gulp.dest('static/assets/pages/css'));

  // theme layouts compilation
	gulp.src('static/sass/layouts/layout/*.scss').pipe(sass()).pipe(gulp.dest('static/assets/layouts/layout/css'));
  gulp.src('static/sass/layouts/layout/themes/*.scss').pipe(sass()).pipe(gulp.dest('static/assets/layouts/layout/css/themes'));
});

//*** SASS watch(realtime) compiler task
gulp.task('sass:watch', function () {
	gulp.watch('./sass/**/*.scss', ['sass']);
});

//*** CSS & JS minify task
gulp.task('minify', function () {
    // css minify
    gulp.src(['static/assets/apps/css/*.css', '!static/assets/apps/css/*.min.css']).pipe(minifyCss()).pipe(rename({suffix: '.min'})).pipe(gulp.dest('static/assets/apps/css/'));

    gulp.src(['static/assets/global/css/*.css','!static/assets/global/css/*.min.css']).pipe(minifyCss()).pipe(rename({suffix: '.min'})).pipe(gulp.dest('static/assets/global/css/'));
    gulp.src(['static/assets/pages/css/*.css','!static/assets/pages/css/*.min.css']).pipe(minifyCss()).pipe(rename({suffix: '.min'})).pipe(gulp.dest('static/assets/pages/css/'));

    gulp.src(['static/assets/layouts/**/css/*.css','!static/assets/layouts/**/css/*.min.css']).pipe(rename({suffix: '.min'})).pipe(minifyCss()).pipe(gulp.dest('static/assets/layouts/'));
    gulp.src(['static/assets/layouts/**/css/**/*.css','!static/assets/layouts/**/css/**/*.min.css']).pipe(rename({suffix: '.min'})).pipe(minifyCss()).pipe(gulp.dest('static/assets/layouts/'));

    gulp.src(['static/assets/global/plugins/bootstrap/css/*.css','!static/assets/global/plugins/bootstrap/css/*.min.css']).pipe(minifyCss()).pipe(rename({suffix: '.min'})).pipe(gulp.dest('static/assets/global/plugins/bootstrap/css/'));

    //js minify
    gulp.src(['static/assets/apps/scripts/*.js','!static/assets/apps/scripts/*.min.js']).pipe(uglify()).pipe(rename({suffix: '.min'})).pipe(gulp.dest('static/assets/apps/scripts/'));
    gulp.src(['static/assets/global/scripts/*.js','!static/assets/global/scripts/*.min.js']).pipe(uglify()).pipe(rename({suffix: '.min'})).pipe(gulp.dest('static/assets/global/scripts'));
    gulp.src(['static/assets/pages/scripts/*.js','!static/assets/pages/scripts/*.min.js']).pipe(uglify()).pipe(rename({suffix: '.min'})).pipe(gulp.dest('static/assets/pages/scripts'));
    gulp.src(['static/assets/layouts/**/scripts/*.js','!static/assets/layouts/**/scripts/*.min.js']).pipe(uglify()).pipe(rename({suffix: '.min'})).pipe(gulp.dest('static/assets/layouts/'));
});


//*** HTML formatter task
gulp.task('prettify', function() {

  	gulp.src('./**/*.html').
  	  	pipe(prettify({
    		indent_size: 4,
    		indent_inner_html: true,
    		unformatted: ['pre', 'code']
   		})).
   		pipe(gulp.dest('./'));
});
