import Ember from 'ember';
import EmberCPM from 'ember-cpm';

const { computed: {equal}} = Ember;

const { Macros: { sum, difference, product, conditional }} = EmberCPM;

export default Ember.Controller.extend({
  bmr: conditional(
    equal('model.sex', 'male'),
    'bmrMale',
    'bmrFemale'
  ),

  bmrMale: sum(
    66,
    product(6.23, 'model.weight'),
    product(12.7, 'model.height'),
    product(-1, product(6.8, 'model.age'))
  ),

  bmrFemale: sum(
    655,
    product(4.35, 'model.weight'),
    product(4.7, 'model.height'),
    product(-1, product(4.7, 'model.age'))
  ),

  noActivity: product('bmr', 1.2),
  lightActivity: product('bmr', 1.375),
  moderateActivity: product('bmr', 1.55),
  intenseActivity: product('bmr', 1.725),
  brutalActivity: product('bmr', 1.9)
});
