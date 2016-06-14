var gulp = require('gulp'),
	stylus = require('gulp-stylus'),
	nib = require('nib'),
	minifyCSS = require('gulp-minify-css'),
	gutil = require('gulp-util')

var config = {
	styles: {
		main: './stylus/styles.styl',
		watch: './stylus/**/*.styl',
		output: './css'
	}
}

gulp.task('build:css', function() {
	gulp.src(config.styles.main)
		.pipe(stylus({
			use: nib(),
			'include css': true
		}).on('error', function(err) {
			return console.log(err.stack);
  		}))
		.pipe(minifyCSS())
		.pipe(gulp.dest(config.styles.output));
});

gulp.task('watch', function() {
	gulp.watch(config.styles.watch, ['build:css']);
});

gulp.task('build', ['build:css']);

gulp.task('default', ['watch', 'build']);