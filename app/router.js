import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('incompleted-tasks', { path: '/incompleted' });
  this.route('completed-tasks', { path: '/completed' });
  this.route('add-task', { path: '/add' });
  this.route('edit-task', { path: '/edit' });
});

export default Router;
