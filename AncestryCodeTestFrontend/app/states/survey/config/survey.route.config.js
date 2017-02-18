routes.$inject = ['$stateProvider'];

export default function routes($stateProvider) {
  $stateProvider
    .state('survey', {
      url: '/experiance-survey',
      template: require('../survey.html'),
      controller: 'SurveyController',
      controllerAs: 'vm'
    });
}