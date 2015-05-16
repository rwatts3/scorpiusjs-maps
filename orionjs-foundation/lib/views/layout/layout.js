Template.orionFoundationLayout.events({
  'click .orion-foundation-admin.toggled': function() {
    $(".orion-foundation-admin").removeClass("toggled");
    $("html,body").removeClass("no-overflow");
  },
  'click .menu-toggle': function () {
    $(".orion-foundation-admin").toggleClass("toggled");
    $("html,body").toggleClass("no-overflow");
  }
});

Template.orionFoundationTabs.helpers({
  items: function () {
    return this;
  }
});

Template.orionFoundationTabs.events({
  'click a': function () {
    this.onClick();
  }
});