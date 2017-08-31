const gulp         = require('gulp')
const gulpSequence = require('gulp-sequence')

// Default task = watch (a single build is required because watch
// does not compile automaticaly when started...)
var defaultTask = function(cb) {
    gulpSequence('clean', 'build', 'watch', cb)
}

gulp.task('default', defaultTask)
module.exports = defaultTask
