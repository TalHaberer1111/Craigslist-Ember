import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  city: DS.belongsTo('city', {async: true}),
  category: DS.attr(),
  date: DS.attr(),
  cost: DS.attr(),
  address: DS.attr()
});
