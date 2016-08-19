var gulp = require('gulp'),
	plumber = require('gulp-plumber'),
	rename = require('gulp-rename');
var autoprefixer = require('gulp-autoprefixer');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');

gulp.task('browser-sync', function () {
	browserSync({
		server: {
			baseDir: "app/"
		}
	});
});

gulp.task('bs-reload', function () {
	browserSync.reload();
});


gulp.task('styles', function () {
	gulp.src(['app/styles/source/main.scss'])
		.pipe(plumber({
			errorHandler: function (error) {
				console.log(error.message);
				this.emit('end');
			}
		}))
		.pipe(sass())
		.pipe(autoprefixer('last 2 versions'))
		.pipe(gulp.dest('app/styles/css'))
		.pipe(browserSync.reload({
			stream: true
		}))
});


gulp.task('default', ['browser-sync', 'styles'], function () {
	gulp.watch('app/styles/source/**/*.scss', ['styles']);
	gulp.watch('*.html', ['bs-reload']);
});
