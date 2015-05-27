Template.orionInspiniaCollectionsCreate.events({
  'click .create-btn': function () {
    $('#orionInspiniaCollectionsCreateForm').submit();
  }
});


AutoForm.addHooks('orionInspiniaCollectionsCreateForm', {
  onSuccess: function() {
    Router.go(this.collection.indexPath());
  }
});