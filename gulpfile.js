/**
 * Created by Canon on 2016/7/13.
 */
var gulp = require('gulp');

// 引入组件
var less = require('gulp-less'),              // less
    minifycss = require('gulp-minify-css'),   // CSS压缩
    minifyhtml = require('gulp-minify-html'), // HTML压缩
    uglify = require('gulp-uglify'),          // js压缩
    concat = require('gulp-concat'),          // 合并文件
    rename = require('gulp-rename'),          // 重命名
    clean = require('gulp-clean'),            //清空文件夹
    processhtml = require('gulp-processhtml');

var devPath = './app';
var backup = './backup';
var destPath = './dest';

// less解析
gulp.task('build-less', function () {
    gulp.src('./javis/static/less/lib/s-production.less')
        .pipe(less())
        .pipe(gulp.dest('./javis/static/build/css/lib/'));

    gulp.src('./javis/static/less/lib/s-skins.less')
        .pipe(less())
        .pipe(gulp.dest('./javis/static/build/css/lib/'));

    gulp.src('./javis/static/less/lib/s/s.less')
        .pipe(less())
        .pipe(gulp.dest('./javis/static/build/css/lib/'));

    gulp.src('./javis/static/less/*.less')
        .pipe(less())
        .pipe(gulp.dest('./javis/static/build/css/'))
});

// 合并、压缩、重命名css
gulp.task('stylesheets', function () {
    // 注意这里通过数组的方式写入两个地址,仔细看第一个地址是css目录下的全部css文件,第二个地址是css目录下的areaMap.css文件,但是它前面加了!,这个和.gitignore的写法类似,就是排除掉这个文件.
    // gulp.src(['./javis/static/build/css/*.css', '!./javis/static/build/css/areaMap.css'])
    //     .pipe(concat('all.css'))
    //     .pipe(gulp.dest('./javis/static/build/css/'))
    //     .pipe(rename({suffix: '.min'}))
    //     .pipe(minifycss())
    //     .pipe(gulp.dest('./javis/static/build/css'));
    gulp.src([devPath + '/app.css',devPath + '/view/**/*.css'])
        .pipe(minifycss())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest(destPath + '/'));
    // gulp.src(devPath + '/view/**/*.css')
    //     .pipe(minifycss())
    //     .pipe(rename({suffix: '.min'}))
    //     .pipe(gulp.dest(destPath + '/'));
});

// 合并，压缩js文件
gulp.task('javascripts', function () {
    gulp.src(devPath + '/app.js')
        .pipe(uglify())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest(destPath + '/'));
    gulp.src(devPath + '/view/**/*.js')
        .pipe(uglify())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest(destPath + '/view/'));
});

// 清空图片、样式、js
gulp.task('clean', function () {
    return gulp.src(destPath + '/*', {read: false})
        .pipe(clean({force: true}));

});

// 将bower的库文件对应到指定位置
gulp.task('buildlib', function () {

    gulp.src(devPath + '/bower_components/angular/angular.min.js')
        .pipe(gulp.dest(destPath + '/lib/'));
    gulp.src(devPath + '/bower_components/angular-animate/angular-animate.min.js')
        .pipe(gulp.dest(destPath + '/lib/'));
    gulp.src(devPath + '/bower_components/angular-bootstrap/ui-bootstrap.min.js')
        .pipe(gulp.dest(destPath + '/lib/'));
    gulp.src(devPath + '/bower_components/angular-bootstrap/ui-bootstrap-tpls.min.js')
        .pipe(gulp.dest(destPath + '/lib/'));
    gulp.src(devPath + '/bower_components/angular-loader/angular-loader.min.js')
        .pipe(gulp.dest(destPath + '/lib/'));
    gulp.src(devPath + '/bower_components/angular-mocks/angular-mocks.js')
        .pipe(gulp.dest(destPath + '/lib/'));
    gulp.src(devPath + '/bower_components/angular-resource/angular-resource.min.js')
        .pipe(gulp.dest(destPath + '/lib/'));
    gulp.src(devPath + '/bower_components/angular-route/angular-route.min.js')
        .pipe(gulp.dest(destPath + '/lib/'));
    gulp.src(devPath + '/bower_components/angular-simple-logger/dist/angular-simple-logger.min.js')
        .pipe(gulp.dest(destPath + '/lib/'));
    gulp.src(devPath + '/bower_components/angular-ui-router/release/angular-ui-router.min.js')
        .pipe(gulp.dest(destPath + '/lib/'));
    gulp.src(devPath + '/bower_components/angularAMD/angularAMD.min.js')
        .pipe(gulp.dest(destPath + '/lib/'));
    gulp.src(devPath + '/bower_components/angularAMD/ngload.js')
        .pipe(gulp.dest(destPath + '/lib/'));
    gulp.src(devPath + '/bower_components/bootstrap/dist/js/bootstrap.min.js')
        .pipe(gulp.dest(destPath + '/lib/'));
    gulp.src(devPath + '/bower_components/jquery/jquery.min.js')
        .pipe(gulp.dest(destPath + '/lib/'));
    gulp.src(devPath + '/bower_components/angular-sanitize/angular-sanitize.min.js')
        .pipe(gulp.dest(destPath + '/lib/'));
    gulp.src(devPath + '/bower_components/lodash/dist/lodash.min.js')
        .pipe(gulp.dest(destPath + '/lib/'));
    gulp.src(devPath + '/bower_components/js-yaml/dist/js-yaml.js')
        .pipe(gulp.dest(destPath + '/lib/'));
    gulp.src(devPath + '/bower_components/mockjs/dist/mock-min.js')
        .pipe(gulp.dest(destPath + '/lib/'));
    gulp.src(devPath + 'bower_components/requirejs/require.js')
        .pipe(gulp.dest(destPath + '/lib/'));

    //--------------------------css-------------------------------------

    gulp.src(devPath + '/css/**/*')
        .pipe(gulp.dest('./css/'));

    gulp.src(devPath + '/bower_components/bootstrap/dist/css/bootstrap.min.css')
        .pipe(gulp.dest(destPath + '/css/'));
    gulp.src(devPath + '/bower_components/bootstrap/fonts/*')
        .pipe(gulp.dest(destPath + '/css/fonts/'));
    gulp.src(devPath + '/bower_components/fontawesome/css/font-awesome.min.css')
        .pipe(gulp.dest(destPath + '/css/'));
    gulp.src(devPath + '/bower_components/fontawesome/fonts/*')
        .pipe(gulp.dest(destPath + '/css/fonts/'));
    gulp.src(devPath + '/bower_components/html5-boilerplate/dist/css/normalize.css')
        .pipe(gulp.dest(destPath + '/css/'));
    gulp.src(devPath + '/bower_components/html5-boilerplate/dist/css/main.css')
        .pipe(gulp.dest(destPath + '/css/'));


});

// 复制文件
gulp.task('copyfiles', function () {

    gulp.src(devPath + '/index_d.html')
        .pipe(rename('index.html'))
        .pipe(gulp.dest(destPath + '/'));
    gulp.src(devPath + '/app_d.js')
        .pipe(rename('app.js'))
        .pipe(gulp.dest(destPath + '/'));
    gulp.src(devPath + '/app.css')
        .pipe(gulp.dest(destPath + '/'));

    gulp.src(devPath + '/view/**/*.html')
        .pipe(gulp.dest(destPath + '/view/'));
});

// 重构 HTML
gulp.task("processhtml", function () {
    gulp.src(devPath + '/index.html')
        .pipe(processhtml())
        .pipe(gulp.dest(destPath + '/'));
});

// 定义develop任务在日常开发中使用
gulp.task('develop', function () {
    gulp.run('buildlib', 'build-less', 'javascripts', 'stylesheets');

    gulp.watch('./javis/static/less/*.less', ['build-less']);
});

// 定义一个prod任务作为发布或者运行时使用
gulp.task('prod',['clean'], function () {
    gulp.run('buildlib', 'copyfiles', 'stylesheets', 'javascripts');

    // 监听.less文件,一旦有变化,立刻调用build-less任务执行
    // gulp.watch('./javis/static/less/*.less', ['build-less']);
});

// gulp命令默认启动的就是default认为,这里将clean任务作为依赖,也就是先执行一次clean任务,流程再继续.
gulp.task('default', ['clean'], function () {
    gulp.run('develop');
});