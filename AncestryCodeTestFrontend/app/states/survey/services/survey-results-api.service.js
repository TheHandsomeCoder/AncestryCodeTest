import angular from 'angular';

export default class SurveyResultAPI {
  constructor($http, endpoint) {
      this.$http = $http;
      this.apiEndpoint = endpoint;
  }

  createSurveyResult(surveyResult){

    return this.$http.post(`${this.apiEndpoint}/SurveyResults`,surveyResult);

  }
  getSurveyResults(){}

}

SurveyResultAPI.$inject = ['$http', 'api-endpoint'];