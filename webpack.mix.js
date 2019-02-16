let mix = require('laravel-mix');

mix.js('src/js/app.js', 'static/js').sass('src/sass/app.scss', 'static/css');
