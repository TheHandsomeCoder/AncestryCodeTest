import '../styles/main.scss';
import angular from 'angular';
import uirouter from 'angular-ui-router';
import routes from './config/app.route.config'

import survey from './states/survey'

angular.module('ancestrySurvey', ['ui.router', 'app.survey'])
.config(routes)