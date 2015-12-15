import Ember from 'ember';

const Human = Ember.Object.extend({
  name: null,
  weight: null,
  height: null,
  age: null,
  sex: null
});
export default Ember.Route.extend({
  model() {
    return Human.create({
      name: 'ryan',
      weight: 270,
      height: 72,
      age: 27,
      sex: 'male'
    });
  }
});
