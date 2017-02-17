import gulp from 'gulp';
import runSequence from 'run-sequence';

gulp.task("watch", () => {
  gulp.watch(["./sass/**/*.scss"], ["sass", "refresh"]);
  gulp.watch(["./index.html"], ["refresh"]);
  gulp.watch(["./js/**/*.js"], ["refresh"]);
})