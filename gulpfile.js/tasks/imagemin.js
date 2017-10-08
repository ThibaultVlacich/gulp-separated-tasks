if(!PATH_CONFIG.images) return

const gulp     = require('gulp')
const imagemin = require('gulp-imagemin');
const path     = require('path')

let paths = {
    src: path.resolve(process.env.PWD, PATH_CONFIG.src, PATH_CONFIG.images.src),
    dest: path.resolve(process.env.PWD, PATH_CONFIG.dest, PATH_CONFIG.images.dest)
}

gulp.task(
    'imagemin',
    () => gulp.src(paths.src)
        .pipe(imagemin()) // Optimize image files
        .pipe(gulp.dest(paths.dest))
)
