var postcss = require('gulp-postcss');
var gulp = require('gulp');
var autoprefixer = require('autoprefixer');
var cssnano = require('cssnano');
var sass = require('gulp-sass');



gulp.task('sass', function () {
    var plugins = [
        autoprefixer({browsers: ['last 2 versions', 'ie >= 9'], grid: true})
    ];
    return gulp.src('./sass/*.scss')
        .pipe(sass().on('error', sass.logError))
        /*
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
         */
        .pipe(postcss(plugins))
        .pipe(gulp.dest('./css'))

});


gulp.task('sass:watch', function () {
  gulp.watch('./sass/**/*.scss', ['sass']);
});
