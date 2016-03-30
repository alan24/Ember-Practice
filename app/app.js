import Ember from 'ember';
import Resolver from './resolver';
import loadInitializers from 'ember-load-initializers';
import config from './config/environment';
import myObject from './myObject';
import common from './mixins/common';

let App;

Ember.MODEL_FACTORY_INJECTIONS = true;

App = Ember.Application.extend({
  modulePrefix: config.modulePrefix,
  podModulePrefix: config.podModulePrefix,
  Resolver
});

loadInitializers(App, config.modulePrefix);

myObject();

const obj = Ember.Object.extend(common, {
  objprop: 'This is an Ember object property'
});
const object = obj.create();

console.log(object.get('objprop'));
console.log(object.get('property1'));
console.log(object.get('isEditing'));
object.edit();
console.log(object.get('isEditing'));

export default App;
