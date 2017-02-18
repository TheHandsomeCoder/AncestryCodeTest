import angular from 'angular';
import uirouter from 'angular-ui-router';

import routes from './config/survey.route.config';
import SurveyController from './survey.controller';

export default angular.module('app.survey', [uirouter])
    .config(routes)
    .controller('SurveyController', SurveyController)
    .name;  //export the name of the module so we can register it the parent app