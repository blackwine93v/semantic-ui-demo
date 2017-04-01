var gulp = require('gulp');
var less = require('gulp-less');
//var minifyCSS = require('gulp-csso');



gulp.task('css', function(){
  return gulp.src('less/**/*.less')
    .pipe(less())
    .pipe(gulp.dest('static/css/'))
});

gulp.task('default', ['css' ]);


gulp.watch('less/**/*.less', ['default']);

