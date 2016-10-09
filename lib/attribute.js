scorpius.attributes.registerAttribute('map', {
    template: 'scorpiusAttributesMaps',
    previewTemplate: 'scorpiusAttributesMapsColumn',
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