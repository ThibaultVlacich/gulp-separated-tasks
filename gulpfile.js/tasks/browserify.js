if(!PATH_CONFIG.javascripts) return

const browserify = require('browserify')
const gulp       = require('gulp')
const path       = require('path')
const source     = require('vinyl-source-stream')

var browserifyTask = function() {
    var paths = {
        src: path.resolve(process.env.PWD, PATH_CONFIG.src, PATH_CONFIG.javascripts.src, 'main.js'),
        dest: path.resolve(process.env.PWD, PATH_CONFIG.dest, PATH_CONFIG.javascripts.dest)
    }

    return browserify(paths.src)
        .bundle()
        .pipe(source('main.js'))
        .pipe(gulp.dest(paths.dest));
}

gulp.task('browserify', browserifyTask)
module.exports = browserifyTask
