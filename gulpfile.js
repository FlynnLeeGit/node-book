const gulp = require('gulp')
const gulpBetterRollup = require('gulp-better-rollup')
const shell = require('shelljs')

const package = require('./package.json')

const fileGlob = ['src/server/**/*.*', '!src/server/**/*.js']

gulp.task('file', () => {
  return gulp.src(fileGlob).pipe(gulp.dest('dist/server'))
})

gulp.task('js', () => {
  return gulp
    .src('src/server/**/*.js')
    .pipe(
      gulpBetterRollup(
        {
          // 所有的都为true 不需要bundle功能 只要转换功能
          external: _ => {
            return true
          }
          // plugins: [babel()]
        },
        { format: 'cjs' }
      )
    )
    .pipe(gulp.dest('./dist/server'))
})

gulp.task(
  'dev:server',
  gulp.series(
    gulp.series(['js', 'file']) // static
  )
)

gulp.task('build:server', gulp.series(['js', 'file']))
