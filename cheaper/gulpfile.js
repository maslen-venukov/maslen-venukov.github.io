// gulp version 4.0.0
// npm install --save-dev gulp-less gulp-sass gulp-watch gulp-autoprefixer gulp-cssmin gulp-rename browser-sync gulp-sourcemaps gulp-cheerio gulp-replace gulp-svg-sprite gulp-svgmin gulp.spritesmith

var gulp = require('gulp');
//var sass = require('gulp-sass');
var less = require('gulp-less');
var sourcemap = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var cssmin = require('gulp-cssmin');
var rename = require('gulp-rename');
var watch = require('gulp-watch');
var browserSync = require('browser-sync').create();
//-------------- svg
var cheerio = require('gulp-cheerio');
var replace = require('gulp-replace');
var svgSprite = require('gulp-svg-sprite');
var svgmin = require('gulp-svgmin');
// ------------- png 
var spritesmith = require('gulp.spritesmith');





// Static server
function lacal_host(done){
	browserSync.init({
		server: {
			baseDir: "./"
		},
		port: 300
	});
}
// scss
// function function_css(done){
// 	gulp.src('scss/style.scss')
// 	.pipe(sass({errorLogToConsole: true}))
// 	.on('error', console.error.bind(console))
// 	.pipe(autoprefixer({cascade: false}))
// 	.pipe(gulp.dest('css/'))
// 	.pipe(cssmin())
// 	.pipe(rename({suffix: '.min'}))
// 	.pipe(gulp.dest('css/'))
// 	.pipe(browserSync.stream());
// 	// init
// 	done();
// }
// less
function function_less(done){
	gulp.src('less/style.less')
	.pipe(less({errorLogToConsole: true}))
	.on('error', console.error.bind(console))
	.pipe(autoprefixer({
		overrideBrowserslist: ['last 4 versions'],
		cascade: false
	}))
	.pipe(gulp.dest('css/'))
	.pipe(cssmin())
	.pipe(rename({suffix: '.min'}))
	.pipe(gulp.dest('css/'))
	.pipe(browserSync.stream());
	// init
	done();
}
// reload function
function browerReload(done){
	browserSync.reload();
	// init
	done();
}
/*------------------------svg sprite------------------------*/
// svg icons
function svg_icons(done){
	gulp.src('img/svg-icone/icons/*.svg')
	.pipe(svgmin({
		js2svg: {
			pretty: true
		}
	}))
	.pipe(
		cheerio({
		run: function($) {
				$('[fill]').removeAttr('fill');
				$('[stroke]').removeAttr('stroke');
				$('[style]').removeAttr('style');
			},
			parserOptions: {xmlMode: true}
		})
	)
	.pipe(replace('&gt;', '>'))
	.pipe(svgSprite(
		config = {
			mode: {
				symbol: {
					sprite: "icons_sprite.svg"
				}
			}
		}
	))
	.pipe(gulp.dest('img/'));
	// init
	done();
}

/*------------------------png sprite------------------------*/
function png_icons(done){
	gulp.src('img/png-initial/*.png').pipe(spritesmith({
		imgName: 'sprite.png',
		cssName: 'sprite.css'
	}))
	.pipe(gulp.dest('img/png-sprite/'));
	// init
	done();
}
// watch function
function watch_fun(){
	// gulp.watch('scss/*.scss', function_css);
	gulp.watch('less/*.less', function_less);
	// reload browe
	gulp.watch('./**/*.html', browerReload);
	gulp.watch('./**/*.js', browerReload);
	gulp.watch('./**/*.php', browerReload);
	// svg
	gulp.watch('img/svg-icone/*/*.svg', svg_icons);
	// png
	gulp.watch('img/png-initial/*.png', png_icons);
}
// init tasks
gulp.task('default', gulp.parallel(lacal_host, watch_fun));