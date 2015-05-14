Package.describe({
    name: 'rwatts:orionjs-cordova',
    version: '0.1.0',
    // Brief, one-line summary of the package.
    summary: 'Meteor Cordova Integration for Orionjs',
    // URL to the Git repository containing the source code for this package.
    git: 'https://github.com/rwatts3/orionjs-cordova/orionjs-cordova/',
    // By default, Meteor will default to using README.md for documentation.
    // To avoid submitting documentation, set this field to null.
    documentation: 'README.md'
});

Package.onUse(function (api) {
    api.versionsFrom('1.1.0.2');

    api.use([
        'orionjs:core',
        'rwatts:orionjs-cordova'
    ]);


    api.addFiles('common.js');


});

Package.onTest(function (api) {
    api.use('tinytest');
    api.use('rwatts:orionjs-cordova');
    api.addFiles('tests.js');
});
