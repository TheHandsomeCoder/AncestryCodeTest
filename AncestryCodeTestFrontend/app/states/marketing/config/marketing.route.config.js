routes.$inject = ['$stateProvider'];

export default function routes($stateProvider) {
  $stateProvider
    .state('marketing', {
      url: '/marketing',
      template: require('../marketing-page/marketing.html'),
      controller: 'MarketingController',
      controllerAs: 'vm'
    });
}