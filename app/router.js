import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('posts');
  this.route('helloworld');
  this.route('conditional');
  this.route('student');
  this.route('friends');
});

export default Router;
