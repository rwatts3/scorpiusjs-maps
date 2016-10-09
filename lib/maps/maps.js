var KEY_ENTER, defaults, initTemplateAndGoogleMaps;

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

Template.scorpiusAttributesMaps.created = function() {
  return GoogleMaps.load({
    libraries: 'places',
    key: this.data.atts.key

  });
};

initTemplateAndGoogleMaps = function() {
  var input, location, mapOptions, searchBox;
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
  mapOptions = {
    zoom: 0,
    mapTypeId: google.maps.MapTypeId[this.data.options.mapType],
    streetViewControl: false
  };
  if (this.data.atts.googleMap) {
    _.extend(mapOptions, this.data.atts.googleMap);
  }
  this.data.map = new google.maps.Map(this.find('.js-map'), mapOptions);
  if (this.data.value) {
    location = typeof this.data.value === 'string' ? this.data.value.split(',') : this.data.value.hasOwnProperty('lat') ? [this.data.value.lat, this.data.value.lng] : [this.data.value[1], this.data.value[0]];
    location = new google.maps.LatLng(parseFloat(location[0]), parseFloat(location[1]));
    this.data.setMarker(this.data.map, location, this.data.options.zoom);
    this.data.map.setCenter(location);
  } else {
    this.data.map.setCenter(new google.maps.LatLng(this.data.options.defaultLat, this.data.options.defaultLng));
    this.data.map.setZoom(this.data.options.zoom);
  }
  if (this.data.atts.searchBox) {
    input = this.find('.js-search');
    this.data.map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);
    searchBox = new google.maps.places.SearchBox(input);
    google.maps.event.addListener(searchBox, 'places_changed', (function(_this) {
      return function() {
        location = searchBox.getPlaces()[0].geometry.location;
        _this.data.setMarker(_this.data.map, location);
        return _this.data.map.setCenter(location);
      };
    })(this));
    $(input).removeClass('af-map-search-box-hidden');
  }
  if (this.data.atts.autolocate && navigator.geolocation && !this.data.value) {
    navigator.geolocation.getCurrentPosition((function(_this) {
      return function(position) {
        location = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
        _this.data.setMarker(_this.data.map, location, _this.data.options.zoom);
        return _this.data.map.setCenter(location);
      };
    })(this));
  }
  if (typeof this.data.atts.rendered === 'function') {
    this.data.atts.rendered(this.data.map);
  }
  google.maps.event.addListener(this.data.map, 'click', (function(_this) {
    return function(e) {
      return _this.data.setMarker(_this.data.map, e.latLng);
    };
  })(this));
  return this.$('.js-map').closest('form').on('reset', (function(_this) {
    return function() {
      var ref;
      _this.data.marker && _this.data.marker.setMap(null);
      _this.data.map.setCenter(new google.maps.LatLng(_this.data.options.defaultLat, _this.data.options.defaultLng));
      return _this.data.map.setZoom(((ref = _this.data.options) != null ? ref.zoom : void 0) || 0);
    };
  })(this));
};

Template.scorpiusAttributesMaps.rendered = function() {
  return this.autorun((function(_this) {
    return function() {
      return GoogleMaps.loaded() && initTemplateAndGoogleMaps.apply(_this);
    };
  })(this));
};

Template.scorpiusAttributesMaps.helpers({
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

Template.scorpiusAttributesMaps.events({
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

// ---
// generated by coffee-script 1.9.2