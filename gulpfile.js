/*
  using gulp to minify all the files to save space
  I put all files from task 2 in the folder "views"
*/

var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var minifyCSS = require('gulp-minify-css');
var imagemin = require('gulp-imagemin');
var minifyHTML = require('gulp-minify-html');

gulp.task('default', function() {
        
         gulp.src("js/perfmatters.js")
        .pipe(uglify())
        .pipe(rename('perfmatters.js'))
        .pipe(gulp.dest('production/js'));

         gulp.src("css/print.css")
        .pipe(minifyCSS())
        .pipe(rename('print.css'))
        .pipe(gulp.dest('production/css'));

         gulp.src("index.html")
        .pipe(minifyHTML())
        .pipe(rename('index.html'))
        .pipe(gulp.dest('production'));

        gulp.src('img/**/*.+(png|jpg|gif|svg)')
        .pipe(imagemin())
        .pipe(gulp.dest('production/img'));

         gulp.src("views/js/main.js")
        .pipe(uglify())
        .pipe(rename('main.js'))
        .pipe(gulp.dest('production/views/js'));

         gulp.src("views/pizza.html")
        .pipe(minifyHTML())
        .pipe(rename('views/pizza.html'))
        .pipe(gulp.dest('production'));

         gulp.src("views/css/bootstrap-grid.css")
        .pipe(minifyCSS())
        .pipe(rename('bootstrap-grid.css'))
        .pipe(gulp.dest('production/views/css'));

        gulp.src("views/css/style.css")
        .pipe(minifyCSS())
        .pipe(rename('style.css'))
        .pipe(gulp.dest('production/views/css'));

}) ;
