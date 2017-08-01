var gulp   = require('gulp');
var less   = require('gulp-less');
var input  = './*.less';
var output = './';

gulp.task('less', function () {
    return gulp
        .src(input)
        .pipe(less())
        .pipe(gulp.dest(output));
});

gulp.task('watch', function () {
    return gulp
        .watch(input, ['less'])
        .on('change', function (event) {
            console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
        });
});

gulp.task('default', ['less']);