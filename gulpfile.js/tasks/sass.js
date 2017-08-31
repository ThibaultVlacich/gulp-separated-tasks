if(!PATH_CONFIG.sass) return

const autoprefixer = require('gulp-autoprefixer')
const gulp         = require('gulp')
const path         = require('path')
const sass         = require('gulp-sass')

var sassTask = function() {
    var paths = {
        src: path.resolve(process.env.PWD, PATH_CONFIG.src, PATH_CONFIG.sass.src, '**/*'),
        dest: path.resolve(process.env.PWD, PATH_CONFIG.dest, PATH_CONFIG.sass.dest)
    }

    return gulp.src(paths.src)
        .pipe(sass())
        .pipe(autoprefixer())
        .on('error', sass.logError)
        .pipe(gulp.dest(paths.dest))
}

gulp.task('sass', sassTask)
module.exports = sassTask