Template.orionFoundationCollectionsCreate.events({
  'click .create-btn': function () {
    $('#orionFoundationCollectionsCreateForm').submit();
  }
});


AutoForm.addHooks('orionFoundationCollectionsCreateForm', {
  onSuccess: function() {
    Router.go(this.collection.indexPath());
  }
});