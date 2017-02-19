import angular from 'angular';
import uirouter from 'angular-ui-router';

import routes from './config/home.route.config';
import HomeController from './home.controller';

export default angular.module('app.home', [uirouter])
    .config(routes)
    .controller('HomeController', HomeController)
    .name;  //export the name of the module so we can register it the parent app