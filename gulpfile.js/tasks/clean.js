const gulp = require('gulp')
const del  = require('del')
const path = require('path')

const cleanTask = function (cb) {
    var folder = path.resolve(process.env.PWD, PATH_CONFIG.dest)

    return del([folder], { force: true })
}

gulp.task('clean', cleanTask)
module.exports = cleanTask
