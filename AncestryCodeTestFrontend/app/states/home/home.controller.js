export default class HomeController {
    constructor($state) {
        this.$state = $state;
        this.name =  $state.current.name;
    }
}

HomeController.$inject = ['$state'];
