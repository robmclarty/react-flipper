'use strict';

const gulp = require('gulp');
const babelify = require('babelify');
const browserify = require('browserify');
const source = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');
const concat = require('gulp-concat');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');

const autoprefixerBrowsers = [
  'last 3 versions',
  'ie >= 9',
  'ios >= 7',
  'android >= 4.4',
  'bb >= 10'
];

gulp.task('app', function () {
  const browserifyOptions = {
    entries: ['./src/app.jsx'],
    debug: true,
    extensions: ['.jsx'],
    fullPaths: false
  };
  const babelifyOptions = {
    sourceMaps: true,
    presets: ['es2015', 'react']
  };
  const stream = browserify(browserifyOptions)
    .transform(babelify.configure(babelifyOptions));

  return stream
    .bundle()
    .pipe(source(`application.js`))
    .pipe(buffer())
    .pipe(gulp.dest('./dist/javascripts'));
});

// Concatenate and compress sass into css.
gulp.task('styles', function () {
  return gulp
    .src('./styles/main.scss')
    .pipe(concat('application.scss'))
    .pipe(sass({ style: 'expanded' }))
    .pipe(autoprefixer(autoprefixerBrowsers))
    .pipe(gulp.dest('./dist/stylesheets'));
});

gulp.task('html', function () {
  return gulp
    .src('src/index.html')
    .pipe(gulp.dest('./dist'));
});

gulp.task('watch', function () {
  gulp.watch('./src/**/*', ['build']);
  gulp.watch('./styles/**/*', ['styles']);
});

// Build static assets after cleaning up /public directory.
gulp.task('build', ['app', 'styles', 'html']);

// Build everything and start server while watch for changes.
gulp.task('default', ['build', 'watch']);
