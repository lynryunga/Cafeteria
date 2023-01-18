const autoprefixer = require('autoprefixer');
const { src, dest, watch, series, parallel } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const postcss = require('gulp-postcss');
// const autoprefixer =  require('autoprefixer');

function css( done ) {
  //compilar SASS
  //pasos: 1)Identificar el archivo, 2)Compilar, 3)Guardar el CSS

  src('src/scss/app.scss')
    .pipe( sass() )
    .pipe( postcss([ autoprefixer() ]) )
    .pipe( dest('build/css') )

  done();
}

function dev () {
  watch( 'src/scss/**/*.scss', css )
}

exports.css = css;
exports.dev = dev;
exports.default = series( css, dev );

//Series: Se inicia una tarea y hasta que finaliza inicial la siguiente
//parallel: Todas inician al mismo tiempo