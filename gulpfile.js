'use strict';

var path = require('path');
var gulp = require('gulp');
var less = require('gulp-less');
var clean = require('gulp-clean');
var minifycss    = require('gulp-minify-css');
var browserSync = require('browser-sync');
var jshint = require('gulp-jshint');

//CONFIG PATHS
var config = {
	pages  : './pages',
	assets : './assets',
	build:'./dist'
};

//TASKS
gulp.task('serve', function() {
    browserSync.init({
        server: {
            baseDir: ["app"],
            index: "index.html",
            routes: {
                "/bower_components": "bower_components",
                "/node_modules": "node_modules"
            }
        }
    });

    console.log('## server started ##');

    gulp.watch('app/**/*').on('change', browserSync.reload);

    gulp.watch('app/**/*.js').on('change', function(event) {
        console.log("Linting " + event.path);
        gulp.src(event.path)
            .pipe(jshint())
            .pipe(jshint.reporter('jshint-stylish'));
    });
});

gulp.task('less', function () {
  gulp.src(config.pages+'/less/pages.less')
    .pipe(less({
      paths: [config.pages+'/less/']
    }))
    .pipe(gulp.dest(config.pages+'/css/'));
});
gulp.task('watch', function () {
	gulp.watch(config.pages+'/less/*.less', function(event) {
		gulp.run('less');
	});
});

gulp.task('build',['less','copy'],function() {
	gulp.run('css-min');
});

gulp.task('clean', function(){
	return gulp.src( config.build+'' , {read: false})
		.pipe(clean());
});

gulp.task('copy', ['clean'],function () {
	return gulp.src(['./**/*','!**/node_modules/**','!.gitgnore','!package.json','!Gruntfile.js','!gulpfile.js'])
	.pipe(gulp.dest(config.build+''));
});

gulp.task('css-min', function(){
	return gulp.src( [config.build+'./assets/css/*.css' , config.build+'./pages/css/*.css'])
		.pipe(minifycss());
});

gulp.task('default', function() {
 console.log( "\nPage - Gulp Command List \n" );
 console.log( "----------------------------\n" );
 console.log( "gulp serve" );
 console.log( "gulp watch" );
 console.log( "gulp less" );
 console.log( "gulp build \n" );
 console.log( "----------------------------\n" );
});
