var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var styleguidejs = require('gulp-styleguidejs');

gulp.task('sass', function () {
	return gulp.src('sleek-css.scss')
		.pipe(sass())
		.pipe(autoprefixer())
		.pipe(gulp.dest('.'));
});

gulp.task('styleguide', function () {
	return gulp.src('sleek-css.scss')
		.pipe(sass())
		.pipe(autoprefixer())
		.pipe(styleguidejs({
			templateCss: __dirname + '/styleguide/style.css',
			templateJs: __dirname + '/styleguide/script.js',
			template: __dirname + '/styleguide/template.jade',
			outputFile: __dirname + '/styleguide.html'
		}))
});

gulp.task('default', ['sass', 'styleguide']);

gulp.task('watch', function () {
	gulp.watch('**/*.scss', ['default']);
});
