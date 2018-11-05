var gulp = require('gulp'),
    sass = require('gulp-sass'),
    browserSync = require('browser-sync'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglifyjs'),
    cssnano = require('gulp-cssnano'),
    rename = require('gulp-rename'),
    del = require('del'),
    imagemin = require('gulp-imagemin'),
    pngquant = require('imagemin-pngquant'),
    cache = require('gulp-cache'),
    autoprefixer = require('gulp-autoprefixer');

gulp.task('scripts', function() {
    return gulp.src([
            'src/js/**/*.js',
        ])
        .pipe(uglify())
        .pipe(gulp.dest('app/js'));
});

gulp.task('sass', function() {
    return gulp.src('app/sass/*.sass')
        .pipe(sass())
        .pipe(autoprefixer(['last 15 versions', '> 1%'], { cascade: true }))
        .pipe(gulp.dest('app/css'))
        .pipe(cssnano())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('app/css'))
        .pipe(browserSync.reload({ stream: true }))
});

gulp.task('browser-sync', function() {
    browserSync({
        server: {
            baseDir: 'app'
        },
        notify: false,
        open: false,
        reloadOnRestart: true
    });
});

gulp.task('clean', function() {
    return del.sync('dist');
});
gulp.task('clear', function() {
    return cach.clearAll();
});

gulp.task('watch', ['browser-sync', 'scripts', 'sass'], function() {
    gulp.watch('app/sass/*.sass', ['sass']);
    gulp.watch('app/**/*.html', browserSync.reload);
    gulp.watch('app/js/**/*.js', browserSync.reload);
});

gulp.task('b', ['clean', 'img', 'sass', 'scripts'], function() {
    var buildCss = gulp.src([
            'app/css/main.min.css',
            'app/css/libs.min.css',
            'app/css/fonts.css',
            'app/css/media.min.css'
        ])
        .pipe(gulp.dest('dist/css'));
    var buildFonts = gulp.src('app/fonts/**/*')
        .pipe(gulp.dest('dist/fonts'));
    var buildJs = gulp.src('app/js/**/*')
        .pipe(gulp.dest('dist/js'));
    var buildHtml = gulp.src('app/*.html')
        .pipe(gulp.dest('dist'));
});

gulp.task('default', ['watch']);