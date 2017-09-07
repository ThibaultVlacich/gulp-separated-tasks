if(!PATH_CONFIG.javascripts) return

const browserify = require('browserify')
const buffer     = require('gulp-buffer')
const gulp       = require('gulp')
const path       = require('path')
const source     = require('vinyl-source-stream')
const tap        = require('gulp-tap')

var browserifyTask = function() {
    var paths = {
        src: path.resolve(process.env.PWD, PATH_CONFIG.src, PATH_CONFIG.javascripts.src),
        dest: path.resolve(process.env.PWD, PATH_CONFIG.dest, PATH_CONFIG.javascripts.dest)
    }

    return gulp.src(paths.src, {read: false})
        .pipe(tap(function (file) {
            file.contents = browserify(file.path, {debug: true})
                .bundle()
        }))
        .pipe(buffer())
        .pipe(gulp.dest(paths.dest))
}

gulp.task('browserify', browserifyTask)
module.exports = browserifyTask
