var KEY_ENTER, defaults;

KEY_ENTER = 13;

defaults = {
  mapType: 'roadmap',
  defaultLat: 1,
  defaultLng: 1,
  geolocation: false,
  searchBox: false,
  autolocate: false,
  zoom: 13
};

AutoForm.addInputType('map', {
  template: 'orionAttributesMaps',
  valueOut: function() {
    var node;
    node = $(this.context);
    return {
      lat: node.find('.js-lat').val(),
      lng: node.find('.js-lng').val()
    };
  },
  contextAdjust: function(ctx) {
    ctx.loading = new ReactiveVar(false);
    return ctx;
  },
  valueConverters: {
    string: function(value) {
      return value.lat + "," + value.lng;
    }
  }
});

Template.orionAttributesMaps.rendered = function() {
  this.data.options = _.extend({}, defaults, this.data.atts);
  this.data.marker = void 0;
  this.data.setMarker = (function(_this) {
    return function(map, location, zoom) {
      if (zoom == null) {
        zoom = 0;
      }
      _this.$('.js-lat').val(location.lat());
      _this.$('.js-lng').val(location.lng());
      if (_this.data.marker) {
        _this.data.marker.setMap(null);
      }
      _this.data.marker = new google.maps.Marker({
        position: location,
        map: map
      });
      if (zoom > 0) {
        return _this.data.map.setZoom(zoom);
      }
    };
  })(this);
  GoogleMaps.init({
    libraries: 'places'
  }, (function(_this) {
    return function() {
      var input, location, mapOptions, searchBox;
      mapOptions = {
        zoom: 0,
        mapTypeId: google.maps.MapTypeId[_this.data.options.mapType],
        streetViewControl: false
      };
      if (_this.data.atts.googleMap) {
        _.extend(mapOptions, _this.data.atts.googleMap);
      }
      _this.data.map = new google.maps.Map(_this.find('.js-map'), mapOptions);
      if (_this.data.value) {
        location = typeof _this.data.value === 'string' ? _this.data.value.split(',') : [_this.data.value.lat, _this.data.value.lng];
        location = new google.maps.LatLng(parseFloat(location[0]), parseFloat(location[1]));
        _this.data.setMarker(_this.data.map, location, _this.data.options.zoom);
        _this.data.map.setCenter(location);
      } else {
        _this.data.map.setCenter(new google.maps.LatLng(_this.data.options.defaultLat, _this.data.options.defaultLng));
      }
      if (_this.data.atts.searchBox) {
        input = _this.find('.js-search');
        _this.data.map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);
        searchBox = new google.maps.places.SearchBox(input);
        google.maps.event.addListener(searchBox, 'places_changed', function() {
          location = searchBox.getPlaces()[0].geometry.location;
          _this.data.setMarker(_this.data.map, location);
          return _this.data.map.setCenter(location);
        });
        $(input).removeClass('af-map-search-box-hidden');
      }
      if (_this.data.atts.autolocate && navigator.geolocation && !_this.data.value) {
        navigator.geolocation.getCurrentPosition(function(position) {
          location = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
          _this.data.setMarker(_this.data.map, location, _this.data.options.zoom);
          return _this.data.map.setCenter(location);
        });
      }
      if (typeof _this.data.atts.rendered === 'function') {
        _this.data.atts.rendered(_this.data.map);
      }
      return google.maps.event.addListener(_this.data.map, 'click', function(e) {
        return _this.data.setMarker(_this.data.map, e.latLng);
      });
    };
  })(this));
  return this.$('.js-map').closest('form').on('reset', (function(_this) {
    return function() {
      _this.data.marker.setMap(null);
      _this.data.map.setCenter(new google.maps.LatLng(_this.data.options.defaultLat, _this.data.options.defaultLng));
      return _this.data.map.setZoom(0);
    };
  })(this));
};

Template.orionAttributesMaps.helpers({
  schemaKey: function() {
    return this.atts['data-schema-key'];
  },
  width: function() {
    if (typeof this.atts.width === 'string') {
      return this.atts.width;
    } else if (typeof this.atts.width === 'number') {
      return this.atts.width + 'px';
    } else {
      return '100%';
    }
  },
  height: function() {
    if (typeof this.atts.height === 'string') {
      return this.atts.height;
    } else if (typeof this.atts.height === 'number') {
      return this.atts.height + 'px';
    } else {
      return '200px';
    }
  },
  loading: function() {
    return this.loading.get();
  }
});

Template.orionAttributesMaps.events({
  'click .js-locate': function(e, t) {
    e.preventDefault();
    if (!navigator.geolocation) {
      return false;
    }
    this.loading.set(true);
    return navigator.geolocation.getCurrentPosition((function(_this) {
      return function(position) {
        var location;
        location = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
        _this.setMarker(_this.map, location, _this.options.zoom);
        _this.map.setCenter(location);
        return _this.loading.set(false);
      };
    })(this));
  },
  'keydown .js-search': function(e) {
    if (e.keyCode === KEY_ENTER) {
      return e.preventDefault();
    }
  }
});