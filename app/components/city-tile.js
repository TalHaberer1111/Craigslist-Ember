import Ember from 'ember';

export default Ember.Component.extend({
  fullLocation: Ember.computed('city.name', 'city.country', function() {
    return this.get('city.name') + ', ' + this.get('city.country');
  }),
  sortBy: ['name:asc'],
  sortedRentals: Ember.computed.sort('city.name', 'sortBy'),
  actions: {
  deleteCity(city) {
      if(confirm('Are you sure you want to delete this rental?')) {
          this.sendAction('deleteCity', city);
      }
    }
  }

});
