Package.describe({
	name: 'rwatts:orion-maps',
	summary: 'Adds google maps as an orion attribute to Orion by leveraging aldeeds auto-form.',
	version: '0.0.3',
	git: 'https://github.com/rwatts3/orionjs-maps'
});

Package.onUse(function(api) {
	api.versionsFrom('1.0');

	api.use([
		'orionjs:core@0.4.1',
		'meteor-platform',
		'less',
		'aldeed:autoform@4.2.2', 
		'jquery@1.0.0'
		]);


	api.addFiles([
		'lib/attribute.js',
		]);

	api.addFiles([
		'lib/template/template.html',
		'lib/template/template.js',
		'lib/template/template.less',
		], 'client');
});
