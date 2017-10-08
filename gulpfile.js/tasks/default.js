const gulp         = require('gulp')
const gulpSequence = require('gulp-sequence')

// Default task = watch (a single build is required because watch
// does not compile automaticaly when started...)
gulp.task(
    'default',
    (cb) => gulpSequence('clean', 'build', 'watch', cb)
)
