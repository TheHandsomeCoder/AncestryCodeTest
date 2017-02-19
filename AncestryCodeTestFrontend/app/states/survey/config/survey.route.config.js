routes.$inject = ['$stateProvider'];

export default function routes($stateProvider) {
  $stateProvider
    .state('survey', {
      url: '/experiance-survey?originUrl',
      template: require('../survey-page/survey.html'),
      controller: 'SurveyController',
      controllerAs: 'vm'
    })
    .state('survey-thanks', {
      url: '/thank-you',
      template: require('../thank-you-page/thank-you.html'),
      controller: 'ThankYouController',
      controllerAs: 'vm'
    });
}