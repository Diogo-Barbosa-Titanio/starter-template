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

// JS destination (Destino do JS)
var jsDest = './js';

// jQuery (npm install jquery)
var jquery =  './node_modules/jquery/dist/jquery.min.js'

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

// Task 'js' - Run with command 'gulp js' (Comando executado com 'gulp js') - Carrego os javascripts
gulp.task('js', function(){
    return gulp.src([jquery,materialize_js])
        .pipe(gulp.dest(jsDest))
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

// Default task - Executado com o comando 'gulp' - neste caso só testamos o funcionamento do gulp
gulp.task('default', function() {
    console.log('Gulp funcionando...');
});