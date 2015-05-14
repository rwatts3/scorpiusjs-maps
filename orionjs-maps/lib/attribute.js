orion.attributes.registerAttribute('map', {
	template: 'orionAttributesMaps',
	columnTemplate: 'orionAttributesMapsColumn',
	getSchema: function(options) {
		return {
			type: String
		};
	},
	valueOut: function() {
		return this.find('.map').code();
	}
});