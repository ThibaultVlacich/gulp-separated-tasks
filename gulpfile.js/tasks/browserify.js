if(!PATH_CONFIG.javascripts) return

const browserify = require('browserify')
const buffer     = require('gulp-buffer')
const gulp       = require('gulp')
const gulpif     = require('gulp-if')
const path       = require('path')
const sourcemaps = require('gulp-sourcemaps')
const tap        = require('gulp-tap')
const uglify     = require('gulp-uglify')

var browserifyTask = function() {
    var paths = {
        src: path.resolve(process.env.PWD, PATH_CONFIG.src, PATH_CONFIG.javascripts.src),
        dest: path.resolve(process.env.PWD, PATH_CONFIG.dest, PATH_CONFIG.javascripts.dest)
    }

    return gulp.src(paths.src, {read: false})
        .pipe(tap(function (file) {
            file.contents = browserify(file.path, {debug: true}).bundle()
        }))
        .pipe(buffer())
        .pipe(gulpif(!global.production, sourcemaps.init()))
        .pipe(gulpif(global.production, uglify()))
        .pipe(gulpif(!global.production, sourcemaps.write()))
        .pipe(gulp.dest(paths.dest))
}

gulp.task('browserify', browserifyTask)
module.exports = browserifyTask
