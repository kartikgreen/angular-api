var gulp = require('gulp');
var nodemon = require('gulp-nodemon');
var gutil = require('gulp-util');
var bs = require('browser-sync').create(); // create a browser sync instance.

gulp.task('hello', function() {
    console.log('Hello karthik heartuh weak achu');
});



    gulp.task('default', function() {
          return gutil.log('Gulp is fucking!')
    });

gulp.task('browser-sync', function() {
    bs.init({
       proxy: "localhost:9000"    
    });
});

gulp.task('start', function () {

    nodemon({
    script: 'app.js',
    nodeArgs: ['--debug=5858']
    })
})
gulp.task('watch', ['browser-sync'], function () {
gulp.watch(['/home/kartik/angularhuman/client/views/*.html']).on('change',bs.reload);
});

gulp.task('copyHtml', function() {
  // copy any html files in source/ to public/
  gulp.src('/codebase/index.html').pipe(gulp.dest('/codebase/public')).pipe(bs.reload({stream: true}));
});