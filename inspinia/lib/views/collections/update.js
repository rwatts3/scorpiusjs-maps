Template.orionInspiniaCollectionsUpdate.events({
  'click .save-btn': function () {
    $('#orionInspiniaCollectionsUpdateForm').submit();
  }
});

AutoForm.addHooks('orionInspiniaCollectionsUpdateForm', {
  onSuccess: function() {
    Router.go(this.collection.indexPath());
  }
});