var gulp        = require('gulp'),
    gUtil       = require('gulp-util'),
    sass        = require('gulp-ruby-sass'),
    prefixer    = require('gulp-autoprefixer');


gulp.task('sass', function () {

    return gulp
        .src('baze-grid.scss')
        .pipe( sass({ style: 'expanded' }) )
        .pipe( prefixer() )
        .pipe( gulp.dest('./') );

});

gulp.task('watch', ['sass'], function () {

    gulp.watch('baze-grid.scss', ['sass']);

})