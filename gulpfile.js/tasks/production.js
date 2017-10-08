const gulp         = require('gulp')
const gulpSequence = require('gulp-sequence')

global.production = true

gulp.task(
    'production', 
    (cb) => gulpSequence('clean', 'build', cb)
)
