const gulp = require('gulp');
// const babel = require("gulp-babel");
const babelify = require('babelify');
const less = require('gulp-less');
const autoprefixer = require('gulp-autoprefixer');
const source = require('vinyl-source-stream');
// const concat = require("gulp-concat");
const browserify = require('browserify');
const cssBase64 = require('gulp-css-base64');
const inlinesource = require('gulp-inline-source');
const browserSync = require('browser-sync');
const tsify = require('tsify');
const buffer = require('vinyl-buffer');
const ts = require('gulp-typescript');

const { reload } = browserSync;

gulp.task('es6', () => browserify({ entries: 'built/local/main.js' })
  .transform(babelify.configure({
    presets: ['es2015'], compact: true,
  }))
  .bundle()
  .pipe(source('main.js'))
  .pipe(gulp.dest('js'))
  .pipe(reload({ stream: true })));

gulp.task('css', () => gulp.src('src/style.less')
  .pipe(less())
  .pipe(autoprefixer({
    browsers: ['last 20 versions'],
    cascade: false,
  }))
  .pipe(gulp.dest('css'))
  .pipe(reload({ stream: true })));

gulp.task('img-to-base64', () => gulp.src('css/style.css')
  .pipe(cssBase64({
    maxWeightResource: 3276800,
  }))
  .pipe(gulp.dest('css/img-to-base64')));

gulp.task('inline-build', () => {
  const options = {
    compress: false, // if don`t work - change to false
  };

  return gulp.src('index.html')
    .pipe(inlinesource(options))
    .pipe(gulp.dest('inline_build'));
});
gulp.task('browserSync', () => {
  browserSync({
    server: {
      baseDir: './',
    },
    // port: 8080,
    open: true,
    notify: false,
  });
});


gulp.task('ts', () => gulp.src(['src/**/*.ts', 'constants/*.ts'])
  .pipe(ts({
    noImplicitAny: true,
    lib: ['es5', 'es2015', 'dom', 'scripthost'],
    target: 'ES2015', 
    // outFile: 'output.js',
  }))
  .pipe(gulp.dest('built/local')));

  
gulp.task('ts-contants', () => gulp.src('constants/*.ts')
  .pipe(ts({
    noImplicitAny: true,
    lib: ['es5', 'es2015', 'dom', 'scripthost'],
  // outFile: 'output.js',
  }))
  .pipe(gulp.dest('built/constants')));


gulp.task('start', ['es6', 'css', 'browserSync'], () => {
  gulp.watch(['src/**/*.ts', 'constants/*.ts'], ['ts']);
  gulp.watch(['built/local/**/*.js','built/constants/*.js', 'video_settings/*.js'], ['es6']);
  gulp.watch('src/style.less', ['css']);
});
