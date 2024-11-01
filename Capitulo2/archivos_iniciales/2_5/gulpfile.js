
var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require("gulp-sourcemaps");
var browserSync = require("browser-sync").create();

gulp.task('sass', function () {
    return gulp.src('./sass/**/*.sass')
        .pipe(sourcemaps.init())
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./css'))
        .pipe(browserSync.stream());
});

gulp.task('serve', function () {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
    gulp.watch('./sass/**/*.sass', gulp.series('sass'));
});

gulp.task('default', gulp.series('sass', 'serve'), function() {});
