Package.describe({
    name: 'rwatts:orion-maps',
    summary: 'Adds google maps as an orion attribute to Orion by leveraging aldeeds auto-form.',
    version: '0.1.0',
    git: 'https://github.com/rwatts3/orionjs-contrib/tree/orionjs-maps'
});

Package.onUse(function (api) {
    api.versionsFrom('1.0');

    api.use([
        'orionjs:base@1.1.0',
        'orionjs:attributes@1.1.0',
        'templating',
        'underscore',
        'reactive-var',
        'less',
        'aldeed:autoform@5.3.0',
        'jquery'
    ]);

    api.imply([
        'dburles:google-maps@1.1.1'
    ] , 'client');

    api.addFiles([
        'lib/attribute.js'
    ]);

    api.addFiles([
        'lib/maps/maps.html',
        'lib/maps/maps.js',
        'lib/maps/maps.less'
    ], 'client');
});
