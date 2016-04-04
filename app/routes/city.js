import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('city', params.city_id);
  },
  actions: {
      saveListing(params) {
        var newListing = this.store.createRecord('listing', params);
        var city = params.city;
        city.get('listings').addObject(newListing);
        newListing.save().then(function() {
          return city.save();
        });
        this.transitionTo('city', params.city);
      },
    deleteCity(city) {
      var listing_deletions = city.get('listings').map(function(listing) {
        return listing.destroyRecord();
      });
      Ember.RSVP.all(listing_deletions).then(function() {
        return city.destroyRecord();
      });
      this.transitionTo('index');
    }
  }
});
