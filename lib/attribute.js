orion.attributes.registerAttribute('map', {
    template: 'orionAttributesMaps',
    previewTemplate: 'orionAttributesMapsColumn',
    getSchema: function (options) {
        var subSchema = new SimpleSchema({
            mapType: {
                type: String,
                defaultValue: 'roadmap'
            },
            searchBox: {
                type: Boolean,
                Value: true
            }
        });
        return {
            type: subSchema
        }
    },
    valueOut: function () {
        return this.find('.map').code();
    }
});