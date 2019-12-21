/*
 * Variables (Variáveis)
 */

// Require (Requisições)
const {series, src, dest} = require('gulp');
const sass = require('gulp-sass');

//Sass Bootstrap Utilities Source (Código Sass contendo só algumas partee do Utilities do Boostrap)
const scssBootstrapUtiliies = './src/sass/bootstrap_utilities/sass/bootstrap_custom_utilities.scss';

// Sass Materialize Source (Código Sass Materialize)
const scssMaterialize = './node_modules/materialize-css/sass/materialize.scss';

// Sass Materialize Source (Código Sass Materialize personalizado)
const scssMaterializeCustom = './src/sass/materialize_custom/sass/*.scss';

// Sass Source (Código Sass)
const scssFiles = './src/sass/*.scss';

// CSS destination (Destino do CSS)
const cssDest = './css';

// CSS Fontawesome (Node Module)
const cssFontAwesome = './node_modules/@fortawesome/fontawesome-free/css/all.min.css';

// CSS Fontawesome destination (Node Module)
const cssFontAwesomeDest = './fonts/fontawesome-free/css';

// JS destination (Destino do JS)
const jsDest = './js';

// jQuery (npm install jquery)
const jquery =  './node_modules/jquery/dist/jquery.min.js';

// Materialize JS
const materialize_js = './node_modules/materialize-css/dist/js/materialize.js';

// Options for development (Opções para o ambiente de desenvolvimento)
const sassDevOptions = {
    outputStyle: 'expanded'
}

// Options for production (Opções para o ambiente de produção)
const sassProdOptions = {
    outputStyle: 'compressed'
}

// Icons - material-design-icons
const materialize_icons = './node_modules/material-design-icons/iconfont/*';

// FONTS destination (Destino do FONTS)
const fontDest = './fonts/material-design-icons/iconfont';

const fontawesome_icons  = './node_modules/@fortawesome/fontawesome-free/webfonts/*';

// FONTS destination (Destino do FONTS)
const fontAweSomeDest = './fonts/fontawesome-free/webfonts';

// Task 'fonts_materialize' - Run with command 'gulp fonts_materialize' (Comando executado com 'gulp fonts_materialize') - Carrego os fontes
function fontsMaterialize(cb){
        src([materialize_icons]).pipe(dest(fontDest));
        cb();
}

//atribuo um nome para a função poder ser chamada na linha de comando
exports.fonts_materialize = fontsMaterialize;

// Task 'fonts_awesome' - Run with command 'gulp fonts_awesome' (Comando executado com 'gulp fonts_awesome') - Carrego os fontes
function fontsAwesome(cb){
      src([fontawesome_icons]).pipe(dest(fontAweSomeDest));
      cb();
}

//atribuo um nome para a função poder ser chamada na linha de comando
exports.fonts_awesome = fontsAwesome;

// Task 'fonts_awesome_css' - Run with command 'gulp fonts_awesome_css' (Comando executado com 'gulp fonts_awesome_css') - Carrego o css
function fontsAwesomeCss(cb){
   src([cssFontAwesome]).pipe(dest(cssFontAwesomeDest));
   cb();
}

//atribuo um nome para a função poder ser chamada na linha de comando
exports.fonts_awesome_css = fontsAwesomeCss;

// Task 'js' - Run with command 'gulp js' (Comando executado com 'gulp js') - Carrego os javascripts
function js(cb){
    src([jquery,materialize_js]).pipe(dest(jsDest));
    cb();
}

//atribuo um nome para a função poder ser chamada na linha de comando
exports.js = js;

// Task 'sassdev' - Run with command 'gulp sassdev' (Comando executado com 'gulp sassdev')
function sassdev(cb) {
    src([scssMaterialize,scssFiles,scssMaterializeCustom,scssBootstrapUtiliies])
        .pipe(sass(sassDevOptions).on('error', sass.logError))
        .pipe(dest(cssDest));
    cb();
}

//atribuo um nome para a função poder ser chamada na linha de comando
exports.sassdev = sassdev;

// Task 'sassprod' - Run with command 'gulp sassprod' (Comando executado com 'gulp sassprod')
function sassprod(cb) {
      src([scssMaterialize,scssFiles,scssMaterializeCustom,scssBootstrapUtiliies])
        .pipe(sass(sassProdOptions).on('error', sass.logError))
        .pipe(dest(cssDest));
      cb();
}

//atribuo um nome para a função poder ser chamada na linha de comando
exports.sassprod = sassprod;

//Executo todas as tasks de uma vez utilizando esta função do gulp
exports.default = series(fontsMaterialize,fontsAwesome,fontsAwesomeCss,js,sassdev,sassprod);
