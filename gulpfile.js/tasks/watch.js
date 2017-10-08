const gulp  = require('gulp')
const path  = require('path')
const watch = require('gulp-watch')

// And now my watch begins...
gulp.task(
    'watch',
    () => {
        // Run a single build when starting the task
        gulp.start('build')
        
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

            watch(srcPath, {}, () => gulp.start(taskName))
        })
    }
)