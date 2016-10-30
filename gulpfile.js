'use strict';

var path = require('path');
var gulp = require('gulp');
var less = require('gulp-less');
var clean = require('gulp-clean');
var minifycss    = require('gulp-minify-css');
var browserSync = require('browser-sync');
// var jshint = require('gulp-jshint');
var concatCss = require('gulp-concat-css');
var cleanCSS = require('gulp-clean-css');
var concat = require('gulp-concat');
var ngmin = require('gulp-ngmin');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var htmlmin = require('gulp-htmlmin');

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
                "/node_modules": "node_modules",
								"/bower_components": "bower_components"
            }
        }
    });

    console.log('## server started ##');

    gulp.watch('app/**/*').on('change', browserSync.reload);

    gulp.watch('app/**/*.js').on('change', function(event) {
        console.log("Linting " + event.path);
    });
});

gulp.task('less', function () {
  gulp.src(config.pages+'/less/pages.less')
    .pipe(less({
      paths: [config.pages+'/less/']
    }))
    .pipe(gulp.dest(config.pages+'/css/'));
});

gulp.task('build', ['css-min', 'compress', 'pages', 'images', 'fonts', 'fonts-awesome']);

gulp.task('css-min', function() {
  return gulp.src(['node_modules/pace-progress/themes/green/pace-theme-flash.css',
                   'node_modules/bootstrap/dist/css/bootstrap.min.css',
                   'node_modules/font-awesome/css/font-awesome.min.css',
                   'app/assets/css/jquery.scrollbar.css',
                   'app/assets/css/pages-icons.css',
                   'app/assets/css/pages.css',
                   'app/assets/css/style.css'])
		.pipe(concatCss('styles-1.0.1.min.css'))
    .pipe(cleanCSS({ keepSpecialComments: 1, processImport: false }))
    .pipe(gulp.dest('dist/app/assets/css'));
});


gulp.task('default', function() {
 console.log( "\Dashboard - Gulp Command List \n" );
 console.log( "----------------------------\n" );
 console.log( "gulp serve" );
 console.log( "gulp watch" );
 console.log( "gulp less" );
 console.log( "gulp build \n" );
 console.log( "----------------------------\n" );
});

gulp.task('compress', function() {
  return gulp.src(['bower_components/jquery/dist/jquery.js',
                   'node_modules/pace-progress/pace.min.js',
								   'node_modules/jquery/dist/jquery.min.js',
								 	 'node_modules/bootstrap/dist/js/bootstrap.min.js',
								   'node_modules/jquery-unveil/jquery.unveil.js',
								   'node_modules/jquery-bez/lib/jquery.bez.min.js',
								   'plugins/modernizr.custom.js',
									 'plugins/jquery-ui/jquery-ui.min.js',
								   'plugins/jquery-easy.js',
								 	 'plugins/jquery.ioslist.min.js',
								   'plugins/jquery.actual.min.js',
								   'plugins/jquery.scrollbar.min.js',
								   'plugins/classie.js',
									 'node_modules/angular/angular.min.js',
									 'node_modules/angular-ui-router/release/angular-ui-router.min.js',
									 'plugins/ui-utils.min.js',
									 'node_modules/angular-sanitize/angular-sanitize.min.js',
									 'plugins/ocLazyLoad.min.js',
									 'app/js/controllers/*.js',
									 'app/assets/js/pages.js',
									 'app/assets/js/app.js',
									 'app/assets/js/config.js',
									 'app/assets/js/config.lazyload.js',
									 'app/assets/js/main.js',
									 'app/assets/js/directives/*.js',
									 'app/assets/js/controllers/*.js'])
    .pipe(concat('bundle-1.0.2.js'))
    .pipe(ngmin())
    .pipe(gulp.dest('dist/app/assets/js'))
    .pipe(rename({suffix: '.min'}))
    .pipe(uglify({mangle: false}))
    .pipe(gulp.dest('dist/app/assets/js'));
});

gulp.task('test', function() {
    browserSync.init({
        server: {
            baseDir: ["dist/app"],
            index: "index.html"
        }
    });

    console.log('## test server started ##');
});

gulp.task('pages', function() {
  gulp.src(['app/tpl/**/*'])
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('dist/app/tpl'));
});

gulp.task('images', function() {
  gulp.src(['app/assets/img/**/*'])
      .pipe(gulp.dest('dist/app/assets/img'));
});

gulp.task('fonts', function() {
  gulp.src(['app/assets/fonts/**/*'])
      .pipe(gulp.dest('dist/app/assets/fonts'));
});

gulp.task('fonts-awesome', function() {
  gulp.src(['node_modules/font-awesome/fonts/**/*'])
      .pipe(gulp.dest('dist/app/font-awesome/fonts'));
});
