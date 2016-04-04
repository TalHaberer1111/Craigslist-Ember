import Ember from 'ember';

export default Ember.Component.extend({
  addNewListing: false,
  actions: {
    listingFormShow(){
      this.set('addNewListing', true);
    },

    saveListing() {
      var params = {
        title: this.get('title') ? this.get('title'): "",
        cost: this.get('cost') ? this.get('cost'): "",
        city: this.get('city') ? this.get('city'): "",
        address: this.get('address') ? this.get('address'): "",
        category: this.get('category') ? this.get('category'): "",
        date: this.get('date') ? this.get('date'): ""
      };
      this.set('addNewListing', false);
      this.sendAction('saveListing', params);
    }
  }
});
