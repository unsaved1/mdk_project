import gulp  from 'gulp';
// browser-sync
import {create as bsCreate} from 'browser-sync';
const browserSync = bsCreate();

// gulp-sass
import dartSass from 'sass';
import gulpSass from 'gulp-sass';
const sass = gulpSass(dartSass);

import rename from 'gulp-rename';
import autoprefixer from 'gulp-autoprefixer';
import cleanCSS from 'gulp-clean-css';
import htmlmin from 'gulp-htmlmin';
import { deleteAsync } from 'del';




// Очитска папки dist перед запуском галпа
function clearDist() {
	return deleteAsync(['dist']);
}


// Таски
gulp.task('server', function() {
	browserSync.init({
		server: {
			baseDir: 'dist'
		}
	});

	gulp.watch('src/*.html').on('change', browserSync.reload);
});

gulp.task('styles', function() {
	return gulp.src('src/sass/**/*.+(scss|sass)')		
		.pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
		.pipe(rename({
			prefix: '',
			suffix: '.min'
		}))
		.pipe(autoprefixer({
			cascade: false
		}))
		.pipe(cleanCSS({compatibility: 'ie8'}))
		.pipe(gulp.dest('dist/css'))
		.pipe(browserSync.stream());
});

gulp.task('html', function() {
	return gulp.src('src/*.html')
		.pipe(htmlmin({ collapseWhitespace: true }))
		.pipe(gulp.dest('dist/'));
});

gulp.task('scripts', function() {
	return gulp.src('src/js/**/*.js')
		.pipe(gulp.dest('dist/js'))
		.pipe(browserSync.stream());
});

gulp.task('images', function() {
	return gulp.src('src/assets/images/**/*')
		.pipe(gulp.dest('dist/assets/images'))
		.pipe(browserSync.stream());
});

gulp.task('icons', function() {
	return gulp.src('src/assets/icons/**/*')
		.pipe(gulp.dest('dist/assets/icons'))
		.pipe(browserSync.stream());
});

gulp.task('fonts', function() {
	return gulp.src('src/assets/fonts/**/*')
		.pipe(gulp.dest('dist/assets/fonts'))
		.pipe(browserSync.stream());
});

gulp.task('pages', function() {
	return gulp.src('src/assets/pages/**/*')
		.pipe(gulp.dest('dist/assets/pages'))
		.pipe(browserSync.stream());
})

gulp.task('watcher', function() {
	gulp.watch('src/sass/**/*.+(scss|sass|css)', gulp.parallel('styles'));
	gulp.watch('src/*.html').on('change', gulp.parallel('html'));
	gulp.watch('src/js/**/*').on('change', gulp.parallel('scripts'));
	gulp.watch('src/assets/images/**/*').on('all', gulp.parallel('images'));
	gulp.watch('src/assets/icons/**/*').on('all', gulp.parallel('icons'));
	gulp.watch('src/assets/fonts/**/*').on('all', gulp.parallel('fonts'));
	gulp.watch('src/assets/pages/**/*').on('change', gulp.parallel('pages'));
});

const parallelTasks = gulp.parallel('watcher', 'server', 'html', 'styles', 'scripts', 'images', 'icons', 'fonts', 'pages');



gulp.task('default',  gulp.series(clearDist, gulp.series(clearDist, parallelTasks)));