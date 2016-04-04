import Ember from 'ember';

export default Ember.Component.extend({
  updateListingForm: false,
  actions: {
    showUpdateListingForm() {
      this.set('updateListingForm', true);
    },
    cancelUpdateListing() {
      this.set('updateListingForm', false);
    },
    updateListing(listing) {
      var params = {
        title: this.get('title'),
        author: this.get('author'),
        address: this.get('address'),
        date: this.get('date'),
        category: this.get('category'),
        cost: this.get('cost'),
      }
      this.sendAction('updateListing', listing, params)
    }
  }
});
