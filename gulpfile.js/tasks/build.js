const gulp         = require('gulp')
const gulpSequence = require('gulp-sequence')

// Build task: build all the required files for the app
var buildTask = function(cb) {
    gulpSequence('browserify', 'imagemin', 'sass', cb)
}

gulp.task('build', buildTask)
module.exports = buildTask
