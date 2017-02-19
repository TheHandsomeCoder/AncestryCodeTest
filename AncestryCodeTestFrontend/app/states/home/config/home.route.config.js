routes.$inject = ['$stateProvider'];

export default function routes($stateProvider) {
  $stateProvider
    .state('home', {
      url: '/home',
      template:`
        <div class="row">
            <div class="medium-12 columns">
              <div class="button-group float-center">
                <a  ui-sref="home.one" class="button">Page One</a>
                <a  ui-sref="home.two" class="button">Page Two</a>
                <a  ui-sref="home.three" class="button">Page Three</a>
              </div>
            </div>
             <div class="medium-12 columns">
                <ui-view></ui-view>
            </div>
           </div>
      `
    })
    .state('home.one', {
      url: '/1',
      template: require('../home.html'),
      controller: 'HomeController',
      controllerAs: 'vm'
    })
    .state('home.two', {
      url: '/two',
      template: require('../home.html'),
      controller: 'HomeController',
      controllerAs: 'vm'
    })
    .state('home.three', {
      url: '/3',
      template: require('../home.html'),
      controller: 'HomeController',
      controllerAs: 'vm'
    });
}