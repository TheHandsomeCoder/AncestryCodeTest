import angular from 'angular';
import uirouter from 'angular-ui-router';

import routes from './config/survey.route.config';
import SurveyController from './survey-page/survey.controller';
import ThankYouController from './thank-you-page/thank-you.controller';
import CountriesList from './services/countries-list.service';
import SurveyResultAPI from './services/survey-results-api.service';

export default angular.module('app.survey', [uirouter])
    .config(routes)
    .controller('SurveyController', SurveyController)
    .controller('ThankYouController', ThankYouController)
    .service('CountriesListService', CountriesList)
    .service('SurveyResultAPI', SurveyResultAPI)
    .name;  //export the name of the module so we can register it the parent app