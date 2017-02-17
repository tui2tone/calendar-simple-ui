'use strict';

import gulp from 'gulp';
import browserSync from 'browser-sync';

const SERVE_CONFIG = {
  port: 3400,
  server: {
    baseDir: "."
  },
  ui: {
    port: 3402
  }
}
const server = browserSync.create()

gulp.task('browser-sync', () => {
  server.init(SERVE_CONFIG);
});

gulp.task("refresh", (cb) => {
  return gulp.src("./css/app.css")
    .pipe(server.stream())
})