var gulp = require('gulp'),
    gulpUtil = require('gulp-util'),
    imagemin = require('gulp-imagemin'),
    minifyCSS = require('gulp-minify-css'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    paths;

    
paths = {
    scripts: ['app/js/jquery.js', 'app/js/script.js'],
    css: ['app/css/bootstrap.css', 'app/css/css.css'],
    images: 'app/img/*.png'
};

    
gulp.task('js', function () {
    return gulp.src(paths.scripts)
        .pipe(uglify())
        .pipe(concat('script.min.js'))
        .pipe(gulp.dest('./build/js'));
});


gulp.task('images', function () {
 return gulp.src(paths.images)
    .pipe(imagemin({optimizationLevel: 5}))
    .pipe(gulp.dest('build/img'));
});


gulp.task('css', function () {
  return gulp.src(paths.css)
    .pipe(minifyCSS({keepSpecialComments: 0}))
    .pipe(concat('style.min.css'))
    .pipe(gulp.dest('./build/css'));
});


gulp.task('html', function () {
  return gulp.src('./app/*.html', {base: './app'})
    .pipe(gulp.dest('./build'));
});



gulp.task('default', ['html', 'css', 'js', 'images']);

