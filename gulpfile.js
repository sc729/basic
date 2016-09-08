const gulp = require('gulp');
const sourcemaps = require('gulp-sourcemaps')
const webserver = require('gulp-webserver');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const minifyhtml = require('gulp-minify-html');
const sass = require('gulp-sass');
const livereload = require('gulp-livereload');
const babel = require('gulp-babel');


var src = 'src/main/resources';
var dist = 'target/classes';

var paths = {
	js: src + '/static/myFirstReactComponent/*.js',
	scss: src + '/scss/*.scss',
	html: src + '/**/*.html'
};

//웹서버를 localhost:8000 로 실행한다.
gulp.task('server', function () {
	return gulp.src(dist + '/static/')
		.pipe(webserver());
});

// 자바스크립트 파일을 하나로 합치고 압축한다.
gulp.task('combine-js', function () {
	return gulp.src(src + '/static/bundle.js')
		.pipe(concat('script.js'))
		.pipe(uglify()) //-> 왠에러..?
		.pipe(gulp.dest(dist + '/'));
});

// sass 파일을 css 로 컴파일한다.
gulp.task('compile-sass', function () {
	return gulp.src(paths.scss)
		.pipe(sass())
		.pipe(gulp.dest(dist + '/css'));
});

// HTML 파일을 압축한다.
gulp.task('compress-html', function () {
	return gulp.src(paths.html)
		.pipe(minifyhtml())
		.pipe(gulp.dest(dist + '/'));
});

// 파일 변경 감지 및 브라우저 재시작
gulp.task('watch', function () {
	livereload.listen();
	gulp.watch(paths.js, ['combine-js']);
	gulp.watch(paths.scss, ['compile-sass']);
	gulp.watch(paths.html, ['compress-html']);
	gulp.watch(dist + '/**').on('change', livereload.changed);
});

gulp.task('babelify', () => {
    return gulp.src('src/main/resources/static/myFirstReactComponent/myOwn.js')
        .pipe(sourcemaps.init())
        .pipe(babel({
            presets: ['es2015', 'react']
        }))
        .pipe(concat('allinone.js'))
        .pipe(uglify())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('src/main/resources/static'));
});

gulp.task('flux', () => {
    return gulp.src('src/main/resources/static/myFirstFluxApp/app.js')
        .pipe(sourcemaps.init())
        .pipe(babel({
            presets: ['es2015', 'react']
        }))
        .pipe(concat('bundle.js'))
        //.pipe(uglify())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('src/main/resources/static/myFirstFluxApp/'));
});


/*
 * 순위 조정....
 * 
 * 바벨로.
 * 
 * */


//기본 task 설정
gulp.task('default', [
	'server', 
	'combine-js', 
	'compile-sass', 
	'compress-html', 
	'watch' 
	]);