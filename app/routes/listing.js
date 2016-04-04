import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    destroyListing(listing){
      listing.destroyRecord();
      this.transitionTo('index');
    },
    updateListing(listing, params) {
      Object.keys(params).forEach(function(key) {
        if(params[key]!==undefined) {
          listing.set(key,params[key]);
        }
      });
      listing.save();
    }
  }
});
