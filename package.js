Package.describe({
    name: 'rwatts:scorpius-maps',
    summary: 'Scorpius Google Maps attribute using Autoform',
    version: '0.1.0'
});

Package.onUse(function (api) {
    api.versionsFrom('1.4.1');

    api.use([
        'scorpiusjs:base@0.3.0',
        'scorpiusjs:attributes@0.3.0',
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
