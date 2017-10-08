const gulp         = require('gulp')
const gulpSequence = require('gulp-sequence')

// Build task: build all the required files for the app
gulp.task(
    'build',
    (cb) => gulpSequence('browserify', 'copy', 'imagemin', 'sass', cb)
)
