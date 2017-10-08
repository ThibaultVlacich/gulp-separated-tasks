const gulp = require('gulp')
const del  = require('del')
const path = require('path')

let folder = path.resolve(process.env.PWD, PATH_CONFIG.dest)

gulp.task(
    'clean',
    () => del([folder], { force: true })
)
