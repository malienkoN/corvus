const gulp = require('gulp');
const plumber = require('gulp-plumber');
const sourcemap = require('gulp-sourcemaps');
const sass = require('gulp-sass');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const csso = require('gulp-csso');
const rename = require('gulp-rename');
const htmlmin = require('gulp-htmlmin');
const uglify = require('gulp-uglify-es').default;
const pipeline = require('readable-stream').pipeline;
const imagemin = require('gulp-imagemin');
const webp = require('gulp-webp');
const svgstore = require('gulp-svgstore');
const del = require('del');
const sync = require('browser-sync');
const panini = require('panini');

// Styles

const styles = () => {
    return gulp.src('source/sass/style.scss')
        .pipe(plumber())
        .pipe(sourcemap.init())
        .pipe(sass())
        .pipe(postcss([
            autoprefixer()
        ]))
        .pipe(gulp.dest('build/css'))
        .pipe(csso())
        .pipe(rename('styles.min.css'))
        .pipe(sourcemap.write('.'))
        .pipe(gulp.dest('build/css'))
        .pipe(sync.stream());
}

exports.styles = styles;

// Html

const html = () => {
    return gulp.src('source/*.html')
        .pipe(panini({
            root: 'source/pages/',
            layouts: 'source/layouts/',
            partials: 'source/partials/',
            helpers: 'source/helpers/',
            data: 'source/data/'
        }))
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest('build/'))
}

exports.html = html;

// Uglify

const Uglify = () => {
    return pipeline(
      gulp.src('source/js/**'),
      uglify(),
      gulp.dest('build/js/')
    );
}

exports.Uglify = Uglify;

//resetPages

// function resetPages(done) {
//     panini.refresh();
//     done();
// }
//
// exports.resetPages = resetPages;

// Images

const images = () => {
    return gulp.src('source/img/**/*.{jpg,png,svg}')
        .pipe(imagemin([
            imagemin.optipng({optimizationlevel: 5}),
            imagemin.mozjpeg({quality: 80, progressive: true}),
            imagemin.svgo()
        ]))
        .pipe(gulp.dest('source/img'))
}

exports.images = images;

// Webp

const Webp = () => {
    return gulp.src('source/img/**/*.{png,jpg}')
        .pipe(webp({quality: 90}))
        .pipe(gulp.dest('source/img'))
}

exports.Webp = Webp;

// Sprite

const sprite = () => {
    return gulp.src('source/img/**/icon-*.svg')
        .pipe(svgstore())
        .pipe(rename('sprite.svg'))
        .pipe(gulp.dest('source/img'))
}

exports.sprite = sprite;

// Clean

const clean = () => {
    return del('build');
}

exports.clean = clean;

// Copy

const copy = () => {
    return gulp.src([
        'source/fonts/**/*.{woff,woff2}',
        'source/img/**',
        'source/*.ico'
    ], {
        base: 'source'
    })
        .pipe(gulp.dest('build'));
};

exports.copy = copy;

// Build

const build = gulp.series(
    clean,
    html,
    styles,
    Uglify,
    sprite,
    copy
);

exports.build = build;

// Server

const server = (done) => {
    sync.init({
        server: {
            baseDir: 'build'
        },
        cors: true,
        notify: false,
        ui: false,
    });
    done();
}

exports.server = server;

// Watcher

const watcher = () => {
    gulp.watch('source/sass/**/*.scss', gulp.series('styles'));
    gulp.watch('source/*.html').on('change', gulp.series(build, sync.reload));
    gulp.watch('source/js/*.js', gulp.series('Uglify'));
    gulp.watch(['source/{layouts,partials,helpers,data}/**/*'], panini.refresh());
}

exports.default = gulp.series(
  build, server, watcher
);