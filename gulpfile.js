var gulp = require('gulp');
var cleanCSS = require('gulp-clean-css');
var htmlmin = require('gulp-htmlmin');
var tinypng = require('gulp-tinypng-compress');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

gulp.task('minify-css', function(done) {
    gulp.src('./src/css/*.css')
        .pipe(cleanCSS({
            compatibility: 'ie11'
        }))
        .pipe(gulp.dest('dist/css'));
    done();
});

gulp.task('minify-js', function(done) {
    gulp.src(['./src/js/**/*.js', '!.src/js/**/*.min.js'])
        .pipe(uglify())
        .pipe(rename({
            suffix: ".min"
        }))
        .pipe(gulp.dest('dist/js/'))
    gulp.src('.src/js/**/*.min.js')
        .pipe(gulp.dest('dist/js'))
    done();
});

gulp.task('fonts', function(done) {
    gulp.src('./src/fonts/**/*')
        .pipe(gulp.dest('dist/fonts'))
    done();
});

gulp.task('htmlmin', function(done) {
    gulp.src('./src/*.html')
        .pipe(htmlmin({
            collapseWhitespace: true
        }))
        .pipe(gulp.dest('dist/'))
    done();
})


gulp.task('tinypng', function(done) {
    gulp.src('./src/img/**/*.{png,jpg,jpeg}')
        .pipe(tinypng({
            key: 'sLmmGflWGTlztVCQWK5HDBWBZ5QXvDw5'
        }))
        .pipe(gulp.dest('dist/img/'));
    done();
});

gulp.task('default', gulp.parallel('minify-css', 'minify-js', 'fonts', 'tinypng', 'htmlmin', function(done) {
    done();
}));