Template.orionFoundationCollectionsUpdate.events({
  'click .save-btn': function () {
    $('#orionFoundationCollectionsUpdateForm').submit();
  }
});

AutoForm.addHooks('orionFoundationCollectionsUpdateForm', {
  onSuccess: function() {
    Router.go(this.collection.indexPath());
  }
});