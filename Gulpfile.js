'use strict'
//gulp
var gulp = require('gulp');
//browserSync
var browserSync = require('browser-sync');
//path builder
var path = require('path');

//Default
gulp.task('default',['serve']);
//browserSync
gulp.task('serve',['watch'], () => {
    initBrowseSync();
});
const initBrowseSync = function () {
    var server = {
        baseDir: 'src/ES6'
    };
    browserSync.instance = browserSync.init({
        startPath: '/',
        server: server,
        browser: 'default'
    });
}
//Watch files
gulp.task('watch', () => {
    gulp.watch([
        path.join('src' ,'/**/*.css'),
        path.join('src' ,'/**/*.js'),
        path.join('src' ,'/*.html')
    ], (event) => {
        browserSync.reload(event.path);
    });
});
