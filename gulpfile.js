var gulp = require('gulp'),
	sass = require('gulp-sass');
	rename = require('gulp-rename'),
	notify = require('gulp-notify');

gulp.task('default', function () {
  return gulp.src('scss/*.scss')
  	.pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(rename('styles.min.css'))
    .pipe(gulp.dest('css/'))
    .pipe(notify('Done!'));
});

gulp.task('watch', function(){
	gulp.watch('css/*.css',['default']);
});
