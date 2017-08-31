const gulp  = require('gulp')
const path  = require('path')
const watch = require('gulp-watch')

// And now my watch begins...
var watchTask = function() {
    var watchableTasks = ['browserify', 'imagemin', 'sass']

    function getTaskPathFor(taskName) {
        switch (taskName) {
            case 'browserify':
                return PATH_CONFIG.javascripts
            case 'imagemin':
                return PATH_CONFIG.images
            case 'sass':
                return PATH_CONFIG.sass
            default:
                return PATH_CONFIG[taskName]
        }
    }

    watchableTasks.forEach(function(taskName) {
        var taskPath = getTaskPathFor(taskName)
        var srcPath = path.resolve(process.env.PWD, PATH_CONFIG.src, taskPath.src)
        var globPattern = '**/*'

        watch(path.join(srcPath, globPattern), {}, function() {
            require('./' + taskName)()
        })
    })
}

gulp.task('watch', watchTask)

module.exports = watchTask
