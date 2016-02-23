var gulp 		= require('gulp'),
	uglify 		= require('gulp-uglify'),
	changed 	= require('gulp-changed'),
	imagemin	= require('gulp-imagemin'),
	stripDebug 	= require('gulp-strip-debug'),
	minifyCSS 	= require('gulp-minify-css'),
	minifyHTML	= require('gulp-minify-html');

// Scripts
gulp.task('js', function() {
	gulp.src('js/**/*')
		.pipe(uglify({ compress: true }))
		.pipe(stripDebug())
		.pipe(gulp.dest('./public/js'));
});

// Styles
gulp.task('css', function() {
	gulp.src('css/**/*')
		.pipe(minifyCSS({ keepSpecialComments: '*'/*, keepBreaks: '*'*/ }))
		.pipe(gulp.dest('./public/css'));
});

// Images
gulp.task('images', function() {
	var imgSrc = './i/**/*',
		imgDst = './public/i';

	gulp.src('i/**/*')
		.pipe(changed(imgDst))
		.pipe(imagemin())
		.pipe(gulp.dest(imgDst));
});

// HTML
gulp.task('html', function() {
	var htmlSrc = '*.html',
		htmlDst = './public';

	gulp.src(htmlSrc)
		.pipe(minifyHTML())
		.pipe(gulp.dest(htmlDst));
});

// Fonts
gulp.task('fonts', function() {
	gulp.src('fonts/**')
		.pipe(gulp.dest('./public/fonts'));
});

// Watch
/*gulp.task('watch', function() {
	gulp.watch('js/*.js', ['js']);
});*/

gulp.task('gulp', ['js', 'css', 'images', 'html', 'fonts']);