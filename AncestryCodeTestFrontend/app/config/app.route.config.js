/*
App level route config, Sets the default route if there is no match found
*/
export default function routes($urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
}
routes.$inject = ['$urlRouterProvider'];