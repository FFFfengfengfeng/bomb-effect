var gulp        = require('gulp'),
    browserSync = require('browser-sync');

// 静态服务器
gulp.task('serve', function() {
    browserSync.init({
        files: ['**'],
        server: {
            baseDir: './',
            index: './index.html'
        }
    });
    port: 8050
});

gulp.task('dev', ['serve']);