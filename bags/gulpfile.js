const project = 'dist';
const source = 'src';

const path = {
  build: {
    html: project,
    css: project + '/css',
    js: project + '/js',
    img: project + '/img',
    fonts: project + '/fonts'
  },
  src: {
    html: [source + '/*.html', '!' + source + '/html/**/*.html'],
    sass: source + '/sass/style.sass',
    js: source + '/js/script.js',
    img: source + '/img/**/*.{jpg,jpeg,png,svg,gif,ico,webp}',
    fonts: source + '/fonts/**/*.ttf'
  },
  watch: {
    html: source + '/**/*.html',
    sass: source + '/sass/**/*.sass',
    js: source + '/js/**/*.js',
    img: source + '/img/**/*.{jpg,jpeg,png,svg,gif,ico,webp}'
  },
  clean: project
};

const {src, dest, parallel, series, watch} = require('gulp');
const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const fileInclude = require('gulp-file-include');
const del = require('del');
const sass = require('gulp-sass');
const rename = require('gulp-rename');
const autoprefixer = require('gulp-autoprefixer');
const groupMedia = require('gulp-group-css-media-queries');
const cleanCSS = require('gulp-clean-css');
const concat = require('gulp-concat');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify-es').default;
const imageMin = require('gulp-imagemin');
const svgSprite = require('gulp-svg-sprite');
const ttf2woff = require('gulp-ttf2woff');
const ttf2woff2 = require('gulp-ttf2woff2');

const browsersync = () => {
  browserSync.init({
    server: {
      baseDir: project
    }
  });
};

const html = () => {
  return src(path.src.html)
    .pipe(fileInclude({
      prefix: '@',
      basepath: '@file'
    }))
    .pipe(dest(path.build.html))
    .pipe(browserSync.stream());
};

const css = () => {
  return src(path.src.sass)
    .pipe(sass({
      outputStyle: 'expanded'
    }).on('error', sass.logError))
    .pipe(groupMedia())
    .pipe(autoprefixer({
      cascade: 'false',
      overrideBrowserslist: ['last 5 versions', '> 1%'], grid: true
    }))
    .pipe(cleanCSS())
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(dest(path.build.css))
    .pipe(browserSync.stream());
};

const js = () => {
  return src([
    // 'node_modules/swiper/swiper-bundle.min.js',
    path.src.js
  ])
    .pipe(concat('script.min.js'))
    .pipe(babel({
      presets: ['@babel/env']
    }))
    // .pipe(uglify())
    .pipe(dest(path.build.js))
    .pipe(browserSync.stream())
};

const img = () => {
  return src([path.src.img, '!' + source + '/img/sprite/**/*'])
    .pipe(imageMin({
      interlaced: true,
      progressive: true,
      svgoPlugins: [{
        removeViewBox: false
      }],
      optimizationLevel: 3 // 0-7
    }))
    .pipe(dest(path.build.img))
    .pipe(browserSync.stream());
};

const svg = () => {
  return src(source + '/img/sprite/*.svg')
    .pipe(svgSprite({
      mode: {
        stack: {
          sprite: '../icons/sprite.svg',
          //example: true
        }
      }
    }))
    .pipe(dest(path.build.img))
};

const fonts = () => {
  return src(path.src.fonts)
    .pipe(ttf2woff())
    .pipe(dest(path.build.fonts))
    .pipe(src(path.src.fonts))
    .pipe(ttf2woff2())
    .pipe(dest(path.build.fonts))
};

const watchFiles = () => {
  watch(path.watch.html, html);
  watch(path.watch.sass, css);
  watch(path.watch.js, js);
  watch(path.watch.img, img);
};

const clean = () => {
  return del(path.clean);
};

const build = gulp.series(clean, parallel(html, css, js, img, svg, fonts));
const watching = parallel(build, watchFiles, browsersync);

exports.svg = svg;
exports.clean = clean;

exports.html = html;
exports.css = css;
exports.js = js;
exports.img = img;
exports.fonts = fonts;
exports.build = build;
exports.watching = watching;
exports.default = watching;