var gulp = require('gulp');
var gzip = require('gulp-gzip');
var vendor = require('gulp-concat-vendor');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var cssnano = require('gulp-cssnano');
var del = require('del');
var uncss = require('gulp-uncss');
var sourcemap = require('gulp-sourcemap')
//var angularTemplateCache = require('gulp-angular-templatecache');

// gulp.task('template',function prepareTemplates() {
//   return gulp.src('./app/src/js/views/*.html')
//     .pipe(angularTemplateCache())
//     .pipe(concat('template.js'))
//     .pipe(gulp.dest('./app/dist/'));
// });


gulp.task('deps', function() {
    gulp.src([
    './app/bower_components/jquery/dist/jquery.js',
    './app/src/js/lib/ramda.min.js',
    './app/bower_components/angular/angular.min.js',
    './app/bower_components/angular-route/angular-route.js',
    './app/bower_components/angular-cookies/angular-cookies.min.js',
    './app/bower_components/angular-animate/angular-animate.js',
    './app/bower_components/angular-aria/angular-aria.js',
    './app/bower_components/angular-material/angular-material.js',
    './app/src/js/lib/angular-fullscreen.js',
    './app/src/font/angular-material-icons.min.js',
    './app/bower_components/md-data-table/dist/md-data-table.js',
    './app/bower_components/md-data-table/dist/md-data-table-templates.js',
    './app/bower_components/angular-md5/angular-md5.js',
    './app/bower_components/reframe.js/dist/reframe.js',
    './app/bower_components/angular-filter/dist/angular-filter.js',
    './app/bower_components/angular-sanitize/angular-sanitize.js',
    './app/bower_components/angular-ui-switch/angular-ui-switch.js',
    './app/bower_components/angular-ui-notification/dist/angular-ui-notification.js',
    './app/bower_components/angular-dialog-service/dist/dialogs.js',
    './app/bower_components/ng-table/dist/ng-table.js',
    './app/bower_components/angular-loading-bar/src/loading-bar.js',
    './app/bower_components/ngStorage/ngStorage.js',
    './app/bower_components/angular-hideheader/dist/angular-hide-header.js',
    '.app/components/version/interpolate-filter.js',
    './app/src/font/angular-material-icons.min.js',
    './app/bower_components/loadash/dist/loadash.js',
    './app/src/font/angular-material-icons.min.js',
    './app/bower_components/pdfmake/build/pdfmake.min.js',
    './app/bower_components/pdfmake/build/vfs_fonts.js',
    './app/bower_components/cryptojslib/rollups/aes.js',
    './app/bower_components/angular-cryptography/mdo-angular-cryptography.js',
    './app/bower_components/validator-js/validator.min.js'
      ]
            )
        .pipe(sourcemap({write:'./build/'}))
        .pipe(vendor('dependencies.min.js'))
        .pipe(gulp.dest('app/dist/'));
});

gulp.task('transpile', function() {
  return  gulp.src([
  './app/app.js',
  './app/src/js/views/adminConfig.js',
  './app/src/js/views/AgentCreate.js',
  './app/src/js/views/AgentEdit.js',
  './app/src/js/views/AuthCreate.js',
  './app/src/js/views/AuthEdit.js',
  './app/src/js/views/AuthView.js',
  './app/src/js/views/FirstLoginUser.js',
  './app/src/js/views/home.js',
  './app/src/js/views/homeUser.js',
  './app/src/js/views/Login.js',
  './app/src/js/views/homeAdmin.js',
  './app/src/js/views/ReportEdit.js',
  './app/src/js/views/ReportView.js',
  './app/src/js/views/UserCreate.js',
  './app/src/js/views/UserEdit.js',
  './app/src/js/views/UserView.js',
  './app/src/js/views/expired.js',
  './app/src/js/lib/tableau-2.0.0.js',
  './app/src/js/lib/angular-tableau.js',
   './app/src/js/appbootstrap.js'
      ])
        .pipe(concat('all.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('app/dist/'));
});


gulp.task('clean', function () {
  return del([
    'app/dist/all.min.js',
    'app/dist/dependencies.min.js',
    'app/dist/app.css'
   ]);
});

gulp.task('cssmin',function(){
  return gulp.src([
  './app/bower_components/ng-notifications-bar/dist/ngNotificationsBar.min.css',
  './app/bower_components/angular-material/angular-material.css',
  './app/bower_components/angular-ui-switch/angular-ui-switch.css',
  './app/bower_components/angular-loading-bar/src/loading-bar.css',
  './app/bower_components/md-data-table/dist/md-data-table-style.css',
  './app/bower_components/angular-ui-notification/dist/angular-ui-notification.css',
  './app/bower_components/ng-table/dist/ng-table.min.css',
  './app/src/css/*.css'
  ])
          .pipe(cssnano())
          .pipe(concat('all.css'))
          .pipe(gulp.dest('app/dist/'));
});

gulp.task('default',['clean','deps', 'transpile','cssmin']);
