const gulp = require('gulp');
const sourcemaps = require('gulp-sourcemaps')
const webserver = require('gulp-webserver');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const minifyhtml = require('gulp-minify-html');
const sass = require('gulp-sass');
const livereload = require('gulp-livereload');
const babel = require('gulp-babel');

const browserify = require('browserify');
const babelify = require('babelify');
const source = require('vinyl-source-stream');



const src = 'src/main/resources';
const dist = 'target/classes';

var distPath = {
	publicPath : dist + '/public',
	//templatePath : dist + '/templates'
	templatePath : dist + '/public'
}

var paths = {
	js: src + '/src/js/**/*.js',
	scss: src + '/scss/*.scss',
	html: src + '/template/**/*.html'
};



//웹서버를 localhost:8000 로 실행한다.
gulp.task('server', function () {
	return gulp.src(distPath.templatePath)
		.pipe(webserver());
});

// 자바스크립트 파일을 하나로 합치고 압축한다.
gulp.task('combine-js', function () {
	return browserify(src + '/src/js/myFirstReactComponent/myOwn2.js')
		.transform(babelify, {presets: ['react', 'es2015']})
		.bundle()
		.pipe(source('bundle.js'))
		.pipe(gulp.dest(distPath.publicPath + '/'))
		.pipe(livereload());;
});

// sass 파일을 css 로 컴파일한다.
gulp.task('compile-sass', function () {
	return gulp.src(paths.scss)
		.pipe(sass())
		.pipe(gulp.dest(distPath.publicPath + '/css'));
});

// HTML 파일을 압축한다.
gulp.task('compress-html', function () {
	return gulp.src(paths.html)
		.pipe(minifyhtml())
		.pipe(gulp.dest(dist.templatePath + '/'));
});

// 파일 변경 감지 및 브라우저 재시작
gulp.task('watch', function () {
	livereload.listen();
	gulp.watch(src + '/src/js/**/*.*', ['combine-js']);
	//gulp.watch(paths.scss, ['compile-sass']);
	//gulp.watch(paths.html, ['compress-html']);
	//gulp.watch(distPath.publicPath + '/**').on('change', livereload.changed);
	//gulp.watch(distPath.publicPath + '/**', ['combine-js']);
});




//기본 task 설정
gulp.task('default', [
	'server', 
	'combine-js', 
	//'compile-sass', 
	//'compress-html', 
	'watch' 
	]);