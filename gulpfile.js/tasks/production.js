const gulp         = require('gulp')
const gulpSequence = require('gulp-sequence')

const productionTask = function(cb) {
    global.production = true

    gulpSequence('clean', 'build', cb)
}

gulp.task('production', productionTask)
module.exports = productionTask
