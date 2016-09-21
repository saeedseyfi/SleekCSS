var gulp = require('gulp');
var sass = require('gulp-sass');
var sassGlob = require('gulp-sass-glob');
var autoprefixer = require('gulp-autoprefixer');
var styleguidejs = require('gulp-styleguidejs');

gulp.task('default', function () {
	return gulp.src('sleek-css.scss')
		.pipe(sassGlob())
		.pipe(sass())
		.pipe(autoprefixer())
		.pipe(styleguidejs({
			templateCss: __dirname + '/styleguide/style.css',
			templateJs: __dirname + '/styleguide/script.js',
			template: __dirname + '/styleguide/template.jade',
			outputFile: __dirname + '/styleguide.html'
		}))
		.pipe(gulp.dest('.'));
});
