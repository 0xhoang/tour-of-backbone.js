/**
 * Created by lap00344 on 1/7/17.
 */
require.config({
    baseUrl: 'js',
    paths: {
        jquery: 'components/jquery/dist/jquery',
        underscore: 'components/underscore/underscore-min',
        backbone: 'components/backbone/backbone-min',
        text: 'components/text/text'
    }
});

require(['app'], function (App) {
    App.int();
});

