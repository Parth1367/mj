const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/app.js', 'public/js')
    .postCss('resources/css/app.css', 'public/css', [
        //
    ]);

mix.babel([
    'resources/js/Rules/jobpost-rules.js',
    'resources/js/global-functions/get-data.js'
], 'public/build/js/page-level-script/jobpost-rules.js').version();

mix.babel([
    'resources/js/global-functions/get-data.js',
    'resources/js/Rules/jobseeker-rules.js'
], 'public/build/js/page-level-script/jobseeker-rules.js').version();


mix.scripts([
    'public/js/custom.js'
], 'public/build/js/app-custom.js').version();

mix.scripts([
    'resources/js/global-functions/get-ajax.js'
], 'public/build/js/get-ajax.js').version();

mix.js('resources/js/form-validation.js', 'public/js');
