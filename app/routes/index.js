import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      listings: this.store.findAll('listing'),
      cities: this.store.findAll('city')
    });
  },
  actions: {
    addCity(params) {
      var newCity = this.store.createRecord('city', params);
      newCity.save();
      this.transitionTo('index');
    }
  }
});
