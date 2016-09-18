const gulp = require('gulp');
const sourcemaps = require('gulp-sourcemaps')
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const minifyhtml = require('gulp-minify-html');
const sass = require('gulp-sass');
const livereload = require('gulp-livereload');
const babel = require('gulp-babel');

const es = require('event-stream')

const browserify = require('browserify');
const babelify = require('babelify');
const source = require('vinyl-source-stream');
const browserSync = require('browser-sync');

const config = require('./gulp/gulp-config');



/**
 * 시작되있는 서버의 프록시에 싱크 웹서버를 연결한다.
 */
gulp.task('server', function () {

	browserSync({
		socket: {
			domain: "localhost:3000"
		},
		proxy: 'localhost:8080',
		open: 'external'
	});

	return()=>{console.log('browserSync  started');};
});


/**
 * 자바스크립트를 빌드하고 bundle.js로 합친 후에 웹서버와 싱크
 * */
gulp.task('build', function () {
	return browserify(config.src.js + '/main.js')//최상위 모듈이 와야함.
		.transform(babelify, {presets: ['react', 'es2015']})
		.bundle()
		.pipe(source('bundle.js'))
		.pipe(gulp.dest(config.dist.bundle + '/'))
		.pipe(browserSync.reload({stream: true}));
});

/**
 * scss파일을 컴파일
 * */
gulp.task('compile-sass', function () {
	return gulp.src( config.src.css )
		.pipe(sass())
		.pipe(gulp.dest( config.dist.css ));
});

/**
 * html파일을 압축함
 * */
gulp.task('compress-html', function () {
	return gulp.src( config.src.html )
		.pipe(minifyhtml())
		.pipe(gulp.dest(  config.dist.html + '/'));
});


/**
 * 파일 변경 감지 및 브라우져 sync
 * */
gulp.task('watch', function () {
	gulp.watch( config.src.js + '/**/*.*' , ['build']).on('change', browserSync.reload);
	//gulp.watch(paths.scss, ['compile-sass']);
	//gulp.watch(paths.html, ['compress-html']);
});









//기본 task 설정
gulp.task('default', [
	'server', 
	'build',
	//'compile-sass', 
	//'compress-html', 
	'watch' 
	]);