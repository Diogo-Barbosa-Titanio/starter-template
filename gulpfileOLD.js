/*
 * Variables (Variáveis)
 */

// Require (Requisições)
var gulp = require('gulp');
var sass = require('gulp-sass');

// Sass Materialize Source (Código Sass Materialize)
var scssMaterialize = './node_modules/materialize-css/sass/materialize.scss';

// Sass Materialize Source (Código Sass Materialize personalizado)
var scssMaterializeCustom = './src/sass/materialize_custom/sass/*.scss';

// Sass Source (Código Sass)
var scssFiles = './src/sass/*.scss';

// CSS destination (Destino do CSS)
var cssDest = './css';

// CSS Fontawesome (Node Module)
var cssFontAwesome = './node_modules/@fortawesome/fontawesome-free/css/all.min.css';

// CSS Fontawesome destination (Node Module)
var cssFontAwesomeDest = './fonts/fontawesome-free';

// JS destination (Destino do JS)
var jsDest = './js';

// jQuery (npm install jquery)
var jquery =  './node_modules/jquery/dist/jquery.min.js';

// Materialize JS
var materialize_js = './node_modules/materialize-css/dist/js/materialize.js';

// Options for development (Opções para o ambiente de desenvolvimento)
var sassDevOptions = {
    outputStyle: 'expanded'
}

// Options for production (Opções para o ambiente de produção)
var sassProdOptions = {
    outputStyle: 'compressed'
}

// Icons - material-design-icons
var materialize_icons = './node_modules/material-design-icons/iconfont/*';

// FONTS destination (Destino do FONTS)
var fontDest = './fonts/material-design-icons/iconfont';

var fontawesome_icons  = './node_modules/@fortawesome/fontawesome-free/webfonts/*';

// FONTS destination (Destino do FONTS)
var fontAweSomeDest = './fonts/fontawesome-free/webfonts';


// Task 'fonts_materialize' - Run with command 'gulp fonts_materialize' (Comando executado com 'gulp fonts_materialize') - Carrego os fontes
gulp.task('fonts_materialize', function(){
    return gulp.src([materialize_icons])
        .pipe(gulp.dest(fontDest));
});

// Task 'fonts_awesome' - Run with command 'gulp fonts_awesome' (Comando executado com 'gulp fonts_awesome') - Carrego os fontes
gulp.task('fonts_awesome', function(){
    return gulp.src([fontawesome_icons])
        .pipe(gulp.dest(fontAweSomeDest));
});

// Task 'fonts_awesome_css' - Run with command 'gulp fonts_awesome_css' (Comando executado com 'gulp fonts_awesome_css') - Carrego o css
gulp.task('fonts_awesome_css', function(){
    return gulp.src([cssFontAwesome])
        .pipe(gulp.dest(cssFontAwesomeDest));
});

// Task 'js' - Run with command 'gulp js' (Comando executado com 'gulp js') - Carrego os javascripts
gulp.task('js', function(){
    return gulp.src([jquery,materialize_js])
        .pipe(gulp.dest(jsDest));
});

// Task 'sassdev' - Run with command 'gulp sassdev' (Comando executado com 'gulp sassdev')
gulp.task('sassdev', function() {
    return gulp.src([scssMaterialize,scssFiles,scssMaterializeCustom])
        .pipe(sass(sassDevOptions).on('error', sass.logError))
        .pipe(gulp.dest(cssDest));
});

// Task 'sassprod' - Run with command 'gulp sassprod' (Comando executado com 'gulp sassprod')
gulp.task('sassprod', function() {
    return gulp.src([scssMaterialize,scssFiles,scssMaterializeCustom])
        .pipe(sass(sassProdOptions).on('error', sass.logError))
        .pipe(gulp.dest(cssDest));
});

gulp.task('default',['sassdev']);