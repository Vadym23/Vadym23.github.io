const gulp = require('gulp');
const del = require('del');
const concat = require('gulp-concat');
const browserSync = require('browser-sync').create();
const less = require('gulp-less');
const sourcemaps = require('gulp-sourcemaps');

const cssFiles = [
    './node_modules/slick-carousel/slick/slick.less',
    './node_modules/slick-carousel/slick/slick-theme.less',
    './node_modules/fotorama/fotorama.css',
    './src/less/style.less'
];

const jsFiles = [
    './node_modules/jquery/dist/jquery.min.js',
    './node_modules/slick-carousel/slick/slick.js',
    './node_modules/fotorama/fotorama.js',
    './src/js/scripts.js'
];

function htmls() {
    return gulp.src('./src/*.html')
        .pipe(gulp.dest('./build'))
        .pipe(browserSync.stream());
}

function fonts() {
    return gulp.src('./src/fonts/**/*')
        .pipe(gulp.dest('./build/fonts'))
        .pipe(browserSync.stream());
}

function styles() {
    return gulp.src(cssFiles)
        .pipe(sourcemaps.init())
        .pipe(less())
        .pipe(concat('main.css'))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./build/css'))
        .pipe(browserSync.stream());
}

function js() {
    return gulp.src(jsFiles)
        .pipe(concat('main.js'))
        .pipe(gulp.dest('./build/js'))
        .pipe(browserSync.stream());
}

function imgs() {
    return gulp.src('./src/img/**/*')
        .pipe(gulp.dest('./build/img'))
        .pipe(browserSync.stream());
}

function watch() {
        browserSync.init({
            server: {
                baseDir: "./build/"
            }
        });


    gulp.watch('./src/less/**/*.less', styles);
    gulp.watch('./src/img/**/*', imgs);
    gulp.watch("./src/**/*.html", htmls);
}

function clean () {
    return del(['build/*'])
}

gulp.task('htmls', htmls);
gulp.task('styles', styles);
gulp.task('watch', watch);
gulp.task('clean', clean);

gulp.task('build', gulp.series(clean,
        gulp.parallel(htmls, styles, imgs, js, fonts)
    ));
gulp.task('dev', gulp.series('build', 'watch'));
