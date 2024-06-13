import { src, dest, watch, series } from 'gulp';
import gulpSass from 'gulp-sass';
import * as sass from 'sass';
import postcss from 'gulp-postcss';
import autoprefixer from 'autoprefixer';
import imagemin from 'gulp-imagemin';
import webp from 'gulp-webp';
import avif from 'gulp-avif';

const sassObj = gulpSass(sass);

// Manejo de errores
function errorHandler(err) {
    console.error(err.toString());
    this.emit('end');
}

// Tarea para compilar Sass
function css() {
    return src('src/scss/app.scss')
        .pipe(sassObj().on('error', errorHandler))
        .pipe(postcss([autoprefixer()]))
        .pipe(dest('build/css'));
}

// Tarea para optimizar imágenes
function imagenes() {
    return src('src/img/**/*')
        .pipe(imagemin({ optimizationLevel: 3 }))
        .pipe(dest('build/img'));
}

// Tarea para generar versiones WebP de las imágenes
function versionWebp() {
    const opciones = {
        quality: 50
    };
    return src('src/img/**/*.{png,jpg}')
        .pipe(webp(opciones))
        .pipe(dest('build/img'));
}

// Tarea para generar versiones AVIF de las imágenes
function versionAvif() {
    const opciones = {
        quality: 50
    };
    return src('src/img/**/*.{png,jpg}')
        .pipe(avif(opciones))
        .pipe(dest('build/img'));
}

// Tarea para observar cambios durante el desarrollo
function dev() {
    watch('src/scss/**/*.scss', css);
    watch('src/img/**/*', imagenes);
}

export const _css = css;
export const _dev = dev;
export const _imagenes = imagenes;
export const _versionWebp = versionWebp;
export const _versionAvif = versionAvif;

// Tarea predeterminada que se ejecuta al llamar a "gulp" desde la línea de comandos
export default series(imagenes, versionWebp, versionAvif, css, dev);
