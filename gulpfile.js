var gulp = require('gulp');
var uglify = require('gulp-uglify');
var minifyHtml = require('gulp-minify-html');
var minifyCss = require('gulp-minify-css');
var concat = require('gulp-concat');
var rimraf = require('gulp-rimraf');

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
	rimraf('./index.html', { force: true});
	return gulp.src('./build.html')
		.pipe(concat('index.html'))
		.pipe(minifyHtml())
		.pipe(gulp.dest('./'));
});

gulp.task('pages', function () {
	rimraf(['./build/formsuccess.html', './build/resume.html'], { force: true });
	return gulp.src(['./site/formsuccess.html', './site/resume.html'])
		.pipe(minifyHtml())
		.pipe(gulp.dest('./build/'));
});

gulp.task('watch', function () {
	gulp.watch('./site/*.css', ['styles']);
	gulp.watch('./site/*.js', ['scripts']);
	gulp.watch('./build.html', ['html']);
	gulp.watch('./site/*.html', ['pages']);
});

gulp.task('default', ['scripts', 'styles', 'html', 'pages', 'watch']);