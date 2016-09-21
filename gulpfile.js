var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var styleguidejs = require('gulp-styleguidejs');

var generateConfigDocs = function (stream) {
	return stream;
};

gulp.task('sass', function () {
	return gulp.src('sleek-css.scss')
		.pipe(sass())
		.pipe(autoprefixer())
		.pipe(gulp.dest('.'));
});

gulp.task('styleguide-sass', function () {
	return gulp.src('styleguide/style.scss')
		.pipe(sass())
		.pipe(autoprefixer())
		.pipe(gulp.dest('styleguide/'));
});

gulp.task('styleguide', ['styleguide-sass'], function () {
	return gulp.src('sleek-css.scss')
		.pipe(sass())
		.pipe(autoprefixer())
		// .pipe(generateConfigDocs())
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
	gulp.watch('styleguide/*', ['styleguide']);
});
