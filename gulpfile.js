var gulp        = require('gulp'),
    less        = require('gulp-less'), //编译less
    babel       = require('gulp-babel'),
    uglify      = require('gulp-uglify'), //压缩js
    concat      = require('gulp-concat'), //文件合并  
    rename      = require('gulp-rename'), //文件更名  
    notify      = require('gulp-notify'); //提示信息  
    cssmin      = require('gulp-clean-css'), //压缩css
    autoprefix  = require('gulp-autoprefixer'), //处理css3前缀
    browserSync = require('browser-sync'); //浏览器实时测试工具

/*
 * 编译js
 * 源目录src/es6/*.js
 * 输出目录dev/js文件夹
 */
//gulp.task('compileJS', function() {
//  return gulp.src('src/js/*.js')
//      .pipe(babel({
//          presets: ['es2015']
//      }))
//      .pipe(gulp.dest('dev/js'))
//      .pipe(notify('ES6编译 OK!'))
//});
/*
 * 压缩js
 * 源目录dev/js/*.js
 * 输出目录dist/js文件夹
 */
gulp.task('compressJS', function() {
    return gulp.src('src/js/toast.js')
        .pipe(uglify())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('dist/js'))
        .pipe(notify('JS压缩 OK!'))
});

/*
 * 编译css
 * 源目录src/less/fd.less
 * 输出目录dist/css文件夹
 */
gulp.task('compileCSS', function() {
    return gulp.src('src/less/toast.less')
        .pipe(less())
        .pipe(autoprefix())
        .pipe(gulp.dest('dev/css'))
        .pipe(notify('LESS编译 OK!'))
});
/*
 * 编译css
 * 源目录dev/css/*.css
 * 输出目录dist/css文件夹
 */
gulp.task('compressCSS', function() {
    return gulp.src('dev/css/*.css')
        .pipe(cssmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('dist/css'))
        .pipe(notify('CSS压缩 OK!'))
});

//监听
gulp.task('watch', function() {
    browserSync.init({
        files: ['dist/css/*.css', 'dist/js/*.js', '*.html'],
        server: {
            baseDir: './'
        }
    });
    
    // Watch .js files  
//  gulp.watch('src/js/*.js', ['compileJS']);  
    
    gulp.watch('src/js/toast.js', ['compressJS']);  
    
    // Watch .less files
    gulp.watch('src/less/toast.less', ['compileCSS']);  
    
    gulp.watch('dev/css/toast.css', ['compressCSS']);  
   
});

//默认任务
gulp.task('default', ['watch']);
