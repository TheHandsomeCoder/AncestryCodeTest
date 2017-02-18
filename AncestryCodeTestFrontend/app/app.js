import '../styles/main.scss';
import angular from 'angular';

import SurveyController from './states/survey/survey.controller.js';

angular.module('ancestry-experience-survey', [])
.controller('SurveyController', SurveyController);