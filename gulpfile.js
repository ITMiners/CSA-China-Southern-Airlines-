/**
 * Created by Lion on 2018/1/3.
 */
var gulp = require('gulp');

var rubySass = require('gulp-ruby-sass');
var concat = require('gulp-concat');
var connect = require('gulp-connect');
var uglifyJs = require('gulp-uglify');

//编译sass
gulp.task('sass', function() {
    return rubySass('./src/sass/*.scss', {
        sourcemap: false,
        style: 'compressed'
    }).pipe(gulp.dest('./dist/style/'));
});

//压缩js
gulp.task('minifyJs', function() {
    return gulp.src('./src/js/*.js')
        .pipe(uglifyJs())
        .pipe(gulp.dest('./dist/js'));
});
//监听html,自动刷新页面
gulp.task('html', ['sass', 'minifyJs'], function() {
    return gulp.src('./index.html').pipe(connect.reload());
});
//监听
gulp.task('default', ['sass', 'minifyJs'], function() {
    //开启服务器
    connect.server({
        port: 9001,
        livereload: true
    });
    gulp.watch('./src/sass/*.scss', ['html']);
    gulp.watch('./src/js/*.js', ['html']);
    gulp.watch('./*.html', ['html']);
})