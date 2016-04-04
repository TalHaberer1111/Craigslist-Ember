import Ember from 'ember';

export function listingCost(params) {
  var listingCost = params[0].get('cost');

  if (listingCost >= 150){
    return '$$$$';
  } else if (listingCost >= 100){
    return '$$$';
  } else if (listingCost >= 50){
    return '$$';
  } else if (listingCost <= 49){
    return '$';
  }
}

export default Ember.Helper.helper(listingCost);
