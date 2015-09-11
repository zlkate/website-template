require('./index');
var browserSync = require('browser-sync');
var watch = require('gulp-watch');

browserSync.init({
    proxy: ('http://127.0.0.1:' + 3000),
    port: 8000,
    logConnections: true,
    logFileChanges: true,
    ghostMode: false,
    ui: false
});

watch('./**/*', browserSync.reload);