import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('users', function() {
    this.route('show');
    this.route('edit');
    this.route('add');
  });

  this.route('diets', function() {
    this.route('show');
    this.route('add');
    this.route('edit');
  });
  this.route('groups', function() {
    this.route('add');
    this.route('show');
    this.route('edit');
  });
  this.route('foods', function() {
    this.route('add');
    this.route('show');
    this.route('edit');
  });
});

export default Router;
