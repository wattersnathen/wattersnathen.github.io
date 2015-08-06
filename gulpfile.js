var gulp = require('gulp');
var uglify = require('gulp-uglify');
var minifyHtml = require('gulp-minify-html');
var minifyCss = require('gulp-minify-css');
var concat = require('gulp-concat');

gulp.task('scripts', function () {
	return gulp.src('./site/*.js')
		.pipe(concat('app.js'))
		.pipe(uglify())
		.pipe(gulp.dest('./build/'));
});

gulp.task('styles', function () {
	return gulp.src('./site/*.css')
		.pipe(concat('app.css'))
		.pipe(minifyCss())
		.pipe(gulp.dest('./build'));
});

gulp.task('html', function () {
	return gulp.src('./build.html')
		.pipe(minifyHtml())
		.pipe(gulp.dest('./build/'));
});

gulp.task('watch', function () {
	gulp.watch('./site/*.css', ['styles']);
	gulp.watch('./site/*.js', ['scripts']);
	gulp.watch('./build.html', ['html']);
});

gulp.task('default', ['scripts', 'styles', 'html', 'watch']);