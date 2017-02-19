export default class ThankYouContrller {
    constructor($stateParams, $window) {
        this.originUrl = $stateParams.originUrl;
        this.$window = $window
    }

    closeWindow(){
        //This will only work if we opened the window using window.open
        window.close();
    }

    navigateBackToOrigin(){
        this.$window.location.href =this.originUrl;
    }
}

ThankYouContrller.$inject = ['$stateParams', '$window'];
