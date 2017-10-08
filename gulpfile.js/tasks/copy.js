if(!PATH_CONFIG.copy) return

const gulp = require('gulp')
const path = require('path')

gulp.task(
    'copy',
    () => {
        PATH_CONFIG.copy.forEach(function(p) {
            let src = path.resolve(process.env.PWD, PATH_CONFIG.src, p.src),
                dest = path.resolve(process.env.PWD, PATH_CONFIG.dest, p.dest)
    
            gulp.src(src)
                .pipe(gulp.dest(dest))
        })
    }
)
