var gulp = require('gulp'),
	less = require('gulp-less'),
	autoprefixer = require('gulp-autoprefixer'),
	minify = require('gulp-minify-css'),
	jshint = require('gulp-jshint'),
	uglify = require('gulp-uglify'),
	concat = require('gulp-concat'),
	rename = require('gulp-rename'),
	maps = require('gulp-sourcemaps'),
    imgmin = require('gulp-imagemin'),
	del = require('del'),
	livereload = require('gulp-livereload');

// 处理样式文件
gulp.task('styles', function() {
    return gulp.src('./src/less/lagou.less')
           .pipe(less())
           .pipe(maps.init())
    	   .pipe(maps.write('.'))
    	   .pipe(gulp.dest('./dist/css'))
           .pipe(minify())
           .pipe(maps.write('.'))
    	   .pipe(rename({suffix:'.min'}))
    	   .pipe(gulp.dest('./dist/css'));
});
// 处理js文件
gulp.task('scripts', function() {
    return gulp.src(['!./src/js/lg.*.js','./src/js/ui.*.js'])
           .pipe(concat('ui.js'))
           .pipe(gulp.dest('./dist/js'))
           .pipe(rename({suffix:'.min'}))
           .pipe(uglify())
           .pipe(gulp.dest('./dist/js'));
});
// 处理图片
gulp.task('imgmin', function () {
    gulp.src('src/img/*.{png,jpg,gif,ico}')
        .pipe(imgmin())
        .pipe(gulp.dest('dist/img'));
});
gulp.task('clean', function() {
    del(['./dist/css', './dist/js','./dist/img'])
});
gulp.task('default', function() {
  // 将你的默认的任务代码放在这
  gulp.start('styles','imgmin','scripts');

});
gulp.task('watch', function() { 
	gulp.watch('./src/less/**/*.less', ['styles']);
    gulp.watch('./src/js/*.js', ['scripts']);
    livereload.listen(); // 创建一个监听服务器
    gulp.watch('./dist/**').on('change', livereload.changed);
});