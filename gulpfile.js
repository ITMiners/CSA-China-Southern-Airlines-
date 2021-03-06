var gulp = require('gulp');

var cleanCss = require('gulp-clean-css');
var uglifyJs = require('gulp-uglify');
var connect = require('gulp-connect');
var rubySass = require('gulp-ruby-sass');
var concat = require('gulp-concat');
var babel = require('gulp-babel');


//编译sass
gulp.task('sass', function () {
    return rubySass('./src/sass/*.scss', {
        sourcemap: false,
        style: 'compressed'
    }).pipe(gulp.dest('./dist/style/'));
});

//压缩JS
// gulp.task('minifyJs', function () {
//     return gulp.src('./src/js/*.js')
//         .pipe(uglifyJs())
//         .pipe(gulp.dest('./dist/js/'));
// });
gulp.task('convert', function () {
    return gulp.src('./src/js/*.js')
        .pipe(babel({
            presets:['env']
        }))
        .pipe(uglifyJs())
        .pipe(gulp.dest('./dist/js/'));
});
//监听Html
gulp.task('html', ['sass', 'convert'], function () {
    return gulp.src('./index.html').pipe(connect.reload());
});

//监听
gulp.task('default', ['sass', 'convert'], function () {
    //开启服务器
    connect.server({
        port: 9001,
        livereload: true
    });
    gulp.watch('./src/sass/*.scss', ['html']);
    gulp.watch('./src/js/*.js', ['html']);
    gulp.watch('./*.html', ['html']);
})

