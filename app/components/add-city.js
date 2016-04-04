import Ember from 'ember';

export default Ember.Component.extend({
  addCityForm: false,
  actions: {
    showAddCityForm() {
      this.set('addCityForm', true);
    },
    addCity() {
      var params = {
        name: this.get('name') ? this.get('name') : "",
        country: this.get('country') ? this.get('country') : "",
      };
      this.set('addCityForm', false);
      this.sendAction('addCity', params);
    }
  }
});
