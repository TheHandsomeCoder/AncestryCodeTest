import '../styles/main.scss';
import angular from 'angular';
import uirouter from 'angular-ui-router';
import routes from './config/app.route.config';

import survey from './states/survey';
import home from './states/home';
import marketing from './states/marketing';

angular.module('ancestrySurvey', [uirouter, home, survey, marketing])
.config(routes)
.constant("api-endpoint", "http://localhost:5555/api");